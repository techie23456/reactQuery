import Home from './components/home'
import PostTraditional from './components/PostTraditional'
import PostRQ from './components/PostRQ'
import PostDetailsRQ from './components/PostDetailsRQ'
import PaginatedQueries from './components/PaginatedQueries'
import InfiniteScroll from './components/InfiniteScroll'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import './App.css'

function App() {
/*
  return (
    <>
    <PostTraditional />
        </>
  )*/
 return (
 <BrowserRouter>
 <div>
  <nav>
    <ul>
      <li>
        <Link to= "/">Home</Link>  
     </li>
     <li>
      <Link to="/posts" >Traditional Posts</Link>
     </li>
     <li>
      <Link to="/rq-posts">RQ Posts</Link>
     </li>
    </ul>
  </nav>

  <Routes>
    <Route exact path = "/" element ={<Home/>} />
    <Route exact path ="/posts" element = {<PostTraditional />} />
    <Route exact path ="/rq-posts" element = {<PostRQ />} />
    <Route exact path ="/rq-posts/:postID" element = {<PostDetailsRQ /> } />
     <Route exact path ="/paginated-fruits" element = {<PaginatedQueries /> } />
     <Route exact path ="/infinite-scroll" element = {<InfiniteScroll /> } />
  </Routes>
 </div>
 </BrowserRouter>
 )
}

export default App
