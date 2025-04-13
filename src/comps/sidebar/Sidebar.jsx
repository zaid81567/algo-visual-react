import React, { useState } from 'react'
import './Sidebar.css'

function Sidebar({setSelectedAlgo}) {

  return (
    <div className="sidebar-container">
      <div className="sidebar">
          <div className="logo">
              <p>Algo Visual ✨</p>
          </div>
          <div className="algo-list">
              <ul>
                  <li onClick= {()=>{setSelectedAlgo('linearSearch');} }>Linear Search</li>
                  <li onClick= {()=> setSelectedAlgo('binarySearch')}>Binary Search</li>
                  <li onClick= {()=> setSelectedAlgo('bubbleSort')}>Bubble Sort</li>
              </ul>
          </div>
      </div>
    </div>
  )
}

export default Sidebar