import React, { useState } from 'react';
import '../../../AjoutElements1.css'
import AnimComponent from '../../../animation/AnimComponent';
import { motion } from 'framer-motion';
import { REGEX } from '../../../Regex';
const API_URL = 'http://localhost:3001/ajoutFormateur/';

export default function AjoutFormateur() {
  const [formateurData, setFormateurData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
  });
  const [error, setError] = useState({
    nom: false,
    prenom: false,
    email: false,
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [loading, setLoading] = useState(false);

  const viderFormateurData=()=>{
        setFormateurData({
          nom: '',
    prenom: '',
    email: '',
  
    telephone: '',
        })
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormateurData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;
 
    Object.keys(formateurData).slice(0,3).forEach((fieldName) => {
      if (!REGEX.test(formateurData[fieldName])) {
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
        body: JSON.stringify(formateurData),
      });

      if (response.ok) {
        viderFormateurData()
        setShowConfirmation(true);
        console.log('Formateur ajouté avec succès!');
      } else {
        console.error('Erreur lors de l\'ajout du formateur');
      }
    } catch (error) {
      console.error('Erreur lors de la requête:', error);
    } finally {
      setLoading(false);
      setTimeout(()=>{ setShowConfirmation(false);},1000)
    }
  };

  return (
    <section className="parentFormateur">
      <div className="formateur">
        <h3 id='Text'>Formateur</h3>
      </div>
      <form onSubmit={handleSubmit} className="formateur">
        <div className="formateurEnfant">
          <div className="info">
            <label htmlFor="nom">Nom <span className='champsO'>*</span></label>
            <input
              type="text"
              id="nom"
              onChange={handleInputChange}
              name="nom"
              placeholder="Nom du formateur"
              value={formateurData.nom}
              className={error.nom ? 'form-control is-invalid' : 'inputClass form-control'}
            />
          </div>
          <div className="info">
            <label htmlFor="prenom">Prénom <span className='champsO'>*</span></label>
            <input
              type="text"
              id="prenom"
              onChange={handleInputChange}
              name="prenom"
              placeholder="Prénom du formateur"
              value={formateurData.prenom}
              className={error.prenom ? 'form-control is-invalid' : 'inputClass form-control'}
            />
          </div>
          <div className="info">
            <label htmlFor="email">Email <span className='champsO'>*</span></label>
            <input
              type="email"
              id="email"
              onChange={handleInputChange}
              name="email"
              placeholder="Email du formateur"
              value={formateurData.email}
              className={error.email ? 'form-control is-invalid' : 'inputClass form-control'}
            />
          </div>

          <div className="info">
            <label htmlFor="telephone">Téléphone</label>
            <input
              type="tel"
              id="telephone"
              onChange={handleInputChange}
              name="telephone"
              placeholder="Numéro de téléphone"
              className={error.telephone ? 'form-control is-invalid' : 'inputClass form-control'}
              value={formateurData.telephone}
            />
          </div>
        </div>
        <div className="formateurEnfant buttonF">
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
          Formateur ajouté avec succès!
      </motion.div>
    </section>
  );
}
