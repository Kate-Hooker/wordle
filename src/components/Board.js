import React from 'react'
import { useState } from 'react'



function Board() {
  const [board, setBoard] = useState(boardDefault)

  return (
    <div classname="board">
      {''}
      <div classname="row"></div>
      <div classname="row"></div>
      <div classname="row"></div>
      <div classname="row"></div>
      <div classname="row"></div>
      <div classname="row"></div>
    </div>
  )
}

export default Board
