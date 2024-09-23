import React, { useState } from 'react';
import MainNav from './Components/Nav/MainNav';
import Page1 from './Components/Page1/Page1';
import Page2 from './Components/Register/Page2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './Components/Loginpage/LoginPage';
import { createBrowserRouter } from 'react-router-dom';
const App = () => {
  const [showPage2, setShowPage2] = useState(false);
  const handleClick = () => {
    setShowPage2(true);
  };
  

  // const router= createBrowserRouter([
  //   {
  //     path:"/",
  //     element:<Page1/>
  //   },
  //   {
  //     path:"/login",
  //     element:<LoginPage/>
  //   },
  //   {
  //     path:"/register",
  //     element:<Page2/>
  //   }
  // ])

  return (
    <div>
      <MainNav />
      <div>
        {showPage2 ? <Page2 /> : <Page1 onClick={handleClick} />}

      </div>
      
    </div>
  );
};

export default App;
