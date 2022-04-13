import React, { useState } from 'react'

const MainIcons = ({item}) => {
  const [active, setActive] = useState(false)
  return (
    <>
        <img className={`w-[50px] p-[8px]  m-auto bg-white rounded-[11px] mb-[10px]   ${active ? 'shadow-lg border-green-900 border-2 ' : ''}`} src={item.icon} onClick={() => setActive(!active)} alt="icons" />
        <span className='text-center block font-normal text-base'>{item.title}</span>
    </>
  )
}

export default MainIcons