import { PGlite } from "https://cdn.jsdelivr.net/npm/@electric-sql/pglite/dist/index.js"

const db = new PGlite('idb://patients')




await db.exec(`
  CREATE TABLE IF NOT EXISTS PATIENTS (
    personId SERIAL PRIMARY KEY,
    Name TEXT,
    Age INTEGER,
    Gender TEXT,
    Disease TEXT
  );  
`);





export default db;