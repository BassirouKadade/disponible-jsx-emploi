import React, { useEffect, useState } from 'react';
import './Consultation.css';
import { useNavigate, useParams } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusMinus,faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import AnimComponent from '../../animation/AnimComponent';
import { generateTd2 } from './generateTd2';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Consultation = () => {
  const navigate = useNavigate();
  const { getData } = useParams();
  const [demarer,setDemarer]=useState(false)
  const getDataDecoded = JSON.parse(decodeURIComponent(getData));
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [emplois, setEmplois] = useState([]);
  const [menu, setMenu] = useState(false);
  function getYear() {
    const now = new Date();
    return now.getFullYear();
  }
  const {filiere,groupe}=getDataDecoded;

  const [datass,setDatass]=useState({
         groupe:[],
  })


  const [masseHoraires,setMasseHoraire]=useState({
    masseHoraire:""
})

  const globalEmplois = {
    Lundi: emplois.filter((element) => element.numeroJour === 1),
    Mardi: emplois.filter((element) => element.numeroJour === 2),
    Mercredi: emplois.filter((element) => element.numeroJour === 3),
    Jeudi: emplois.filter((element) => element.numeroJour === 4),
    Vendredi: emplois.filter((element) => element.numeroJour === 5),
    Samedi: emplois.filter((element) => element.numeroJour === 6),
  };
  const [totaleValeurs,setTotaleValeurs]=useState(({
    MHP:0,
    MHD:0,
    MTOT:0
}))
  
  const [moduleFiliere,setModuleFiliere]=useState([])

  useEffect(() => {
    const getDatas = async () => {
      try {
        setLoadingSubmit(true);
        const response = await fetch(`http://localhost:3001/getModuleFiliere?idFiliere=${filiere}`)
        if (response.ok) {
          const data = await response.json();
          setModuleFiliere(data)
          console.log(data)
          const MHPS=data.reduce((initial,valeur)=>initial+parseInt(valeur.MHP),0)
          const MHDS=data.reduce((initial,valeur)=>initial+parseInt(valeur.MHD),0)
          const MTOTS=data.reduce((initial,valeur)=>initial+parseInt(valeur.MasseHoraire),0)

          setTotaleValeurs(prevState=>({...prevState,MHP:MHPS,MHD:MHDS,MTOT:MTOTS}))

          setDemarer(true)
        } else {
          console.error('Erreur de serveur lors de la soumission du formulaire');
        }
      } catch (error) {
        console.error('Erreur lors de la soumission du formulaire', error);
      } finally {
        setLoadingSubmit(false);
      }
    };
    getDatas();
  }, []);

 
 
  useEffect(() => {
    const getDatas = async () => {
      try {
        setLoadingSubmit(true);
        const response = await fetch(`http://localhost:3001/recuperDescriptionGroupe?idGroupe=${groupe}`)
        if (response.ok) {
          const data = await response.json();
          setDatass(prevSate=>({...prevSate,groupe:data}));
          setDemarer(true)
        } else {
          console.error('Erreur de serveur lors de la soumission du formulaire');
        }
      } catch (error) {
        console.error('Erreur lors de la soumission du formulaire', error);
      } finally {
        setLoadingSubmit(false);
      }
    };
    getDatas();
  }, []);

 
 
  useEffect(() => {
    const getDatas = async () => {
      try {
        setLoadingSubmit(true);
        const response = await fetch('http://localhost:3001/recuperationEmplois', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(getDataDecoded),
        });

        if (response.ok) {
          const data = await response.json();
          setEmplois(data);
          setDemarer(true)
          setMasseHoraire(data.find(element=>parseFloat(element.masseHoraire)!==null))

        } else {
          console.error('Erreur de serveur lors de la soumission du formulaire');
        }
      } catch (error) {
        console.error('Erreur lors de la soumission du formulaire', error);
      } finally {
        setLoadingSubmit(false);
      }
    };
    getDatas();
  }, []);
 
  const downloadPDF = async () => {
    const element = document.getElementById('tableauEmplois');
    try {
      const canvas = await html2canvas(element);
  
      // Create a new jsPDF instance
      const pdf = new jsPDF({ unit: 'mm', format: 'a3', orientation: 'landscape' });
  
      // Add the canvas to the PDF
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 25, 25, 352, 230);
  
      // Save or download the PDF
      pdf.save('Emplois_du_Temps.pdf');
  
      // You can also trigger printing if needed
      // pdf.autoPrint();
  
      // Clean up if necessary
      document.body.removeChild(canvas);
    } catch (error) {
      console.error('Erreur lors de la génération du PDF :', error);
    }
  };
  
  

  const printDocument = () => {
    window.print();
  };

 

  
  return (
    <>
      {loadingSubmit || !demarer&&emplois.length===0? (
        <span style={{ position: 'absolute', top: '32%', left: '50%' }}>
          <AnimComponent padParent={20} padChild={10} borderColor={'rgba(29, 120, 120, 0.843)'} bord={3} />
        </span>
      ) : (
        <section  id="tableauEmplois"  style={{   backgroundColor: "#ffffff"}} className="consultationParent">

           {/* Resalisater de l'ente de l'emplo du temps ................ */}
                   <section className='EnteteParent'>
                             <div className='EnteteEnfant1'>
                                    <h3 className='EnteteEnfant1h3'>Emploi du temps de la section</h3>
                                    <p className='EnteteEnfant1h3p'>Au titre de l'année {getYear()-1}/{getYear()}</p>   
                             </div>
                           
                             <div className='EnteteEnfant2'>
                                    <div className="description1">
                                            <h3 className='description1h3' >DRCS/CFP-BB/ISTA-BZ</h3>
                                            {datass.groupe.length>0&&<h4 className='description1h4'>Filiere: {datass.groupe[0].CodeFiliere} / { parseInt(datass.groupe[0].NiveauFiliere)===1?"1 ere Année":"2 eme Année"}</h4>}
                                            <h4  className='description1h4'>Niveau : TS</h4>
                                           
                                            <h4 className='description1h4'>Mode de formation : Résidentiel</h4>
                                    </div> 
                                    <div className="description1 description2">
                                            <h3 className='description1h3'>Année de formation :  {getYear()-1}/{getYear()}</h3>
                                            <h4 className='description1h4'>Masse horaire : {masseHoraires.masseHoraire} Heures</h4>
                                            {datass.groupe.length>0&& <h4 className='description1h4'>Groupe : {datass.groupe[0].IntituleGroupe.toUpperCase()} </h4> }
                                    </div>
                             </div>
                   </section>

            {/* Resalisater de l'entete de l'emplo du temps ................*/}

          <div style={{ opacity: menu ? 0 : 1 }} className='ButtonMenuEmplois'>
            <span style={{ cursor: "pointer", fontSize: "18px" }} onClick={() => setMenu(prevState => true)}>
              <FontAwesomeIcon icon={faPlusMinus} />
            </span>
          </div>
          <motion.div
            initial={{ opacity: 1, y: -380 }}
            animate={{ y: menu ? 0 : -380 }}
            className='headerButtons'
            style={{zIndex:100000000000000000}}
          >
            <div className='headerButtonsSpan'><span style={{ cursor: "pointer" }} onClick={() => setMenu(prevState => false)}>X</span></div>
            <ul className={`headerButtonsUL s`}>
              <li><button onClick={() => navigate('/rechercherEmploideGroupe')}>Recherche d'emploi</button></li>
              <li>
              <button onClick={() => { setTimeout(() => { downloadPDF(); }, 1000); setMenu(false); }}>
  Télécharger en PDF
                 </button>

              </li>
              <li><button onClick={()=>{setTimeout(printDocument,500);setMenu(false)}}>Imprimer</button></li>
              <li><button onClick={()=>{navigate('/emplois');setMenu(false)}}>Créer un emploi</button></li>
              <li><button onClick={()=>{navigate('/');setMenu(false)}}> <FontAwesomeIcon icon={faRightToBracket} /></button></li>
            </ul>
          </motion.div>
                <table  className="tableauEmplois" border="1px">
  <thead>
    <tr>
      <th>Heure/Jour</th>
      <th>8h30 - 9h30</th>
      <th>9h30 - 10h30</th>
      <th>10h30 - 11h30</th>
      <th>11h30 - 12h30</th>
      <th>12h30 - 13h30</th>
      <th>13h30 - 14h30</th>
      <th>14h30 - 15h30</th>
      <th>15h30 - 16h30</th>
      <th>16h30 - 17h30</th>
      <th>17h30 - 18h30</th>
    </tr>
  </thead>
  <tbody >
    <tr>
    </tr>
    {Object.keys(globalEmplois).map((emploi, indexx) => (
  <tr  style={{ color: '#000000', fontSize: '17px' }} key={indexx} >
    <td style={{padding:"0 3px"}}>{emploi}</td>
    {globalEmplois[emploi].map((element, index) => (
        generateTd2(globalEmplois[emploi], parseInt(element.debutCours.substring(0,2)),
        parseInt(element.finCours.substring(0,2)),element)
    ))}
  </tr>
))}
  </tbody>
</table>
  <table className='tableauHead'>
     <thead>
          <tr className='tableauHeadtr'>
                <th>Code Module</th>
                <th>Module</th>
                <th>MHP Totale</th>
                <th>MHD Totale</th>
                <th>MHT</th>

          </tr>
    </thead>
    <tbody>
           {
             moduleFiliere.map((element,index)=>{
                return <tr>
                            <td>{element.codeModule}</td>
                            <td>{element.Description}</td>
                            <td>{element.MHP}</td>
                            <td>{element.MHD}</td>
                            <td>{element.MasseHoraire}</td>
                       </tr>
             })
           }
           <tr className='tableauHeadtr' style={{fontWeight:"600", fontStyle:"italic"}}>
                <td></td>
                <td>Totale</td>
                <td>{totaleValeurs.MHP}</td>
                <td>{totaleValeurs.MHD}</td>
                <td>{totaleValeurs.MTOT}</td>
           </tr>
    </tbody>
  </table>
        </section>
      )}
    </>
  );
};
export default Consultation;
