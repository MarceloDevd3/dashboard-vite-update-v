import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { switchToggle } from './dadoSlice';

export default function Toggle() {
    const dispatch = useDispatch();
    const dado = useSelector((state) => state.dado)
    return (
         <div className='d-flex'>
            <span className={dado.swicthValor ? 'dark on' : 'dark off'}>Dark Mode</span>
            <button className={dado.swicthValor ? 'btn on' : 'btn'} onClick={() => dispatch(switchToggle())}><div className={dado.swicthValor ? 'bubble on' : 'bubble'}></div></button>
         </div>
    )
}