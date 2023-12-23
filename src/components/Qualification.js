import React from 'react'
import Features from './Features';
import "../css/Qualification.css"

export default function Qualification() {

    const featuresData = [
        {
            title: 'School 5-10',
            text: 'Kendriya Vidyalaya Sangathan',
        },
        {
            title: 'School 11-12',
            text: 'Central Model School barrackpore',
        },
        {
            title: 'College-1',
            text: 'Heramba Chandra College.',
        },
        {
            title: 'College',
            text: 'Netaji Subhash Engineering College.',
        },
    ];
    return (
        <div className='adjust'>
            <div className="features section-padding" id="features" >
                <div className="features-heading" data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom">
                    <h1 className="gradient-text">I am biplab Sarkar engineer graduate and this is about my Qualification and my academics.</h1>
                    <p>This is about my qualification till now</p>
                </div>
                <div className="features-container" data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom">
                    {featuresData.map((item, index) => (
                        <Features title={item.title} text={item.text} key={item.title + index} />
                    ))}
                </div>
            </div>
        </div>
    )
}
