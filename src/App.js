import logo from './logo.svg';
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import LandingPage from './components/Landingpage';


const handleScroll = () => {
  const navbar = document.querySelector('.navbar-custom');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
};




function App() {


  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
   
   <NavigationBar />
   <LandingPage />
   
    </>


  );
}

export default App;
