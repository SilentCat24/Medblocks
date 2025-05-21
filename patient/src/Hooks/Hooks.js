import db from '../db/db';
import React,{useEffect, useState} from 'react';

export const useHooks=()=>{
    const [patients, setPatients] = useState([]);
    const [message,setMessage]=useState([])

function escapeString(str) {
return str.replace(/'/g, "''");
}

// registering patient
async function register(data){
if(Object.values(data).some(val=>!val.trim())){
  setMessage("All fields are required")
}


  const name = escapeString(data.name);
  const gender = escapeString(data.gender);
  const disease = escapeString(data.disease);
  const age = Number(data.age);  
  try {
    await db.exec(`
      INSERT INTO PATIENTS (Name, Age, Gender,Disease)
      VALUES ('${data.name}', ${data.age}, '${data.gender}','${data.disease}')
    `);
      setMessage("Registered successfully")
  } catch (err) {
    console.error("Insert failed:", err);
  }
}

// fetching patients
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await db.query("SELECT * FROM PATIENTS"); // Make sure table name is singular if that's correct
        setPatients(result.rows);
      } catch (error) {
        console.error("Error fetching patients:", error);
      }
    }
    fetchData();
  }, []);






return {register,patients,message}
}