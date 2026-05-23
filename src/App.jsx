import { useState } from 'react'
import  Head  from './components/Head';
import Main from './components/Main';
import Footer from './components/Footer';
import './styles/global.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <Head />
      <Main />
      <Footer />
    </div>
  )
}

export default App
