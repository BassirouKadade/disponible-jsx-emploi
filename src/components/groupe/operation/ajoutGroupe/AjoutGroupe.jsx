import React, { useState,useEffect } from 'react';
import '../../../AjoutElements.css'

import AnimComponent from '../../../animation/AnimComponent';
import { motion } from 'framer-motion';
import { REGEX } from '../../../Regex';
export default function AjoutGroupe() {
  const [listeFiliere, setListeFiliere] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
const [demarrage,setdemarrage]=useState(false)
  const [groupeData, setGroupeData] = useState({
    intituleGroupe: '',
    filiereGroupe: '',
    description: '',
  });

  const [error, setError] = useState({
    intituleGroupe: false,
    filiereGroupe: false,
    description: false,
  });

  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingData(true);
        const response = await fetch('http://localhost:3001/getfilieres');
        if (response.ok) {
          const data = await response.json();
          setListeFiliere(data);
          setdemarrage(true)
        } else {
          console.error('Erreur lors de la récupération des données');
          // Affichez un message d'erreur à l'utilisateur
        }
      } catch (error) {
        console.error('Une erreur est survenue lors de la récupération des données', error);
        // Affichez un message d'erreur à l'utilisateur
      } finally {
        setLoadingData(false);
      }
    };

    fetchData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setGroupeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasError = false;

    // Validation du formulaire
    Object.keys(groupeData).slice(0,2).forEach((fieldName) => {
      if (!REGEX.test(groupeData[fieldName])) {
        setError((prevError) => ({ ...prevError, [fieldName]: true }));
        hasError = true;
      } else {
        setError((prevError) => ({ ...prevError, [fieldName]: false }));
      }
    });

    if (hasError) {
      // Affichez un message d'erreur à l'utilisateur indiquant que le formulaire contient des erreurs
      return;
    }

    try {
      setLoadingSubmit(true);

      const response = await fetch('http://localhost:3001/ajoutGroup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(groupeData),
      });

      if (response.ok) {
        setShowConfirmation(true);
        setGroupeData({
          intituleGroupe: '',
          filiereGroupe: '',
          description: '',
        });
      } else {
        console.error('Erreur de serveur lors de la soumission du formulaire');
        // Affichez un message d'erreur à l'utilisateur
      }
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire', error);
      // Affichez un message d'erreur à l'utilisateur
    } finally {
      setLoadingSubmit(false);
      setTimeout(() => {
        setShowConfirmation(false);
      }, 1000);
    }
  };

  return (
    <section  className="parentSalle">
      {loadingData || listeFiliere.length === 0 && !demarrage  ? (
        <span style={{ position: 'absolute', top: '32%', left: '48%' }}>
            <AnimComponent padParent={20} padChild={10} borderColor={'rgba(29, 120, 120, 0.843)'} bord={3} />
        </span>
      ) : (
        <>
          <div className=" salle">
            <h3 id='Text'>Groupe</h3>
          </div>
          <form onSubmit={handleSubmit} className="module">
            <div className="salleEnfant">
              <div className="info">
                <label htmlFor="intituleGroupe">Intitulé Groupe <span className='champsO'>*</span></label>
                <input
                  type="text"
                  id="intitule"
                  name="intituleGroupe"
                  placeholder="Intitulé du Groupe"
                  value={groupeData.intituleGroupe}
                  onChange={handleInputChange}
                  className={error.intituleGroupe ? 'form-control is-invalid' : 'inputClass form-control'}
                />
              </div>
              <div className="info">
                <label htmlFor="filiereGroupe">Filière du Groupe <span className='champsO'>*</span></label>
                <select
                  id="filiere"
                  name="filiereGroupe"
                  value={groupeData.filiereGroupe}
                  onChange={handleInputChange}
                  className={error.filiereGroupe ? 'form-control is-invalid' : 'inputClass form-control'}
                >
                  <option value="">Sélectionner la filière</option>
                  {listeFiliere.map((filiere) => (
                    <option key={filiere.idFiliere} value={filiere.idFiliere}>
                      {`${filiere.CodeFiliere}   ${filiere.DescriptionFiliere}`}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="salleEnfant">
              <label htmlFor="description">Description Groupe </label>
              <textarea
                id="description"
                name="description"
                placeholder="Description du Groupe"
                value={groupeData.description}
                onChange={handleInputChange}
                style={{resize:"none"}}
                className={error.description ? 'form-control is-invalid' : 'inputClass form-control'}
              ></textarea>
            </div>
            <div  className="salleEnfant buttonM">
              <button type="submit"  style={{marginTop:"10px"}} className='buttonMbut'>
                {loadingSubmit ? (
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
        style={{marginTop:'13px'}}
      >
            Groupe ajouté avec succès !
      </motion.div>
        </>
      )}
    </section>
  );
}
