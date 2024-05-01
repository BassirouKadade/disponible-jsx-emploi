import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AnimComponent from '../../../animation/AnimComponent';
import { REGEX } from '../../../Regex'
import '../../../champOblig.css'
import '../../../AjoutElements.css'

const API_URL = 'http://localhost:3001/ajoutSalle'; // Remplacez cela par l'URL réelle de votre API

;
export default function AjoutFiliere() {
  const [formData, setFormData] = useState({
    codeFiliere: '',
    niveauFiliere: '',
    description: '',
  });

  const [loadingSubmit,setLoadingSubmit]=useState(false)
  const [error, setError] = useState({
    codeFiliere: false,
    niveauFiliere: false,
    description: false,
  });

  const viderFiliererData = () => {
    setFormData({
      codeFiliere: '',
      niveauFiliere: '',
      description: '',
    });
  };

  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;

    Object.keys(formData).forEach((fieldName) => {
      if (!REGEX.test(formData[fieldName])) {
        setError((prevError) => ({ ...prevError, [fieldName]: true }));
        hasError = true;
      } else {
        setError((prevError) => ({ ...prevError, [fieldName]: false }));
      }
    });

    if (hasError) {
      console.log('Il y a des erreurs dans le formulaire');
      return;
    }

    console.log('Formulaire soumis avec succès!');

    try {
      setLoadingSubmit(true)
      const response = await fetch('http://localhost:3001/ajoutFiliere', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Données envoyées avec succès!');
        setShowConfirmation(true);
        viderFiliererData();
        setTimeout(() => {
          setShowConfirmation(false);
        }, 1000);
      } else {
        console.error("Erreur lors de l'envoi des données au serveur.");
      }
    } catch (error) {
      console.error('Erreur lors de la requête fetch:', error);
    }
    finally{
      setLoadingSubmit(false)
    }
  };

  return (
    <section className="parentSalle">
      <div className="salle">
        <h3 id='salleText'>Filiere</h3>
      </div>
      <form onSubmit={handleSubmit} className="module">
        <div className="salleEnfant">
          <div className="info">
            <label htmlFor="codeFiliere">Code Filiere <span className='champsO'>*</span></label>
            <input
              className={error.codeFiliere ? 'form-control is-invalid' : 'inputClass form-control'}
              onChange={handleInputChange}
              type="text"
              id="codeFiliere"
              name="codeFiliere"
              value={formData.codeFiliere}
              placeholder="Code du Filiere"
            />
          </div>
          <div className="info">
            <label htmlFor="niveauFiliere">Niveau Filiere <span className='champsO'>*</span></label>
            <select
              className={error.niveauFiliere ? 'form-control is-invalid' : 'inputClass form-control'}
              onChange={handleInputChange}
              name="niveauFiliere"
              id="niveauFiliere"
              value={formData.niveauFiliere}
            >
              <option value="">Sélectionner le niveau de filière</option>
              <option value="1">1ère année</option>
              <option value="2">2ème année</option>
            </select>
          </div>
        </div>
        <div className="salleEnfant">
          <label htmlFor="description">Description Filiere <span className='champsO'>*</span></label>
          <textarea
            className={error.description ? 'form-control is-invalid' : 'inputClass form-control'}
            onChange={handleInputChange}
            id="description"
            name="description"
            value={formData.description}
            placeholder="Description du Filiere"
            style={{resize:'none'}}
          ></textarea>
        </div>
        <div className="salleEnfant buttonM">
        <button style={{margin:"10px 0"}} type="submit"  className='buttonMbut'>
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
      >
        Filiere ajouté avec succès !
      </motion.div>
    </section>
  );
}
