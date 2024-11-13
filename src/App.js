import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { PhoneCard } from './components/phoneCard/phoneCard';
import { PhonePage } from './components/PhonePage/phonePage';
import { AboutPage } from './components/aboutPage/aboutPage';
import { RegistrationForm } from './components/forms/registrationForm';
import { LoginForm } from './components/forms/loginForm';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Outlet/>
      <Footer/>

    </div>
  );
}

export default App;
