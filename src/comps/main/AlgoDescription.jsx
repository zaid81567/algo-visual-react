import React from 'react'
import './AlgoDescription.css'

function AlgoDescription({ algoData }) {
  return (
    <>
    <div className="algo-data-container">
        <div className="space-comp-container">
            <div className="header">Space Complexity</div>
            <div className='space-comp'>
                <div className="space-comp-best">
                    <span className="label">Best:</span> <p>{algoData.spaceComplexityBest}</p>
                </div>
                <div className="space-comp-worst">
                    <span className="label">Worst:</span> <p>{algoData.spaceComplexityWorst}</p>
                </div>
            </div>
        </div>
        <div className="time-comp-container">
            <div className="header">Time Complexity</div>
            <div className='time-comp'>
                <div className="time-comp-best">
                    <span className="label">Best:</span> <p>{algoData.timeComplexityBest}</p>
                </div>
                <div className="time-comp-worst">
                    <span className="label">Worst:</span> <p>{algoData.timeComplexityWorst}</p>
                </div>
            </div>
        </div>
    </div>
    <div className="description-container">
        <div className="description-text">
            {algoData.description}
        </div>
    </div>

    </>
  )
}

export default AlgoDescription