export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      divestment_submissions: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          reference_number: string
          submitter_role: Database['public']['Enums']['submitter_role']
          status: Database['public']['Enums']['submission_status']
          priority: Database['public']['Enums']['deal_priority']
          owner_full_name: string | null
          owner_entity_name: string | null
          owner_email: string | null
          owner_phone: string | null
          owner_id_number: string | null
          owner_pin_number: string | null
          owner_is_corporate: boolean
          owner_director_name: string | null
          owner_sole_mandate_confirmation: boolean
          broker_full_name: string | null
          broker_entity_name: string | null
          broker_email: string | null
          broker_phone: string | null
          broker_earb_number: string | null
          broker_earb_exemption_reason: string | null
          broker_has_earb: boolean
          broker_mandate_chain: Database['public']['Enums']['mandate_chain']
          broker_intermediary_chain_desc: string | null
          broker_is_sub_agent: boolean
          property_name: string
          asset_class: Database['public']['Enums']['asset_class']
          location_city: string
          location_neighborhood: string | null
          location_submarket: string | null
          street_address: string | null
          lr_number: string
          title_type: Database['public']['Enums']['title_type']
          leasehold_years_remaining: number | null
          year_built: number | null
          year_refurbished: number | null
          total_built_up_area_sqm: number | null
          total_lettable_area_sqm: number | null
          land_area_acres: number | null
          land_area_hectares: number | null
          number_of_floors: number | null
          number_of_units: number | null
          number_of_parking_bays: number | null
          plot_number: string | null
          title_deed_number: string | null
          county_registered: string | null
          currency: Database['public']['Enums']['currency_type']
          asking_price: number | null
          asking_price_usd: number | null
          asking_price_per_sqm: number | null
          open_to_usd_pricing: boolean
          gross_rent_annual: number | null
          net_operating_income: number | null
          occupancy_rate: number | null
          wale_years: number | null
          cap_rate: number | null
          service_charge_annual: number | null
          service_charge_per_sqm: number | null
          current_debt: number | null
          debt_maturity_date: string | null
          debt_lender: string | null
          debt_interest_rate: number | null
          ltv_ratio: number | null
          divestment_reason: Database['public']['Enums']['divestment_reason'] | null
          divestment_reason_other: string | null
          exclusivity_period_days: number
          anchor_tenant_name: string | null
          anchor_tenant_lease_expiry: string | null
          anchor_tenant_sqm: number | null
          anchor_tenant_sector: string | null
          other_tenants: string | null
          number_of_tenants: number | null
          vacant_area_sqm: number | null
          vacancy_rate: number | null
          building_grade: string | null
          green_certification: string | null
          esg_compliance_score: number | null
          last_valuation_amount: number | null
          last_valuation_date: string | null
          insurance_value: number | null
          property_manager_name: string | null
          facilities_management: string | null
          confidentiality_confirmed: boolean
          accuracy_confirmed: boolean
          no_existing_nda_violation: boolean
          authorized_to_submit: boolean
          ai_deal_score: number | null
          ai_investor_readiness: number | null
          ai_market_position: string | null
          qualification_notes: string | null
          rejection_reason: string | null
          assigned_to: string | null
          admin_onedrive_folder_link: string | null
          marketing_rights_granted: boolean
          source: string
          ip_address: string | null
          user_agent: string | null
          assigned_to_name?: string | null // Computed field
        }
        Insert: Omit<Database['public']['Tables']['divestment_submissions']['Row'], 'id' | 'created_at' | 'updated_at' | 'reference_number'>
        Update: Partial<Database['public']['Tables']['divestment_submissions']['Insert']>
      }
      submission_activity_log: {
        Row: {
          id: string
          submission_id: string
          user_id: string | null
          action: Database['public']['Enums']['activity_action']
          description: string | null
          old_value: string | null
          new_value: string | null
          metadata: Json | null
          created_at: string
          user_name?: string | null // Computed field
        }
        Insert: Omit<Database['public']['Tables']['submission_activity_log']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['submission_activity_log']['Insert']>
      }
      submission_media: {
        Row: {
          id: string
          submission_id: string
          category: Database['public']['Enums']['document_category']
          file_name: string
          file_name_on_drive: string | null
          folder_path_on_drive: string | null
          file_size_bytes: number | null
          mime_type: string | null
          storage_provider: string
          storage_url: string | null
          thumbnail_url: string | null
          is_primary: boolean
          metadata: Json | null
          uploaded_at: string
        }
        Insert: Omit<Database['public']['Tables']['submission_media']['Row'], 'id' | 'uploaded_at'>
        Update: Partial<Database['public']['Tables']['submission_media']['Insert']>
      }
      users: {
        Row: {
          id: string
          created_at: string
          email: string
          password_hash: string | null
          first_name: string
          last_name: string
          title: string | null
          department: string | null
          role: string
          is_active: boolean
          phone: string | null
          profile_image_url: string | null
          last_login_at: string | null
          login_count: number
          commission_split_percentage: number
          metadata: Json | null
        }
        Insert: Omit<Database['public']['Tables']['users']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['users']['Insert']>
      }
      investors: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          entity_name: string
          investor_type: Database['public']['Enums']['investor_type']
          jurisdiction: string | null
          primary_contact_name: string | null
          primary_contact_title: string | null
          primary_contact_email: string | null
          primary_contact_phone: string | null
          secondary_contact_name: string | null
          secondary_contact_email: string | null
          mandate_description: string | null
          target_asset_classes: Database['public']['Enums']['asset_class'][] | null
          target_countries: string[] | null
          target_cities: string[] | null
          min_ticket_size: number | null
          max_ticket_size: number | null
          target_yield_min: number | null
          target_yield_max: number | null
          target_irr_min: number | null
          preferred_hold_period_years: number | null
          leverage_tolerance_max: number | null
          aum_local_currency: number | null
          aum_usd: number | null
          deals_completed_count: number
          total_investments: number | null
          kyc_status: Database['public']['Enums']['kyc_status']
          kyc_completed_at: string | null
          aml_screening_status: string | null
          sanctions_clearance: string | null
          proof_of_funds_url: string | null
          ic_authorization_document: string | null
          assigned_relationship_manager: string | null
          investor_score: number | null
          notes: string | null
          is_active: boolean
          nda_signed: boolean
          nda_signed_at: string | null
          vdr_access_enabled: boolean
          ai_match_score: number | null
          ai_buyer_probability: number | null
          ai_investor_profile: Json | null
          metadata: Json | null
        }
        Insert: Omit<Database['public']['Tables']['investors']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['investors']['Insert']>
      }
      deals: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          submission_id: string
          deal_name: string
          deal_code: string
          lead_advisor: string | null
          co_advisor: string | null
          analyst: string | null
          transaction_manager: string | null
          asking_price: number | null
          price_per_sqm: number | null
          noi: number | null
          cap_rate: number | null
          wale: number | null
          occupancy: number | null
          teaser_sent_date: string | null
          cim_sent_date: string | null
          ioi_deadline: string | null
          bafo_deadline: string | null
          loi_signed_date: string | null
          psa_signed_date: string | null
          dd_period_start: string | null
          dd_period_end: string | null
          closing_target_date: string | null
          closing_actual_date: string | null
          outcome: string | null
          sale_price: number | null
          buyer_id: string | null
          gross_commission: number | null
          net_commission: number | null
          commission_split: Json | null
          checklist_progress: number
          vdr_setup_complete: boolean
          marketing_launch_date: string | null
          metadata: Json | null
        }
        Insert: Omit<Database['public']['Tables']['deals']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['deals']['Insert']>
      }
      buyer_matches: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          submission_id: string
          investor_id: string
          match_score: number
          match_reasons: string[] | null
          asset_class_match: boolean
          location_match: boolean
          ticket_size_match: boolean
          yield_match: boolean
          mandate_match: boolean
          status: string
          contacted_at: string | null
          contacted_by: string | null
          response: string | null
          ai_model_version: string | null
          ai_confidence: number | null
        }
        Insert: Omit<Database['public']['Tables']['buyer_matches']['Row'], 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Database['public']['Tables']['buyer_matches']['Insert']>
      }
      bids: {
        Row: {
          id: string
          deal_id: string
          investor_id: string
          bid_type: string
          bid_amount: number | null
          bid_amount_per_sqm: number | null
          cap_rate_assumption: number | null
          financing_contingency: boolean
          financing_details: string | null
          dd_period_days: number
          closing_timeline_days: number
          earnest_money_amount: number | null
          conditions: string[] | null
          status: string
          document_url: string | null
          submitted_at: string
          reviewed_at: string | null
          reviewed_by: string | null
          notes: string | null
        }
        Insert: Omit<Database['public']['Tables']['bids']['Row'], 'id' | 'submitted_at'>
        Update: Partial<Database['public']['Tables']['bids']['Insert']>
      }
      ai_automation_runs: {
        Row: {
          id: string
          automation_type: string
          entity_type: string | null
          entity_id: string | null
          status: string
          started_at: string | null
          completed_at: string | null
          prompt: string | null
          response: Json | null
          error_message: string | null
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['ai_automation_runs']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['ai_automation_runs']['Insert']>
      }
    }
    Enums: {
      submission_status: 'LEAD_RECEIVED' | 'UNDER_REVIEW' | 'QUALIFICATION_CALL' | 'NDA_PENDING' | 'ADVISORY_ENGAGEMENT' | 'UNDERWRITING' | 'INSTITUTIONALIZED' | 'ON_MARKET' | 'IOI_RECEIVED' | 'SHORTLISTED' | 'BAFO' | 'LOI_NEGOTIATION' | 'PSA_NEGOTIATION' | 'DUE_DILIGENCE' | 'FINANCING' | 'CLOSING' | 'CLOSED' | 'REJECTED' | 'WITHDRAWN'
      submitter_role: 'OWNER' | 'BROKER' | 'DEVELOPER' | 'REIT' | 'FAMILY_OFFICE' | 'SOVEREIGN_FUND'
      asset_class: 'OFFICE' | 'RETAIL' | 'INDUSTRIAL' | 'HOSPITALITY' | 'LAND' | 'MIXED_USE' | 'RESIDENTIAL_BLOCK' | 'DATA_CENTER' | 'LOGISTICS' | 'HEALTHCARE'
      title_type: 'FREEHOLD' | 'LEASEHOLD' | 'SECTIONAL' | 'GOVERNMENT_LEASE'
      mandate_chain: 'DIRECT' | 'CO_BROKER' | 'SUB_AGENT' | 'OPEN_LISTING'
      currency_type: 'KES' | 'USD' | 'EUR' | 'GBP'
      divestment_reason: 'PORTFOLIO_REBALANCING' | 'CAPITAL_RECYCLING' | 'DISTRESSED_SALE' | 'PARTNER_EXIT' | 'FUND_MATURITY' | 'DEBT_MATURITY' | 'STRATEGIC_EXIT' | 'OTHER'
      investor_type: 'SOVEREIGN_WEALTH_FUND' | 'PENSION_FUND' | 'REIT' | 'PRIVATE_EQUITY' | 'FAMILY_OFFICE' | 'INSTITUTIONAL_DEVELOPER' | 'LOGISTICS_FUND' | 'HOSPITALITY_FUND' | 'INFRASTRUCTURE_INVESTOR' | 'INSURANCE_COMPANY' | 'HEDGE_FUND' | 'CORPORATE_INVESTOR' | 'HIGH_NET_WORTH' | 'OTHER'
      document_category: 'NATIONAL_ID' | 'KRA_PIN' | 'CR12' | 'DIRECTOR_RESOLUTION' | 'BROKER_ID' | 'EARB_CERT' | 'BROKER_FIRM_REG' | 'PRIMARY_ATS' | 'ATS' | 'CERTIFICATE_OF_TITLE' | 'SEARCH_CERTIFICATE' | 'CONSENT_LETTER' | 'RENT_ROLL' | 'MANAGEMENT_ACCOUNTS' | 'UTILITY_BILLS' | 'SERVICE_CHARGE_BUDGET' | 'DEBT_SCHEDULE' | 'VALUATION_REPORT' | 'FLOOR_PLANS' | 'SITE_PLAN' | 'PLANNING_APPROVAL' | 'BUILDING_PERMIT' | 'ENVIRONMENTAL_REPORT' | 'ENGINEERING_REPORT' | 'SURVEY' | 'INSURANCE' | 'TENANT_ESTOPPEL' | 'TAX_CLEARANCE' | 'SPV_STRUCTURE' | 'SHAREHOLDER_AGREEMENT' | 'PHOTO_EXTERIOR' | 'PHOTO_INTERIOR' | 'PHOTO_AERIAL' | 'PHOTO_DETAIL' | 'CIM' | 'TEASER' | 'FINANCIAL_MODEL' | 'LEGAL_REVIEW' | 'OTHER'
      deal_priority: 'TROPHY' | 'PRIORITY' | 'STANDARD' | 'OPPORTUNISTIC'
      activity_action: 'STATUS_CHANGE' | 'FOLDER_CREATED' | 'PDF_GENERATED' | 'EMAIL_SENT' | 'CALL_MADE' | 'NOTE_ADDED' | 'DOCUMENT_UPLOADED' | 'ASSIGNED' | 'QUALIFICATION_COMPLETED' | 'NDA_SENT' | 'NDA_SIGNED' | 'TEASER_SENT' | 'IOI_RECEIVED' | 'BAFO_RECEIVED' | 'LOI_SENT' | 'PSA_SENT' | 'DUE_DILIGENCE_STARTED' | 'FINANCING_ARRANGED' | 'CLOSING_INITIATED' | 'COMMISSION_CALCULATED' | 'BUYER_MATCHED' | 'INVESTOR_CONTACTED'
      kyc_status: 'NOT_STARTED' | 'PENDING' | 'UNDER_REVIEW' | 'APPROVED' | 'REJECTED' | 'EXPIRED'
    }
  }
}