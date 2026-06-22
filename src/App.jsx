import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import ShowStudentInfo from './components/ShowStudentInfo'
import ShowClass from './components/ShowClass'
import ShowFunc from './components/ShowFunc'
import { ShowGames } from './components/ShowGames' // dz3 
import { Timer } from './components/Timer'; // dz4

import { ThemeContext } from './ThemeContext.jsx'; // dz5

import { RefTasks } from './components/RefTasks';

function App() {
  const Student = {
    name: "Яценко Алексей",
    age: 18,
    group: "П316"
  };
  const [langs, setLangs] = useState(["JavaScript", "Python", "Java", "C++"]);
  const [unknownLangs, setUnknownLangs] = useState(["asm"]);
  

  // dz3
  const games = [
    {id: 1, name: "The Witcher 3", genre: "RPG"},
    {id: 2, name: "Cyberpunk 2077", genre: "RPG"},
    {id: 3, name: "Minecraft", genre: "Sandbox"},
    {id: 4, name: "Spider-man", genre: "Action"},
  ]

  // dz4
  const [showTimer, setShowTimer] = useState(true);


  // dz5
  const { theme, setTheme } = useContext(ThemeContext);  

  // dz6
  const [count, setCount] = useState(0);
  return (
    <>
      <section id="center">
        <button onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}>
          Переключить на {theme === 'dark' ? 'светлую' : 'темную'} тему
        </button>
        
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
        
        <button onClick={() => setShowTimer(!showTimer)}>
            {showTimer ? 'Скрыть таймер' : 'Показать таймер'}
        </button>

        {showTimer && <Timer />}

        <RefTasks />

      </section>

      

    </>
  )
}

export default App
