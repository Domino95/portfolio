import React, { useState } from 'react';
import "../../styles/Page/NavigationStyle.css"
import { useDispatch, useSelector } from "react-redux"
import { selectPoland } from "../../Redux/actions/index"
import { selectEnglish } from "../../Redux/actions/index"

const LanguageSelection = () => {
    const [language, setlanguage] = useState(useSelector(state => state.selectLanguage.LANGUAGE))
    const dispatch = useDispatch()

    const handleSelectLanguage = (e) => {
        if (e.target.id === "POLAND") {
            setlanguage("POLAND")
            dispatch(selectPoland())
        }
        else {
            setlanguage("ENGLISH")
            dispatch(selectEnglish())
        }
    }
    return (
        <div className="languagewrapper">
            <h3 className={language === "POLAND" ? "selected" : "language"} id="POLAND" onClick={(e) => handleSelectLanguage(e)}> PL</h3>
            <h3 style={{ padding: "5px", fontSize: "24px", letterSpacing: "2px", color: "whitesmoke" }}>/</h3>
            <h3 className={language === "ENGLISH" ? "selected" : "language"} id="ENGLISH" onClick={(e) => handleSelectLanguage(e)} >ENG</h3>
        </div>
    );
}

export default LanguageSelection;
