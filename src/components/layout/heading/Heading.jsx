import React from 'react';

import "./heading.scss"

const Heading = ({heading}) => {
  return (
   <div className="heading">
    <h3>{heading}</h3>
    <div></div>
   </div>
  )
}

export default Heading