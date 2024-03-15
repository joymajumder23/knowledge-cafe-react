import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header></Header>
      <main className='flex'>
      <Blogs></Blogs>
      <Bookmarks></Bookmarks>
      </main>
    </>
  )
}

export default App
