import { createSlice } from "@reduxjs/toolkit";

export const dadosSlice = createSlice({
   name: 'dado',
   initialState: {
    swicthValor: false
   },
   reducers: {
     switchToggle : (state) => {
        state.swicthValor = !state.swicthValor
     }
   }
});

export const { switchToggle } = dadosSlice.actions;
export default dadosSlice.reducer;