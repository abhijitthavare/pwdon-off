import React,{useState} from 'react'
import IMG from "./download.jpg"


const App = () => {
    let [photo,setPhoto]=useState(IMG)
    let [password,setPassword]=useState(true)
    let showpwd=()=>{
        if(password)
        {
            setPassword(false)
        }
        else{
            setPassword(true)
        }

    }
  return (
    <div>
        <input type={password? "test":"password"} />
        <img src={photo} alt="" height="10px" width="10px" onClick={showpwd}/>
        
    </div>
  )
}

export default App