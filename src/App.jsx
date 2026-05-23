import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react'
import  Head  from './components/Head';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/global.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
    <div className='app'>
      <Head />
      <Main />
      <Footer />
    </div>
    </Router>
  )
}

export default App
