// App.tsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import ResumePage from './domains/resume/page/portfolioPage';
import CanvasBackground from './domains/resume/container/canvasBackground';

// Style
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './assets/styles/style.scss'

// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Custom Components
import { StyledDiv } from 'src/components/styled-component/tag';

function App() {

  return (
    <div className='App'>
      <CanvasBackground />

      <Routes>
        <Route path='/' element={<ResumePage />} />
      </Routes>
      <ToastContainer
        position="top-center"
        theme='dark' 
        autoClose={1600}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </div>
  );
}

export default App;