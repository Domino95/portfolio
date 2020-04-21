import React from 'react';
import "../../styles/Page/TechnologiesStyle.css"
import reactpng from "../../icons/react.png"
import html from "../../icons/html.png"
import js from "../../icons/js.png"
import css from "../../icons/css.png"
import redux from "../../icons/Redux.png"
import gsap from "../../icons/gsap.svg"
import { useSelector } from "react-redux"
const Technologies = () => {
    const words = useSelector(state => state.selectLanguage)
    return (
        <>
            <div className="titlewrapper" id="technologies">
                <div className="letterColor" >T</div> {words.TECHNOLOGIES_TITLE}
            </div>

            <div className="iconContainter">
                <img className="icon" src={html} alt="html" />
                <div className="descriptionIcon">HTML</div>
            </div>
            <div className="iconContainter">
                <img className="icon" src={css} alt="css" />
                <div className="descriptionIcon">CSS</div>
            </div>
            <div className="iconContainter">
                <img className="icon" src={js} alt="js" />
                <div className="descriptionIcon">Java Script</div>
            </div>
            <div className="iconContainter">
                <img className="icon" src={reactpng} alt="reactpng" />
                <div className="descriptionIcon">React</div>
            </div>
            <div className="iconContainter">
                <img className="icon" src={redux} alt="redux" />
                <div className="descriptionIcon">Redux</div>
            </div>
            <div className="iconContainter">
                <img className="icon" src={gsap} alt="gsap" />
                <div className="descriptionIcon">GSAP</div>
            </div>
        </>
    );
}
export default Technologies;