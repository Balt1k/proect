import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Head from './components/Head';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="app">
          <Head />
          <Main />
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;