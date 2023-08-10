import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';



const Login = () => {

  
  const navigate = useNavigate();
  
  const [email , setemail] = useState();
  const [password , setpassword] = useState();

   const obj = { email, password}

   const handleSubmt = async(e) =>{
    e.preventDefault();
    let login = await fetch('https://blog-backened.onrender.com/user/login', {
      method:'post',
      body: JSON.stringify(obj),
      headers:{'Content-Type' : 'application/json'}
    });

    login = await login.json();
    
    if(login.success == true){
      localStorage.setItem('user', JSON.stringify(login));
      alert('Logged In Successfully !') 
      navigate('/blogs') 
      
    }

    if(!login.user.email){
      alert('please enter valid email') 
    }

    if(!login.user.password){
      alert('please enter valid email') 
    }

  }
  
  return (
    <div className='w-full flex   justify-center '>
       <div className='w-[400px] h-[400px] border shadow-md p-3 m-2 mt-10'>
        <h1 className='text-center text-2xl font-bold font-[poppins] text-yellow-400'>Login</h1>
          <form onSubmit={handleSubmt} className='flex flex-col gap-5 p-10 mt-6'>
            
            <div>
              <input required onChange={(e)=>setemail(e.target.value)} type="text" className='outline-none p-2 border-b w-full' placeholder='Enter Email' />
            </div>
            <div>
              <input required onChange={(e)=>setpassword(e.target.value)} type="text" className='outline-none p-2 border-b w-full' placeholder='Enter Password' />
            </div>

            <div className='mt-2'>
              <button className='shadow-sm border px-4 p-2 w-[90px] bg-yellow-400 text-white font-bold hover:opacity-80 rounded duration-500'>
                Submit
              </button>
            </div>
          </form>
       </div>
    </div>
  )
}

export default Login