
import React from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function PrivateComp() {

    const navigate = useNavigate();
    const auth = localStorage.getItem('user')
    console.log(auth)

  return (
    <div>
        {
            auth ? <Outlet/>: navigate('/blogs')
        }
            
    </div>
  )
}

export default PrivateComp