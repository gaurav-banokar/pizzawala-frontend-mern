import React from 'react';

import "./heading.scss"

const Heading = ({heading}) => {
  return (
   <div className="heading">
    <h2>{heading}</h2>
    <div></div>
   </div>
  )
}

export default Heading