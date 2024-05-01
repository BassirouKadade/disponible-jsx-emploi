import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle,faRightToBracket,faCalendarAlt,faBook, faExplosion, faHandPointLeft, faAngleRight, faList, faSearch, faClipboard, faChartBar } from '@fortawesome/free-solid-svg-icons';
import '../Components.css';
import { Link, Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// Largeur du menu en mode collapsed et expanded
const MENU_WIDTH_COLLAPSED = 0;
const MENU_WIDTH_EXPANDED = 210;

export default function Salle({ etat }) {
  const navigate = useNavigate();

  // États
  const [openMenu, setOpenMenu] = useState(false);
  const [messageDispl, setMessageDispl] = useState(false);
  const [select, setSelect] = useState(0);
  const [visibilitys, setVisibility] = useState(false);
  const [mouseCoordinates, setMouseCoordinates] = useState({ y: false });

  // Utilisation de "let" au lieu de "var" pour déclarer la variable
  let time = null;

  useEffect(() => {
    // Gestionnaire d'événement pour détecter la position du curseur
    function handleMouseMove(event) {
      if (event.clientY === 0) {
        setMouseCoordinates({ y: true });
        setTimeout(() => {
          setMouseCoordinates({ y: false });
        }, 1500);
      }
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  function messageDisplay() {
    // Affichage du message après un délai
    time = setTimeout(() => {
      setMessageDispl(true);
    }, 500);
  }

  function messageDisplayNone() {
    // Masquer le message et annuler le délai
    setMessageDispl(false);
    clearTimeout(time);
  }

  function showMenu() {
    // Afficher le menu au survol
    setVisibility(true);
  }

  function hiddenMenu() {
    // Masquer le menu à la sortie
    setVisibility(false);
  }

  const toggleMenu = () => {
    // Basculer l'état du menu ouvert/fermé
    setOpenMenu((prevState) => !prevState);
  };

  useEffect(() => {
    // Mettre à jour l'état du menu dans le composant parent
    etat(openMenu);
  }, [openMenu]);

  function goBackHome() {
    // Naviguer vers la page d'accueil
    navigate('/');
  }

  return (
    <section style={{ height: "auto", margin: 0, position: "relative" }} className='formateurFluid  container-fluid'>
      <div className="row">
        <div style={{ padding: 0, position: "relative" }} className="col-12 menuColumn">
          {/* Bouton de retour à la page d'accueil */}
          <span onClick={goBackHome} className={`messageGoBack ${mouseCoordinates.y && "anima"}`}><FontAwesomeIcon icon={faHandPointLeft} /></span>

          {/* Menu principal */}
          <article className="menu" style={{ marginLeft: `${openMenu ? -252 : 0}px` }} onMouseOut={hiddenMenu} onMouseOver={showMenu}>
            {!openMenu && (
              <>
                {/* Logo et animation du menu */}
                <div className='logoMessages'>
                  <h3 style={{ fontSize: "70px" }}><FontAwesomeIcon icon={faExplosion} /></h3>
                </div>
                <div className='animation'>
                  Espace Formateur
                </div>
                <hr />

                {/* Navigation du menu */}
                <nav className="salles-menu">
                  <ul>
                    <li>
                      <Link to="ajoutformateurs" className={select === 1 && "aSelect"} onClick={() => setSelect(1)}>
                        <FontAwesomeIcon icon={faPlusCircle} /> Ajout des Formateurs
                      </Link>
                    </li>
                    <li>
                      <Link to="listeFormateur" className={select === 2 && "aSelect"} onClick={() => setSelect(2)}>
                        <FontAwesomeIcon icon={faList} /> Liste des Formateurs
                      </Link>
                    </li>
                    <li>
  <Link to="disponibilte" className={select === 4 ? "aSelect" : ""} onClick={() => setSelect(4)}>
    <FontAwesomeIcon icon={faCalendarAlt} /> Disponibilité
  </Link>
</li>

<li>
  <Link to="moduleDispense" className={select === 5 ? "aSelect" : ""} onClick={() => setSelect(5)}>
    <FontAwesomeIcon icon={faBook} /> Modules dispensés
  </Link>
</li>
 
                  
                  </ul>
                </nav>
              </>
            )}
            {/* Bouton pour ouvrir/fermer le menu */}
            <span onMouseLeave={messageDisplayNone} onMouseOver={messageDisplay} style={{ visibility: visibilitys || openMenu ? "visible" : "hidden", transform: !openMenu && 'rotate(180deg)' }} onClick={toggleMenu} className='openMenuSpan'>
              <FontAwesomeIcon icon={faAngleRight} className="icone-validation" />
            </span>
            

            {!openMenu&&<span className='spanQUitAPP' >
      <Link  to={'/'}><FontAwesomeIcon icon={faRightToBracket} /></Link>
      </span>}
          </article>

          {/* Contenu principal */}
          <article style={{ textAlign: "center", width: `calc(100% - ${openMenu ? MENU_WIDTH_COLLAPSED : MENU_WIDTH_EXPANDED}px)` }} className='element'>
            {/* Outlet pour afficher les composants enfants en fonction de l'URL */}
            <Outlet />
          </article>
        </div>
      </div>
    </section>
  );
}
