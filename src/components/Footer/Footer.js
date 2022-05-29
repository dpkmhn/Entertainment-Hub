import React from "react";

import './Footer.css'
const Footer = () => {
    return(
        <div className="footer">
            <div className="name">
            © 2022 | {' '}
                <a href = 'https://www.linkedin.com/in/deepakmhn/' target = ''>
                     Developed by <u>Deepak Mohan</u> 
                </a>
                  {' '}| All Rights Reserved 
            </div>

        </div>
    )
}

export default Footer