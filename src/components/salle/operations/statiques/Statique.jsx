import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import './Statique.css';

export default function Statique() {
  return (
    <div className='statique'>
       <span><FontAwesomeIcon icon={faExclamationTriangle} /></span>
       <span>Désolé, cette page de statique n'est pas encore en service.</span>

    </div>
  );
}
