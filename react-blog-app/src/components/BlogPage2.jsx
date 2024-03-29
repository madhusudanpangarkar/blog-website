import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';
import { Link } from 'react-router-dom';
import axios from 'axios';

const BlogPage2 = () => {
    const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    async function fetchBlogs() {
      let url = `http://localhost:3001/blogs?page=${currentPage}&limit=${pageSize}`;

      //filter by category
      if(selectedCategory) {
        url += `&category=${selectedCategory}`;
      }

      const response = await fetch(url);
      const data = await response.json();
      setBlogs(data);
    }

    fetchBlogs();
  }, [currentPage, pageSize, selectedCategory])


  //page changing button
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);

  }
  return (
    <div>
         {/* category section */}
      <div>
        <CategorySelection onSelectCategory={handleCategoryChange} selectedCategory={selectedCategory} activeCategory={activeCategory}/>
      </div>

      {/* blogCards section */}
    <div className='flex flex-col lg:flex-row gap-12'>
        <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize}/>
        {/* {blogs2 && blogs2.map((blog) => <BlogCard2
          title={blog.title}
          description={blog.description}
          image={blog.image}
          username={blog.username}
          time={blog.createdAt}
        />)} */}
        {/* {blogs && blogs.map((blogs2) => <BlogCards/>)} */}

        <div>
          <SideBar/>
        </div>
      </div>
      {/* pagination section */}
      <div>
        <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize}/>
      </div>
    </div>
  )
}

export default BlogPage2