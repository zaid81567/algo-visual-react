import { useState } from 'react'
import './App.css'
import Sidebar from './comps/sidebar/Sidebar'
import MainContainer from './comps/main/MainContainer'

function App() {

  return (
    <>
      <div className="main">
        <div className="sidebar-container">
          <Sidebar/>
        </div>
        <MainContainer/>
      </div>
    </>
  )
}

export default App
