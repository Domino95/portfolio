import React from 'react';
import ScrollIntoView from 'react-scroll-into-view'
import { useSelector } from "react-redux"

const NaviList = (props) => {
    const selectLanguage = useSelector(state => state.selectLanguage)
    return (
        <ul className="listwrapper">

            <ScrollIntoView selector="#navi">
                <li className="mdl-button mdl-js-button mdl-button--raised" onClick={props.menuHandle}>
                    <div className="oneElement">{selectLanguage.START} </div>
                </li>
            </ScrollIntoView>

            <ScrollIntoView selector="#projectsTitle">
                <li className="mdl-button mdl-js-button mdl-button--raised" onClick={props.menuHandle}>
                    <div className="oneElement">{selectLanguage.MY_PROJECTS} </div>
                </li>
            </ScrollIntoView>

            <ScrollIntoView selector="#technologies">
                <li className="mdl-button mdl-js-button mdl-button--raised" onClick={props.menuHandle}>
                    <div className="oneElement">{selectLanguage.TECHNOLOGIES} </div>
                </li>
            </ScrollIntoView>

            <ScrollIntoView selector="#contact">
                <li className="mdl-button mdl-js-button mdl-button--raised" onClick={props.menuHandle}>
                    <div className="oneElement">{selectLanguage.CONTACT}</div>
                </li>
            </ScrollIntoView>
        </ul>
    );
}

export default NaviList;