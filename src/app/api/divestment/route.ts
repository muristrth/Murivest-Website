import { createClient } from '@supabase/supabase-js';
import formidable, {
  type Fields,
  type Files,
  type File,
} from 'formidable';
import fs from 'fs';
import { NextRequest, NextResponse } from 'next/server';

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );
}

const MAX_FILE_SIZE = 100 * 1024 * 1024;
const MAX_TOTAL_SIZE = 500 * 1024 * 1024;
const UPLOAD_DIR = process.env.UPLOAD_DIR || '/tmp/murivest-uploads';

export async function POST(request: NextRequest) {
  const supabase = getSupabase();

  try {
    const form = formidable({
      uploadDir: UPLOAD_DIR,
      maxFileSize: MAX_FILE_SIZE,
      maxTotalFileSize: MAX_TOTAL_SIZE,
      keepExtensions: true,
      multiples: true,
    });

    const [fields, files] = await new Promise<[Fields, Files]>(
      (resolve, reject) => {
        form.parse(request as any, (err: any, f: any, fi: any) =>
          err ? reject(err) : resolve([f, fi])
        );
      }
    );

    const rawData = Array.isArray(fields.data)
      ? fields.data[0]
      : fields.data;

    const data = JSON.parse(rawData || '{}');

    if (!data.lrNumber || !/^\d+\/\d+\/\d+$/.test(data.lrNumber)) {
      return NextResponse.json(
        { error: 'Invalid LR Number format. Expected: 209/10842/1' },
        { status: 400 }
      );
    }

    const askingPrice = parseFloat(data.askingPrice);
    if (isNaN(askingPrice) || askingPrice < 30_000_000) {
      return NextResponse.json(
        { error: 'Minimum asking price is KES 30,000,000' },
        { status: 400 }
      );
    }

    const primaryEmail =
      data.ownerEmail ||
      data.brokerEmail ||
      data.developerEmail ||
      data.reitComplianceEmail ||
      data.foEmail ||
      data.sovereignEmail;

    if (!primaryEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(primaryEmail)) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      );
    }

    if (
      !data.confidentialityConfirmed ||
      !data.accuracyConfirmed ||
      !data.noExistingNdaViolation ||
      !data.authorizedToSubmit
    ) {
      return NextResponse.json(
        { error: 'All four representations must be confirmed' },
        { status: 400 }
      );
    }

    if (data.role === 'BROKER' && data.brokerHasEarb && !data.brokerEarbNumber) {
      return NextResponse.json(
        { error: 'EARB registration number is required for registered brokers' },
        { status: 400 }
      );
    }

    const priority =
      askingPrice >= 1_000_000_000
        ? 'TROPHY'
        : askingPrice >= 500_000_000
        ? 'PRIORITY'
        : 'STANDARD';

    let roleFields: Record<string, unknown> = {};

    if (data.role === 'DEVELOPER') {
      roleFields = {
        owner_full_name: data.developerPrincipalName,
        owner_entity_name: data.developerCompanyName,
        owner_email: data.developerEmail,
        owner_phone: data.developerPhone,
      };
    } else if (data.role === 'REIT') {
      roleFields = {
        owner_entity_name: data.reitName,
        owner_email: data.reitComplianceEmail,
      };
    } else if (data.role === 'FAMILY_OFFICE') {
      roleFields = {
        owner_entity_name: data.foName,
        owner_full_name: data.foDecisionMakerName,
        owner_email: data.foEmail,
        owner_phone: data.foPhone,
      };
    } else if (data.role === 'SOVEREIGN_FUND') {
      roleFields = {
        owner_entity_name: data.sovereignFundName,
        owner_full_name: data.sovereignLocalRep,
        owner_email: data.sovereignEmail,
        owner_phone: data.sovereignPhone,
      };
    }

    const { data: submission, error: insertError } = await supabase
      .from('divestment_submissions')
      .insert({
        submitter_role: data.role,
        status: 'LEAD_RECEIVED',
        priority,

        owner_full_name: data.ownerFullName || null,
        owner_entity_name: data.ownerEntityName || null,
        owner_email: data.ownerEmail || null,
        owner_phone: data.ownerPhone || null,
        owner_id_number: data.ownerIdNumber || null,
        owner_pin_number: data.ownerPinNumber || null,
        owner_is_corporate: data.ownerIsCorporate || false,
        owner_director_name: data.ownerDirectorName || null,
        owner_sole_mandate_confirmation: data.ownerSoleMandateConfirmation || false,

        broker_full_name: data.brokerFullName || null,
        broker_entity_name: data.brokerEntityName || null,
        broker_email: data.brokerEmail || null,
        broker_phone: data.brokerPhone || null,
        broker_earb_number: data.brokerEarbNumber || null,
        broker_has_earb: data.brokerHasEarb ?? true,
        broker_mandate_chain: data.brokerMandateChain || 'DIRECT',

        ...roleFields,

        property_name: data.propertyName,
        asset_class: data.assetClass,
        location_city: data.locationCity,
        location_neighborhood: data.locationNeighborhood || null,
        location_submarket: data.locationSubmarket || null,
        street_address: data.streetAddress || null,
        lr_number: data.lrNumber,
        title_type: data.titleType,
        year_built: data.yearBuilt ? parseInt(data.yearBuilt) : null,
        total_built_up_area_sqm: data.totalBuiltUpAreaSqm ? parseFloat(data.totalBuiltUpAreaSqm) : null,
        total_lettable_area_sqm: data.totalLettableAreaSqm ? parseFloat(data.totalLettableAreaSqm) : null,
        land_area_acres: data.landAreaAcres ? parseFloat(data.landAreaAcres) : null,
        number_of_floors: data.numberOfFloors ? parseInt(data.numberOfFloors) : null,
        number_of_units: data.numberOfUnits ? parseInt(data.numberOfUnits) : null,
        number_of_parking_bays: data.numberOfParkingBays ? parseInt(data.numberOfParkingBays) : null,
        building_grade: data.buildingGrade || null,
        green_certification: data.greenCertification || null,
        property_manager_name: data.propertyManagerName || null,

        currency: data.currency,
        asking_price: askingPrice,
        asking_price_usd: data.askingPriceUsd ? parseFloat(data.askingPriceUsd) : null,
        open_to_usd_pricing: data.openToUsdPricing,
        gross_rent_annual: data.grossRentAnnual ? parseFloat(data.grossRentAnnual) : null,
        net_operating_income: data.netOperatingIncome ? parseFloat(data.netOperatingIncome) : null,
        occupancy_rate: data.occupancyRate ? parseFloat(data.occupancyRate) : null,
        wale_years: data.waleYears ? parseFloat(data.waleYears) : null,
        cap_rate: data.capRate ? parseFloat(data.capRate) : null,
        service_charge_annual: data.serviceChargeAnnual ? parseFloat(data.serviceChargeAnnual) : null,
        current_debt: data.currentDebt ? parseFloat(data.currentDebt) : null,
        debt_lender: data.debtLender || null,
        debt_maturity_date: data.debtMaturityDate || null,
        divestment_reason: data.divestmentReason,
        exclusivity_period_days: parseInt(data.exclusivityPeriod),

        anchor_tenant_name: data.anchorTenantName || null,
        anchor_tenant_sector: data.anchorTenantSector || null,
        anchor_tenant_lease_expiry: data.anchorTenantLeaseExpiry || null,

        confidentiality_confirmed: data.confidentialityConfirmed,
        accuracy_confirmed: data.accuracyConfirmed,
        no_existing_nda_violation: data.noExistingNdaViolation,
        authorized_to_submit: data.authorizedToSubmit,

        metadata: {
          water_recycling: data.waterRecycling,
          solar_installed: data.solarInstalled,
          backup_generator: data.backupGenerator,
          borehole: data.borehole,
          fiber_connectivity: data.fiberConnectivity,
          cctv_security: data.cctvSecurity,
          access_control: data.accessControl,
          fire_suppression: data.fire_suppression,
        },

        source: 'WEB_FORM',
      })
      .select('id, reference_number')
      .single();

    if (insertError) throw insertError;

    const BUCKET = 'divestment-documents';
    const processedFiles: string[] = [];

    for (const [fieldName, fileOrFiles] of Object.entries(files)) {
      const category = fieldName.replace('file_', '');

      const fileArray: File[] = (
        Array.isArray(fileOrFiles)
          ? fileOrFiles
          : [fileOrFiles]
      ).filter((f): f is File => Boolean(f));

      for (const file of fileArray) {
        if (!file?.filepath) continue;

        const buffer = fs.readFileSync(file.filepath);

        const storagePath =
          `${submission.reference_number}/${category}/${file.originalFilename || 'file'}`;

        const { error: storageError } = await supabase.storage
          .from(BUCKET)
          .upload(storagePath, buffer, {
            contentType: file.mimetype || 'application/octet-stream',
            upsert: true,
          });

        if (storageError) {
          console.error(storageError);
          continue;
        }

        const { data: publicUrl } = supabase.storage
          .from(BUCKET)
          .getPublicUrl(storagePath);

        await supabase.from('submission_media').insert({
          submission_id: submission.id,
          category: category.toUpperCase(),
          file_name: file.originalFilename || 'file',
          file_size_bytes: file.size,
          mime_type: file.mimetype,
          storage_provider: 'SUPABASE',
          storage_url: publicUrl.publicUrl,
          storage_path: storagePath,
        });

        fs.unlinkSync(file.filepath);
        processedFiles.push(storagePath);
      }
    }

    try {
      const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

      if (GEMINI_API_KEY) {
        const prompt = `Score this real estate deal...`;

        const geminiRes = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${GEMINI_API_KEY}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              contents: [{ parts: [{ text: prompt }] }],
            }),
          }
        );

        const geminiData = await geminiRes.json();
        const raw = geminiData.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
        const match = raw.match(/\{[\s\S]*\}/);
        const score = match ? JSON.parse(match[0]) : {};

        await supabase.from('ai_deal_scores').insert({
          submission_id: submission.id,
          overall_score: score.overall_score || 5,
          location_score: score.location_score || 5,
          financial_score: score.financial_score || 5,
          tenant_score: score.tenant_score || 5,
          scoring_model: 'gemini-2.0-flash',
          raw_response: score,
        });

        await supabase.from('divestment_submissions').update({
          ai_deal_score: score.overall_score || 5,
          ai_investor_readiness:
            ((score.location_score || 5) +
              (score.financial_score || 5) +
              (score.tenant_score || 5)) / 3,
          ai_market_position: score.market_position || 'STANDARD',
        }).eq('id', submission.id);
      }
    } catch (e) {
      console.error('AI scoring failed:', e);
    }

    try {
      await createOneDriveFolder(
        submission.reference_number,
        data.propertyName
      );
    } catch (e) {
      console.error('OneDrive failed:', e);
    }

    return NextResponse.json({
      success: true,
      referenceNumber: submission.reference_number,
      submissionId: submission.id,
      filesUploaded: processedFiles.length,
    });

  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error?.message || 'Internal server error' },
      { status: 500 }
    );
  }
}

async function createOneDriveFolder(ref: string, name: string) {
  const CLIENT_ID = process.env.MS_CLIENT_ID;
  const CLIENT_SECRET = process.env.MS_CLIENT_SECRET;
  const TENANT_ID = process.env.MS_TENANT_ID;

  const tokenRes = await fetch(
    `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: CLIENT_ID!,
        client_secret: CLIENT_SECRET!,
        scope: 'https://graph.microsoft.com/.default',
        grant_type: 'client_credentials',
      }),
    }
  );

  const { access_token } = await tokenRes.json();

  const folderName = `${ref} - ${name}`;

  const root = await fetch(
    'https://graph.microsoft.com/v1.0/sites/root/drive/root/children',
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${access_token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: folderName,
        folder: {},
        '@microsoft.graph.conflictBehavior': 'rename',
      }),
    }
  );

  const rootFolder = await root.json();

  const subfolders = [
    '01_Mandate',
    '02_ID',
    '03_Financials',
    '04_Property',
    '05_Teaser',
  ];

  await Promise.all(
    subfolders.map((sf) =>
      fetch(
        `https://graph.microsoft.com/v1.0/sites/root/drive/items/${rootFolder.id}/children`,
        {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${access_token}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: sf,
            folder: {},
          }),
        }
      )
    )
  );

  return rootFolder.webUrl;
}