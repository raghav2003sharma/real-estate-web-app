import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home.jsx';
import AboutPage from './pages/about.jsx';
import Properties from './pages/properties.jsx';
// import PropertyDetails from './pages/PropertyDetails';
import ContactPage from './pages/contact.jsx';
import Navbar from './components/navbar.jsx';
import Footer from './components/footer.jsx';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} /> 
         <Route path="/properties" element={<Properties />} />
        {/* <Route path="/property/:id" element={<PropertyDetails />} /> */}
        <Route path="/contact" element={<ContactPage />} /> 
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;

