import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Components/Header/Header'

const Home = () => {
  return (
    <>
    <Link to="/register" className='text-center'><h1>Login Screen</h1></Link>
    </>
  )
}

export default Home