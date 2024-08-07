import React from 'react'

const Card = () => {
   return (
      <div className='w-96 h-96 p-4 border-4 border-pink-300 rounded-3xl'>
         <div className='w-full h-1/2 shadow-custom-innerShadow bg-pink-400 border-4 border-pink-300 rounded-2xl'></div>
         <div className='flex w-full justify-between gap-2 mt-6'>
            <div className='w-12 h-12 rounded-full border-4 border-pink-300'></div>
            <div className='w-72 flex flex-col gap-2'>
               <div className='h-6 rounded-lg border-4 border-pink-300'></div>
               <div className='w-4/5 h-2 rounded-full border-4 border-pink-300'></div>
            </div>
         </div>
      </div>
   )
}

export default Card