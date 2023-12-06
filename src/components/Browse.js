import React, { useState, useEffect } from 'react'
import Header from './Header'
import Spinner from './Spinner'
import { url } from '../utils/constants'
import MainContainer from "./MainContainer";
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom';

const Browse = ({isLogin, setLogin}) => {

  const navigate = useNavigate()


  const[loading, setLoading] = useState(false)
  const[newsData, setNewsData] = useState([])


  async function getData(){


    setLoading(true)
    try{
      const op = await fetch(url );
      const resp = await op.json();
      const articles = resp.articles;
      // console.log(articles)
      setNewsData(articles)
    }
      
      catch(error){
        toast.error("network error - API can't be Fetched due to Network issue")
  
      }
      setLoading(false)
  }

  useEffect(
      ()=>{
          getData()
      }, []
  )

  if(!isLogin){
    navigate('/')
  }
  return (
    <div>
    <Header/>

    {
        loading ? <Spinner/> : <MainContainer newsData={newsData}/>
      }

    
    </div>
  )
}

export default Browse
