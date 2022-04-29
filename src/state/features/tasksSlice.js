import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const createAlert = createAsyncThunk('alert-creator', (data) => {
    return new Promise((resolve, reject) => {
        console.log(data)
        setTimeout(function () {
            resolve('timeout_done')
        }, 4000);
    });
})

const initialState = {
    data: [],
    meta: {},
    alerts: {type: '', text: ''},
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        loadData: (state, {payload}) => {
            if (Object.keys(payload).length > 0) {
                state.data = payload.data
                state.meta = payload.meta
            }
        },
        setAlert: (state, {payload}) => {
            state.alerts = payload
        },
        removeTask: (state, {payload}) => {
            state.data = state.data.filter((task) => task.id !== payload.id)
            // todo send async remove task
        }
    },
    extraReducers: {
        [createAlert.pending]: (state, action) => {
            state.alerts = action.meta.arg
        },
        [createAlert.fulfilled]: (state) => {
            state.alerts = {type: '', text: ''}
        }
    }
})

export const {loadData, setAlert} = tasksSlice.actions
export default tasksSlice.reducer