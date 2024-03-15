import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    // console.log(bookmark);
    const {Title} = bookmark;
    return (
        <div className='text-xl'>
            <h3 className=' bg-slate-100 rounded-xl p-2 mb-3'>{Title}</h3>
        </div>
    );
};
Bookmark.propTypes = {
    Bookmark: PropTypes.object.isRequired
}
export default Bookmark;