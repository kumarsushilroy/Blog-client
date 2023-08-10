import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();
  const [username , setusername] = useState();
  const [email , setemail] = useState();
  const [password , setpassword] = useState();

   const obj = {username, email, password}

  const handleSubmt = async(e) =>{
    e.preventDefault();
    let Register = await fetch('https://blog-backened.onrender.com/register/user', {
      method:'post',
      body: JSON.stringify(obj),
      headers:{'Content-Type' : 'application/json'}
    });

    Register = await Register.json();

    if(Register.success){
      localStorage.setItem('user', JSON.stringify(Register))
      alert('Registered Successfully !')
      navigate('/')
    }

  }

  return (
    <div className='w-full flex   justify-center '>
       <div className='w-[400px] h-[400px] border shadow-md p-3 mt-10'>
        <h1 className='text-center text-2xl font-bold font-[poppins] text-yellow-400'>Register</h1>
          <form onSubmit={handleSubmt} className='flex flex-col gap-5 p-10 mt-6'>
            <div>
              <input onChange={(e)=>setusername(e.target.value)} type="text" className='outline-none border-b p-2 w-full ' placeholder='Enter Username' />
            </div>
            <div>
              <input onChange={(e)=>setemail(e.target.value)} type="text" className='outline-none p-2 border-b w-full' placeholder='Enter Email' />
            </div>
            <div>
              <input onChange={(e)=>setpassword(e.target.value)} type="text" className='outline-none p-2 border-b w-full' placeholder='Enter Password' />
            </div>

            <div className='mt-2'>
              <button className='shadow-sm border px-4 p-2 w-[90px] hover:opacity-80 bg-yellow-400 rounded text-white font-bold duration-500'>
                Submit
              </button>
            </div>
          </form>
       </div>
    </div>
  )
}

export default Register