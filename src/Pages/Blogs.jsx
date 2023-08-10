import React from 'react';
import { useEffect, useState } from 'react';
import BlogCard from '../Componets/BlogCard';


function Blogs() {

    const [data , setdata] = useState([]);

    const auth = JSON.parse(localStorage.getItem('user'));
    const userId = auth.user._id
    
    
   

    const allBlogs = async()=>{
       let blogs = await fetch('https://blog-backened.onrender.com/get/all/blogs',{
          method:'get',
          headers:{'Content-Type' : 'application/json'}
       });
       blogs = await blogs.json();
       setdata(blogs.allBlogs)
       
    }
    
    useEffect(()=>{
        allBlogs();
    },[])

  return (
    <div className='w-full z-1'>
       <div className='m-2 mt-5'>
          <div className='grid grid-cols-1 md:grid-cols-2 md  gap-4'>
            
             {
                data.map((item,i)=>{
                  return(
                     <BlogCard 
                     title={item.title}
                      blogId={item._id}
                      isUser={userId === item.user}
                     desc={item.description}
                     createdate={item.createdAt}
                     img={item.image}
                      />
                     
                      
                  )
                })
             }
          </div>
       </div>
    </div>
  )
}

export default Blogs