import React from 'react'
import './NavHori.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser
} from '@fortawesome/free-solid-svg-icons';
export default function NavHori() {
  return (
       <span className='Profile'>
            <span className='userPro'><FontAwesomeIcon icon={faUser} /></span>
       </span>
  )
}
