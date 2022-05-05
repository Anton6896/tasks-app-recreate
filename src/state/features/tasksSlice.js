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
    tasksList: [],
    tasksListMeta: {},
    withSettingsTaskList: [],
    withSettingsTaskMeta: {},
    alerts: {type: '', text: ''},
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        loadData: (state, {payload}) => {
            if (Object.keys(payload).length > 0) {
                state.tasksList = payload.data
                state.tasksListMeta = payload.meta
            }
        },
        removeTask: (state, {payload}) => {
            state.data = state.data.filter((task) => task.id !== payload.id)
            // todo send async remove task
        },
        setWithSettingsData: (state, {payload}) => {
            if (Object.keys(payload).length > 0) {
                state.withSettingsTaskList = payload.data
                state.withSettingsTaskMeta = payload.meta
            }
        },
    },
    extraReducers: {
        [createAlert.pending]: (state, action) => {
            state.alerts = action.meta.arg
        },
        [createAlert.fulfilled]: (state) => {
            state.alerts = {type: '', text: ''}
        },
        [createAlert.rejected]: (state) => {
            // nothing to reject here
        },

    },
})

export const {loadData,setWithSettingsData} = tasksSlice.actions
export default tasksSlice.reducer