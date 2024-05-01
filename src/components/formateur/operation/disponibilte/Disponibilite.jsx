import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import './Disponibilite.css';

export default function Disponibilite() {
  return (
    <div className='reservation'>
       <span><FontAwesomeIcon icon={faExclamationTriangle} /></span>
       <span>Désolé, cette page de disponibilté n'est pas encore en service.</span>

    </div>
  );
}
