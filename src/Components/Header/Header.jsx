import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Mainheader from './Mainheader'
import Subheader from './Subheader'
import TopHeader from './TopHeader'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Header = () => {

  let location  = useLocation()

   useEffect(() => {
      return console.log('hi')
   },[location])

  return (
    <header>
      <div className="bg-green-900">
       <TopHeader />

      </div>
      { window.location.pathname === '/' ? <Mainheader /> : null }
      { window.location.pathname === '/' ? <Subheader /> : null }
    </header>
  )
}

export default Header