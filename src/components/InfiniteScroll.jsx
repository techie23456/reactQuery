import React from 'react'
import { useInfiniteQuery} from '@tanstack/react-query'
import axios from 'axios'


const fetchFruits = ({pageParam}) =>{
      // return axios.get("http://localhost:4000/fruits")
      console.log("page ::: " , pageParam)
       return axios.get(`http://localhost:4000/fruits/?_limit=4&_page=${pageParam}`)

    }

function InfiniteScroll() {

   const{ data , isLoading , isError , hasNextPage, fetchNextPage} = useInfiniteQuery({
     queryKey:["fruits"],
     queryFn: fetchFruits,
     initialPageParam : 1,
     getNextPageParam:(_lastPage, allPages) => {
        if(allPages.length <5) {
            return allPages.length + 1
        }
        else{
            return undefined
        }
     }
   })

    if(isLoading){


        return <div>Page is loading...</div>
      }

      if(isError) {
          console.log(">>>>>",isError)

        return  <div>Error has occurred...</div>
      }

  return (
    <div>
      {data?.pages?.map(page => {
          return page?.data.map(fruits => {
            return <div key={fruits.id}> <img src={fruits.name} width="200" height="200" /></div>
          })
      })}
      <button disabled ={!hasNextPage}  onClick={fetchNextPage}>Load More...</button>
    </div>
  )
}

export default InfiniteScroll
