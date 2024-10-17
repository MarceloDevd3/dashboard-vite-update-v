import React, {useId} from "react"

import {useSelector} from 'react-redux';


export default function TopCard(props) {
    const Ids = useId()
    
   const dado = useSelector((state) => state.dado)
    return (
        
        <div className={props.topColor}>
           <article key={Ids} className={dado.swicthValor ? "topCards dark  item" : "topCards item" } >
                <div className='space'>
                <div className='row'> 
                <img src={props.img} alt='social icon'/>
                <h2 className='title'>{props.title}</h2>
                </div>
                <h2 className='sub-top'>{props.numbers}</h2>
                <h3 className='subName'>{props.subName}</h3>
                 <div className='row-item'>
                 <p className={props.Color}>
                 <img src={props.arrow} alt='up icon' className={props.arrowAction} /> {props.today}</p>
                 </div>
                </div>
           </article> 
        </div>   
    )
}