import React, { useEffect } from 'react';
import { useHooks } from './Hooks/Hooks';
import './App.css';
import {useNavigate} from 'react-router-dom';


const PatientDetails = () => {
    const {patients}=useHooks();
      const navigate = useNavigate();

    useEffect(()=>{
    console.log("patient Details",patients)
    },[patients])
  return (
<>

<div className='nav' style={{marginBottom:"1rem"}}>
    <h4 style={{
        color:"white",
        margin:'1rem'
    }}>ALL Patients Details</h4>

    <button
onClick={() => navigate('/patient')}
    style={{
        border:'none',
        margin:"1rem",
        padding:"15px 20px",
        borderRadius:"5px",
        cursor:"pointer"
    }}>
        
        
        Register
        
        </button>

</div>

<div>

        {/* <h2>Patient details</h2> */}
        <table style={{ width: "90%", margin: "auto", borderCollapse: "collapse", }}>
        <thead >
        <tr>
<th className='thStyle'>Name</th>
<th className='thStyle'>Age</th>
<th className='thStyle'>Gender</th>
<th className='thStyle'>Purpose of visit</th>
        </tr>
        </thead>

<tbody>
{
patients && patients.length > 0 ? (
    patients.map((patient,index)=>(
        <tr key={index}>
            <td className='tdStyle' >{patient.name}</td>
           <td className='tdStyle'>{patient.age}</td>
           <td className='tdStyle'>{patient.gender}</td>
           <td className='tdStyle'>{patient.disease}</td>
 
        </tr>
    ))
):(
     <tr>
              <td >No patient data found</td>
            </tr>     
    )



}


</tbody>
        </table>


    </div>
    </>
  )
}

export default PatientDetails