import PropTypes from 'prop-types';

const ReadingTime = ({readingTime}) => {
    return (
        <div className='bg-slate-400 rounded-xl my-3 p-4 text-center font-bold tetx-5xl'>
            <h1>Spent time on read: <span>{readingTime}</span>min</h1>
        </div>
    );
};

ReadingTime.propTypes = {
    readingTime: PropTypes.object.isRequired
}
export default ReadingTime;