import React from 'react'
import classes from '../Header/css/steps.module.css'
import * as BiIcons from "react-icons/bi";

const Step = (props) => {


    let icon
    if(props.currentStep > props.id){
        icon = <BiIcons.BiCheck size='26px' /> ;
    }
  return (

        <div className='circleWraper' id={`circleWraper${props.id}`} >
            <div className='cricle'>
                <span className='circle_line' id={`circleWraper${props.id}`}></span>
                <span className={`${props.currentStep >= props.id ? 'circle_dot' : ''}  ${props.currentStep > props.id ? 'circle_dot_fill' : ''} `}>
                    {icon}
                </span>
            </div>
        </div>


  )
}

export default Step