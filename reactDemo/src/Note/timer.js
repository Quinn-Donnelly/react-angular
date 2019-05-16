import { useState, useEffect } from 'react';

export default function useTimer() {
    const [date, updateDate] = useState(new Date().toTimeString());

    useEffect(() => {

        fetch(`asdlfkjasldfsadf/${userid}`)

        const interval = setInterval(() => {
          updateDate(new Date().toTimeString());
        }, 1000);
        
        return () => {
          clearInterval(interval);
        }
    }, []); 

    return date;
}