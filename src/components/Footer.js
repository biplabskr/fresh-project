import React from 'react'
import "../css/Footer.css"

export default function Footer() {
    return (

        <div className='footer'>

            <div className='social-menu' data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <ul>
                    <li><a>F</a></li>
                    <li><a>I</a></li>
                    <li><a>G</a></li>
                    <li><a>Y</a></li>
                </ul>
            </div>
            <div className='lists' data-aos="fade-up"
                data-aos-anchor-placement="center-bottom">
                <ul>
                    <li><a>home</a></li>
                    <li><a>contact</a></li>
                    <li><a>news</a></li>
                    <li><a>about</a></li>
                </ul>
            </div>
            <div className='footer-bottom' data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom">
                <p>Copyright &copy;2023 Designed by <span className='design'>Biplab</span></p>

            </div>

        </div>


    )
}
