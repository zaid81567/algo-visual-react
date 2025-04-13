import React from 'react'
import './MainContainer.css'
import P5Wrapper from '../P5Wrapper'
import { linearSearchSetup, linearSearchDraw } from '../../algorithms/searching/linearSearch'
import { bubbleSortSetup, bubbleSortDraw } from '../../algorithms/sorting/bubbleSort'
import { ALGORITHMS } from '../../algorithms/algorithmsRegistry'

function MainContainer({selectedAlgo}) {
  const algo = ALGORITHMS[selectedAlgo]
  return (
        <div className="main-container">
          <div className="main-left">
          <div className="header">{algo.name}</div>
            <div className="visual-container">
              <P5Wrapper key={algo.name} setup={algo.setup} draw={algo.draw} />
            </div>
            <div className="description">
              {algo.description}
            </div>
          </div>

          <div className="main-right">
              <div className="header">Code</div>
              <div className="code">
                {algo.code}
              </div>
          </div>
        </div>
  )
}

export default MainContainer