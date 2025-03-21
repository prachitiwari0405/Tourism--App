import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import DestinationList from './components/DestinationList';
import DestinationDetail from './components/DestinationDetail';
import ContactForm from './components/ContactForm';
import './styles/main.scss';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<DestinationList />} />
            <Route path="/destination/:id" element={<DestinationDetail />} />
            <Route path="/contact" element={<ContactForm />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;