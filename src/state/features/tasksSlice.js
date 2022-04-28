import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const initialState = {
    data: [],
    meta: {},
    alerts: {type: '', text: ''},
}

const tasksSlice = createSlice({
    name: ' ',
    initialState,
    reducers: {
        loadData: (state, action) => {
            console.log(action.payload)
            if (Object.keys(action.payload).length > 0) {
                state.data = action.payload.data
                state.meta = action.payload.meta
            }
        },
        setAlert: (state, action) => {
            console.log(action.payload)
            state.alerts = action.payload
        }
    }
})

export const {loadData, setAlert} = tasksSlice.actions
export default tasksSlice.reducer