import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: { padding: 40, backgroundColor: '#ffffff', fontFamily: 'Helvetica' },
  header: { borderBottom: 2, borderBottomColor: '#d97706', paddingBottom: 10, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#0f172a' },
  subtitle: { fontSize: 10, color: '#d97706', marginTop: 4 },
  section: { marginVertical: 12 },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', color: '#0f172a', marginBottom: 10, textTransform: 'uppercase', borderBottom: 1, borderBottomColor: '#e2e8f0', paddingBottom: 4 },
  row: { flexDirection: 'row', marginBottom: 8 },
  col: { flex: 1 },
  label: { fontSize: 8, color: '#64748b', textTransform: 'uppercase', marginBottom: 2 },
  value: { fontSize: 10, color: '#0f172a' },
  footer: { position: 'absolute', bottom: 40, left: 40, right: 40, fontSize: 8, color: '#94a3b8', textAlign: 'center', borderTop: 1, borderTopColor: '#e2e8f0', paddingTop: 10 },
  signature: { marginTop: 30, padding: 15, backgroundColor: '#f8fafc', borderRadius: 4 },
  mandateRef: { fontSize: 12, fontWeight: 'bold', color: '#d97706', marginBottom: 20 }
});

export const MandatePDF = ({ data, mandateRef }: { data: any, mandateRef: string }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>MURIVEST REALTY LIMITED</Text>
        <Text style={styles.subtitle}>Authority to Sell Mandate | Cap 533 Compliance</Text>
      </View>

      <Text style={styles.mandateRef}>MANDATE REF: {String(mandateRef)}</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Section 1: Vendor Information</Text>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Full Legal Name</Text>
            <Text style={styles.value}>{String(data.vendorName)}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>National ID / Passport</Text>
            <Text style={styles.value}>{String(data.vendorId)}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Email Address</Text>
            <Text style={styles.value}>{String(data.email)}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>Phone Number</Text>
            <Text style={styles.value}>{String(data.phone)}</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Section 2: Property & Transaction Details</Text>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Property Title Number (LR)</Text>
            <Text style={styles.value}>{String(data.titleNumber)}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>Physical Location</Text>
            <Text style={styles.value}>{String(data.location)}</Text>
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.label}>Listing Price (KES)</Text>
            <Text style={styles.value}>KES {Number(data.price).toLocaleString()}</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.label}>Professional Commission</Text>
            <Text style={styles.value}>{String(data.commission)}</Text>
          </View>
        </View>
      </View>

      <View style={styles.signature}>
        <Text style={styles.label}>Authorization & Electronic Execution</Text>
        <Text style={[styles.value, { fontSize: 9, lineHeight: 1.4, marginTop: 5 }]}>
          I hereby grant Murivest Realty Limited the irrevocable authority to market and sell the above-described property. 
          I confirm that all information provided is accurate, complete, and true. This document serves as a binding digital execution.
        </Text>
        <View style={{ marginTop: 15, borderTop: 1, borderTopColor: '#cbd5e1', paddingTop: 10 }}>
          <Text style={styles.label}>Digitally Signed By</Text>
          <Text style={styles.value}>{String(data.vendorName)}</Text>
          <Text style={[styles.label, { marginTop: 4, textTransform: 'none' }]}>
            Timestamp: {new Date().toLocaleString('en-GB', { timeZone: 'Africa/Nairobi' })} EAT
          </Text>
        </View>
      </View>

      <Text style={styles.footer}>
        Murivest Realty Limited | Nairobi, Kenya | info@murivest.co.ke | +254 115 277 610
      </Text>
    </Page>
  </Document>
);