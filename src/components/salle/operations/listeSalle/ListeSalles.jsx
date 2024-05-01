import React, { useEffect, useState } from 'react';
import AnimComponent from '../../../animation/AnimComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass,faXmark,faChevronLeft,faChevronRight,faCheck,faFaceRollingEyes,faTrash ,faQuestionCircle,faSync,faFilePen} from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import '../../../Mod.css'
import '../../../champOblig.css'
import '../../../ListeElements.css'
import { REGEX } from '../../../Regex';


export default function ListeSalles() {
  // État pour sker la liste des salles
  

  const [indexCurrentElement, setIndexCurrentElement] = useState(1); // Index de la page actuelle
const [demarrage, setDemarrage] = useState(false); // Indicateur de démarrage
const [salles, setSalles] = useState([]); // Liste des salles
const [nombrePage, setNombrePage] = useState(0); // Nombre total de pages
const [nbElementPage, setNbElementPage] = useState(12); // Nombre d'éléments par page
const [maxIntervalElement, setMaxIntervalElement] = useState(12); // Index maximal des éléments affichés
const [minIntervalElement, setMinIntervalElement] = useState(0); // Index minimal des éléments affichés

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
      const reponse = await fetch('http://localhost:3001/listeSalles');

      if (reponse.ok) {
        const data = await reponse.json();
        setSalles(data.slice(minIntervalElement, maxIntervalElement));
        setDemarrage(true);
        setActions((prevState) => ({ ...prevState, copieListetTri: data }));
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
  // Mettre à jour les données affichées en fonction des filtres
  setSalles(actions.copieListetTri.slice(minIntervalElement, maxIntervalElement));
  setNombrePage(Math.ceil(actions.copieListetTri.length / nbElementPage));
}, [actions.copieListetTri]);

const getData = async () => {
  // Récupérer les données de l'API
  try {
    const reponse = await fetch('http://localhost:3001/listeSalles');

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

      case "nom":
        sortedSalles.sort((a, b) => a.nomSalle.localeCompare(b.nomSalle));
        break;

      case "capacite":
        sortedSalles.sort((a, b) => a.capaciteSalle - b.capaciteSalle);
        break;

      case "emplacement":
        sortedSalles.sort((a, b) => a.emplacement.localeCompare(b.emplacement));
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
        element.nomSalle.toString().toLowerCase().includes(actions.elementRecherche.toString().toLowerCase()) ||
        element.capaciteSalle.toString().toLowerCase().includes(actions.elementRecherche.toString().toLowerCase()) ||
        element.emplacement.toString().toLowerCase().includes(actions.elementRecherche.toString().toLowerCase())
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
      const reponse = await fetch(`http://localhost:3001/supressioSalles?idSalle=${idSalle}`);

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

function modifcationElements(element) {
  // Fonction pour pré-remplir le formulaire de modification
  setModification(element);
  setShowFormMod(true);
}

const [error, setError] = useState({
  nom: false,
  capaciteSalle: false,
  // Ajout de capacite
}); // Erreurs de validation pour le formulaire de modification

async function modifcationElementBaseDedonees(e) {
  // Fonction pour modifier les données d'une salle
  e.preventDefault();

  let hasError = false;

  const objet = {
    nom: modification.nomSalle,
    capacite: modification.capaciteSalle
  };

  Object.keys(objet).slice(0, 2).forEach((fieldName) => {
    if (!REGEX.test(objet[fieldName])) {
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
    setLoadings((prevState) => ({ ...prevState, loadingModif: true }));
    const reponse = await fetch('http://localhost:3001/ModicationSalles', {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(modification)

    });

    if (reponse.ok) {
      const data = await reponse.json();
      getData();
      setComfirmMode(true);

      setTimeout(() => {
        setShowFormMod(false);
        setComfirmMode(false);
      }, 500);
      console.log(data);

    } else {
      console.log('Une erreur est survenue...');
    }
  } catch (e) {
    console.error('Une erreur est survenue...', e);
  } finally {
    setLoadings((prevState) => ({ ...prevState, loadingModif: false }));
  }
}

function canceleModifcation() {
  // Annuler la modification en masquant le formulaire
  setShowFormMod(false);
}

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
      {
        showFormMod && <motion.article
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: showFormMod ? 1 : 0, scale: showFormMod ? 1 : 0.9 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}

          className='modifcationElement'>
          {/* Fermer le formulaire de modification au clic */}
          <span onClick={canceleModifcation} className='cancel'><FontAwesomeIcon icon={faXmark} /></span>
          {/* Formulaire de modification des données */}
          <form action="" onSubmit={modifcationElementBaseDedonees}>
            <div className="salleEnfantmod">
              {/* Champ pour le nom de la salle */}
              <div className="infoMod">
                <label htmlFor="nom">Nom de la Salle <span className='champsO'>*</span></label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  className={error.nom ? 'form-control is-invalid' : 'inputClass form-control'}
                  value={modification.nomSalle}
                  onChange={(e) => setModification(prevState => ({ ...prevState, nomSalle: e.target.value }))}
                  placeholder="Nom de la salle"
                />
              </div>
              {/* Champ pour la capacité de la salle */}
              <div className="infoMod">
                <label htmlFor="capacite">Capacité de la Salle <span className='champsO'>*</span></label>
                <input
                  type="number"
                  id="capacite"
                  name="capacite"
                  className={error.capacite ? 'form-control is-invalid' : 'inputClass form-control'}
                  value={modification.capaciteSalle}
                  min={25}
                  onChange={(e) => setModification(prevState => ({ ...prevState, capaciteSalle: e.target.value }))}
                  placeholder="Capacité de la salle supérieure à 25"
                />
              </div>
            </div>
            {/* Zone de texte pour l'emplacement de la salle */}
            <div className="salleEnfantmod">
              <div className="infoMod infoModZ">
                <label htmlFor="capacite">Capacité de la Salle</label>
                <textarea
                  onChange={(e) => setModification(prevState => ({ ...prevState, emplacement: e.target.value }))}
                  value={modification.emplacement} placeholder='Emplacement ....' className='form-control textareamod' name="" id="" cols="30" rows="10"></textarea>
              </div>
            </div>
            {/* Bouton pour soumettre le formulaire de modification */}
            <div className="buttonM">
              <button
                disabled={loadings.loadingModif && true}
                type="submit"
                className='buttonMbut'
              >
                {loadings.loadingModif ? <AnimComponent padParent={11} padChild={4} borderColor={'#ffffff'} bord={2} /> :
                  confirmMode ? <span>
                    <FontAwesomeIcon icon={faCheck} />
                  </span> : "modifier"
                }
              </button>
            </div>
          </form>
        </motion.article>
      }

      {/* Afficher la section de gestion de la liste */}
      <article className='articleListes'>
        {/* Menu déroulant pour le tri */}
        <div className='div1'>
          <select onChange={tri} className='select' name="" id="">
            <option value="">Trier par</option>
            <option value="nom">Nom </option>
            <option value="capacite">Capacité</option>
            <option value="emplacement">Emplacement</option>
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
            <th>Nom de la Salle</th>
            <th>Capacité</th>
            <th>Emplacement</th>
            <th colSpan={"2"}>Action</th>
          </tr>
        </thead>
        <tbody style={{ position: "relative" }} className='tbody'>
          {/* Afficher les lignes de données de la salle */}
          {!loadSearch ?
            salles.length > 0 ? salles.map((salle, index) => (
              <tr key={index}>
                <td>{salle.nomSalle}</td>
                <td>{salle.capaciteSalle}</td>
                <td>{salle.emplacement.length===0?"Aucun emplacement":salle.emplacement}</td>
                <td style={{ display: "flex" }}>
                  {/* Bouton pour supprimer les données de la salle */}
                  <button style={{ width: "32px", position: "relative" }} className='button-supprimer'>
                    {!loadings.loadingSuppression ? (
                      <span onClick={() => suppressionLigne(salle.idSalle)} className='supStyle'>
                        <FontAwesomeIcon icon={faTrash} />
                      </span>
                    ) : (
                      salle.idSalle === idSalleCourante ? (
                        <span style={{ position: "absolute", top: "5px", left: "7px" }}>
                          <AnimComponent borderColor={'blue'} bord={2} padChild={2} padParent={7} />
                        </span>
                      ) : (
                        <span onClick={() => suppressionLigne(salle.idSalle)} className='supStyle'>
                          <FontAwesomeIcon icon={faTrash} />
                        </span>
                      )
                    )}
                  </button>
                  {/* Bouton pour modifier les données de la salle */}
                  <button onClick={() => modifcationElements(salle)} className='button-modifier'>
                    <FontAwesomeIcon icon={faFilePen} />
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
