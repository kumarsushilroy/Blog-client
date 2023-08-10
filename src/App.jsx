
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Navbar } from './Componets/Navbar';
import Login from './Pages/Login';
import Register from './Pages/Register'
import Blogs from './Pages/Blogs';
import PrivateComp from './Componets/PrivateComp';
import UserBlogs from './Pages/UserBlogs';
import AddBlog from './Pages/AddBlog';
import UpdateBlog from './Pages/UpdateBlog';





function App() {
 

  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route element={<PrivateComp/>}>
             <Route path='/blogs' element={<Blogs/>} />
             <Route path='/userblogs' element={<UserBlogs/>} />
             <Route path='/addblog' element={<AddBlog/>} />
             <Route path='/updateblog/:id' element={<UpdateBlog/>} />
             
             
          </Route>
          <Route path='/register' element={<Register/>} />
             <Route path='/' element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
