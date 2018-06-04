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
            <p className='thing'>Hello this is some lorem ipsum that i manually typed out </p>
            <p className='thing2'>Hello this is some lorem ipsum that i manually typed out </p>
            <div className='diamond-narrow diamond1' />
            <div className='diamond-narrow diamond2' />
            <div className='diamond-narrow diamond3' />
            <div className='diamond-narrow diamond4' />

        </div>
    )
}

/**
 * CONTAINER
 */
const mapState = null

export default connect(mapState)(GridTest)


