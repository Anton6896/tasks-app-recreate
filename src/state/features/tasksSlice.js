import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data: [],
    meta: {},
    alerts: {type:'', text:''},
}

const tasksSlice = createSlice({
    name: ' ',
    initialState,
    reducers: {
        loadData: (state, action) => {
            if (Object.keys(action.payload).length > 0) {
                state.data = action.payload.data
                state.meta = action.payload.meta
            }
        },
        setAlert: (state, action) => {
            // set alert string
            state.alerts = action.payload

            setTimeout(()=>{
                state.alerts = ''
            }, 3000)
        }
    }
})

export const {loadData, setAlert} = tasksSlice.actions
export default tasksSlice.reducer