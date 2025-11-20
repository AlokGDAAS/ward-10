import React from 'react'

const Hero = () => {
  return (
    <div className='p-4 flex text-gray-700 font-bold justify-between text-xs'>
        <div>
            <img src='/blank_female.png' alt='parsad' className='w-40 rounded-lg'/>
            <div className='text-center pt-2'>
            <p className=''>Anshu agrawal</p>
            <p className=''>Parsad ji</p>
            </div>

        </div>
        <div className='p-10'>
            <p className='text-4xl hidden md:block'>Ward No. 10</p>
        </div>
        <div>
            <img src='/parsad.png' alt='parsad' className='w-40 rounded-lg'/>
            <p className='py-2'>Manish kumar agrawal</p>
        </div>        
    </div>
  )
}

export default Hero