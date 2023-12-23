import React from 'react'
import '../css/Skillssection.css';
import meter1 from "../assets/meter1.svg";
import meter2 from "../assets/meter2.svg";
import meter3 from "../assets/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/arrow1.svg";
import arrow2 from "../assets/arrow2.svg";
import colorSharp from "../assets/color-sharp.png"

export default function Skillssection() {

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div className="skills" >
            <div className="container" data-aos="fade-up-right">

                <div className="skill-box">
                    <h2>Skills</h2>
                    <p>Hello, I am biplab sarkar and it is a dummy website.<br>
                    </br> This is a only frontend part.</p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slide" data-aos="flip-left">
                        <div className="items" data-aos="fade-down-right">
                            <img src={meter1} alt="Image" />
                            <h5>Javascript</h5>
                        </div>
                        <div className="items" data-aos="fade-down-right">
                            <img src={meter2} alt="Image" />
                            <h5>Reactjs</h5>
                        </div>
                        <div className="items" data-aos="fade-down-left">
                            <img src={meter3} alt="Image" />
                            <h5>CSS</h5>
                        </div>
                        <div className="items" data-aos="fade-down-left">
                            <img src={meter1} alt="Image" />
                            <h5>MySQL</h5>
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
