import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Mainheader from './Mainheader'
import Subheader from './Subheader'
import TopHeader from './TopHeader'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Header = () => {


  return (
    <header>
      <div className="bg-green-900">
       <TopHeader />

      </div>
      { window.location.pathname === '/' ? <Mainheader /> : null }

      <div className="bg-white">
        { window.location.pathname === '/' ? <Subheader /> : null }
      </div>
    </header>
  )
}

export default Header