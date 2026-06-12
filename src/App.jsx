import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import ShowStudentInfo from './components/ShowStudentInfo'
import ShowClass from './components/ShowClass'
import ShowFunc from './components/ShowFunc'
import { ShowGames } from './components/ShowGames'


function App() {
  const Student = {
    name: "Яценко Алексей",
    age: 18,
    group: "П316"
  };
  const [langs, setLangs] = useState(["JavaScript", "Python", "Java", "C++"]);
  const [unknownLangs, setUnknownLangs] = useState(["asm"]);
  
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
        

        <ShowStudentInfo name={Student.name} age={Student.age} group={Student.group} />
        <ShowClass 
          langs={langs} 
          unkLangs={unknownLangs} 
          setLangs={setLangs} 
          setUnknownLangs={setUnknownLangs} 
        />
        <ShowFunc langs={langs} />
        <ShowGames games={games} />

      </section>

      

    </>
  )
}

export default App
