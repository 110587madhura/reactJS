import React, { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
   const data = useLoaderData()
    /* 
    const [data, setData] = React.useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/110587madhura')
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setData(data)
        })
    }, [])  */
    return (
        
        <div className='bg-gray-500 text-center'> Github followers: {data.followers} 
        <img src={data.avatar_url} width={300} alt="" />
        </div>
    )

}

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/110587madhura')
    return response.json()

}