import { pdf } from '@react-pdf/renderer'
import { MyDocument } from './Pdf'
import {saveAs} from 'file-saver'
function App() {

  async function save() {
    const asPdf = pdf(<MyDocument />)
    const asBlob = await asPdf.toBlob()
    saveAs(asBlob, 'document.pdf')
  }
  return (
    <div style={{width: '100vw', height: '100vh', margin: '0px', padding: '0px', }}>
    <MyDocument />
    <div>
      <button style={{padding: '0px', margin: '0px'}} onClick={save}>Save</button>
    </div>
    </div>
  )
}

export default App
