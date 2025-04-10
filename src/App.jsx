import { useState } from 'react'
import './App.css'
import P5Wrapper from './comps/P5Wrapper'
import { linearSearchSetup, linearSearchDraw } from './algorithms/searching/linearSearch'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <P5Wrapper setup={linearSearchSetup} draw={linearSearchDraw} />
    </>
  )
}

export default App
