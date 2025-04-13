import { useState } from 'react'
import './App.css'
import Sidebar from './comps/sidebar/Sidebar'
import MainContainer from './comps/main/MainContainer'

function App() {
  const [selectedAlgo, setSelectedAlgo] = useState('linearSearch');

  return (
    <>
      <div className="algo-visual-page">
        <Sidebar setSelectedAlgo={setSelectedAlgo}/>
        <MainContainer selectedAlgo={selectedAlgo}/>
      </div>
    </>
  )
}

export default App
