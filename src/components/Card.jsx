import React from 'react'

const Card = ({ activeCard, nextCard, prevCard, visibilityStyle }) => {
   return (
      <div className={`w-96 max-w-xs h-1/2 p-4 border-4 border-pink-300 rounded-3xl transform transition-all duration-500 
      bg-gradient-to-br from-red-500 to-orange-600
      ${visibilityStyle}
      ${activeCard ? 'translate-y-[50%] z-30 scale-100 ' : 'scale-75'}
      ${nextCard && 'translate-y-[150%] z-20 opacity-100'}
      ${prevCard && 'translate-y-[-50%] z-10 opacity-60'}
      bg-red-800
      absolute
      `}

         style={{ borderColor: 'rgba(235, 168, 162, 0.5)', borderWidth: '4px', background: 'linear-gradient(to bottom right, #DA696F, #B36291)' }}
      >
         <div className='w-full h-1/2 shadow-custom-innerShadow bg-custom-pink rounded-2xl' style={{ borderColor: '#EA9B89', borderWidth: '4px' }}></div>
         <div className='flex w-full justify-between gap-2 mt-6'>
            <div className='w-2/12 h-2/12 rounded-full shadow-custom-innerShadow bg-custom-pink' style={{ borderColor: '#EA9B89', borderWidth: '4px' }}></div>
            <div className='w-72 flex flex-col gap-2' >
               <div className='h-6 rounded-lg shadow-custom-innerShadow bg-custom-pink' style={{ borderColor: '#EA9B89', borderWidth: '4px' }}></div>
               <div className='w-4/5 h-2 rounded-full shadow-custom-innerShadow bg-custom-pink' style={{ borderColor: '#EA9B89', borderWidth: '4px' }}></div>
            </div>
         </div>
      </div>
   )
}

export default Card