import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Salle from './components/salle/Salle';
// import Dashboard from './components/dashboard/Dashboard';
import AjoutSalle from './components/salle/operations/ajoutSalle/AjoutSalle';
import ListeSalles from './components/salle/operations/listeSalle/ListeSalles';
import ReservationSalle from './components/salle/operations/reservation/ReservationSalle';
import Statique from './components/salle/operations/statiques/Statique';
import Formateur from './components/formateur/Formateur';
import AjoutFormateur from './components/formateur/operation/ajoutFormateur/AjoutFormateur';
import ListeFormateurs from './components/formateur/operation/listeFormateur/ListeFormateurs';
import ModulesDispense from './components/formateur/operation/modules/ModulesDispense';
import ListeModulesDis from './components/formateur/operation/ListeModule/ListeModulesDis';
import Module from './components/module/Module';
import AjoutModule from './components/module/operation/ajoutModule/AjoutModule';
import ListeModule from './components/module/operation/listeModule/ListeModule';
import Groupe from './components/groupe/Groupe';
import AjoutGroupe from './components/groupe/operation/ajoutGroupe/AjoutGroupe';
import ListeGroupe from './components/groupe/operation/listeGroupe/ListeGroupe';
import Emploi from './components/Emploi/Emploi';
import Filiere from './components/filiere/Filiere';
import AjoutFiliere from './components/filiere/operations/ajoutFiliere/AjoutFiliere'
import ListeFiliere from './components/filiere/operations/listeFiliere/ListeFiliere';
import ModuleFiliere from './components/filiere/operations/ModulesFiliere/ModuleFiliere';
import Disponibilite from './components/formateur/operation/disponibilte/Disponibilite';
import ModuleDisponible from './components/filiere/operations/ModuleDisponi/ModuleDisponible';
import NotFound from './components/notFound/NotFound';
import RechercherEmplois from './components/recherche/rechercherEmploi/RechercherEmplois';
import Consultation from './components/recherche/consultation/Consultation';
import Tdashboard from './components/dashboard/Tdashboard';

export default function App() {
  // État pour gérer la visibilité des éléments dans le composant Salle
  const [etatElementVisible, setEtatElementVisible] = useState(false);

  // Fonction pour changer l'état de la visibilité des éléments
  const Changement = (etat) => {
    setEtatElementVisible(etat);
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Route par défaut vers le Dashboard */}
        <Route index element={<Tdashboard />} />
 
 {/* ***********************  Gestion  des formateur Routes *************
 ************************************************************************ */}
<Route path='/formateurs' element={<Formateur etat={Changement} />}>
          {/* Route par défaut dans l'espace salle */}
          <Route
            index
            element={
              <div
                style={{ width: etatElementVisible ? '80%' : '70%', left: etatElementVisible ? '150px' : '340px' }}
                className='rendreElements'
              >
                <AjoutFormateur />
              </div>
            }
          ></Route>

          {/* Route pour l'ajout d'une salle */}
          <Route
            path='ajoutformateurs'
            element={
              <div
                style={{ width: etatElementVisible ? '80%' : '70%', left: etatElementVisible ? '150px' : '340px' }}
                className='rendreElements'
              >
                <AjoutFormateur />
              </div>
            }
          ></Route>

          {/* Route pour la liste des salles */}
          <Route
            path='listeFormateur'
            element={
              <div
                style={{
                  width: etatElementVisible ? '97%' : '79%',
                  left: etatElementVisible ? '3%' : '21%',
                }}
                className='rendreElementsListes'
              >
                <ListeFormateurs />
              </div>
            }
          >
          </Route>

          {/* {  Route pour les module dispense } */}
          <Route
            path='moduleDispense'
            element={
              <div
                style={{
                  width: etatElementVisible ? '97%' : '79%',
                  left: etatElementVisible ? '2%' : '21%',
                  
                }}
                className='rendreElementsListes'
              >
                <ModulesDispense />
              </div>
            }
          >
          </Route>
    {/* Liste des mdules de formateur */}
    <Route
            path='ListeDesmodulesDeformaeur/:idFormateur'
            element={
              <div
                style={{
                  width: etatElementVisible ? '97%' : '79%',
                  left: etatElementVisible ? '2%' : '21%',
                  
                }}
                className='rendreElementsListes'
              >
                <ListeModulesDis />
              </div>
            }
          >
          </Route>

          
          {/* {  Route pour les module dispense } */}
          <Route
            path='disponibilte'
            element={
              <div
                style={{
                  width: etatElementVisible ? '90%' : '79%',
                  left: etatElementVisible ? '6%' : '21%',
                }}
                className='rendreElementsListes'
              >
                <Disponibilite />
              </div>
            }
          >
          </Route>


          
        </Route>


{/* $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
                                                $$$$$$$$$$$$$$$$$$$$$$$$$$ */}

{/* {* ************************************************************************* *} */}
        {/* Route pour la gestion des filiere */}
        <Route path='/filieres' element={<Filiere etat={Changement} />}>
          {/* Route par défaut dans l'espace salle */}
          <Route
            index
            element={
              <div
                style={{ width: etatElementVisible ? '80%' : '70%', left: etatElementVisible ? '150px' : '340px' }}
                className='rendreElements'
              >
                <AjoutFiliere />
              </div>
            }
          ></Route>

          {/* Route pour l'ajout d'une salle */}
          <Route
            path='filieres'
            element={
              <div
                style={{ width: etatElementVisible ? '80%' : '70%', left: etatElementVisible ? '150px' : '340px' }}
                className='rendreElements'
              >
                <AjoutFiliere />
              </div>
            }
          ></Route>

          {/* Route pour la liste des salles */}
          <Route
            path='listeFiliere'
            element={
              <div
                style={{
                  width: etatElementVisible ? '97%' : '79%',
                  left: etatElementVisible ? '3%' : '21%',
                }}
                className='rendreElementsListes'
              >
                <ListeFiliere />
              </div>
            }
          ></Route>

          {/* Route pour la gestion des réservations */}
          <Route
            path='Modulesdefileres'
            element={
              <div
                style={{
                  width: etatElementVisible ? '97%' : '79%',
                  left: etatElementVisible ? '3%' : '21%',
                }}
                className='rendreElementsListes'
              >
                <ModuleFiliere />
              </div>
            }
          ></Route>
           {/* Route pour la gestion des réservations */}
           <Route
            path='listeModuleFilieres/:idFiliere'
            element={
              <div
                style={{
                  width: etatElementVisible ? '97%' : '79%',
                  left: etatElementVisible ? '3%' : '21%',
                }}
                className='rendreElementsListes'
              >
                <ModuleDisponible />
              </div>
            }
          ></Route>
     </Route>
         
 {/* ************************************************************************* */}
        {/* Route pour la gestion des salles */}
        <Route path='/salles' element={<Salle etat={Changement} />}>
          {/* Route par défaut dans l'espace salle */}
          <Route
            index
            element={
              <div
                style={{ width: etatElementVisible ? '80%' : '70%', left: etatElementVisible ? '150px' : '340px' }}
                className='rendreElements'
              >
                <AjoutSalle />
              </div>
            }
          ></Route>

          {/* Route pour l'ajout d'une salle */}
          <Route
            path='salle'
            element={
              <div
                style={{ width: etatElementVisible ? '80%' : '70%', left: etatElementVisible ? '150px' : '340px' }}
                className='rendreElements'
              >
                <AjoutSalle />
              </div>
            }
          ></Route>

          {/* Route pour la liste des salles */}
          <Route
            path='listeSsalle'
            element={
              <div
                style={{
                  width: etatElementVisible ? '97%' : '79%',
                  left: etatElementVisible ? '3%' : '21%',
                }}
                className='rendreElementsListes'
              >
                <ListeSalles />
              </div>
            }
          ></Route>

          {/* Route pour la gestion des réservations */}
          <Route
            path='reservations'
            element={
              <div
                style={{
                  width: etatElementVisible ? '97%' : '79%',
                  left: etatElementVisible ? '3%' : '21%',
                }}
                className='rendreElementsListes'
              >
                <ReservationSalle />
              </div>
            }
          ></Route>

          {/* Route pour les statistiques */}
          <Route
            path='statistiques'
            element={
              <div
                style={{
                  width: etatElementVisible ? '97%' : '79%',
                  left: etatElementVisible ? '3%' : '21%',
                }}
                className='rendreElementsListes'
              >
                <Statique />
              </div>
            }
          ></Route>
        </Route>
        

 {/* ************************************************************************* */}
        {/* Route pour la gestion des salles */}
        <Route path='/modules' element={<Module etat={Changement} />}>
          {/* Route par défaut dans l'espace salle */}
          <Route
            index
            element={
              <div
                style={{ width: etatElementVisible ? '80%' : '70%', left: etatElementVisible ? '150px' : '340px' }}
                className='rendreElements'
              >
                <AjoutModule />
              </div>
            }
          ></Route>

          {/* Route pour l'ajout d'une salle */}
          <Route
            path='ajoutModule'
            element={
              <div
                style={{ width: etatElementVisible ? '80%' : '70%', left: etatElementVisible ? '150px' : '340px' }}
                className='rendreElements'
              >
                <AjoutModule />
              </div>
            }
          ></Route>

          {/* Route pour la liste des salles */}
          <Route
            path='listeModule'
            element={
              <div
                style={{
                  width: etatElementVisible ? '97%' : '79%',
                  left: etatElementVisible ? '3%' : '21%',
                }}
                className='rendreElementsListes'
              >
                <ListeModule />
              </div>
            }
          ></Route>

          
          </Route>


          
 {/* ************************************************************************* */}
        {/* Route pour la gestion des groupe */}
        <Route path='/groupes' element={<Groupe etat={Changement} />}>
          {/* Route par défaut dans l'espace salle */}
          <Route
            index
            element={
              <div
                style={{ width: etatElementVisible ? '80%' : '70%', left: etatElementVisible ? '150px' : '340px' }}
                className='rendreElements'
              >
                <AjoutGroupe />
              </div>
            }
          ></Route>

          {/* Route pour l'ajout d'une salle */}
          <Route
            path='ajoutGroupe'
            element={
              <div
                style={{ width: etatElementVisible ? '80%' : '70%', left: etatElementVisible ? '150px' : '340px' }}
                className='rendreElements'
              >
                <AjoutGroupe />
              </div>
            }
          ></Route>

          {/* Route pour la liste des salles */}
          <Route
            path='listeGroupe'
            element={
              <div
                style={{
                  width: etatElementVisible ? '97%' : '79%',
                  left: etatElementVisible ? '3%' : '21%',
                }}
                className='rendreElementsListes'
              >
                <ListeGroupe />
              </div>
            }
          ></Route>
          </Route>

{/* *******************
********$$$$$$$$$$$$=================================================
****************************************************** */} 
{/* ************************************************************************* */}
        {/* Route pour la gestion d'empli du temps */}
        <Route path='/emplois' element={<Emploi etat={Changement} />}></Route>

{/* 
================================================================

*****************************
 Not FOund
*********************************** */}
<Route path='*' element={<NotFound />}></Route>


{/* 
================================================================

*****************************
 Recherher Emplois 
*********************************** */}
<Route path='/rechercherEmploideGroupe' element={
   <div
   className='rendreElementsListesRecher'
 >

  


   <RechercherEmplois />
 </div>
  }></Route>


{/* 
================================================================

*****************************
 Consultation Emplois 
*********************************** */}
<Route path='/rechercherEmploideGroupe/consultation/:getData' element={
   <div
   className='rendreElementsListesRecher'
 >

   <Consultation />
 </div>
  }></Route>








      </Routes>
    </BrowserRouter>
  );
}
