import React from 'react'

const Card = ({ activeCard, nextCard, prevCard, visibilityStyle }) => {
   // console.log("prevCard", prevCard, "nextCard", nextCard)
   console.log("visibilityStyle", visibilityStyle)
   return (
      <div className={`w-96 max-w-xs h-1/2 p-4 border-4 border-pink-300 rounded-3xl transform transition-all duration-500 
      ${visibilityStyle}
      ${activeCard ? 'translate-y-[50%] z-30 scale-100' : 'scale-75'}
      ${nextCard && 'translate-y-[150%] z-20 opacity-100'}
      ${prevCard && 'translate-y-[-50%] z-10 opacity-60'}
      bg-red-800
      absolute
      `}>
         <div className='w-full h-1/2 shadow-custom-innerShadow bg-pink-400 border-4 border-pink-300 rounded-2xl'></div>
         <div className='flex w-full justify-between gap-2 mt-6'>
            <div className='w-2/12 h-2/12 rounded-full border-4 border-pink-300'></div>
            <div className='w-72 flex flex-col gap-2'>
               <div className='h-6 rounded-lg border-4 border-pink-300'></div>
               <div className='w-4/5 h-2 rounded-full border-4 border-pink-300'></div>
            </div>
         </div>
      </div>
   )
}

export default Card