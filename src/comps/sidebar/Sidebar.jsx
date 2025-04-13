import React, { useState } from 'react'
import './Sidebar.css'
import { ALGORITHMS } from '../../algorithms/algorithmsRegistry';

function Sidebar({selectedAlgo, setSelectedAlgo}) {
  // map funcs only works on array so converting : object -> array
  const algos = Object.values(ALGORITHMS);

  return (
    <div className="sidebar-container">
      <div className="sidebar">
          <div className="logo">
              <p>Algo Visual ✨</p>
          </div>
          <div className="algo-list">
              <ul>
                {algos.map((algo)=>(
                  <li 
                    key={algo.key} 
                    onClick= {()=>{setSelectedAlgo(algo.key);} }
                    className={selectedAlgo == algo.key?"active":""}
                  >
                    {algo.name}
                  </li>
                )
                )}
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Sidebar