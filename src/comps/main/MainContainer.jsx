import React from 'react'
import './MainContainer.css'
import P5Wrapper from '../P5Wrapper'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { linearSearchSetup, linearSearchDraw } from '../../algorithms/searching/linearSearch'
// import { bubbleSortSetup, bubbleSortDraw } from '../../algorithms/sorting/bubbleSort'
import { ALGORITHMS } from '../../algorithms/algorithmsRegistry'

function MainContainer({selectedAlgo}) {
  const algo = ALGORITHMS[selectedAlgo]
  const codeString = '(num) => num + 1';  // for code block

  return (
        <div className="main-container">
          <div className="main-left">
          <div className="header">{algo.name}</div>
            <div className="visual-container">
              <P5Wrapper key={algo.name} setup={algo.setup} draw={algo.draw} />
            </div>
            <div className="description">
              {/* {algo.description} */}
              
              <div class="algo-description-box">
  <p>
    <strong>Linear Search</strong> is the simplest search algorithm. It checks each element in the list one by one until the target element is found or the end of the list is reached.
    It is useful for small or unsorted arrays where implementing more complex algorithms is unnecessary.
  </p>
  <ul class="complexity-list">
    <li><span class="label">Time Complexity (Best):</span> O(1)</li>
    <li><span class="label">Time Complexity (Worst):</span> O(n)</li>
    <li><span class="label">Space Complexity:</span> O(1)</li>
  </ul>
</div>
            </div>
          </div>

          <div className="main-right">
              <div className="header">Code</div>
              <div className="code">
                <SyntaxHighlighter 
                  language="python" 
                  style={vscDarkPlus} 
                  showLineNumbers={true}
                  wrapLines={true}
                  wrapLongLines={true}
                  lineProps={lineNumber => ({
                    style: { width: '100%', display: 'block', padding: '0.2rem 0.5rem', backgroundColor: '#1e1e1e' }
                  })}
                  customStyle={{
                    width: '100%',
                    maxWidth: '100%',
                    boxSizing: 'border-box',
                    backgroundColor: '#000',
                    color: '#eee',
                    borderRadius: '8px',
                    padding: '1rem',
                    overflowX: 'auto',
                    whiteSpace: 'pre-wrap', // wraps long lines
                    wordBreak: 'break-word'
                  }}
                  >
                  {algo.code.python}
                </SyntaxHighlighter>
              </div>
          </div>
        </div>
  )
}

export default MainContainer