import React from 'react'
import { useParams } from 'react-router-dom'

 export default function User() {
    const {userid} = useParams()
return (
    <div className='bg-orange-500 text-center'> User : {userid} </div>
)

}

