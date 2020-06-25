import React, { useState } from 'react';
import "../../styles/App.css"
import "../../styles/Page/ContactStyle.css"
import { useSelector } from "react-redux"
import ModalSendSuccesful from './ModalSendSuccesful';

const Contact = () => {
    const words = useSelector(state => state.selectLanguage)
    const [modal, setmodal] = useState(false)
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [message, setmessage] = useState("")
    const [errorName, setErrorName] = useState("")
    const [errorEmail, setErrorEmail] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const [validation, setvalidation] = useState({ name: false, email: false, message: false })



    const handleModal = () => {
        setmodal(false)
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if (validation.name === true && validation.email === true && validation.message === true) {
            setmodal(true)
            const templateId = 'template_NSprmb0r';
            sendFeedback(templateId, { message_html: message, from_name: name, reply_to: email })
            resetForm()
        }
    }

    const sendFeedback = (templateId, variables) => {
        window.emailjs.send(
            'gmail', templateId,
            variables
        ).then(res => {
        })
            .catch(err => console.error('Oh well, you failed. Here some thoughts on the error that occured:', err))
    }

    const resetForm = () => {
        setname("")
        setErrorName(null)
        setemail("")
        setErrorEmail(null)
        setmessage("")
        setErrorMessage(null)
    }


    const handleChange = (e) => {
        const value = e.target.value
        const id = e.target.id
        let validations = validation
        if (id === "name") {
            if (!value) {
                setErrorName(null)
                validations.name = false
                setvalidation(validations)
            }
            else if (value.length <= 2) {
                setErrorName(<div className="ErrorToUser">{words.ERROR_NAME}</div>)
                validations.name = false
                setvalidation(validations)
            }
            else {
                setErrorName(<div className="MessageToUser">{words.NO_ERROR_NAME}</div>)
                validations.name = true
                setvalidation(validations)
            }
            setname(value)
        }
        if (id === "email") {
            if (!value) {
                setErrorEmail(null)
                validations.email = false
                setvalidation(validations)
            }
            else if (value.indexOf("@") < 0) {
                setErrorEmail(<div className="ErrorToUser">{words.ERROR_EMAIL}</div>)
                validations.email = false
                setvalidation(validations)
            }
            else {
                setErrorEmail(<div className="MessageToUser">{words.NO_ERROR_EMAIL}</div>)
                validations.email = true
                setvalidation(validations)
            }
            setemail(value)
        }
        if (id === "message") {
            if (!value) {
                setErrorMessage(null)
                validations.message = false
                setvalidation(validations)
            }
            else if (value.length <= 10 || value.length >= 200) {
                setErrorMessage(<div className="ErrorToUser">{words.ERROR_MESSAGE}</div>)
                validations.message = false
                setvalidation(validations)
            }
            else {
                setErrorMessage(<div className="MessageToUser">{words.NO_ERROR_MESSAGE}</div>)
                validations.message = true
                setvalidation(validations)
            }
            setmessage(value)
        }
    }
    return (
        <>
            {modal ? <ModalSendSuccesful handleModal={handleModal} /> : null}
            <div className="titlewrapper" id="contact">
                <div className="letterColor" >{words.CONTACT_LETTER}</div> {words.CONTACT_TITLE}
            </div>
            <form className="contactForm" onSubmit={(e) => onSubmit(e)}>

                <input type="text" id="name" placeholder={words.YOUR_NAME}
                    onKeyPress={(e) => handleChange(e)} onChange={(e) => handleChange(e)} value={name} />
                {errorName}

                <input type="text" id="email" placeholder={words.YOUR_EMAIL}
                    onChange={(e) => handleChange(e)} value={email} />
                {errorEmail}

                <textarea type="text" id="message" placeholder={words.YOUR_MESSAGE}
                    onChange={(e) => handleChange(e)} value={message} />
                {errorMessage}

                <button>{words.SEND}</button>
            </form>
        </>
    );
}

export default Contact;