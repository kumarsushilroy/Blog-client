import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function BlogCard({ title, desc, img, createdate, blogId, isUser }) {
  const navigate = useNavigate();

  const deleteBlog = async (dlt) => {
    let Delete = await fetch(`https://blog-backened.onrender.com/delete/blog/${dlt}`, {
      method: "delete",
      headers: { "Content-Type": "application/json" },
    });
    Delete = await Delete.json();
    alert("Are You Sure !");
    navigate("/blogs");
  };

  return (
    <div className="p-10 border shadow-md relative">
      
        <div className="">
          {isUser ? (
            <div className=" right-4 top-2 flex gap-4 absolute ">
              <Link to={`/updateblog/${blogId}`}>
                {" "}
                <AiFillEdit
                  size={25}
                  className="text-green-500 cursor-pointer hover:opacity-70 duration-300  "
                />{" "}
              </Link>
              <AiFillDelete
                size={25}
                onClick={(e) => deleteBlog(blogId)}
                className="text-red-500 cursor-pointer hover:opacity-70 duration-300"
              />
            </div>
          ) : (
            ""
          )}
        </div>
<div className="justify-between flex p-2">
        <h1 className="font-bold ">Title : <span className="text-gray-400 text-xl">{title}</span></h1>
        <h1 className="text-gray-500">{createdate}</h1>
        </div>
      <img className="w-full h-[320px] object-cover" src={img} alt="" />
      <h1 className="p-2 font-bold">Description : <span className="text-gray-500">{desc}</span></h1>
    </div>
  );
}

export default BlogCard;
