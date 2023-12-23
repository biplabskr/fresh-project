import React, { useEffect } from 'react'
import "../css/Section.css"
import { GiSkullCrossedBones } from "react-icons/gi";
import { FaMinimize } from "react-icons/fa6";
import { FaWindowMinimize } from "react-icons/fa";
import Typed from 'typed.js';

export default function Section() {

    useEffect(() => {
        const typed = new Typed(".text", {
            strings: ["A self determined fresher and have fondness towards learning,solving problems and consistency.Seeking opportunities in the field of computer and information technology."],
            typeSpeed: 150,
            backSpeed: 400,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='section' data-aos="zoom-in-down">
            <div className='textfield'>
                <div className='up-menu'><div className='menus'>
                    <FaWindowMinimize size={27} color="yellow" />
                    <FaMinimize size={26} color="blue" />
                    <GiSkullCrossedBones size={30} color="red" />

                </div>
                </div>
                <div className='text'></div>

            </div>

        </div>

    )
}
