import { IoBookmarkSharp } from "react-icons/io5";
import PropTypes from 'prop-types';
const Blog = ({blog, handleBookmarks, handleReadingTime}) => {
    const {Cover, Title, Author_image, Author, Posted_date, Reading_time, Hashtags} = blog;
    // console.log(blog);
    return (
        <div className='space-y-2 mt-6'>
            <img className='w-full rounded-xl' src={Cover} alt="" />

            <div className='md:flex md:justify-between items-center mt-3'>
            <div className='flex items-center gap-5'>
            <div>
                <img className='w-16' src={Author_image} alt="" />
            </div>
            <div>
                <h4>{Author}</h4>
                <p>{Posted_date}</p>
            </div>
            </div>
            <div>
                <p>{Reading_time} min read</p>
                <button onClick={()=> handleBookmarks(blog)}>
                    <IoBookmarkSharp></IoBookmarkSharp>
                </button>
            </div>
            </div>

            <h1 className='text-4xl font-bold'>{Title}</h1>
            {
                Hashtags.map((hash, idx) => <span key={idx} className='text-slate-600'><a href=""> #{hash}</a></span>)
            }
            <div>
            <button onClick={() => handleReadingTime(Reading_time)} className="text-purple-900 font-bold">Mark as read</button>
            </div>
        </div>
    );
};



Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func,
    handleReadingTime: PropTypes.func
}
export default Blog;