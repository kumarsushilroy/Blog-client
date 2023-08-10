import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddBlog() {

 const navigate = useNavigate();

  const [title, settitle] = useState();
  const [description, setdescription] = useState();
  const [image, setimage] = useState();
  // const [user, setuser] = useState();

  const auth = JSON.parse(localStorage.getItem('user'));
  const userId = auth.user._id
  
  
  
  
  
  const obj = {title, description, image, user:userId}
  
  const handleSubmit = async(e)=>{
    e.preventDefault();
    let addBlog = await fetch('https://blog-backened.onrender.com/create/blog',{
      method:'post',
      body:JSON.stringify(obj),
      headers:{'Content-Type' : 'application/json'}
    });


    addBlog = await addBlog.json()
    alert('Blog Added Successfully');
    navigate('/userblogs')
  }

  return (
    <div className="w-full">
      <div className=" ">
        <div className="w-[300px] sm:w-[400px]  h-[500px] border mx-auto m-2 mt-10 shadow-md p-3">
          <h1 className="text-center font-bold text-2xl text-yellow-400">Add Blog</h1>
          <form onSubmit={handleSubmit} className="p-4 mt-4">
            <input type="text" required onChange={(e)=>settitle(e.target.value)} className="outline-none p-3 my-3 border-b w-full" placeholder="Title"  />
            <input type="text" required onChange={(e)=>setdescription(e.target.value)} className="outline-none p-3 my-3 border-b w-full" placeholder="Description"  />
            <input type="text" required onChange={(e)=>setimage(e.target.value)} className="outline-none p-3 my-3 border-b w-full" placeholder="Enter image url"  />
            <button type='submit' className="border px-5 py-2    w-[130px] bg-yellow-400 text-white font-bold hover:opacity-80 rounded duration-500">+ Add</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
