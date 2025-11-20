import React from 'react'
import Hero from '../components/Hero'
import Main from '../components/main'

const Home = () => {
  return (
    <div>
        <div className='divider-sm'></div>
        <div className=' home rounded-lg'>
           <Hero/>
           <Main/>
        </div>
    </div>
  )
}

export default Home