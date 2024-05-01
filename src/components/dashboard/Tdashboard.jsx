import React from 'react'
import NavVer from '../navBar/navVerticale/NavVer'
import NavHori from '../navBar/navHorizontale/NavHori'
import './Tdashboard.css'
import TableauBord from '../tableauBord/TableauBord'
export default function Tdashboard() {
  return ( <div className="container-fluids ">
        <div className=" colone13">
          <NavVer /> 
        </div>
        <div className=" colone2">
           <NavHori/> 
           <TableauBord/>
        </div>
</div>)
}