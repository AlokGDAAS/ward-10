import React from 'react'

const Navbar = () => {
  return (
    <div className=' bg-[#278D27]'>
      <div className='p-2 md:w-10/12 mx-auto flex justify-between'>
        <img src='/logo.png' alt='logo' className='w-18'/>  
        
          <ul className='flex items-center gap-16 text-lg text-white font-semibold hidden'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Parsad ji</li>
            <li className='cursor-pointer'>Projects</li>
            <li className='cursor-pointer'>Welfare</li>
            <li className='cursor-pointer'>Archive</li>
            <li className='cursor-pointer'>Contact</li>
          </ul>
      

        <img src='/logo.png' alt='logo' className='w-18'/>  

      </div>
    </div>
  )
}

export default Navbar