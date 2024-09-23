import React from "react";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import Navbar3 from "./Navbar3";

const MainNav = () => {
  const navigateToHome = () => {
    window.location.href = 'https://mahasainik.maharashtra.gov.in/';
  };

  const navigateToSite = () => {
    window.location.href = 'https://mahasainik.maharashtra.gov.in/';
  };

  const navigateToZswo = () => {
    window.location.href = 'https://mahasainik.maharashtra.gov.in/index.php/zsw/login';
  };

  const navigateToFeed = () => {
    window.location.href = 'https://mahasainik.maharashtra.gov.in/index.php/contact-us';
  };

  const navigateToMainContent = ()=>{
      window.location.href='https://mahasainik.maharashtra.gov.in/'
  };

  const navigateScreenReader=()=>{
    window.location.href='https://mahasainik.maharashtra.gov.in/'
  };

  const navigateToLogin=()=>{
      window.location.href='https://mahasainik.maharashtra.gov.in/index.php/login'
  };

  const navigateToRegister=()=>{
    window.location.href='https://mahasainik.maharashtra.gov.in/index.php/register'
  }

  const naviToDistrict=()=>{
    window.location.href='https://mahasainik.maharashtra.gov.in/index.php/district-info'
  }
  
  const naviToContact=()=>{
    window.location.href='https://mahasainik.maharashtra.gov.in/index.php/contact'
  }


  const naviToDownload=()=>{
    window.location.href='https://mahasainik.maharashtra.gov.in/index.php/filemanager?p='
  }

  return (
    <div>
      <Navbar home={navigateToHome} site={navigateToSite} zswo={navigateToZswo} feed={navigateToFeed} mainContent={navigateToMainContent} reader={navigateScreenReader} />

      <Navbar2 login={navigateToLogin} register={navigateToRegister}/>


      <Navbar3 home={navigateToHome} district={naviToDistrict}  download={naviToDownload} contact={naviToContact}/>


    </div>
  );
};

export default MainNav;
