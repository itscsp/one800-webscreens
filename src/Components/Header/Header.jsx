import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Mainheader from './Mainheader'
import Subheader from './Subheader'
import TopHeader from './TopHeader'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Header = () => {
  const [HeaderActive, setHeaderActive] = useState(false);


  const location = useLocation()

  useEffect(() => {
    // runs on location, i.e. route, change
    if(location.pathname === '/'){
      setHeaderActive(true)
    }else{
      setHeaderActive(false)
    }
  }, [location,HeaderActive])


  return (
    <header>
      <div className="bg-green-900">
       <TopHeader />

      </div>
      {HeaderActive && <Mainheader />}

      <div className="bg-white">
      {HeaderActive && <Subheader />}

      </div>
    </header>
  )
}

export default Header