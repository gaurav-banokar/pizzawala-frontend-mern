import React from 'react'
import { useSelector } from 'react-redux'

const searchMenu = () => {
  const { itemsBySearch } = useSelector(state=> state.itemsBySearch)

  return (
    <div className='searchMenu'>
     
      <div>

      </div>
    </div>
  )
}

export default searchMenu