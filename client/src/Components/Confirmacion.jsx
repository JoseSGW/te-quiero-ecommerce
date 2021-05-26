import React, {useState, useEffect} from 'react';
import {Out} from './Confirmacion.styles'
import EmojiFoodBeverageIcon from '@material-ui/icons/EmojiFoodBeverage';
import {useHistory} from 'react-router-dom'
export default function Succes() {
    const history= useHistory();
    function handleClick(e){
        e.preventDefault();
         history.push("/auth/login");
        

    }
return (
    
    <Out> 
        <span>   
            <div>
                <p> Su usuario ha sido creado con Éxito</p>
                <EmojiFoodBeverageIcon/>
                
           </div>
           <button type="submit" onClick={handleClick}>Ir al Login</button>
        </span> 
    </Out>
       
)

}