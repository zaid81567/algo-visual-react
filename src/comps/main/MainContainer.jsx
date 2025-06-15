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
import AlgoDescription from './AlgoDescription';

function MainContainer({selectedAlgo}) {
  const algo = ALGORITHMS[selectedAlgo]
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const handleSelectLanguage = (event) => {
    setSelectedLanguage(event.target.value);
  };

  return (
        <div className="main-container">
          <div className="main-left">
          <div className="header">{algo.name}</div>
            {/* display the algo visualisation */}
            <div className="visual-container">
              <P5Wrapper key={algo.name} setup={algo.setup} draw={algo.draw} />
            </div>
            {/* display the algo description */}
            <AlgoDescription algoData={algo.data} />
          </div>

          {/* display the code in the right side */}
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