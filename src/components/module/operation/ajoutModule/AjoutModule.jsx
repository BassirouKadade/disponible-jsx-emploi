import React, { useEffect, useState } from 'react';
import '../../../AjoutElements1.css'
import { REGEX } from '../../../Regex';
import AnimComponent from '../../../animation/AnimComponent';
import { motion } from 'framer-motion';
const API_URL = 'http://localhost:3001/ajoutModule/';

export default function Module() {
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [moduleData, setModuleData] = useState({
    codeModule: '',
    masseHoraire: '',
    MHP:"",
    MHD:"",
    description: '',
   
  });
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [error, setError] = useState({
    codeModule: false,
    masseHoraire: false,
    MHP:"",
    MHD:"",
    description: false,
  });

  const viderModuleData = () => {
    setModuleData({
      codeModule: '',
      masseHoraire: '',
      MHP:"",
      MHD:"",
      description: '',
     
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let hasError = false;

    Object.keys(moduleData).slice(0,5).forEach((fieldName) => {
      if (!REGEX.test(moduleData[fieldName])) {
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
      setLoading1(true);
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(moduleData),
      });

      if (response.ok) {
        viderModuleData();
      
        setShowConfirmation(true);
        console.log('Module ajouté avec succès!');
      } else {
        console.error('Erreur lors de l\'ajout du module');
      }
    } catch (error) {
      console.error('Erreur lors de la requête:', error);
    } finally {
      setLoading1(false);
      setTimeout(() => { setShowConfirmation(false); }, 1000);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setModuleData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
useEffect(()=>{
    setModuleData(prevState=>({...prevState,MHD:parseInt(prevState.masseHoraire)-parseInt(prevState.MHP)}))
},[moduleData])
  return (
    <section className="parentSalle" >
      {loading ? (
        <span style={{ position: "absolute", top: "35%", left: "50%" }}>
          <AnimComponent padParent={20} padChild={10} borderColor={"blue"} bord={3} />
        </span>
      ) : (
        <>
          <div className="formateur salle">
            <h3 id='Text'>Module</h3>
          </div>
          <form onSubmit={handleSubmit} className="module">
            <div className="salleEnfant">
              <div className="info" style={{width:"23%"}}>
                <label htmlFor="codeModule">Code du Module  <span className='champsO'>*</span></label>
                <input
                  type="text"
                  id="codeModule"
                  name="codeModule"
                  placeholder="Code du module"
                  onChange={handleInputChange}
                  value={moduleData.codeModule}
                  className={error.codeModule ? 'form-control is-invalid' : 'inputClass form-control'}
                />
              </div>
              <div className="info" style={{width:"23%"}}>
                <label htmlFor="masseHoraire">Masse Horaire Totale <span className='champsO'>*</span></label>
                <input
                  type="number"
                  id="masseHoraire"
                  placeholder="Masse Horaire du module"
                  name="masseHoraire"
                  onChange={handleInputChange}
                  value={moduleData.masseHoraire}
                  className={error.masseHoraire ? 'form-control is-invalid' : ' inputClass form-control'}
                />
              </div>
              <div className="info" style={{width:"23%"}}>
                <label htmlFor="masseHoraire">Masse Horaire Presentielle  <span className='champsO'>*</span></label>
                <input
                  type="number"
                  id="masseHoraire"
                  placeholder="Masse Horaire du module"
                  name="MHP"
                  onChange={handleInputChange}
                  value={moduleData.MHP}
                  className={error.MHP ? 'form-control is-invalid' : ' inputClass form-control'}
                />
              </div>
              <div className="info" style={{width:"23%"}}>
                <label htmlFor="masseHoraire">Masse Horaire à distance  <span className='champsO'>*</span></label>
                <input
                  readOnly
                  type="number"
                  id="masseHoraire"
                  placeholder="Masse Horaire du module"
                  name="MHD"
                  onChange={handleInputChange}
                  value={moduleData.MHD}
                  className={error.MHD ? 'form-control is-invalid' : ' inputClass form-control'}
                />
              </div>
              {/* µµµµµµµµµµµµµµµµµµµ */}
            </div>
            <div className="salleEnfant">
              <div className="info" style={{width:"100%"}}>
                <label htmlFor="description">Descriptions <span className='champsO'>*</span> </label>
                <textarea
                  id="description"
                  name="description"
                  placeholder="Description du module"
                  onChange={handleInputChange}
                  value={moduleData.description}
                  style={{resize:"none"}}
                  className={error.description ? 'form-control is-invalid' : 'inputClass form-control'}
                ></textarea>
              </div>
            </div>
            <div className="salleEnfant buttonM">
              <button className='buttonMbut' type="submit">
                {loading1 ? (
                  <AnimComponent borderColor={'white'} bord={2} padChild={4} padParent={11} />
                ) : (
                  'Ajouter'
                )}
              </button>
            </div>
          </form>
        </>
      )}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: showConfirmation ? 1 : 0, x: showConfirmation ? 0 : -50 }}
        transition={{ duration: 0.4 }}
        className="confirmation "
        style={{marginTop:'10px'}}
      >
            Module ajouté avec succès !
      </motion.div>
    </section>
  );
}
