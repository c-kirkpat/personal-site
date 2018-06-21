import React from 'react'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */
console.log(window)
let arr = new Array(40)
arr.fill(0)

export const GridTest = () => {
    return (
        <div className='wrapper'>
            <div className='dev-banner'>
                <div className = 'dev-text'> web developer </div>
            </div>
            <div className='about-wrapper section-wrapper'>
                <img className='about-triangle triangle' src='triangle2.svg' />
                <div className='about'>ABOUT</div>
            </div>
            <div className='projects-wrapper section-wrapper'>
                <img className='projects-triangle triangle' src='triangle2.svg' />
                <div className='projects'>ABOUT</div>
            </div>
            <div className='contact-wrapper section-wrapper'>
                <img className='contact-triangle triangle' src='triangle2.svg' />
                <div className='contact'>ABOUT</div>
            </div>
            <div className='demo-wrapper section-wrapper'>
                <img className='demo-triangle triangle' src='triangle2.svg' />
                <div className='demo'>ABOUT</div>
            </div>
            <div className='checker-board'>
                {arr.map((elem, index, array) => {
                    console.log('hi')
                    if (index < array.length / 2) {
                        return index % 2 ? <div className='black check'></div> : <div className='white check'></div>
                    } else {
                        return index % 2 ? <div className='white check'></div> : <div className='black check'></div>
                    }                   
                })}
            </div>
        </div>
    )
}

/**
 * CONTAINER
 */
const mapState = null

export default connect(mapState)(GridTest)


