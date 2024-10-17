import {configureStore} from '@reduxjs/toolkit';
import dadoReducer from './dadoSlice';

export const store = configureStore({
    reducer : {
        dado: dadoReducer
    }
})