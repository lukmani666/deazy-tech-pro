import React from 'react'
import Profile from '../assets/profile.svg'

function Home() {
  return (
    <div>
      <aside className="d-grid justify-content-center bg-success">
        <img src={Profile} alt="" className='pt-5 pb-3' />
        <b className='text-center fs-4'>Akinbohun Ifedayo</b>
        <span className='text-center pb-5 fs-4'>Student</span>
      </aside>
    </div>
  )
}

export default Home
