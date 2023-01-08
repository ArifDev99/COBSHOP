import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material'
import {CssBaseline} from '@mui/material';
import { Outlet } from 'react-router-dom';
import Header from './Header';
const theme=createTheme({
    palette:{
        mode:"light",
    },
});

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header/>
        <main>
            <Outlet/>
        </main>
        <footer>This for Footer</footer>
    </ThemeProvider>
  )
}
