import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/Header/Header';
import HowItWorks from './components/HowItWorks/HowItWorks';
import WhyMolta from './components/WhyMolta/WhyMolta';
import Team from './components/Team/Team';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import Card01 from './components/Card01/Card01';
import './App.css';

function App() {
  return (
    <div className="App font-base bg-color-background min-h-screen">
      <Navbar />
      <Header />
      <HowItWorks />
      <WhyMolta />
      <Card01 />
      <Team />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;