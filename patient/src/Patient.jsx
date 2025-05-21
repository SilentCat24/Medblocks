import React,{useEffect, useState} from 'react';
import db from './db/db';
import { useHooks } from './Hooks/Hooks';
import CustomField from './customFields/Custom';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import bgc from './assets/hospital.webp';

const bc=new BroadcastChannel('patient-sync');
const Patient = () => {
    const navigate = useNavigate();
const {register,patients,message}=useHooks();    
const [form,setForm]=useState({
name:"",
age:"",
gender:"",
disease:""
})

useEffect(() => {
  console.log("Updated patients", patients);
}, [patients]);

const handleChange=(e)=>{
    const {name,value}=e.target;
    setForm((prev)=>({
        ...prev,
        [name]:value,
    }))
    console.log("form data",form)
}

const handleSubmit=(e)=>{
    e.preventDefault();
    if(Object.values(form).some(val=>!val.trim())){
        console.log("all fileds are required")
    }
register(form)
}

return (
    <>
    <div className='nav'>
    <h4 style={{
        color:"white",
        margin:'1rem'
    }}>ALL Patients Details</h4>

    <button
onClick={() => navigate('/')}
    style={{
        border:'none',
        margin:"1rem",
        padding:"15px 20px",
        borderRadius:"5px",
        cursor:"pointer"
    }}>
        All Patients 
        </button>

</div>
    <div style={{
          display:"flex",
          flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
          backgroundImage:`url(${bgc})`,
       backgroundRepeat:'no-repeat',
       backgroundSize: 'cover',
       backgroundPosition: 'center',
       height:"82vh"
    }}>


        
    <div style={{
        display:"flex",
          flexDirection:"column",
          gap:'1rem'

        }}>
    <CustomField name="name" label='FullName' onChange={handleChange} value={form.name}  />
    <CustomField name="age" label='Age'value={form.age} onChange={handleChange}  type='Number'/>
    <CustomField name="gender" label='Gender'  value={form.gender} onChange={handleChange}/>
    <CustomField name="disease" label='Purpose of Visting' value={form.disease} onChange={handleChange}/>

    </div>

    <div style={{
        margin:"1rem",
        display:'flex',
        flexDirection:"column",
        gap:"1rem"
    }}>
        {
            message
        }
        <Button variant="contained" onClick={handleSubmit}>
            Submit
        </Button>
    </div>
    </div>
  </>
  
  )
}

export default Patient