import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header'
import PropTypes from 'prop-types';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  console.log(readingTime)

  const handleBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleReadingTime = time => {
    // console.log(time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  }
  // console.log(readingTime)
  return (
    <>
      <header className='mx-auto container'>
      <Header></Header>
      </header>
      <main className='md:flex mx-auto container gap-5'>
      <Blogs handleReadingTime = {handleReadingTime} handleBookmarks = {handleBookmarks}></Blogs>
      <Bookmarks bookmarks = {bookmarks} readingTime = {readingTime}></Bookmarks>
      </main>
    </>
  )
}

App.propTypes = {
  handleBookmarks: PropTypes.func
}
export default App
