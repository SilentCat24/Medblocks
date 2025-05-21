import React from 'react'
import Patient from './Patient'
import PatientDetails from './PatientDetails'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
const App = () => {
  return (
    <div>
<BrowserRouter>
<Routes>
<Route path="/" element={<PatientDetails/>}/>
<Route path="/patient" element={<Patient/>}/>
</Routes>
</BrowserRouter>




    </div>
  )
}

export default App