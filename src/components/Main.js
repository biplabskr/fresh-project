import React from 'react'
import "../css/Main.css"
import Typed from 'typed.js';

export default function Main() {

    React.useEffect(() => {
        const typed = new Typed(".change", {
            strings: ['Biplab Sarkar', 'a Engineer Graduate'],
            typeSpeed: 150,
            backSpeed: 150,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className='container-main'>
            <div className='main'>
                <div className='left-main' data-aos="fade-right">
                    <div><h3> I am <span className='change'></span></h3></div>
                    <div className='p'>Lorem ipsum may be attributed to an unknown typesetter in the
                        15th century. It's thought that the typesetter scrambled
                        parts of Cicero's De Finibus Bonorum et Malorum for use in a
                        type specimen book.
                    </div>
                    <button>Explore now</button>
                </div>
                <div className='right-main' data-aos="fade-left">
                    <div class="spinner-box">
                        <div class="blue-orbit leo">
                        </div>

                        <div class="green-orbit leo">
                        </div>

                        <div class="red-orbit leo">
                        </div>

                        <div class="white-orbit w1 leo">
                        </div><div class="white-orbit w2 leo">
                        </div><div class="white-orbit w3 leo">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

