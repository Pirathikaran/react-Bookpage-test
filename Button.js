import React from 'react'

export default function Button({handleDelete}){
  return (
    <button type="button" style={{background:'red',color:'white',fontsize:'2rem'}} onClick={handleDelete} >
    delete me
    </button>
  )
}