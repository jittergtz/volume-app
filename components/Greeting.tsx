"use client"
import React, { useEffect, useState } from 'react';



function Greeting() {
  const [greeting, setGreeting] = useState('');
  const currentHour : any = new Date().toLocaleString("de-DE", { hour: "numeric", hour12: false });
  const hour = parseInt(currentHour, 10);

  useEffect(() => {

  
    let greeting = '';
  
    if (hour >= 6 && hour < 12) {
      greeting = 'Guten Morgen';
    } else if (hour >= 12 && hour < 19) {
      greeting = 'Guten Tag';
    } else {
      greeting = 'Guten Abend';
    }
  
    setGreeting(greeting);
  }, [currentHour]);

  return (
    <h1 className='text-neutral-200/60 tracking-tight text-2xl '>
{greeting}
</h1>
   
  );
}

export default Greeting;






