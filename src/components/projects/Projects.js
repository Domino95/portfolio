import React from 'react';
import "../../styles/Page/ProjectsStyle.css"
import "../../styles/App.css"
import { useSelector } from "react-redux"

const Projects = () => {
    const words = useSelector(state => state.selectLanguage)
    return (
        <>
            <div className="titlewrapper" id="projectsTitle">
                <div className="letterColor" >M</div> {words.PROJECTS}
            </div>
            <div className="projectwrapper">
                <div className="projectId" > 1 </div>
                <div className="projectName"> {words.CALCULATOR}
                    <p className="description">{words.DESCRIPTION_CALCULATOR}</p>
                </div>
                <div className="wrapper" style={{ display: "flex" }}>
                    <div className="buttonLink"><a href="https://domino95.github.io/calculator/" > {words.DEMO} </a> </div>
                    <div className="buttonLink"><a href="https://github.com/Domino95/calculator" > {words.CODE} </a> </div>
                </div>
            </div >
            <div className="projectwrapper">
                <div className="projectId" > 2 </div>
                <div className="projectName"> {words.SHIPS}
                    <p className="description">{words.DESCRIPTION_SHIPS}</p>
                </div>
                <div className="wrapper" style={{ display: "flex" }}>
                    <div className="buttonLink"><a href="https://domino95.github.io/ships/" > {words.DEMO}  </a> </div>
                    <div className="buttonLink"><a href="https://github.com/Domino95/ships" > {words.CODE} </a> </div>
                </div>
            </div >
            <div className="projectwrapper">
                <div className="projectId" > 3 </div>
                <div className="projectName"> {words.WEATHER_APP}
                    <p className="description">{words.WEATHER_APP_DESCRIPTION}</p>
                </div>
                <div className="wrapper" style={{ display: "flex" }}>
                    <div className="buttonLink"><a href="https://domino95.github.io/weatherApp/" > {words.DEMO} </a> </div>
                    <div className="buttonLink"><a href="https://github.com/Domino95/weatherApp" > {words.CODE} </a> </div>
                </div>
            </div >
        </>
    );
}

export default Projects;
