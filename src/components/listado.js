/* import React, { useState, useEffect } from "react";
import Persona from "./persona";
import { db } from "../firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";

function Listado() {
  const [personas, setPersonas] = useState([]);
  const documentos = [];
  const leePersonas = async () => {
    try {
      const query = await getDocs(collection(db, "usuarios"));
      query.foreach(doc => {
        documentos.push({ id: doc.id, ...doc.data() });
      });
      setPersonas(documentos);
    } catch (err) {
      console.log(err);
    }
  }

    useEffect(() => {
        leePersonas();
        }, [personas]
    );

    return (
        <div>
            {personas.map((persona) => (
                <Persona key={persona.id} persona={persona} />
            ))}
        </div>
    );
}

export default Listado; */
