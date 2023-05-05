import React from 'react'
import './TrendCard.css'
import HashTag from "../../Data/HashTag"
import { useSelector , useDispatch } from 'react-redux'
const TrendCard = () => {
let {posts,loading}=useSelector((state)=>state.postReducer);
    return (
   <div className="TrendCard">
     <b>Trending Hashtags</b>
       <div className="trend">{ 
         posts.map((post, id) => {
            return <HashTag data={post} key={id} className ="trend" />;})}</div> 
   </div>
  )
}

export default TrendCard