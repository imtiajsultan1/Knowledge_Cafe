import { FaBookmark  } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
    const {id,title, cover, author, author_img, reading_time, posted_date, hashtags} = blog;
    return (
        <div className="mb-20">
            <img className="w-full mb-8 rounded-xl" src={cover} alt="" />
            <div className="flex justify-between">
                <div className="flex gap-6 mb-4">
                    <img src={author_img} className="rounded-full w-14" alt="" />
                    <div className="flex flex-col">
                        <h3 className="text-2xl">{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                    
                </div>
                <div className='flex flex-col'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleAddToBookmark(blog)} className='border-slate-200 border-solid border p-4 rounded-xl hover:border-amber-500 active:bg-yellow-200 cursor-pointer'><FaBookmark className='inline mr-2 text-2xl'></FaBookmark>Bookmark</button>
                </div>
            </div>
            <h2 className="text-4xl mb-4">{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, idx) => <span key={idx}><a href="">#{hashtag}</a> </span>)
                }
            </p>
            <button className='mt-4 text-purple-800 font-bold underline cursor-pointer' onClick ={ () => handleMarkAsRead(reading_time, id) }>Mark As Read</button>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object.isRequired,
    handleAddToBookmark : PropTypes.func,
    handleMarkAsRead : PropTypes.func
}

export default Blog;