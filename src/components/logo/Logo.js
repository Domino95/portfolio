import React, { useRef, useEffect } from 'react';
import "../../styles/Page/LogoStyle.css"
import ScrollIntoView from 'react-scroll-into-view'
import { ReactComponent as Roboto } from '../../icons/robot1.svg'
import gsap from "gsap"


const Logo = (props) => {
    const wrapper = useRef(null)
    useEffect(() => {
        const elements = wrapper.current.children
        const hand = elements.hand
        const body = elements.body
        const legLeft = elements.legLeft
        const legRight = elements.legRight
        const armLeft = elements.armLeft
        const armRight = elements.armRight
        const eyeLeft = elements.eyeLeft
        const eyeRight = elements.eyeRight
        const circle = elements.circle
        const tl = gsap.timeline({ defaults: { ease: "power3.inOut", duration: 2 } })
        tl.set(circle, { opacity: 0 })
        tl.from(legLeft, { x: -1000 }, { x: 0 })
        tl.from(legRight, { x: 1000 }, { x: 0 })
        tl.from(armLeft, { x: -1000 }, { x: 0 })
        tl.from(armRight, { x: 1000 }, { x: 0 })
        tl.from(eyeLeft, { x: -1000 }, { x: 0 })
        tl.from(eyeRight, { x: 1000 }, { x: 0 })
        tl.from(body, { y: 1000 }, { y: 0 })
        tl.from(hand, { x: -1000 }, { x: 0 })
    }, [])

    return (
        < div className="logoWrapper" >

            <div className="circle">
                <div className="wrapperRobot">
                    <Roboto className="robot" ref={wrapper} />
                </div>
            </div>
            <div className="name">
                <div className='letter'>D</div>
                <div className='letter'>o</div>
                <div className='letter'>m</div>
                <div className='letter'>i</div>
                <div className='letter'>n</div>
                <div className='letter'>i</div>
                <div className='letter'>k</div>
                <div className='letter'> &nbsp; </div>
                <div className='letter'>Ś</div>
                <div className='letter'>w</div>
                <div className='letter'>i</div>
                <div className='letter'>ą</div>
                <div className='letter'>t</div>
                <div className='letter'>e</div>
                <div className='letter'>k</div>
            </div>
            <ScrollIntoView selector="#projectsTitle">
                <i className="mdl-button mdl-js-button mdl-button--raised" style={{ display: "flex" }} onClick={props.menuHandle}>
                    <div className="arrowDown"></div>
                </i>
            </ScrollIntoView>
        </div >
    );
}
export default Logo; 