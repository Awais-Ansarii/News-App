import React, { useState } from 'react'
import { toast } from 'react-toastify'
import {FcLike} from 'react-icons/fc'
import {FcLikePlaceholder} from 'react-icons/fc'

const NewsContainer = ({eachNews}) => {
    const {author, content, description, title, urlToImage, url} = eachNews;



    let newContent = content?.length >100 ? 
        (content?.substr(0,100)+ "..." ) : (content)

        const[isLiked, setIsliked]=useState(false);
        function likeHnadler(){
      
          // toast.success('Liked')
          setIsliked(!isLiked)
          // isLiked ? toast.success('Liked') :  toast.warning('Disliked')
          isLiked ? toast.warning('Disliked') : toast.success('Liked') 
          
      
        }
  return (
    <div className=' flex flex-col items-center p-2 bg-gray-300 m-2 rounded-xl w-[400px] shadow-lg shadow-gray-600'>
      <h1 className='text-2xl mb-2 font-semibold text-center'>{title}</h1>
      {/* <h3 className='text-red-700 p-2'>{author}</h3> */}
      <img className='w-[350px] h-[200px]' src={urlToImage}  alt={title?.substr(0,20)}/>
      <div className='w-[50px] h-[50px] grid place-items-center bg-gray-600 rounded-full relative bottom-4 left-36 '>

        <button onClick={likeHnadler} className=' cursor-pointer'>
        {isLiked ?  <FcLike fontSize="1.9rem"/> : <FcLikePlaceholder fontSize="1.9rem"/> }
       
        </button>
      </div>
      
      <p>
      
        {content ? newContent : description}

        <button className='hover:font-bold hover:text-xl p-1 bg-gray-500 rounded-xl'>
        <a href={url} target='_blank'>Readmore</a> 
        </button>
       
       
       </p>
    </div>
  )
}

export default NewsContainer
