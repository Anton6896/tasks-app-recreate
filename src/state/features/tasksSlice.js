import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: [],
    meta: {},
    isLoading: true
}

const tasksSlice = createSlice({
    name: ' ',
    initialState,
    reducers: {
        loadData: (state, action) => {

        }
    }
})

export const {loadData, } = tasksSlice.actions
export default tasksSlice.reducer