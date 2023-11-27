import React from 'react'
import "../../css/style.css";
import "../../css/reset.css";

const YellowButton = ({children}) => {
  return (
    <button className='yellowBtn'>
        {children}
    </button>
  )
}

export default YellowButton
