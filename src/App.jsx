import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddDonar from './components/AddDonar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AddDonar />
    </>
  )
}

export default App
