import React from 'react';
import "../../styles/Page/ModalStyle.css"
import { useSelector } from "react-redux"

const ModalSendSuccesful = (props) => {
    const words = useSelector(state => state.selectLanguage)
    return (
        <div className="background">
            <div className="modalFrame">
                <h3 className="modalText">{words.MESSAGE_SEND_SUCCESFUL}</h3>
                <button onClick={() => props.handleModal()}>{words.CLOSE}</button>
            </div>
        </div>
    );
}

export default ModalSendSuccesful;
