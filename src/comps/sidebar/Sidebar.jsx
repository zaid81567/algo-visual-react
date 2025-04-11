import React from 'react'
import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="logo">
            <p>Algo Visual</p>
        </div>
        <div className="algo-list">
            <ul>
                <li>Linear Search</li>
                <li>Binary Search</li>
                <li>Bubble Sort</li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar