import React from 'react'
import Evenements from './Pages/Evenements'
import Expert from './Pages/Expert';
import expertsData from './data'
import Experts1 from './Pages/Experts1';
import Formulaire from './Pages/Formulaire';

function App() {
  const expert= expertsData[0];
  return (
    <div>
      {/* Q1 */}
      <Evenements evenements={expert.événements}/>
      {/* Q2 */}
      <ul>
        <Expert expert={expert}/>
      </ul>
      {/* Q3 */}
      <ul>
        <Experts1 />
      </ul>
      <Formulaire/>
    </div>
  )
}

export default App




