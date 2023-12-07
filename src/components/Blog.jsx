import React from 'react'
import Info from './Info'
import Navbar from './navbar'
import './Blog.css'

const Blog = () => {
  return (
    <div>
      <Info />
      <div className="blog">
        <h1>Blog</h1>
        <h2>Will Update Soon</h2>
      </div>

      <Navbar />
    </div>
    
  )
}

export default Blog