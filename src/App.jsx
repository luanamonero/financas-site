import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from './modules/theme';
import Home from './modules/pages/Home';
import SignIn from './modules/pages/SignIn';
import SignUp from './modules/pages/SignUp';
import ForgotPassword from './modules/pages/ForgotPassword';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline />
        <Routes>
          <Route path="/login" element={<SignIn />} />
          <Route path="/cadastrar" element={<SignUp />} />
          <Route path="/password" element={<ForgotPassword />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>

  );
}

export default App;