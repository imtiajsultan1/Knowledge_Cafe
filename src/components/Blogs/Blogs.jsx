import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleAddToBookmark, handleMarkAsRead}) => {

    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="w-2/3">
            <h1 className="text-4xl mb-4 mt-4">Blogs : {blogs.length}</h1>
            {
                blogs.map( blog => <Blog blog={blog} key={blog.id} handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead} ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark : PropTypes.func,
    handleMarkAsRead : PropTypes.func
}
export default Blogs;