import React, {useId} from "react"

import {useSelector} from 'react-redux';

export default function BottomCard(props) {
     
    const Ids = useId()
    
   const dado = useSelector((state) => state.dado);
    
    
    return (
             <article className={dado.swicthValor ? 'subCard dark  item' : 'subCard item'}  key={Ids}>
              <div className="row-item-card">
                <h4 className={dado.swicthValor ? 'card-item-title dark' : 'card-item-title'} >{props.title}</h4>
                <img src={props.socialIcon} alt=" social icon" />
              </div>
              <div className="row-item-card card2">
                 <h4 className="views-title">{props.views}</h4>
                 <p className={props.Color}>
                <img src={props.arrow} alt=" social icon" className={props.arrowAction} />
                {props.porcent}
                 </p>
              </div>
           </article> 
           
      
    )
}