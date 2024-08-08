import React from 'react'

const Card = ({ activeCard, nextCard, prevCard, visibilityStyle }) => {
   return (
      <div className={`w-[90%] sm:w-[400px] h-1/2 p-4 bg-custom-card border-4 border-custom-slider-card rounded-3xl transform transition-all duration-500 opacity-100
      ${visibilityStyle}
      ${activeCard ? 'translate-y-[50%] z-30 scale-100' : 'scale-75'}
      ${nextCard && 'translate-y-[150%] z-20'}
      ${prevCard && 'translate-y-[-50%] z-10 opacity-40'}
      bg-red-800
      absolute
      `}
      >
         <div className='w-full h-1/2 shadow-custom-innerShadow bg-custom-pink rounded-2xl border-4 border-custom-slider-card-content'></div>
         <div className='flex w-full justify-between gap-2 mt-6'>
            <div className='w-8 h-8 rounded-full shadow-custom-innerShadow bg-custom-pink border-4 border-custom-slider-card-content'></div>
            <div className='w-72 flex flex-col gap-2' >
               <div className='h-6 rounded-lg shadow-custom-innerShadow bg-custom-pink border-4 border-custom-slider-card-content'></div>
               <div className='w-4/5 h-2 rounded-full shadow-custom-innerShadow bg-custom-pink border-4 border-custom-slider-card-content'></div>
            </div>
         </div>
      </div>
   )
}

export default Card