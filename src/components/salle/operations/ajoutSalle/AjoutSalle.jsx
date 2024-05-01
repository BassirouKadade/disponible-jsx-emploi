import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimComponent from '../../../animation/AnimComponent';
import { REGEX } from '../../../Regex';
import '../../../champOblig.css'
import '../../../AjoutElements.css'

const API_URL = 'http://localhost:3001/ajoutSalle'; // Remplacez cela par l'URL réelle de votre API

export default function AjoutSalle() {
  const [salleData, setSalleData] = useState({
    nom: '',
    capacite: 25, 
    emplacement:"",
    // Ajout de capacite
  });
  const [error, setError] = useState({
    nom: false,
    capacite: false, 
    // Ajout de capacite
  });
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);

  const viderSalleData = () => {
    setSalleData({
      nom: '',
      capacite:"", 
      emplacement:""
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSalleData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;

    Object.keys(salleData).slice(0,2).forEach((fieldName) => {
      if (!REGEX.test(salleData[fieldName])) {
        setError((prevError) => ({ ...prevError, [fieldName]: true }));
        hasError = true;
      } else {
        setError((prevError) => ({ ...prevError, [fieldName]: false }));
      }
    });

    if (hasError) {
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(salleData),
      });

      if (response.ok) {
        viderSalleData();
        setShowConfirmation(true);
        const reponse= await response.json()
        console.log(reponse);
      } else {
        console.error('Erreur lors de l\'ajout de la salle');
      }
    } catch (error) {
      console.error('Erreur lors de la requête:', error);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setShowConfirmation(false);
      }, 1000);
    }
  };

 
  return (
    <section className="parentSalle">
      <div className="salle ">
        <h3 id='salleText' >Salle</h3>
      </div>
      <form action="" method="post" className="salle" onSubmit={handleSubmit}>
        <div className="salleEnfant">
          <div className="info">
            <label htmlFor="nom" >Nom de la Salle <span className='champsO'>*</span></label>
            <input
              type="text"
              id="nom"
              name="nom"
              value={salleData.nom}
              onChange={handleInputChange}
              placeholder="Nom de la salle"
              className={error.nom ? 'form-control is-invalid' : 'inputClass form-control'}
            />
          
          </div>
          <div className="info">
            <label htmlFor="capacite">Capacité de la Salle  <span className='champsO'>*</span></label>
            <input
              type="number"
              id="capacite"
              name="capacite"
              value={salleData.capacite}
              min={25}
              onChange={handleInputChange}
              placeholder="Capacité de la salle supérieure à 25"
              className={error.capacite ? 'form-control is-invalid' : 'inputClass form-control'}
            />
          
          </div>
        </div>

        <div className="salleEnfant" style={{margin:"15px 0"}}>
         <div className="info">
              <label htmlFor="description">Emplacement de salle</label>
              <textarea
              style={{resize:"none"}}
                id="description"
                name="emplacement"
                placeholder="Emplacement de la salle ..."
                value={salleData.emplacement}
                onChange={handleInputChange}
                className='form-control'
                // className={error.description ? 'form-control is-invalid' : 'inputClass form-control'}
              ></textarea>
            </div>
         </div>
        <div className="salleEnfant buttonM">
          <button
            type="submit"
             className='buttonMbut'
          >
            {loading ? (
              <AnimComponent borderColor={'white'} bord={2} padChild={4} padParent={11} />
            ) : (
              'Ajouter'
            )}
          </button>
        </div>
      </form>
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: showConfirmation ? 1 : 0, x: showConfirmation ? 0 : -50 }}
        transition={{ duration: 0.4 }}
        className="confirmation "
      >
        Salle ajoutée avec succès !
      </motion.div>
    </section>
  );
}
