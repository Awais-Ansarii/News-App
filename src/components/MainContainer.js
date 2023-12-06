import { useNavigate } from "react-router-dom"
import NewsContainer from "./NewsContainer"

const MainContainer = ({newsData}) => {

    const navigate = useNavigate()

  return (
    
    <div className=" flex flex-wrap justify-center gap-10 p-5 bg-black ">
           

      {
        
        newsData?.map( (eachNews, index)=>{
             return <NewsContainer key={index} eachNews={eachNews}/>
        })
      }

    </div>
  )
}

export default MainContainer
