import {configureStore} from '@reduxjs/toolkit';
import tasksReducer from "./features/tasksSlice";
import logger from 'redux-logger'


export const store = configureStore({
    reducer: {
        tasks: tasksReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
