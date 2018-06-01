import React from 'react'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const GridTest = () => {
  return (
    <div className='wrapper'>
      <h3 className='header'>CHAR</h3>
      <h3 className='header2'>LEY</h3>
      <h3 className='lastName'>KIRK</h3>
      <h3 className='lastName2'>PATRICK</h3>
      <p className='thing'>Hello this is some lorem ipsum that i manually typed out </p>
      <p className='thing2'>Hello this is some lorem ipsum that i manually typed out </p>
    </div>
  )
}

/**
 * CONTAINER
 */
const mapState = null

export default connect(mapState)(GridTest)


