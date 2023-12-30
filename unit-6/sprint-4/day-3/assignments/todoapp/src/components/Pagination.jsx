import React from 'react'

const Pagination = ({Page,handlePage}) => {
  return (
    <div>
      <button onClick={()=>{handlePage(-1)}}>Previous</button>
      
      <button >{Page}</button>
      <button onClick={()=>{handlePage(1)}}>next</button>
    </div>
  )
}

export default Pagination
