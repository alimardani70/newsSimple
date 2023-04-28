import React from 'react';
import './App.css';
import {ThemeProvider} from '@mui/material/styles';
import {CssBaseline,} from '@mui/material';
import AppRoutes from "./routes/AppRoutes";
import {theme} from 'themes/theme';
import {BrowserRouter} from "react-router-dom";


function App() {

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <BrowserRouter>

                <AppRoutes/>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
