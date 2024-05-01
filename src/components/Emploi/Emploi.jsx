import React, { useState, useEffect, Fragment } from 'react';
import './Emploi.css';
import { Link } from 'react-router-dom';
import AnimComponent from '../animation/AnimComponent';
import { animate, motion } from 'framer-motion';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleCheck,faClock,faXmark,faMagnifyingGlass,faRightToBracket,faSquareCheck,faPen,faPenToSquare ,faStopwatch, faTrash   ,faAngleRight ,faLocationArrow, faClosedCaptioning  } from '@fortawesome/free-solid-svg-icons';


function getNumeroSemaineActuelle() {
  const now = new Date();
  const debutAnnee = new Date(now.getFullYear(), 0, 1);
  const joursPasse = Math.floor((now - debutAnnee) / (24 * 60 * 60 * 1000));
  const numeroSemaine = Math.ceil((joursPasse + debutAnnee.getDay() + 1) / 7);

  return numeroSemaine;
}

function getYear() {
  const now = new Date();
  return now.getFullYear();
}

export default function Emploi() {
  const [data, setData] = useState({
    filiere: '',
    groupe: "",
  });
 
  const [error, setError] = useState({
    filiere: false,
    groupe: false, // Ajout de capacite
  });

  const [listeFiliere, setListeFiliere] = useState([]);
  const [listeGroupe, setListeGroupe] = useState([]);
  const [listeModule, setListeModule] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

// Data base pour les seance des jours d'emplois
// Lundi: [{errorLigne:false, formateurDisponible:[],salleSeance:[],messageModi:false, formateur:0,numeroJour: 1, numerosemaine: getNumeroSemaineActuelle(), annee: getYear(), filiere: data.filiere, groupe: data.groupe, module: '', debutCours: '', finCours: '', salle: '',valider:false}],
// Mardi: [{errorLigne:false,formateurDisponible:[],salleSeance:[],messageModi:false,formateur:0,numeroJour: 2, numerosemaine: getNumeroSemaineActuelle(), annee: getYear(), filiere:data.filiere, groupe: data.groupe, module: '', debutCours: '', finCours: '', salle: '' ,valider:false}],
// Mercredi: [{errorLigne:false,formateurDisponible:[],salleSeance:[],messageModi:false,formateur:0, numeroJour: 3, numerosemaine: getNumeroSemaineActuelle(), annee: getYear(), filiere: data.filiere, groupe: data.groupe, module: '', debutCours: '', finCours: '', salle: '' ,valider:false}],
// Jeudi: [{errorLigne:false,formateurDisponible:[],salleSeance:[],messageModi:false,formateur:0,numeroJour: 4, numerosemaine: getNumeroSemaineActuelle(), annee: getYear(), filiere: data.filiere, groupe: data.groupe, module: '', debutCours: '', finCours: '', salle: '',valider:false }],
// Vendredi: [{errorLigne:false,formateurDisponible:[],salleSeance:[],messageModi:false,formateur:0,numeroJour: 5, numerosemaine: getNumeroSemaineActuelle(), annee: getYear(), filiere: data.filiere, groupe: data.groupe, module: '', debutCours: '', finCours: '', salle: '' ,valider:false}],
// Samedi: [{errorLigne:false,formateurDisponible:[],salleSeance:[],messageModi:false,formateur:0,numeroJour: 6, numerosemaine: getNumeroSemaineActuelle(), annee: getYear(), filiere: data.filiere, groupe: data.groupe, module: '', debutCours: '', finCours: '', salle: '',valider:false }],


const [demarer,setDemarer]=useState(false)
  const [emplois, setEmplois] = useState({
    Lundi: [],
    Mardi: [],
    Mercredi: [],
    Jeudi: [],
    Vendredi: [],
    Samedi: [],
  });
  // const [seanceValider,setSeanceValider]=useState()
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoadingData(true);
        const response = await fetch('http://localhost:3001/getfilieres');
        if (response.ok) {
          const data = await response.json();
          setListeFiliere(data);
          setDemarer(true)
        } else {
          console.error('Erreur lors de la récupération des données');
        }
      } catch (error) {
        console.error('Une erreur est survenue lors de la récupération des données', error);
      } finally {
        setLoadingData(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const semaine=getNumeroSemaineActuelle();
    const annee=getYear()
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/groupesSansEmplois', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({semaine:semaine,annee:annee ,filiere: !data.filiere?0:data.filiere}),
        });
        if (response.ok) {
          const data = await response.json();
          setListeGroupe(data);
        } else {
          console.error('Erreur lors de la récupération des données');
        }
      } catch (error) {
        console.error('Une erreur est survenue lors de la récupération des données', error);
      }
    };

    fetchData();
  }, [data.filiere]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/modulesFilieres', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ filiere: !data.filiere?0:data.filiere}),
        });
        if (response.ok) {
          const data = await response.json();
          setListeModule(data);
        } else {
          console.error('Erreur lors de la récupération des données');
        }
      } catch (error) {
        console.error('Une erreur est survenue lors de la récupération des données', error);
      }
    };

    fetchData();
  }, [data.filiere]);


   function verifcationjour(jour) {
    switch (jour) {
      case "Lundi":
        return 1;
      case "Mardi":
        return 2;
      case "Mercredi":
        return 3;
      case "Jeudi":
        return 4;
      case "Vendredi":
        return 5;
      case "Samedi":
        return 6;
      default:
        return 0; // or handle the default case as per your requirement
    }
  }
  
  const [messageHoraireS,setMessageHoraireS]=useState(false)
const [masseHoraire,setMasseHoraire]=useState({
        valeur:"",
        valider:null,
        encours:0,
        error1:false
})

  const ajoutAutreSeance = (jour) => {
    setEmplois((prevState) => ({
      ...prevState,
      [jour]: [
        ...prevState[jour],
        {errorLigne:false,
          formateurDisponible:[], 
          salleSeance:[],
          formateur:'',
          numeroJour: verifcationjour(jour),
          numerosemaine: getNumeroSemaineActuelle(),
          annee: getYear(),
          filiere: data.filiere,
          groupe: data.groupe,
          module: '',
          debutCours: '',
          finCours: '',
          salle: '',
          valider: false,
          masseHoraire:masseHoraire.valeur,
        },
      ],
    }));
  };
 
  const supprimerSeance = (jour, indexSeance) => {
    setEmplois((prevState) => ({
      ...prevState,
      [jour]: prevState[jour].filter((_, index) => index !== indexSeance),
    }));
  };

   console.log("Empli", emplois)
  async function getDataSalle(jour, debut, fin) {
    const numJour = verifcationjour(jour);
    const numSemaine=getNumeroSemaineActuelle();
    const numAnnee=getYear()
    try {
      const response = await fetch('http://localhost:3001/sallesDisponible', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({numSemaine:numSemaine,numAnnee:numAnnee,  numJour, debutCours: debut, finCours: fin }),
      });
  
      if (response.ok) {
        const data = await response.json();
         return data // Note: This will log the previous state, not the updated state
      } else {
        console.error('Erreur lors de la récupération des données');
      }
    } catch (error) {
      console.error('Une erreur est survenue lors de la récupération des données', error);
    }
  }

  async function getDataModuleFormateur(module) {
    try {
      const response = await fetch('http://localhost:3001/getDataModuleFormateur', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ module: module }),
      });
  
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        console.error('Erreur lors de la récupération des données');
      }
    } catch (error) {
      console.error('Une erreur est survenue lors de la récupération des données', error);
    }
  }
  
  function alert1(valeur,jour, indexelement) {
    getDataModuleFormateur(valeur).then((data) => {
      setEmplois(prevState=>({
        ...prevState,[jour]:prevState[jour].map((element,index)=>index===indexelement?{...element,formateurDisponible:data}:element)
    }))
    });
  }
  
  function alerte(jour, indexelement,debut, fin) {
    if (debut && fin) {
     
      getDataSalle(jour, debut, fin).then(data=>{
          setEmplois(prevState=>({
              ...prevState,[jour]:prevState[jour].map((element,index)=>index===indexelement?{...element,salleSeance:data}:element)
          }))
      });
    }
  }
  
  const onHandleChangeValue = (jour, indexelement, e, module) => {
    setEmplois((prevState) => ({
      ...prevState,
      [jour]: prevState[jour].map((element, index) => {
        const { value } = e.target;
        if(module==="module"){
          alert1(value,jour, indexelement)
        }

        if (module === 'debutCours') {
          alerte(jour,indexelement, value, prevState[jour][index].finCours);
        } else if (module === 'finCours') {
          alerte(jour,indexelement, prevState[jour][index].debutCours, value);
        }
        return indexelement === index ? { ...element, [module]: value } : element;
      }),
    }));
  };
  
  const onChangeGF = (e) => {
    const { name, value } = e.target;
    setData((prevState) => ({ ...prevState, [name]: value }));

    setEmplois((prevState) => ({
      ...prevState,
      Lundi: prevState.Lundi.map((element) => ({ ...element, [name]: value })),
      Mardi: prevState.Mardi.map((element) => ({ ...element, [name]: value })),
      Mercredi: prevState.Mercredi.map((element) => ({ ...element, [name]: value })),
      Jeudi: prevState.Jeudi.map((element) => ({ ...element, [name]: value })),
      Vendredi: prevState.Vendredi.map((element) => ({ ...element, [name]: value })),
      Samedi: prevState.Samedi.map((element) => ({ ...element, [name]: value })),
    }));
  };
  const validationSeance = async (indexJ, jour) => {
    const seance = emplois[jour][indexJ];
    let hasError = false;
    let hasErrorLigne = false;
  
    const REGEX = /.+/;
    Object.keys(data).forEach((fieldName) => {
      if (!REGEX.test(data[fieldName])) {
        setError((prevError) => ({ ...prevError, [fieldName]: true }));
        hasError = true;
      } else {
        setError((prevError) => ({ ...prevError, [fieldName]: false }));
      }
    });
  
    if (hasError) {
      return;
    }
  
    if (seance.module.length > 0 || seance.formateur.length > 0 ||
      seance.debutCours.length > 0 || seance.finCours.length > 0
      || seance.salle.length > 0) {
      const hasEmptyFields =
        seance.formateur.length === 0 ||
        seance.debutCours.length === 0 ||
        seance.finCours.length === 0 ||
        seance.module.length===0 ||
        seance.salle.length === 0;
  
      if (hasEmptyFields) {
        hasErrorLigne = true;
      }
    }
  
    if (hasErrorLigne) {
      setEmplois((prevState) => ({
        ...prevState,
        [jour]: prevState[jour].map((element, index) =>
          index === indexJ ? { ...element, errorLigne: true } : element
        ),
      }));
       
      setTimeout(()=>{
        setEmplois((prevState) => ({
          ...prevState,
          [jour]: prevState[jour].map((element, index) =>
            index === indexJ ? { ...element, errorLigne: false } : element
          ),
        }));

      },1000)
      return;
    }
  
    try {
      setEmplois((prevState) => ({
        ...prevState,
        [jour]: prevState[jour].map((element, index) =>
          index === indexJ ? { ...element, valider: true } : element
        ),
      }));
      const response = await fetch('http://localhost:3001/ajoutEmplois', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(seance),
      });
  
      const data = await response.json();
      if (response.ok) {
        console.log('La séance a été ajoutée avec succès.');
      } else {
        console.error('Erreur lors de l"ajout de séance .');
      }
    } catch (error) {
      console.error(
        'Une erreur est survenue lors de la récupération des données',
        error
      );
    } finally {
      setEmplois((prevState) => ({
        ...prevState,
        [jour]: prevState[jour].map((element, index) =>
          index === indexJ ? { ...element, valider: 't' } : element
        ),
      }));
    }
  };

  
  const [mouse,setMouse]=useState({
        index:undefined,
        TypeMouse:false,
        indexJourLundi:"Lundi",
        indexJourMardi:"Mardi",
        indexJourMercredi:"Mercredi",
        indexJourJeudi:"Jeudi",
        indexJourVendredi:"Vendredi",
        indexJourSamedi:"Samedi",
        TypeMouseJourLundi:true,
        TypeMouseJourMardi:true,
        TypeMouseJourMardi:true,
        TypeMouseJourMercredi:true,
        TypeMouseJourJeudi:true,
        TypeMouseJourVendredi:true,
        TypeMouseJourSamedi:true,
        
  })
  const [journee,setJournee]=useState('Lundi')
function onMouseOverFunction(valeur){
      setMouse(prevState=>({...prevState,TypeMouse:true,index:valeur}))
}
function onMouseDownFunction(){
  setMouse(prevState=>({...prevState,TypeMouse:false}))
}

function onMouseOverFunctionJour(jour){
 
  setMouse(prevState=>({...prevState,[`TypeMouseJour${jour}`]:true,[`indexJour${jour}`]:jour}))
}
function onMouseDownFunctionJour(jour){
  setJournee(jour)
  if(emplois[jour].length===0){
      return ;
  }else{
  setMouse(prevState=>({...prevState,[`TypeMouseJour${jour}`]:false,[`indexJour${jour}`]:undefined}))
  }
}

useEffect(()=>{
  if(emplois[journee].length===0){
    setMouse(prevState=>({...prevState,[`TypeMouseJour${journee}`]:true,[`indexJour${journee}`]:journee}))
  }
},[emplois])

const [isTrueValid,setIsTrueValid]=useState(false);
const [isHovered, setIsHovered] = useState(false);
const [indexErrorLigne, setIndexErrorLigne] = useState({
  Lundi: [],
  Mardi: [],
  Mercredi: [],
  Jeudi: [],
  Vendredi: [],
  Samedi: []
});
function validationFinaleEmplois() {
  Object.keys(emplois).forEach((jour) => {
    emplois[jour].forEach((element, index) => {
      if (element.valider==="t") {
        setIsTrueValid(true);
        setMasseHoraire({
          valeur:"",
          valider:null,
          encours:0,
          error:false
         })
  
      } else {
        setIsTrueValid(false);
        setIndexErrorLigne((prevState) => ({
          ...prevState,
          [jour]: [...prevState[jour], { index }]
        }));
      }
    });
  });
  
}

// console.log(indexErrorLigne)
// console.log(emplois)
useEffect(() => {
  if (isTrueValid) {
    setTimeout(() => {
      setIsTrueValid(false);
      setEmplois({
        Lundi: [],
        Mardi: [],
        Mercredi: [],
        Jeudi: [],
        Vendredi: [],
        Samedi: [],
      });
      setIndexErrorLigne({
        Lundi: [],
        Mardi: [],
        Mercredi: [],
        Jeudi: [],
        Vendredi: [],
        Samedi: []
      });

      setMouse(prevSatate=>({...prevSatate,
        indexJourLundi:"Lundi",
        indexJourMardi:"Mardi",
        indexJourMercredi:"Mercredi",
        indexJourJeudi:"Jeudi",
        indexJourVendredi:"Vendredi",
        indexJourSamedi:"Samedi",
        TypeMouseJourLundi:true,
        TypeMouseJourMardi:true,
        TypeMouseJourMardi:true,
        TypeMouseJourMercredi:true,
        TypeMouseJourJeudi:true,
        TypeMouseJourVendredi:true,
        TypeMouseJourSamedi:true, 
  }))
      setData({
        filiere: '',
        groupe: "",
      })
      setIsHovered(false);
    }, 1500);
  }
}, [isTrueValid]);


// console.log(isTrueValid)

const [validation,setValidation]=useState(false)

const [loadingModification,setLoadingModification]=useState(false)
const [loadingSupression,setLoadingSupression]=useState(false)

async function ModificationSeance(jour,indexe,seance){

  try {
    setLoadingModification(true)
    const response = await fetch('http://localhost:3001/modificationSeanceEmplois', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(seance),
    });
    if (response.ok) {
          setEmplois(prevState=>({...prevState,[jour]:prevState[jour].map((elements,index)=>index===indexe?{...elements,valider:false,messageModi:false}:elements)}))
    } else {
      console.error('Erreur lors de la modification des données');
    }
  } catch (error) {
    console.error('Une erreur est survenue lors de la modifction des données', error);
  }
  finally{
    setLoadingModification(false)
  }
}

function ModificationMessageMod(jour,indexe){
  setEmplois(prevState=>({...prevState,[jour]:prevState[jour].map((elements,index)=>index===indexe?{...elements,messageModi:true}:elements)}))
}

async function SuppressionSeance(jour,indexe,seance){
  try {
    setLoadingSupression(true)
    const response = await fetch('http://localhost:3001/modificationSeanceEmplois', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(seance),
    });
    if (response.ok) {
          // setEmplois(prevState=>({...prevState,[jour]:prevState[jour].map((elements,index)=>index===indexe?{...elements,valider:false,messageModi:false}:elements)}))
          setEmplois(prevState=>({...prevState,[jour]:prevState[jour].filter((_,index)=>index!==indexe)}))
    } else {
      console.error('Erreur lors de la modification des données');
    }
  } catch (error) {
    console.error('Une erreur est survenue lors de la modifction des données', error);
  }
  finally{
    setLoadingSupression(false)
  }
}



const [messHoraireValider,setMessHoraireValider]=useState(false)

const [isTrueTime,setIsTrueTime]=useState(false)

function ajoutValeurHoraire(){
        if(/^\d+|\d+\.\d+$/.test(masseHoraire.valeur)){
          setMessageHoraireS(false)
          setIsTrueTime(true)
         setMasseHoraire(prevState=>({...prevState,valider:true,error1:false}))
        }
        else{
          setIsTrueTime(false)
          setMasseHoraire(prevState=>({...prevState,error1:true}))
        }

}

function  affichageMessageHoraireOver(){
  setMessHoraireValider(true)
  setTimeout(()=>{
    setMessHoraireValider(false)
  },10000)
}
useEffect(() => {



  const calculeJours=(jour)=>{
    const lundiHeures = emplois[jour].map((element) => {
      return parseInt(element.finCours.substring(0, 2)) - parseInt(element.debutCours.substring(0, 2));
  }).reduce((debut, increment) => debut + increment, 0);

  const lundiMinutes = emplois[jour].map((element) => {
    return parseInt(element.finCours.substring(3, 5)) - parseInt(element.debutCours.substring(3, 5));
}).reduce((debut, increment) => debut + increment, 0);

  return (lundiHeures*60)+lundiMinutes
  
  }
  
  const daysOfWeek = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

  const totale=daysOfWeek.reduce((initialValue,day)=>{
      let totales=!calculeJours(day)?0:calculeJours(day)
      return initialValue+totales
  },0)
setMasseHoraire((prevState) => ({ ...prevState, encours: totale/60}));
  
}, [emplois]);


  return (
    <section className={`schedule-container ${isTrueValid || messageHoraireS?"schedulesEmplis":""}`}>
      <span  className="spanEmplois">
        {loadingData || listeFiliere.length===0&&!demarer ? (
          <span style={{ position: 'absolute', top: '32%', left: '50%' }}>
            <AnimComponent padParent={20} padChild={10} borderColor={'rgba(29, 120, 120, 0.843)'} bord={3} />
          </span>
        ) : (
          <>
            <div  className="schedule-header">
            {parseInt(masseHoraire.valeur)-parseInt(masseHoraire.encours)<0&&<motion.div initial={{opacity:0,x:-30}} animate={{opacity:1,x:0}} className='AlterMesage' >
              <strong>Attention :</strong> Vous avez atteint le maximum d'heures autorisées pour cette semaine.
              </motion.div>
            }
              
              <div className="creationE">
              <div>
               <Link style={{color:"rgba(29, 120, 120, 0.843)",position:"relative", top:"-13px", fontSize:"18px"}} to={'/'}><FontAwesomeIcon icon={faRightToBracket} /></Link>
                <h2 id='salleText'>Espace Emploi</h2>
              </div>
                <div className="rechercheEmplois">
                <span className="creationS">
                  <span className="spanCreation">
                    <span>Semaine</span> <span>{getNumeroSemaineActuelle().toLocaleString().padStart(2, '0')}</span>
                  </span>
                  <span className="spanCreation">
                    <span>Année</span> <span>{getYear()}</span>
                  </span>
                </span>
                <Link style={{textDecoration:"none",color:"rgba(29, 120, 120, 0.957)"}} to='/rechercherEmploideGroupe'>
                <div  className='div2' style={{width:"auto",padding:"4px 10px "}}>
          <span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </span>
          <input  onKeyDown={(e) => {
            // if (e.key === "Enter") {
            //   rechercherSalle()
            // }
          }}  readOnly className='input2' type="text" placeholder='Rechercher un emploi  ....' />
        </div>
        </Link>
                </div>
                
              </div>
              <hr />
            </div>
            <div className="schedule-filters">
             
            {isTrueTime&&<span  className='AjouterAuyeModuleS' onClick={() => { setValidation(false); validationFinaleEmplois(); }}>
                 
              <span style={{margin:"0 3px"}}>
              <FontAwesomeIcon icon={faSquareCheck} />  
                </span><span style={{margin:"0 3px"}}>
                   valider
                </span>
           </span>}
             
              <div className="filter" style={{width:"23%"}}>
                     <motion.table 
                     initial={{opacity:0}}
                     animate={{opacity:messHoraireValider?1:0,x:messHoraireValider?90:0}}
                     className='messageHeuresTables'>
                            <thead>
                                 <tr>
                                     <th>Masse horaire de semaine</th>
                                     <th>Heures  en cours</th>
                                     <th>Durée restante</th>
                                 </tr>
                            </thead>
                            <tbody>
                                  <tr>
                                     <td>{Math.floor(masseHoraire.valeur)} Heures {
                                           masseHoraire.valeur-Math.floor(masseHoraire.valeur)>0&&"et"
                                     } { masseHoraire.valeur-Math.floor(masseHoraire.valeur)>0&&(masseHoraire.valeur-Math.floor(masseHoraire.valeur))*60} {
                                         masseHoraire.valeur-Math.floor(masseHoraire.valeur)>0&&"Minutes"
                                     }</td>
                                     <td style={{color:"blue"}}>
                                     {Math.floor(masseHoraire.encours)} Heures 
                                     {masseHoraire.encours-Math.floor(masseHoraire.encours)>0&&" et "}
                                     
                                     { masseHoraire.encours-Math.floor(masseHoraire.encours)>0&&(masseHoraire.encours-Math.floor(masseHoraire.encours))*60} {
                                         masseHoraire.encours-Math.floor(masseHoraire.encours)>0&&" Minutes"
                                     }
                                     </td>
                                     <td style={{color:"red"}}>
                                     {Math.floor(parseFloat(masseHoraire.valeur)-parseFloat(masseHoraire.encours))} Heures 
                                     {parseFloat(masseHoraire.valeur)-parseFloat(masseHoraire.encours)-Math.floor(parseFloat(masseHoraire.valeur)-parseFloat(masseHoraire.encours))>0&&" et "}
                                    
                                     { parseFloat(masseHoraire.valeur)-parseFloat(masseHoraire.encours)-Math.floor(parseFloat(masseHoraire.valeur)-parseFloat(masseHoraire.encours))>0&&(parseFloat(masseHoraire.valeur)-parseFloat(masseHoraire.encours)-Math.floor(parseFloat(masseHoraire.valeur)-parseFloat(masseHoraire.encours)))*60} {
                                         parseFloat(masseHoraire.valeur)-parseFloat(masseHoraire.encours)-Math.floor(parseFloat(masseHoraire.valeur)-parseFloat(masseHoraire.encours))>0&&" Minutes"
                                     }
                                    </td>
                                  </tr>
                            </tbody>
                     </motion.table>

                      {
                        masseHoraire.valider?<span onMouseOver={affichageMessageHoraireOver}   className='spanFilters'>
                            <FontAwesomeIcon icon={faStopwatch} />  {masseHoraire.valeur} Heures
                       </span>: <span onClick={()=>setMessageHoraireS(true)} className='spanFilters '>
                               <FontAwesomeIcon icon={faClock} /> Masse Haraire semaine
                            </span>
                      }
                      
                       <motion.article  style={{display:!messageHoraireS&&"none"}} initial={{opacity:0,y:-130,scale:0.8}} animate={{opacity:messageHoraireS?1:0,y:messageHoraireS?0:-130,scale:messageHoraireS&&1}} className='nombreHeures'>
                    
                           <div className='masseHoraireDiv'>

                           <input type="text" className={!masseHoraire.error1?'input form-control':'input form-control is-invalid'} value={masseHoraire.valeur} onChange={(e)=>setMasseHoraire(prevState=>({...prevState,valeur:e.target.value}))}  placeholder="Nombre d'heures de cours de la semaine pour le groupe" />
                          {masseHoraire.error1&&<div style={{marginLeft:"4px",margin:"5px 0",fontStyle:"italic", color:"red"}} className="">Vous devriez donner un entier ou nombre decimal </div>}
                           </div>
                           <div>
                               <button className='buttonsMasseH'  onClick={()=>{ajoutValeurHoraire()}}>Ajouter</button>
                           </div>
                      { <span onClick={()=>{setMessageHoraireS(false)
                          ;          setMasseHoraire(prevState=>({...prevState,error1:false}))
                        }} className='cancel'><FontAwesomeIcon icon={faXmark} /></span>}
                       </motion.article>
              </div>

              <div className="filter">
                <select 
                className={`infoFiliereGroupe    ${error.filiere ? 'form-control is-invalid' : ''}`}
                value={data.filiere} onChange={onChangeGF} name="filiere" id="filiere">
                 
                  <option value="">Sélectionner la filière</option>
                  {listeFiliere.map((filiere) => (
                    <option key={filiere.idFiliere} value={filiere.idFiliere}>
                      {`${filiere.CodeFiliere}   ${filiere.DescriptionFiliere}`}
                    </option>
                  ))}
                </select>
              </div>
              <div className="filter">
                <select
  className={`infoFiliereGroupe  ${error.groupe ? 'form-control is-invalid' : ''}`}
  value={data.groupe}
  onChange={onChangeGF}
  name="groupe"
  id="groupe"
>
  <option value="">Sélectionner le groupe </option>
  {listeGroupe.length === 0 ? (
    <option value="">
   Tous les groupes de cette filière ont déjà leur emploi du temps pour cette semaine
    </option>
  ) : (
    listeGroupe.map((groupe) => (
      <option key={groupe.idGroupe} value={groupe.idGroupe}>
        {`${groupe.IntituleGroupe}`}
      </option>
    ))
  )}
</select>

              </div>
            </div>
            <table className="schedule-table">
              <thead >
                <tr style={{marginBottom:"40px"}}>
                  <th>Heure/Jour</th>
                  <th>Module</th>
                  <th>Formateur</th>
                  <th>Début</th>
                  <th>Fin</th>
                  <th>Salle Disponible</th>
                  <th>valider seance</th>
                </tr>
                <tr style={{border:"none"}}>
                   <td></td>
                </tr>
              </thead>
              <tbody>
                {Object.keys(emplois).map((jour, index) => (
                  <Fragment key={jour}>
                    {emplois[jour].map((emploi, indexe) => (
                      <motion.tr 
                      style={{
                        borderBottom: indexErrorLigne[jour].some((elt) => elt.index === indexe) ? "1px solid red" : null,

                      }}
                      className={emploi.valider==="t"?"validerTRsucress":""}  initial={{opacity:0}} animate={{opacity:1}} key={`${jour}-${indexe}`}>
                        <td>
                             <input style={{boxShadow:"none"}} className='champsSaisieEmplois' type="text"  value={mouse.index===`${jour}-${indexe}`&&mouse.TypeMouse?"":jour} readOnly />
                        </td>
                     
                        <td>
                          <select
                            name="module"
                            style={{boxShadow:"none"}}
                            className='champsSaisieEmplois'
                            onChange={(e) => onHandleChangeValue(jour, indexe, e, 'module')}
                            id="module"
                            value={emploi.module}
                          >
                            <option value="">Sélectionner le module</option>
                            {listeModule.map((module) => (
                              <option key={Math.random()*10000+1} value={module.idModule}>
                                {`${module.codeModule} ${module.Description} `}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td>
                          <select
                           style={{boxShadow:"none"}}
                          className='champsSaisieEmplois'
                            name="formateur"
                            onChange={(e) => onHandleChangeValue(jour, indexe, e, 'formateur')}
                            id="formateur"
                            value={emploi.formateur}
                          >
                            <option value="">Sélectionner le formateur</option>
                            {emploi.formateurDisponible.map((module) => (
                              <option key={Math.random()*10000+1} value={module.idFormateur}>
                                {`${module.nom} ${module.prenom}  `}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td>
                          <input
                           style={{boxShadow:"none"}}
                          className='champsSaisieEmplois'
                            onChange={(e) => onHandleChangeValue(jour, indexe, e, 'debutCours')}
                            type="time"
                            name="debutCours"
                            value={emploi.debutCours}
                          />
                        </td>
                        <td>
                          <input
                           style={{boxShadow:"none"}}
                          className='champsSaisieEmplois'
                            type="time"
                            name="finCours"
                            value={emploi.finCours}
                            onChange={(e) => onHandleChangeValue(jour, indexe, e, 'finCours')}
                          />
                        </td>
                        <td>
                          <select
                           style={{boxShadow:"none"}}
                          className='champsSaisieEmplois'
                            name={`salle`}
                            id={`salle`}
                            value={emploi.salle}
                            onChange={(e) => onHandleChangeValue(jour, indexe, e, 'salle')}
                          >

                            <option value="">Sélectionnez une salle</option>
                            {emploi.salleSeance.map((salle) => (
                              <option key={Math.random()*10000+1} value={salle.idSalle}>
                                  {`salle:${salle.nomSalle}   capacité:${salle.capaciteSalle} `}
                              </option>
                            )
                            )}
                          </select>
                        </td>
                        <td style={{textAlign:"center"}}>
                            
                        <span onClick={() => validationSeance(indexe, jour)}>
  {!emploi.valider ? (
    <span className={`valideInput ${isHovered&&'hoverButton'}`}   onMouseOver={() => setIsHovered(true)}
    onMouseOut={() => setIsHovered(false)} >
    <FontAwesomeIcon icon={faLocationArrow} className="icone-validation" />
  </span>
    
  ) :(
    emploi.valider === "t" ? (
      <span style={{backgroundColor:"transparent",color:"#1c4f85d5",fontSize:"18px"}} className='valideInput'>
    <FontAwesomeIcon icon={faCircleCheck} className="icone-validation" />
  </span>
    ) : (
      <span style={{ position: "relative", top: "-13px", left: "60px" }}>
      <AnimComponent borderColor={'blue'} bord={2} padChild={3} padParent={9} />
    </span>
    )
  )}
   
</span>


              
                        
                        <>
                            <button onMouseLeave={onMouseDownFunction} onMouseOver={()=>onMouseOverFunction(`${jour}-${indexe}`)} className='moinEmplois' style={{ display:  emploi.valider==="t" && 'none' }} onClick={() => supprimerSeance(jour, indexe)}>
                              -
                             
                            </button>
                            {mouse.index===`${jour}-${indexe}`&&mouse.TypeMouse&&<motion.span initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}}  className="supprimerSeance">réduire la séance</motion.span> } 
                            </>
                          
                        

<motion.span initial={{opacity:0}} animate={{opacity:1}} className={`validerTRsucressSpan ${emploi.messageModi&&"validerTRsucressSpanDisplay"}`} style={{alignItems:"center",justifyContent:"flex-end"}}   >
       <span  style={{marginRight:"16px"}}>
       {loadingModification?<span style={{marginLeft:"20px",position:"relative",top:"3px"}}><AnimComponent borderColor={'blue'} bord={2} padChild={2} padParent={7} /></span> :
                <span className='modifier' onClick={()=>ModificationSeance(jour,indexe,emploi)}> <FontAwesomeIcon icon={faPen} /></span>
       }
       </span>
       <span style={{marginRight:"45px"}}>
      {loadingSupression?<span  style={{marginLeft:"22px",position:"relative",top:"3px"}}><AnimComponent borderColor={'blue'} bord={2} padChild={2} padParent={7} /></span> :
           <span className='supprimer' onClick={()=>SuppressionSeance(jour,indexe,emploi)}> <FontAwesomeIcon icon={faTrash } /></span> 
      }
      </span>
      
  </motion.span>  
{
  emploi.valider==="t"&&<span onClick={()=>ModificationMessageMod(jour,indexe)} style={{display:emploi.messageModi&&"none"}}  className="messageModifi">
  <FontAwesomeIcon icon={faPenToSquare } className="icone-validation" />
  </span>
}
{
     emploi.errorLigne && (
      <motion.span initial={{ opacity: 0 }}  animate={{ opacity:1 }} className='errorLigne'>
        <motion.span initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 10 }}>
          Veuillez remplir tous les champs correctement.
        </motion.span>
      </motion.span>)
}
    </td>
                  
                      </motion.tr>
                    ))}
                    <span className='styleAjoutSEance' style={{display:"block", position:'relative'}}>
                      <button style={{backgroundColor:emplois[jour].length > 2&&"red",color:emplois[jour].length > 2&&"#ffffff"}}    disabled={emplois[jour].length > 2&&true }  onMouseLeave={()=>onMouseDownFunctionJour(jour)} onMouseOver={()=>onMouseOverFunctionJour(`${jour}`)} className='plusSeance' onClick={() => ajoutAutreSeance(jour)}>+</button>
                    {mouse[`indexJour${jour}`]===`${jour}`&&mouse[`TypeMouseJour${jour}`]&&<motion.span initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}}  className="AjouterSeance">Ajouter une autre séance pour le {jour}</motion.span> } 
                    </span>
                  </Fragment>
                ))}
              </tbody>
            </table>
          </>
        )}
      </span>
       <motion.article
      initial={{ x:-100, opacity: 1, scale: 0.9 }}
      animate={{x:isTrueValid?0:-100, opacity: isTrueValid ? 1 : 0, scale: isTrueValid ? 1 : 0.9 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className='validationFinalEmplois'
      style={{display:!isTrueValid&&"none"}}
    >
              {isTrueValid&&<AnimComponent padParent={13} padChild={4} borderColor={'rgba(29, 120, 120, 0.843)'} bord={3} />}
    </motion.article>
    </section>
  );
}
