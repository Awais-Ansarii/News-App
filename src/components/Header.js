
import Logo from "./Logo"
import { useNavigate } from "react-router-dom"

const Header = ({isLogin, setLogin}) => {
    
 const navigate = useNavigate()
 const handleLogout = ()=>{
  setLogin(false)
  navigate('/')
 }

  return (
    <header className="flex flex-wrap  bg-slate-400 items-center justify-center h-18 py-2 pr-20 ">
        {/* <img className="h-[70px] w-[200px] rounded-xl bg-red-700" src={img} alt="logo"/> */}
        <Logo/>
        <h1 className="font-bold text-4xl">News App</h1>

        {
          isLogin ? <button className="bg-slate-700 p-2 text-black rounded-lg hover:text-2xl hover:font-bold" onClick={handleLogout}>logout</button> : null 
        }
      
        
    </header>
  )
}

export default Header
