import React, { useState } from 'react';
import "../../styles/Page/NavigationStyle.css"
import LanguageSelection from "./LanguageSelection"
import NaviList from "./NaviList"
import ScrollIntoView from 'react-scroll-into-view'


const Navigation = (scroll) => {
    const [navi, setnavi] = useState(undefined);

    function menuHandle() {
        setnavi(!navi)
    }
    return (
        <>
            <div id="navi" className="naviContainer">
                <div className="naviMenu" onClick={menuHandle}>
                    <div className={navi ? "menuIcon open" : "menuIcon"} />
                </div>
                {navi === undefined ? null :
                    navi ?
                        <div className="naviActive" >
                            <LanguageSelection />
                            <NaviList menuHandle={menuHandle} />
                        </div>
                        :
                        <div className="navi" />}
            </div>
            {scroll.scroll === undefined ? null :
                scroll.scroll === true ?
                    <ScrollIntoView selector="#navi">
                        <li className="mdl-button mdl-js-button mdl-button--raised" style={{ listStyle: "none" }}>
                            <div className="scrollUp"><div className="arrowUp"></div></div>
                        </li>
                    </ScrollIntoView>
                    : <div className="scrollUp hidden"></div>
            }
        </>
    );
}
export default Navigation;