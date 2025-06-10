import React from 'react'
import Evenements from './Pages/Evenements'
import expertsData from './data'

function App() {
  const expert= expertsData[0];
  return (
    <div>
      <Evenements evenements={expert.événements}/>
    </div>
  )
}

export default App




