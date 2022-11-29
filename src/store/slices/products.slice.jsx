import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setisloading } from './isloading.slice';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const productsSlice = createSlice({
		name: 'products',
    initialState: [],
    reducers: {
        
    }
})

export const { } getProductsThunk = () => dispatch => {
                        dispatch(setisloading(true))
                        axios.get()

}

export const {  } = productsSlice.actions;

export default productsSlice.reducer;