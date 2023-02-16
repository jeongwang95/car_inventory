import { createSlice } from '@reduxjs/toolkit';

export interface CarState {
    year: string,
    make: string,
    model: string,
    color: string

};

const initialState: CarState = {
    year: '',
    make: '',
    model: '',
    color: ''
};

const rootSlice = createSlice({
    name: "root",
    initialState,
    reducers: {
        chooseYear: (state, action) => { state.year = action.payload },
        chooseMake: (state, action) => { state.make = action.payload },
        chooseModel: (state, action) => { state.model = action.payload },
        chooseColor: (state, action) => { state.color = action.payload }
    }
});

// Export Reducer
export const reducer = rootSlice.reducer;
export const {
    chooseYear,
    chooseMake,
    chooseModel,
    chooseColor
} = rootSlice.actions;