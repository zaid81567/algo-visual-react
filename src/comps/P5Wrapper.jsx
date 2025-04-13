import React, {useEffect, useRef} from 'react'
import Sketch from 'react-p5'

function P5Wrapper({setup, draw}) {

  return (
    <Sketch setup={setup} draw={draw}/>
  )
}

export default P5Wrapper