import React from 'react'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
export const GridTest = () => {
    return (
        <div className='wrapper'>
            <div className='firstNameWrapper'>
                <div className='header'>CHAR</div>
                <div className='header2'>LEY</div>
            </div>
            <div className='lastNameWrapper'>
                <div className='lastName'>KIRK</div>
                <div className='lastName2'>PATRICK</div>
            </div>
            <div className='banner'>DEVELOPER </div>
            <div className='diamondWrapper'>
                <img className='diamond' src="diamond.png" />
                <img className='diamond' src="diamond.png" />
                <img className='diamond' src="diamond.png" />
            </div>


        </div>
    )
}

/**
 * CONTAINER
 */
const mapState = null

export default connect(mapState)(GridTest)


