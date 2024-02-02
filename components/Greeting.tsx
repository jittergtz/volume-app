import React from 'react';

function Greeting() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting = '';

  if (currentHour >= 6 && currentHour < 12) {
    greeting = 'Guten Morgen';
  } else if (currentHour >= 12 && currentHour < 19) {
    greeting = 'Guten Tag';
  } else {
    greeting = 'Guten Abend';
  }

  return (
    <h1 className='text-neutral-200/60 tracking-tight text-2xl font-semibold'>
      {greeting}
    </h1>
  );
}

export default Greeting;
