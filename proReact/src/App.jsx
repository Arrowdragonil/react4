/* import { useState } from 'react'
import reactLogo from './assets/react.svg' */
import "./App.css";
import { Outlet } from 'react-router-dom';
import Nav from './components/nav';
/* import { EffectOL } from "./components/EffectOL";
import EffectU from "./components/EffectU";
import { EffectUp } from "./components/EffectUp"; */



function App() {

  return (
    <div className="App">
    <>
     <header>Personajes App</header>
      <Nav />
      <main>
        <Outlet />
      </main>
     {/*  <h3></h3>
      <Mst />
      <h3></h3>
      <ObSt />
      <h3></h3> */}
      
     
      </>
    </div>
  )
}

export default App;
