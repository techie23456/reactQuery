import { useEffect, useState } from "react";
import axios from "axios"


 
function PostTraditional(){

   const [posts, setPosts] = useState([]);
    const [isLoading , setIsLoading] = useState(true);
    const [isError , setIsError] = useState(false);

       useEffect(() => {
                 const fetchPosts = async () => {
              try {
              const response = await axios.get("http://localhost:4000/posts");
                  setPosts(response.data);
                  console.log(posts)
        } catch (error) {
      setIsError(true)
    }
    finally{
        setIsLoading(false)
    }
  };

  fetchPosts();
}, []);
console.log(">>>>>>>> is loading >>>>>",isLoading)
console.log(">>>>>>>> is Error >>>>>",isError)
     if(isLoading){


        return <div>Page is loading...</div>
      }

      if(isError) {
        return  <div>Error has occurred...</div>
      }

      return (
        <div>
            {posts.map(post => (
                <div key ={post.id} >
                    <h3>{post.title}..........</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
      )

}

export default PostTraditional