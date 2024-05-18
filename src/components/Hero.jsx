import { useGlobalContext } from '../context'
import WriteSitcomStart from './WriteSitcomStart'


const Hero = () => {
    
    const { handleGoToSelectSitcom, goToSelectSitcom } = useGlobalContext()
    
    if (goToSelectSitcom) {
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
                <button type="button" className="btn hero-btn" onClick={handleGoToSelectSitcom}>start writing</button>
            </div>

        </section>
    )
}

export default Hero