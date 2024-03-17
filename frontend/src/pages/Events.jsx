import React from 'react';
import Card1 from "../components/Card1";
import Card2 from "../components/Card2";

const Events = () => {
  return (
    <div 
      id='events' 
      className='h-screen px-24'
      style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
    >
      <div className='flex items-center justify-center gap-48'>
        <Card1 />
        <Card2 />
      </div>
    </div>
  )
}

export default Events