import React from 'react'
import Evenements from './Pages/Evenements'
import Expert from './Pages/Expert';
import expertsData from './data'
import Experts1 from './Pages/Experts1';
import Formulaire from './Pages/Formulaire';
import { BrowserRouter ,Route ,Routes} from 'react-router-dom';
// import Expert2 from './Pages/Expert2';

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
      {/* Q4 */}
      <Formulaire/>
      {/* Q5 */}
      {/* <Expert2/> */}

      <BrowserRouter>
        <Routes>
          <Route element={<Formulaire/>}/>
          <Route element={<Experts1/>}/>
          {/* <Route element={<Expert2/>}/> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App




