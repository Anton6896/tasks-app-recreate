import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {QueryClient, QueryClientProvider} from 'react-query'
import {store} from "./state/store";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const queryClient = new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
        <Provider store={store}>
            <QueryClientProvider client={queryClient}>

                <Router>
                    <Routes>
                        <Route path={'/:projectName/tasks'} element={<App/>}/>
                    </Routes>
                </Router>

            </QueryClientProvider>
        </Provider>
    </React.StrictMode>
);
