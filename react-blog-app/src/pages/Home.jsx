import React from 'react'
import Banner from '../components/Banner'
import BlogPage from '../components/BlogPage'
import BlogPage2 from '../components/BlogPage2'

const Home = () => {
  return (
    <div>
      <Banner/>
      <div className='max-w-7xl mx-auto'>
        <BlogPage2/>
      </div>
    </div>
  )
}

export default Home