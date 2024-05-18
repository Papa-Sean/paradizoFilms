import React, { useState } from "react";
import WriteSitcomStart from './WriteSitcomStart'

const Hero = () => {
    
    const [writeSitcom, setWriteSitcom] = useState(false)
    const startWriting = () => {
        setWriteSitcom(true)
        console.log(writeSitcom)
    }
    if (writeSitcom) {
        return (
            <WriteSitcomStart />
        )
    }
    

    return (
        <section className="hero" id="home">
            <div className="hero-banner">
                <h1>paradizo films</h1>
                <p>
                    Play along at home and write an episode of your favorite sitcom just like the BOIZ!
                </p>
                <button type="button" className="btn hero-btn" onClick={startWriting}>start writing</button>
            </div>

        </section>
    )
}

export default Hero