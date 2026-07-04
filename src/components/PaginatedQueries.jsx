import { keepPreviousData, useQuery } from '@tanstack/react-query'
import axios from 'axios'
import {react,useState} from 'react'


 const fetchFruits = (pageID) =>{
      // return axios.get("http://localhost:4000/fruits")
      console.log("page ::: " , pageID)
       return axios.get(`http://localhost:4000/fruits/?_limit=4&_page=${pageID}`)

    }
function PaginatedQueries() {

  

  const [page,setPage] = useState(1)  

   

    const { data,isLoading,isError} = useQuery(
        {
            queryKey:["fruits",page],
            queryFn: () => fetchFruits(page),
            placeholderData : keepPreviousData
        }
    )

     if(isLoading){


        return <div>Page is loading...</div>
      }

      if(isError) {
          console.log(">>>>>",isError)
        return  <div>Error has occurred...</div>
      }

    

  return (
    <div>
      {
        data?.data.map(item =>
            <div key={item.id}>
               <img src={item.name} width="200" height="200" />
            </div>
        )
      }
      <button onClick={()=>setPage(prev => prev - 1)}
         disabled ={page == 1 ? true : false}>Previous </button>
      <button  onClick={()=>setPage(prev => prev + 1)}
         disabled ={page == 5 ? true : false}>Next </button>
    </div>
  )
}

export default PaginatedQueries
