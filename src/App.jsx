import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './modules/theme';
import Home from './modules/pages/Home';
import Shop from './modules/pages/Shop';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/lojinha" exact element={< Shop/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;