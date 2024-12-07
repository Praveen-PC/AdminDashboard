import React from 'react'

const Home = () => {
  return (
    <div className='container mt-4'> 
    <div className='d-flex justify-content-between flex-wrap '>
    <h3 className='fw-bold text-primary '>Inked Pages </h3>
    <div className='d-flex col-md-8'>
      <input type="search" className='form-control ' placeholder='Search to Read' />
    </div>
    </div>
   
    </div>
  )
}

export default Home