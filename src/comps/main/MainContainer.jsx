import React, { useState } from 'react'
import './MainContainer.css'
import P5Wrapper from '../P5Wrapper'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { linearSearchSetup, linearSearchDraw } from '../../algorithms/searching/linearSearch'
// import { bubbleSortSetup, bubbleSortDraw } from '../../algorithms/sorting/bubbleSort'
import { ALGORITHMS } from '../../algorithms/algorithmsRegistry'

function MainContainer({selectedAlgo}) {
  const algo = ALGORITHMS[selectedAlgo]
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const handleSelectLanguage = (event) => {
    setSelectedLanguage(event.target.value);
  };

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
              <div className="main-right-header-container">
                <div className="header">Code</div>
                <select 
                  name="selectedLanguage" 
                  id="selectedLanguage"
                  value={selectedLanguage}
                  onChange={handleSelectLanguage}
                >
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="c">C</option>
                </select>
              </div>
              <div className="code">
                <SyntaxHighlighter 
                  language={selectedLanguage} 
                  style={monokai} 
                  showLineNumbers={true}
                  wrapLines={true}
                  wrapLongLines={true}
                  customStyle={{ 
                    backgroundColor: "black", 
                    borderRadius: '8px', 
                    padding: '20px', 
                    fontSize: '14px',
                    height: '100%',
                  }}
                  >
                  {algo.code[selectedLanguage]}
                </SyntaxHighlighter>
              </div>
          </div>
        </div>
  )
}

export default MainContainer