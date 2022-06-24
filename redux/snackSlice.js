import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
}

const snackSlice = createSlice({
    name: 'snack',
    initialState,
    reducers: {
        visibleSnackbar: (state) => {
            state.value = true;
        },
        dismissSnackbar: (state) => {
            state.value = false;
        }
    }
})

export const { visibleSnackbar, dismissSnackbar } = snackSlice.actions;

export default snackSlice.reducer;