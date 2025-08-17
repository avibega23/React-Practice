import React from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()
  return (
    <>
        <div>Followers:{data.followers}</div>
        <div><img src={data.avatar_url} alt="" srcset="" /></div>
    </>
  )
}
async function Loader()
{
    const res = await fetch("https://api.github.com/users/avibega23")
    const data = await res.json()
    return data
}
export {Github,Loader}


