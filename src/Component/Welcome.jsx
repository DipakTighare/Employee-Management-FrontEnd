import React from 'react'
import { NavLink } from 'react-router-dom'

const Welcome = () => {
  return (
<>
    <div className='container'>
            
<div className='mt-5'>
    <img className='welimg' src="Em.png" alt="img" />
</div>
<div className='welTitle'>
            <h1 className='mt-5 text-center '>Welcome To Employee Management system</h1>
</div>
           <NavLink className="text-decoration-none"
 to="/show"><button className='mt-5 welbt'>List of All Employee </button></NavLink>

</div>
</>
  )
}

export default Welcome