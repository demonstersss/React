import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import ShowNameAge from './components/ShowNameAge'
import ShowClass from './components/ShowClass'
import ShowFunc from './components/ShowFunc'
import { ShowGames } from './components/ShowGames'


function App() {
  const Name = "Lesha";
  const Age = 18;
  const langs = ["JavaScript", "Python", "Java", "C++"];

  const games = [
    {id: 1, name: "The Witcher 3", genre: "RPG"},
    {id: 2, name: "Cyberpunk 2077", genre: "RPG"},
    {id: 3, name: "Minecraft", genre: "Sandbox"},
    {id: 4, name: "Spider-man", genre: "Action"},
  ]

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        

        <ShowNameAge name={Name} age={Age} />
        <ShowClass langs={langs} />
        <ShowFunc langs={langs} />
        <ShowGames games={games} />

      </section>

      

    </>
  )
}

export default App
