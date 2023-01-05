import React from 'react'
import min from '../assets/img/minimun.png'
import little from '../assets/img/little.png'

const Landlord = () => {
  return (
    <div id='landlord' className='p-12 bg-white'>
      <h1 className='text-lg md:text-3xl font-bold font-inter'>
        minimum living cost takes care of everything
      </h1>
      <div className='flex items-center pt-10'>
        <div className='w-[400px]'>
          <img src={min} alt='/' />
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 font-inter gap-4 md:gap-0'>
          <div className='pb-4'>
            <img
              src={little}
              alt='/'
              className='cursor-pointer hover:scale-125'
            />
            <p className='font-bold  break-words'>Pay As Little As Possible!</p>
          </div>
          <div className='pb-4'>
            <img
              src={little}
              alt='/'
              className='cursor-pointer hover:scale-125'
            />
            <p className='font-bold'>Enjoy wisdom of community!</p>
          </div>
          <div className='pb-4'>
            <img
              src={little}
              alt='/'
              className='cursor-pointer hover:scale-125'
            />
            <p className='font-bold'>
              Let's somebody else take care of Landlord!
            </p>
          </div>
          <div className='pb-4'>
            <img
              src={little}
              alt='/'
              className='cursor-pointer hover:scale-125'
            />
            <p className='font-bold'>Enjoy peaceful Environment!</p>
          </div>
          <div className='pb-4'>
            <img
              src={little}
              alt='/'
              className='cursor-pointer hover:scale-125'
            />
            <p className='font-bold'>Stay Safe! Save Money!</p>
          </div>
          <div className='pb-4'>
            <img
              src={little}
              alt='/'
              className='cursor-pointer hover:scale-125'
            />
            <p className='font-bold'>Pay for what you use !</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landlord
