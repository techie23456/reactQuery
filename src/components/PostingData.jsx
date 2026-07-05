import {React,useState} from 'react'
import axios from 'axios'
import {useMutation, useQuery} from '@tanstack/react-query'
import {Link} from 'react-router-dom'
 
//fetch method
const fetchPosts = () =>{
      // return axios.get("http://localhost:4000/fruits")
   //   console.log("page ::: " , pageParam)
       return axios.get("http://localhost:4000/posts")

    }

    // post method

    const addPosts = (post) =>{
      // return axios.get("http://localhost:4000/fruits")
   //   console.log("page ::: " , pageParam)
       return axios.post("http://localhost:4000/posts",post)

    }

const PostingData = () => {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");


   const {data,isLoading,isError, isFetching,refetch} = useQuery({
     queryKey : ["posts"],
     queryFn : fetchPosts,
    //  staleTime:5000
    //refetchInterval:1000
    }) 

    const {mutate} = useMutation({
       mutationFn:addPosts 
    })

    const handleSubmit = (e) =>{

      console.log("################")
      e.preventDefault()

      const post = {title, body}
     console.log("---",{title, body})
      mutate(post)
      setTitle("")
      setBody("")
    }

if(isLoading){


        return <div>Page is loading...</div>
      }

      if(isError) {
        return  <div>Error has occurred...</div>
      }

  return (
         <div>
          <form onSubmit={handleSubmit}>
             <input 
                   onChange={((e) => setTitle(e.target.value))}
                   placeholder='Enter Post Title'
                   value={title}
              />

               <input 
                   onChange={((e) => setBody(e.target.value))}
                   placeholder='Enter Post Body'
                   value={body}
              />

              <button type='submit'>Post</button>

          </form>
             {data?.data.map(post => (
               <Link to ={`/rq-posts/${post.id}`}>
                 <div key ={post.id} >
                     <h3>{post.title}..........</h3>
                     <p>{post.body}</p>
                 </div>
                 </Link>
             ))}
         </div>
       )
}

export default PostingData
