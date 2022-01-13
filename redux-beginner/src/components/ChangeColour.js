import React, { useState } from 'react'

const ChangeColour = () => {
  const [colour, setColour] = useState("");
  return (
    <div>
      <input type="text" onChange={(event) => {setColour(event.target.value)}} />
      <button>Change Colour</button>
    </div>
  )
}

export default ChangeColour
