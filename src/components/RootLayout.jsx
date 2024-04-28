import { Outlet } from "react-router-dom"

import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


function RootLayout(){
    let navigate=useNavigate()
    // useEffect(()=>{
    //     navigate('home')
    // })
    return(
        <div>
          
            <Outlet/>
         
        </div>
    )
}

export default RootLayout