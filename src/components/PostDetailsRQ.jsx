
import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"
import axios from "axios"

const fetchPostDetails = (postID) =>{
   return axios.get(`http://localhost:4000/posts/${postID}`)
}
const PostDetailsRQ = () => {

    const {postID} = useParams()

    const {data,isLoading,isError} = useQuery(
        {
            queryKey: ["post",postID],
            queryFn: () => fetchPostDetails(postID)
        }
    )



    if(isLoading){


        return <div>Page is loading...</div>
      }

      if(isError) {
        return  <div>Error has occurred...</div>
      }

      const {title,body} = data?.data ||{}

  return (
    <div>
   
    <div>PostDetailsRQ Page</div>

       <h3>{title}..........</h3>
       <p>{body}</p>

    </div>
  )
}

export default PostDetailsRQ
