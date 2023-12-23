import React, { useRef } from 'react'
import '../css/Splashscreen.css';

export default function Hi() {

    const splshscreen = useRef(null);
    const Lgo = useRef(null);
    const Lgo2 = useRef(null);


    React.useEffect(() => {

        document.body.style.overflow = "hidden"



        setTimeout(() => {

                       
                            setTimeout(() => {
        
                                Lgo.current.classList.add("animation1")
                               
                            }, (1 + 1) * 400)

                            setTimeout(() => {
        
                                Lgo2.current.classList.add("animation2")
                                
        
                            }, (1 + 1) * 400)
        
        
        
                        setTimeout(() => {
        
                            setTimeout(() => {
        
                                Lgo.current.classList.remove("animation1")
                                Lgo.current.classList.add("up")
                                
    
    
                            }, (1 + 1) * 50)

                            setTimeout(() => {
        
                                Lgo2.current.classList.remove("animation2")
                                Lgo2.current.classList.add("up")
                               
    
                            }, (1 + 1) * 50)
        
                        }, 2000)
        
                        setTimeout(() => {
        
                            splshscreen.current.classList.add("done");
                            
                        }, 2300)

                        setTimeout(() => {
        
                            document.body.style.overflow = "visible";
                            
                        }, 2600)
        
              })

        


    },[]);

    return (
        <div className='splash-screen' ref={splshscreen}>
            <h1 className='splash-logo'>
                <span className='logo1' ref={Lgo}>WEL</span><span className='logo2' ref={Lgo2}>COME</span>
            </h1>
        </div>
    )
}
