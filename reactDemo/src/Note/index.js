import React, { useState, useEffect } from 'react'
import useTimer from './timer';

export default function Note() {

  const [counter, updateCounter] = useState(0);
  const date = useTimer();

  return (
    <div>
      <div>
      This is the note component {counter} and it is currently {date}
      </div>
      <button onClick={() => updateCounter(counter+1)}>Update</button>
    </div>
  )
}
