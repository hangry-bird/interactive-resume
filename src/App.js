// App.tsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

// Pages
import ResumePage from './domains/resume/page/resumePage';

// Style
import 'aos/dist/aos.css'; // You can also use <link> for styles
import './assets/styles/style.scss'

// Toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Image
import BackgroundImage from 'src/assets/images/background-image.jpg'

// Custom Components
import { StyledDiv } from 'src/components/styled-component/tag';

function App() {

  return (
    <div className='App'>
      {/* <img src={BackgroundImage} className="background-image" alt='background image' /> */}
      <StyledDiv
        position={"fixed"}
        width={"100%"}
        height={"100%"}
        background={"linear-gradient(to bottom, #020024, #0e4b83);"} />

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