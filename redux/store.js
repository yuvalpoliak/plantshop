import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './counterSlice';
import snackSlice from './snackSlice';
import categorySlice from './categoriesSlice';

const store = configureStore({
    reducer: {
        counter: counterSlice,
        snack: snackSlice,
        category: categorySlice
    }
})

export default store;