import React, { useState, useEffect } from 'react'

export default function Note() {

  const [counter, updateCounter] = useState(0);
  const [date, updateDate] = useState(new Date().toTimeString());

  useEffect(() => {
      const interval = setInterval(() => {
        updateDate(new Date().toTimeString());
      }, 1000);
      
      return () => {
        clearInterval(interval);
      }
  }, []); 

  return (
    <div>
      <div>
      This is the note component {counter} and it is currently {date}
      </div>
      <button onClick={() => updateCounter(counter+1)}>Update</button>
    </div>
  )
}
