import React, { useEffect, useState } from 'react';
import AnimComponent from '../../../animation/AnimComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faPlusCircle,faXmark,faChevronLeft,faChevronRight,faCheck,faFaceRollingEyes,faTrash ,faQuestionCircle,faSync,faFilePen} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import '../../../Mod.css'
import '../../../champOblig.css'
import '../../../ListeElements.css'
import { Link, useParams } from 'react-router-dom';

import { REGEX } from '../../../Regex';

export default function ModuleDisponible() {
  // État pour sker la liste des salles
  const {idFiliere}=useParams()

  const [indexCurrentElement, setIndexCurrentElement] = useState(1); // Index de la page actuelle
const [demarrage, setDemarrage] = useState(false); // Indicateur de démarrage
const [salles, setSalles] = useState([]); // Liste des salles
const [nombrePage, setNombrePage] = useState(0); // Nombre total de pages
const [nbElementPage, setNbElementPage] = useState(12); // Nombre d'éléments par page
const [maxIntervalElement, setMaxIntervalElement] = useState(12); // Index maximal des éléments affichés
const [minIntervalElement, setMinIntervalElement] = useState(0); // Index minimal des éléments affichés

const [info,setInfo]=useState({
  filiere:""
})
const [loadings, setLoadings] = useState({
  loadingSalle: false,
  loadingSupression: false,
  loadingModif: false
}); // États de chargement

const [actions, setActions] = useState({
  copieListetTri: [],
  elementRecherche: "",
}); // Actions et filtres

useEffect(() => {
  // Récupérer les données au chargement initial
  const getData = async () => {
    try {
      setLoadings((prevState) => ({ ...prevState, loadingSalle: true }));
      const reponse = await fetch(`http://localhost:3001/listeModuleDisponibleFiliere?idFiliere=${idFiliere}`);

      if (reponse.ok) {
        const data = await reponse.json();
        setSalles(data.slice(minIntervalElement, maxIntervalElement));
        setDemarrage(true);

        setActions((prevState)  =>({ ...prevState, copieListetTri: data }));
        setNombrePage(Math.ceil(data.length / nbElementPage));
      } else {
        console.log('Une erreur est survenue...');
      }
    } catch (e) {
      console.error('Une erreur est survenue...', e);
    } finally {
      setLoadings((prevState) => ({ ...prevState, loadingSalle: false }));
    }
  };

  getData();
}, []);

useEffect(() => {
  // Récupérer les données au chargement initial
  const getData = async () => {
    try {
     
      const reponse = await fetch(`http://localhost:3001/FiliereDisponibleModule?idFiliere=${idFiliere}`);

      if (reponse.ok) {
        const data = await reponse.json();

        setInfo(prevState=>({...prevState,filiere:data[0].DescriptionFiliere}))
      } else {
        console.log('Une erreur est survenue...');
      }
    } catch (e) {
      console.error('Une erreur est survenue...', e);
    } 
  };

  getData();
}, []);

const idFormateur=null;
useEffect(() => {
  // Mettre à jour les données affichées en fonction des filtres
  setSalles(actions.copieListetTri.slice(minIntervalElement, maxIntervalElement));
  setNombrePage(Math.ceil(actions.copieListetTri.length / nbElementPage));
}, [actions.copieListetTri]);

const getData = async () => {
  // Récupérer les données de l'API
  try {
    const reponse = await fetch(`http://localhost:3001/listeModuleDisponibleFiliere?idFiliere=${idFiliere}`);

    if (reponse.ok) {
      const data = await reponse.json();
      setSalles(data.slice(minIntervalElement, maxIntervalElement));
      setActions((prevState) => ({ ...prevState, copieListetTri: data }));
    } else {
      console.log('Une erreur est survenue...');
    }
  } catch (e) {
    console.error('Une erreur est survenue...', e);
  }
};

function tri(e) {
  // Fonction de tri des salles en fonction du critère sélectionné
  setSalles((prevState) => {
    const sortedSalles = [...prevState]; // Créez une copie de l'état pour éviter de modifier directement l'état

    switch (e.target.value) {
      case "":
        return actions.copieListetTri;

      case "code":
        sortedSalles.sort((a, b) => a.codeModule.localeCompare(b.codeModule));
        break;

      case "description":
        sortedSalles.sort((a, b) => a.Description.localeCompare(b.Description));
        break;

      case "masseHoraire":
        sortedSalles.sort((a, b) => a.MasseHoraire-b.MasseHoraire);
        break;

      // Ajoutez d'autres cas selon vos besoins
      default:
        // Aucun tri par défaut
        break;
    }

    return sortedSalles;
  });
}

const [loadSearch, setLoadSearch] = useState(false); // État de chargement pour la recherche

async function rechercherSalle() {
  // Fonction de recherche des salles
  try {
    setLoadSearch(true);
    await new Promise(resolve => setTimeout(resolve, 800));

    if (actions.elementRecherche !== "") {
      const nouvelle = actions.copieListetTri.filter((element) =>
        element.codeModule.toString().toLowerCase().includes(actions.elementRecherche.toString().toLowerCase()) ||
        element.MasseHoraire.toString().toLowerCase().includes(actions.elementRecherche.toString().toLowerCase()) ||
        element.Description.toString().toLowerCase().includes(actions.elementRecherche.toString().toLowerCase())
      );
      setSalles(nouvelle);
    } else {
      return;
    }
  } catch (e) {
    console.log('Erreur', e);
  } finally {
    setLoadSearch(false);
  }
}

function actualiser() {
  // Fonction pour rafraîchir la liste des salles
  setIndexCurrentElement(1);
  setSalles(actions.copieListetTri.slice(0, 12));
}

const [idSalleCourante, setIdSalleCourante] = useState(0); // ID de la salle courante pour la suppression

async function suppressionLigne(idSalle) {
  // Fonction pour supprimer une salle
  setIdSalleCourante(idSalle);
  const ok = window.confirm('Êtes-vous sûr de vouloir supprimer ?');
  if (ok) {
    try {
      setLoadings((prevState) => ({ ...prevState, loadingSuppression: true }));
      const reponse = await fetch(`http://localhost:3001/supressionAssociationModuleFiliere?idAssociation=${idSalle}`);

      if (reponse.ok) {
        const data = await reponse.json();
        getData();
        console.log(data);
      } else {
        console.log('Une erreur est survenue...');
      }
    } catch (e) {
      console.error('Une erreur est survenue...', e);
    } finally {
      setLoadings((prevState) => ({ ...prevState, loadingSuppression: false }));
    }
  }
}

const [modification, setModification] = useState(false); // Données de modification
const [showFormMod, setShowFormMod] = useState(false); // Affichage du formulaire de modification
const [confirmMode, setComfirmMode] = useState(false); // Confirmation de la modification




// Pagination
const [currentPage, setCurrentPage] = useState(1);

function PageCourante(index) {
  // Fonction pour afficher la page actuelle
  setIndexCurrentElement(index);
  let maxIntervalElement = index * nbElementPage;
  let minIntervalElement = maxIntervalElement - nbElementPage;
  setSalles(actions.copieListetTri.slice(minIntervalElement, maxIntervalElement));
  setMaxIntervalElement(maxIntervalElement);
  setMinIntervalElement(minIntervalElement);
}

function previousPages() {
  // Fonction pour afficher la page précédente
  let el1Max = maxIntervalElement - nbElementPage;
  let el1Min = minIntervalElement - nbElementPage;
  setSalles(actions.copieListetTri.slice(el1Min, el1Max));
  setMaxIntervalElement(el1Max);
  setMinIntervalElement(el1Min);
  setIndexCurrentElement(indexCurrentElement - 1);
}

function nextPages() {
  // Fonction pour afficher la page suivante
  let el1Max = maxIntervalElement + nbElementPage;
  let el1Min = minIntervalElement + nbElementPage;
  setSalles(actions.copieListetTri.slice(el1Min, el1Max));
  setMaxIntervalElement(el1Max);
  setMinIntervalElement(el1Min);
  setIndexCurrentElement(indexCurrentElement + 1);
}

return (
  // Vérifier les conditions de chargement et si les données sont disponibles
  loadings.loadingSalle || actions.copieListetTri.length === 0 && !demarrage ?
    // Afficher l'animation de chargement si les conditions sont remplies
    <span style={{ position: "relative", left: "-30px", top: "200px" }}>
      <AnimComponent padParent={20} padChild={10} borderColor={'rgba(29, 120, 120, 0.843)'} bord={3} />
    </span> :
    // Afficher la section principale si les conditions ne sont pas remplies
    <section className={`sectionListe  ${showFormMod ? "schedules" : ""}`}>
      {/* Afficher le formulaire de modification si showFormMod est vrai */}
      <div  style={{marginTop:"10px"}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
            <h3 style={{ textAlign:"left",fontStyle:'italic',fontSize:"21px"}} id='Text'>  {info.filiere}  </h3>
               <Link to={'/filieres/Modulesdefileres'} className='AjouterAuyeModule' ><FontAwesomeIcon icon={faPlusCircle} /> <span style={{margin:"0 2px"}}>Ajouter un autre module</span>    </Link>
            </div>
           <hr />
      </div>
      {/* Afficher la section de gestion de la liste */}
      <article className='articleListes'>
        {/* Menu déroulant pour le tri */}
        <div className='div1'>
          <select onChange={tri} className='select' name="" id="">
            <option value="">Trier par</option>
            <option value="code">Code  </option>
            <option value="description">Description</option>
            <option value="masseHoraire">Masse Horaire</option>
          </select>
        </div>
        {/* Champ de recherche et bouton de rafraîchissement */}
        <div className='div2'>
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input onKeyDown={(e) => {
            if (e.key === "Enter") {
              rechercherSalle()
            }
          }} value={actions.elementRecherche} onChange={(e) => setActions(prevState => ({ ...prevState, elementRecherche: e.target.value }))} className='input2' type="text" placeholder='Rechercher une salle ....' />
          <button className='actualiser' onClick={actualiser}>
            <FontAwesomeIcon icon={faSync} className='icone-refresh' />
          </button>
        </div>
      </article>

      {/* Afficher le tableau des données de la salle */}
      <table className='tables'  >
        <thead>
          <tr>
            <th>Code</th>
            <th>Description</th>
            <th>MHP</th>
            <th>MHD</th>
            <th>Masse Horaire Totale</th>
            <th >Action</th>
          </tr>
        </thead>
        <tbody style={{ position: "relative" }} className='tbody'>
          {/* Afficher les lignes de données de la salle */}
          {!loadSearch ?
            salles.length > 0 ? salles.map((salle, index) => (
              <tr key={index}>
                <td>{salle.codeModule}</td>
                <td>{salle.Description.length===0?"Aucune description":salle.Description}</td>
                <td>{salle.MHP}</td>
                <td>{salle.MHD}</td>
                <td>{salle.MasseHoraire}</td>
                <td style={{ display: "flex" }}>
                  {/* Bouton pour supprimer les données de la salle */}
                  <button style={{ width: "32px", position: "relative" }} className='button-supprimer'>
                    {!loadings.loadingSuppression ? (
                      <span onClick={() => suppressionLigne(salle.idAssociation)} className='supStyle'>
                        <FontAwesomeIcon icon={faTrash} />
                      </span>
                    ) : (
                      salle.idSalle === idSalleCourante ? (
                        <span style={{ position: "absolute", top: "5px", left: "7px" }}>
                          <AnimComponent borderColor={'blue'} bord={2} padChild={2} padParent={7} />
                        </span>
                      ) : (
                        <span onClick={() => suppressionLigne(salle.iddAssociationModule)} className='supStyle'>
                          <FontAwesomeIcon icon={faTrash} />
                        </span>
                      )
                    )}
                  </button>
                </td>
              </tr>
            )) : (<span style={{ position: "absolute", left: "45%", top: "120px" }} className='notFound'>
              <span style={{ fontSize: '30px' }}>
                <FontAwesomeIcon icon={faFaceRollingEyes} />
              </span>
              Aucune salle trouvée !
            </span>
            ) : <span style={{ position: "absolute", left: "50%", top: '150px' }}>
              <AnimComponent padParent={14} padChild={6} borderColor={'rgba(29, 120, 120, 0.843)'} bord={2} />
            </span>}
        </tbody>
      </table>

      {/* Afficher les contrôles de pagination s'il y a plus de 12 éléments */}
      {
        actions.copieListetTri.length > 12 && <div className='suivant'>
          {/* Bouton de page précédente */}
          <span style={{ display: indexCurrentElement === 1 && "none" }} onClick={previousPages} className='previous'>
            <FontAwesomeIcon icon={faChevronLeft} />
          </span>
          {/* Boutons de numéro de page */}
          {
            Array.from({ length: nombrePage }, (_, index) => index + 1).map((index, elemnt) => {
              return <button style={{ backgroundColor: indexCurrentElement === index ? "rgb(0,0,0,0.1)" : "transparent" }} className={`pages`} onClick={() => PageCourante(index)}>{index}</button>
            })
          }
          {/* Bouton de page suivante */}
          <span onClick={nextPages} style={{ display: indexCurrentElement === nombrePage && "none" }} className='next'>
            <FontAwesomeIcon icon={faChevronRight} />
          </span>
        </div>
      }

    </section>
);

}
