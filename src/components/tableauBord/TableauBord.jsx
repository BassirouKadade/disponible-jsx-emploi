import React, { useState ,useEffect} from 'react';
import './TableauBord.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChartSimple,faBuildingColumns,faArrowUpFromWaterPump,faPersonChalkboard } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
export default function TableauBord() {
  const [messageBord, setMessageBord] = useState(false);
  const [nombreElements,setNombreElement]=useState({
          salle:[{nombre:0}],
          formateur:[{nombre:0}],
          filiere:[{nombre:0}]
  })

  const [el1,setEll1]=useState(false)
  useEffect(() => {
     const getData = async () => {
       try {

         const reponse = await fetch('http://localhost:3001/NombreFiliere');
     
         if (reponse.ok) {
           const data = await reponse.json();
           console.log(data);
           setNombreElement((prevState) => ({ ...prevState, filiere: data }));
         } else {
           console.log('Une erreur est survenue lors de recuperation de  nombre des salles...');
         }
       } catch (e) {
        setEll1(true)
         console.error('Une erreur est survenue...', e);
       }
     };
     getData()
  },[])

  useEffect(() => {
       const getData = async () => {
         try {
           const reponse = await fetch('http://localhost:3001/NombreFormateur');
           if (reponse.ok) {
             const data = await reponse.json();
             console.log(data);
             setNombreElement((prevState) => ({ ...prevState, formateur: data }));
           } else {
             console.log('Une erreur est survenue lors de recuperation de  nombre des salles...');
           }
         } catch (e) {
           console.error('Une erreur est survenue...', e);
         }
       };
       getData()
    },[])

    useEffect(() => {
       const getData = async () => {
         try {
           const reponse = await fetch('http://localhost:3001/NombreSalle');
       
           if (reponse.ok) {
             const data = await reponse.json();
             console.log(data);
             setNombreElement((prevState) => ({ ...prevState, salle: data }));
           } else {
             console.log('Une erreur est survenue lors de recuperation de  nombre des salles...');
           }
         } catch (e) {
           console.error('Une erreur est survenue...', e);
         }
       };
       getData()
    },[])
     
  return (
    <section className='bordContainer'>
        <div className={messageBord ?'HidMess':'tabMessage  '}>
          <span>Vous êtes sur le tableau de bord</span>
          <span onClick={() => setMessageBord(true)}>X</span>
      </div>
      <article className='contentBord' >
      <Link to='/filieres'><div className='lienDIv'>
              
              <div className="premier">
                     <span className='premeirLogo1'>
                     <FontAwesomeIcon icon={faBuildingColumns} />
                     </span>
                     <span className='premeirLogo2'>
                            <div className='filieres'>Filiere</div>
                            {!el1?<div className='filieresNombre'>{nombreElements.filiere[0].nombre}</div>:<div style={{fontSize:"12px"}}>En cours ... </div>}
                     </span>
              </div>
              <hr className="hrMenuDatsh"  />
              <div className='deuxieme'>
                    <p> <span><FontAwesomeIcon icon={faChartSimple} /></span> Toutes les filières du centre</p>
              </div>
          </div> </Link>

          {/* les salles ............. */}
          <Link to='/salles'><div className='lienDIv'>
              
              <div className="premier">
                     <span className='premeirLogo1'>
                     <FontAwesomeIcon icon={faArrowUpFromWaterPump} />
                     </span>
                     <span className='premeirLogo2'>
                            <div className='filieres'>Salle</div>
                            <div className='filieresNombre'>{nombreElements.salle[0].nombre}</div>
                     </span>
              </div>
              <hr className="hrMenuDatsh"  />
              <div className='deuxieme'>
                    <p> <span><FontAwesomeIcon icon={faChartSimple} /></span> Toutes les salles du centre</p>
              </div>
          </div> </Link>

            {/* les formaters ........ */}

            <Link to='/formateurs'><div className='lienDIv'>
              
              <div className="premier">
                     <span className='premeirLogo1'>
                     <FontAwesomeIcon icon={faPersonChalkboard} />
                     </span>
                     <span className='premeirLogo2'>
                            <div className='filieres'>Formateur</div>
                            <div className='filieresNombre'>{nombreElements.formateur[0].nombre}</div>
                     </span>
              </div>
              <hr className="hrMenuDatsh"  />
              <div className='deuxieme'>
                    <p> <span><FontAwesomeIcon icon={faChartSimple} /></span> Tous les formateurs du centre</p>
              </div>
          </div> </Link>
      </article>
    </section>
  );
}
