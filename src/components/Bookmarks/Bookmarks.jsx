import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';
import ReadingTime from '../ReadingTime/ReadingTime';
const Bookmarks = ({bookmarks, readingTime}) => {
    // console.log(bookmarks);
    return (
        <div>
            <ReadingTime readingTime = {readingTime}></ReadingTime>
            {/* <h1>Spent time on read: <span></span></h1> */}
            <div className="bg-slate-400 p-4 3/2 rounded-xl">
            <h1>Bookmarks : {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark = {bookmark}></Bookmark>)
            }
        </div>
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.object.isRequired,
    readingTime: PropTypes.object.isRequired,
    handleReadingTime: PropTypes.func
}
export default Bookmarks;