import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PostRQ = () => {

  const {data,isLoading,isError,error} = useQuery({
   queryKey : ["posts"],
   queryFn : () =>{
      return axios.get("http://localhost:4000/posts")
   },
  //  staleTime:5000
  refetchInterval:1000
  }) 
  
  if(isLoading){


        return <div>Page is loading...</div>
      }

      if(isError) {
        return  <div>Error has occurred...</div>
      }


   return (
        <div>
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

export default PostRQ
