import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {Link} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye} from '@fortawesome/free-solid-svg-icons';
import '../../../AjoutElements.css'
import AnimComponent from '../../../animation/AnimComponent';
import { REGEX } from '../../../Regex';
export default function ModuleFiliere() {
  const [listeFormateur, setListeFormateur] = useState([]);
  const [listeModule, setListeModule] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [loadingData2, setLoadingData2] = useState(false);
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
const [demarrage,setDemarrage]=useState(false)
  const [groupeData, setGroupeData] = useState({
    formateur: '',
    module: '',
  });

  const [error, setError] = useState({
    formateur: false,
    module: false,
  });

  useEffect(() => {
    
    const fetchDataM = async () => {
      try {
        setLoadingData2(true);
        const response = await fetch(`http://localhost:3001/getModules?idFiliere=${!groupeData.formateur?0:groupeData.formateur}`);
        if (response.ok) {
          const data = await response.json();
          setListeModule(data);
          setDemarrage(true)
        } else {
          console.error('Erreur lors de la récupération des données de modules');
        }
      } catch (error) {
        console.error('Une erreur est survenue lors de la récupération des données de modules', error);
      } finally {
        setLoadingData2(false);
      }
    };
    fetchDataM();
  }, [groupeData.formateur]);

useEffect(()=>{
  // document.getElementsByClassName('formateurFluid')[0].classList.add('schedules2');
  const fetchDataF = async () => {
    try {
    
      setLoadingData(true);
      const response = await fetch('http://localhost:3001/getfilieres');
      if (response.ok) {
        const data = await response.json();
        setListeFormateur(data);
        setDemarrage(true)
      } else {
        console.error('Erreur lors de la récupération des données de filières');
      }
    } catch (error) {
      console.error('Une erreur est survenue lors de la récupération des données de filières', error);
    } finally {
      setLoadingData(false);
    }
  };
  fetchDataF(); 
},[])

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
    Object.keys(groupeData).forEach((fieldName) => {
      if (!REGEX.test(groupeData[fieldName])) {
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
      setLoadingSubmit(true);

      const response = await fetch('http://localhost:3001/ajoutAssociationFiliereModule', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(groupeData),
      });

      if (response.ok) {
        setShowConfirmation(true);
        setGroupeData({
          formateur: '',
          module: '',
        });
      } else {
        console.error('Erreur de serveur lors de la soumission du formulaire');
      }
    } catch (error) {
      console.error('Erreur lors de la soumission du formulaire', error);
    } finally {
      setLoadingSubmit(false);
      setTimeout(() => {
        setShowConfirmation(false);
      }, 1000);
    }
  };

  
  return (
    <section style={{ margin:"30px"}} className="parentSalle position">
      { loadingData || listeFormateur.length === 0 && !demarrage || listeModule.length === 0 && !demarrage  ?
    // Afficher l'animation de chargement si les conditions sont remplies
    <span style={{ position: "absolute", left: "48%", top: "20%" }}>
      <AnimComponent padParent={20} padChild={10} borderColor={'rgba(29, 120, 120, 0.843)'} bord={3} />
    </span> :  (
        <>
          <div style={{display:"flex",alignItems:"center",justifyContent:"space-between", marginTop:"10px"}} className="salle">
            <h3 id='salleText'>Les modules de filiere  </h3>
            {groupeData.formateur&& <span style={{color:"rgba(29, 120, 120, 0.843)"}}>
            <Link to={`/filieres/listeModuleFilieres/${groupeData.formateur}`} className='AjouterAuyeModule' ><FontAwesomeIcon icon={faEye} />  <span style={{margin:"0 2px"}}>voir ses modules</span> </Link>
            </span>}
          
          </div>
          <form action="" method="post" className="module" onSubmit={handleSubmit}>
            <div className="salleEnfant">
                <div className="info">
                <label htmlFor="formateur">Filiere <span className='champsO'>*</span></label>
                <select
                  id="formateur"
                  name="formateur"
                  onChange={handleInputChange}
                  value={groupeData.formateur}
                  className={error.formateur ? 'form-control is-invalid' : 'inputClass form-control'}
                >
                  <option value="">Sélectionner la filiere</option>
                  {listeFormateur.map((formateur) => (
                    <option key={formateur.idFiliere} value={formateur.idFiliere}>
                      {`${formateur.DescriptionFiliere}`}
                    </option>
                  ))}
                </select> 
                {error.formateur && <div className="invalid-feedback">la filiere ne doit pas etre vide</div>}  
              </div>
              <div className="info">
                <label htmlFor="module">Module <span className='champsO'>*</span></label>
                <select
                  className={error.module ? 'form-control is-invalid' : 'inputClass form-control'}
                  id="module"
                  name="module"
                  onChange={handleInputChange}
                  value={groupeData.module}
                >
                  <option value="">Sélectionner le module</option>
                  { listeModule.length===0? <option value="">la filiere à tous les modules disponibles . verifier ses modules</option>:
                  listeModule.map((module) => (
                    <option key={module.idModule} value={module.idModule}>
                      {`${module.codeModule}  ${module.Description}`}
                    </option>
                  ))}
                </select>
                {error.module && <div className="invalid-feedback">le module ne doit pas etre vide</div>}
              </div>
            </div>
            <div className="moduleEnfant buttonM">
            <button
            type="submit"
             className='buttonMbut'
          >
            {loadingSubmit ? (
              <AnimComponent borderColor={'white'} bord={2} padChild={4} padParent={11} />
            ) : (
              'associer'
            )}
          </button>
            </div>
          </form>
          <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: showConfirmation ? 1 : 0, x: showConfirmation ? 0 : -24 }}
        transition={{ duration: 0.4 }}
        className="confirmation "
        style={{marginTop:"10px"}}
      >
         Association ajouté avec succès !
      </motion.div>
        </>
      )}
    </section>
  );
}
