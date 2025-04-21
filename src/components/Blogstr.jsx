import React , { useContext } from 'react'
import { Showdata } from './store/Showdata'
const Blogstr = () => {
 const { onopen} = useContext(Showdata)

  return (
    <div>
      <h1>Blog website
        <button onClick={()=>onopen()}>add to blog</button>
      </h1>
    </div>
  )
}

export default Blogstr
