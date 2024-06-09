import React from 'react';
import './App.css';
import Home from './Pages/Home';
import { ThemeProvider } from '@mui/material';
import theme from './Theme';

function App() {
  return (
    <ThemeProvider theme={theme}> 
      <Home />
    </ThemeProvider>
  );
}

export default App;
