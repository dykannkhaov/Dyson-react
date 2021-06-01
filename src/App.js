import Header from './Header'
import Homepage from './Homepage'
import { useState } from 'react'

function App() {
  const [page, setPage] = useState('homepage')
  return (
    <>
      <Header setPage={setPage} />
      <main>
        {page === 'homepage' ? <Homepage /> : null}
        {page === 'introduction' ? <Introduction /> : null}
        {page === 'diagnostic' ? <Diagnostic /> : null}
        {page === 'segmentation' ? <Segmentation /> : null}
        {page === 'strategie' ? <Strategie /> : null}
        {page === 'e-contenu' ? <Econtenu /> : null}
      </main>
    </>
  )
}

export default App
