import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import snackSlice from './snackSlice';

const store = configureStore({
    reducer: {
        counter: counterSlice,
        snack: snackSlice
    }
})

export default store;