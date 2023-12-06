import { useState } from "react"
import Logo from "./Logo"

const Header = () => {
    


  return (
    <header className="flex flex-wrap w-full bg-slate-400 items-center justify-evenly ">
        {/* <img className="h-[70px] w-[200px] rounded-xl bg-red-700" src={img} alt="logo"/> */}
        <Logo/>
        <h1 className="font-bold text-4xl">News App</h1>
      
        
        
    </header>
  )
}

export default Header
