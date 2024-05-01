import React, {useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimComponent from '../../animation/AnimComponent';
import { REGEX } from '../../Regex';
import '../../champOblig.css'
import '../../AjoutElements.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faRightToBracket} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
export default function RechercherEmplois() {
  const navigate = useNavigate();
  const [listeFiliere, setListeFiliere] = useState([]);
  const [listeGroupe, setListeGroupe] = useState([]);
  const [listeSemaine, setListeSemaine] = useState([]);
  const [demarer,setDemarer]=useState(false)
  const [loadingData, setLoadingData] = useState(false);
  const [groupeData, setGroupeData] = useState({
    filiere: '',
    groupe: '',
    semaine: '',
  });

  const [error, setError] = useState({
    filiere: false,
    groupe: false,
    semaine: false,
  });

  useEffect(() => {
    const fetchDataF = async () => {
      try {
        setLoadingData(true);
        const response = await fetch('http://localhost:3001/getfilieres');
        if (response.ok) {
          const data = await response.json();
          setListeFiliere(data);
          setDemarer(true)
        } else {
          console.error('Erreur lors de la récupération des données de filières');
        }
      } catch (error) {
        console.error(
          'Une erreur est survenue lors de la récupération des données de filières',
          error
        );
      } finally {
        setLoadingData(false);
      }
    };

    const fetchDataSemaine = async () => {
      try {
        setLoadingData(true);
        const response = await fetch('http://localhost:3001/semaineEmplois');
        if (response.ok) {
          const data = await response.json();
          setListeSemaine(data);
          setDemarer(true)
        } else {
          console.error('Erreur lors de la récupération des données de filières');
        }
      } catch (error) {
        console.error(
          'Une erreur est survenue lors de la récupération des données de filières',
          error
        );
      } finally {
        setLoadingData(false);
      }
    };

    fetchDataF();
    fetchDataSemaine()
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const encodedData = encodeURIComponent(JSON.stringify({ filiere: groupeData.filiere || 0 }));
        const response = await fetch(`http://localhost:3001/groupesEmploisFiliere/${encodedData}`);
  
        if (response.ok) {
          const data = await response.json();
          console.log(data)
          setListeGroupe(data);
        } else {
          console.error('Erreur lors de la récupération des données groupes:');
        }
      } catch (error) {
        console.error('Une erreur est survenue lors de la récupération des données', error);
      }
    };
  
    fetchData();
  }, [groupeData.filiere]);
  

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
    const encodedData = encodeURIComponent(JSON.stringify(groupeData));

    navigate(`/rechercherEmploideGroupe/consultation/${encodedData}`);
  };

  
return (
  <>
    {loadingData ||listeFiliere.length===0&&!demarer || listeGroupe.length==0&&!demarer? (
      <span style={{ position: 'absolute', top: '35%', left: '50%' }}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <AnimComponent padParent={20} padChild={10} borderColor={'rgba(29, 120, 120, 0.843)'} bord={3} />
        </motion.div>
      </span>
    ) : (
      <div className='parentSalle'  style={{padding:"30px", height:"66%",width:"70%"}}>
        <section className='salle' style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <h3 id='salleText' style={{fontSize:"30px"}}>Recherche d'Emploi</h3>
          <Link className='menuQuiRecherche'  to={'/'}><FontAwesomeIcon icon={faRightToBracket} /></Link>
        </section>
        <form onSubmit={handleSubmit}
        >
              <div className="salleEnfant">
                <div className="info">
                  <label htmlFor="filiere">Filière</label>
                  <select
                    className={`inputClass ${error.filiere ? ' form-control  is-invalid' : 'form-control'}`}
                    id="filiere"
                    name="filiere"
                    onChange={handleInputChange}
                    value={groupeData.filiere}
                  >
                    <option value="">Sélectionner la filière</option>
                    {listeFiliere.map((filiere) => (
                      <option key={filiere.idFiliere} value={filiere.idFiliere}>
                        {`${filiere.CodeFiliere}   ${filiere.DescriptionFiliere}`}
                      </option>
                    ))}
                  </select>
                  {/* {error.filiere && <div className="invalid-feedback">La filière ne doit pas être vide</div>} */}
                </div>
                <div className="info">
                  <label htmlFor="groupe">Groupe</label>
                  <select
                    className={` inputClass ${error.groupe ? 'form-control is-invalid' : 'form-control'}`}
                    value={groupeData.groupe}
                    onChange={handleInputChange}
                    name="groupe"
                    id="groupe"
                  >
                    <option value="">Sélectionner le groupe</option>
                    {listeGroupe.map((groupe) => (
                      <option key={groupe.idGroupe} value={groupe.idGroupe}>
                        {`${groupe.IntituleGroupe}`}
                      </option>
                    ))}
                  </select>
                  {/* {error.groupe && <div className="invalid-feedback">Le groupe ne doit pas être vide</div>} */}
                </div>
              </div>
              <div className="salleEnfant">
                <div className="info" style={{ width: "100%" }}>
                  <label htmlFor="semaine">Semaine</label>
                  <select
                    className={`inputClass ${error.semaine ? 'form-control is-invalid' : 'form-control'}`}
                    id="semaine"
                    name="semaine"
                    onChange={handleInputChange}
                    value={groupeData.semaine}
                  >
                    <option value="">Sélectionner la semaine</option>
{listeSemaine.map((semaine, index) => (
  <option key={index} value={semaine.numeroSemaine}>
    {`Semaine ${semaine.numeroSemaine} - Du ${semaine.dateCreation.substring(0, 10)}`}
  </option>
))}

                  </select>
                  {/* {error.semaine && <div className="invalid-feedback">La semaine ne doit pas être vide</div>} */}
                </div>
              </div>
              <div className="moduleEnfant buttonM">
                <button className='buttonMbut' type="submit">Rechercher</button>
              </div>
        </form>
      </div>
    )}
</>
  );
}




