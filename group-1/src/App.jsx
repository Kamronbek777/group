import { useState } from 'react'
import { Outlet } from "react-router-dom";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navabr from './components/Navabr'
import Home from './pages/Home';
import Sidebar from './components/Sidebar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
 
 
 
 <header> 
  <Navabr/>
 </header>

 <main className='flex'>
  <section>
    <Outlet/>
  </section>
  <section>
    <Sidebar/>
  </section>
  <section>
    <Home/>
  </section>
 </main>
 
 
 
 
 
 
 </>

  )
}

export default App
