import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


function UpdateBlog() {

  const navigate = useNavigate();

  const params = useParams();
  const paramsId = params.id;
  

  const [title, settitle] = useState();
  const [description, setdescription] = useState();
  const [image, setimage] = useState();

  const auth = JSON.parse(localStorage.getItem('user'));
  const userId = auth.user._id

  const obj = {title, description, image, user:userId}

  const fetchData = async()=>{
     let editedData = await fetch(`https://blog-backened.onrender.com/get/single/blog/${paramsId}`,{
      method:'get',
      headers:{'Content-Type':'application/json'}
     });
     editedData = await editedData.json();
    //  console.log(editedData.getSingle.description);
    settitle(editedData.getSingle.title);
    setdescription(editedData.getSingle.description);
    setimage(editedData.getSingle.image);
  }
  useEffect(()=>{
      fetchData();
  },[])
  
  const handleSubmit = async(e)=>{
    e.preventDefault();
    let editBlog = await fetch(`https://blog-backened.onrender.com/update/blog/${paramsId}`,{
      method:'put',
      body:JSON.stringify(obj),
      headers:{'Content-Type' : 'application/json'}
    });


    editBlog = await editBlog.json()
    alert('Blog updated Successfully');
    navigate('/blogs')
    
  }

  return (
    <div className="w-full">
      <div className=" ">
        <div className="w-[300px] sm:w-[400px] h-[500px] border mx-auto mt-10 shadow-md p-3">
          <h1 className="text-center font-bold text-2xl text-yellow-400">Update Blog</h1>
          <form onSubmit={handleSubmit} className="p-4 mt-4">
            <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} className="outline-none p-3 my-3 border-b w-full" placeholder="Title"  />
            <input type="text" value={description} onChange={(e)=>setdescription(e.target.value)} className="outline-none p-3 my-3 border-b w-full" placeholder="Description"  />
            <input type="text" value={image} onChange={(e)=>setimage(e.target.value)} className="outline-none p-3 my-3 border-b w-full" placeholder="Image"  />
            <button type='submit' className="border px-5 py-2   bg-yellow-400 text-white font-bold hover:opacity-80 rounded duration-500 w-[130px]">Update</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateBlog