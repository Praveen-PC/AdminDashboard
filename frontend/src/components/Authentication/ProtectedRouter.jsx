import React from 'react'
import { Navigate } from 'react-router-dom'


const ProtectedRouter = ({children}) => {
    const token=sessionStorage.getItem('token')
    if(!token){
        return <Navigate to='/'/>
    }
    return children
  
}

export default ProtectedRouter