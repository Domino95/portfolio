import React, { useState } from 'react';
import "../../styles/Page/FooterStyle.css"

const Footer = () => {
    let [date, setdate] = useState()
    let [time, settime] = useState()
    setTimeout(() => getTime(), 1000);
    const getTime = () => {
        const MyDate = new Date();
        setdate(('0' + MyDate.getDate()).slice(-2) + '.' + ('0' + (MyDate.getMonth() + 1)).slice(-2) + '.' + MyDate.getFullYear())
        settime(('0' + MyDate.getHours()).slice(-2) + ":" + ('0' + MyDate.getMinutes()).slice(-2) + ":" + ('0' + MyDate.getSeconds()).slice(-2))
    }
    return (
        <div className="footerContainer">
            <div className="date">{time} </div>
            <div className="date"> {date}</div>
        </div>
    );
}
export default Footer;
