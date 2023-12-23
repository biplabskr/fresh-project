import React ,{useEffect, useState}from 'react'
import '../css/Header.css';
import { FiMoon } from 'react-icons/fi'
import { CiLogin } from 'react-icons/ci'
import { IoIosArrowDown } from 'react-icons/io'
import { TbMenuDeep } from 'react-icons/tb'
import Typed from 'typed.js';

export default function Header() {

  const [showMenu, setShowMenu] = useState(false);
  React.useEffect(() => {
    const typed = new Typed(".dash", {
        strings: ['._'],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    });

    return () => {
        typed.destroy();
    };
}, []);

  

  return (
    <>
      <div className='container'>

        <div className='navbar'>

          <div className='logo'>
            <div className='a'>
              <span>W</span>EB
              <span>S</span>ITE
              <span className='dash'></span>
            </div>
          </div>


          <div className='menu-links'>
            <ul>
              <li><a>About Us</a></li>
              <li><a>Courses</a></li>
              <li className='unique'><a>Labs</a></li>
              <li><a>Contact</a></li>
            </ul>

          </div>

          <div className='buttons-link'>

            <a className='menu' onClick={() => setShowMenu(!showMenu)}>

              <TbMenuDeep size={29} color="white"/>

            </a>

          </div>

          <div className={showMenu ? "toggle-menu" : "show-menu"}>

            <ul className='toggle-menu-lists'>
              <li><a>About us</a></li>
              <li><a>Courses</a></li>
              <li><a>Labs</a></li>
              <li><a>Contact</a></li>
            </ul>

          </div>

        </div>

      </div>


    </>
  )
}
