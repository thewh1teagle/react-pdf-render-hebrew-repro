import { Document, Page, Text, View, StyleSheet, Font } from '@react-pdf/renderer';
import NotoSansRegular from '../assets/NotoSans-Regular.ttf'

Font.register({ family: 'Noto Sans', src: NotoSansRegular, fontWeight: 'normal' });

// Create styles
const styles = StyleSheet.create({
  page: {
    margin: '0',
    padding: '0',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
    textAlign: 'right',
    direction: 'rtl',
    fontFamily: 'Noto Sans',
    fontWeight: 'normal'
  },
  section: {
    margin: 0,
    padding: 0,
  },
});

// Create Document Component
export const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>שלום וברכה hello world!</Text>
      </View>
      <View style={styles.section}>
        <Text>Hello world!</Text>
      </View>
    </Page>
  </Document>
);