import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    value: 0
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        changeIndex : (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { changeIndex } = categorySlice.actions;
export default categorySlice.reducer;