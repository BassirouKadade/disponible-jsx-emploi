import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import './Reservation.css';

export default function ReservationSalle() {
  return (
    <div className='reservation'>
       <span><FontAwesomeIcon icon={faExclamationTriangle} /></span>
       <span>Désolé, cette page de reservation n'est pas encore en service.</span>

    </div>
  );
}
