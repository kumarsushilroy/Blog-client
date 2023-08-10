import React, { useEffect, useState } from 'react'
import BlogCard from '../Componets/BlogCard';

function UserBlogs() {

    const auth = JSON.parse(localStorage.getItem('user'))
     const userId = auth.user._id;
     const username = auth.user.username;

     const [blog , setblog] = useState([])
     
    const userBlog = async()=>{
       let getUserBlog = await fetch(`https://blog-backened.onrender.com/get/singleuser/blog/${userId}`,{
        method:'get',
        headers:{'Content-Type': 'application-json'}
       });
       getUserBlog = await getUserBlog.json();
       const getblog = getUserBlog.userBlog.blogs
       setblog(getblog)

    }

    useEffect(()=>{
         userBlog();
    },[])

  return (
    <div className='w-full'>
           <h1 className='text-center sm:w-[400px] w-[300px] bg-red-500 text-white mx-auto p-2 rounded'>WELCOME :<span className='font-bold text-xl ml-2 '>{username}</span> </h1>
       <div className='grid grid-cols-1 md:grid-cols-2  gap-4 mt-5 m-2'>
         {
          blog.length > 0 ? blog.map((item,i)=>{
                return(
                    <BlogCard
                     title={item.title}
                      blogId={item._id}
                      isUser={true}
                      desc={item.description}
                      key={i}
                      createdate={item.createdAt}
                      img={item.image}
                     />
                )
            }) : <h1 className='text-2xl text-red-500 absolute font-bold left-[100px]'>Sorry No Blogs Available !</h1>
         }
       </div>
    </div>
  )
}

export default UserBlogs