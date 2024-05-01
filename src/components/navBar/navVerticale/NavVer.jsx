import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBorderNone,
  faBook,
  faBookmark,
  faPersonChalkboard,
  faBuildingColumns,
  faUsers,
  faCalendar,
  faGraduationCap,
  faMagnifyingGlass
  
  
} from '@fortawesome/free-solid-svg-icons';
import './NavVer.css';


const NavVer = () => {
  return (
    <nav className='nav'>
      <div className='iconsnav'>
         <span className='spanNav'><FontAwesomeIcon icon={faGraduationCap} /></span>
      </div>
      <hr className='hr'/>

      <ul className='ulnav'>
      <li className='  rechercher'>
        <span className='spanNav'><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
          <Link to={'/rechercherEmploideGroupe'}>Rechercher Emploi . . . </Link>
        </li>
        <hr />
        <li className='liChild '>
        <span className='spanNav'><FontAwesomeIcon icon={faBorderNone} /></span>
          <span className='bord'>Tableau de bord</span>
        </li>
        <li className='liChild '>
           <span className='spanNav'><FontAwesomeIcon icon={faBuildingColumns} /></span> 
          <Link to={'/salles'}>Espace Salle</Link>
        </li>
        <li className='liChild '> 
        <span className='spanNav'><FontAwesomeIcon icon={faPersonChalkboard} /></span>
          <Link to={'/formateurs'}>Espace Formateur</Link>
        </li>
        <li className='liChild '>
        <span className='spanNav'> <FontAwesomeIcon icon={faBook} /></span>
          <Link to={'/modules'}>Espace Modules</Link>
        </li>
        <li className='liChild '>
        <span className='spanNav'><FontAwesomeIcon icon={faBookmark} /></span>
          <Link to={'/filieres'}>Espace Filiere</Link>
        </li>
        <li className='liChild '>
        <span className='spanNav'> <FontAwesomeIcon icon={faUsers} /></span>
          <Link to={'/groupes'}>Espace Groupe</Link>
        </li>
        <li className='liChild '>
        <span className='spanNav'><FontAwesomeIcon icon={faCalendar} /></span>
          <Link to={'/emplois'}>Créer Emplois</Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default NavVer;
