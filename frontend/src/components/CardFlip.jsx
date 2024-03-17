import React from 'react'

const CardFlip = ({ image, name, position, number }) => {
  return (
    <div className='flex flex-col justify-center'>
        <div className='group h-[300px] w-[250px] perspective-1000'>
            <div className='relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]'>
                <div className='absolute inset-0'>
                    <img
                        className='h-full w-full rounded-xl object-cover shadow-xl shadow-black/40' 
                        src={image}
                        alt="User Image" />
                </div>
                <div className='absolute inset-0 h-full w-full rounded-xl bg-black/80 px-2 text-center text-slate-200 rotate-y-180 backface-hidden'>
                    <div className='flex min-h-full flex-col items-center justify-center'>
                        <h1 className='text-[16px] font-bold'>{name}</h1>
                        <p className='text-[12px] mt-3'>{position}</p>
                        <p className='mt-[130px] text-[10px]'>{number}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CardFlip