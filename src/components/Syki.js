import Header from '../components/parts/Header';
import Footer from '../components/parts/Footer';
import Back from '../components/parts/Back'
import '../styles/Syki.css'
import one_syki from '../img/syki/1.png';
import two_syki from '../img/syki/2.png'
import three_syki from '../img/syki/3.png'
import four_syki from '../img/syki/4.png'
import five_syki from '../img/syki/5.png'
import six_syki from '../img/syki/6.png'
import seven_syki from '../img/syki/7.png'
import eight_syki from '../img/syki/8.png'
import { Link } from 'react-router-dom';


function Syki() {
    return (
        <div>
            <Header></Header>
            <Back></Back>
            <div className='project-detail-section'>
                <div className='project-introduction-syki'>
                <div className='project-position-name-container'>
                    <div className='project-position2'>
                        branding + identity<br />
                        creative direction<br /><br />
                    </div>
                    <div className="project-name2">
                        syki<br /><br />
                    </div>
                    </div>
                    <div className='project-description2'>
                        An experimental and conceptual patisserie specialising in artisan canelé, exploring the human soul based on Carl Jung’s Map of the Psyche, its archetypes, and their dynamics. Blending artisan pastry-making with psychological concepts, every bite disclose unexplored bits of our soul.<br /><br />

                        The map of the psyche or the theory of the soul, is a concept developed by Carl Jung. It is a thorough framework describing the psyche in all of its dimensions and explains its internal dynamics. <br /><br />

                        The central of this study is individuation, which this process is Jung’s way of explaining the path to optimal personal development. The purpose is to delve deep into the conscious and unconscious, heal and build each one,
                        until reaching the final stage of discovering the self.<br /><br />

                    </div>
                </div>
                <div className='jumbotron'>
                    <img src={one_syki} className="komma-jumbotron img-jumbo" alt="Img" />
                </div>
                <div className='two-flex'>
                    <div className='two-flex-image-container'>
                        <img src={two_syki} className="two-flex-image" alt="Img" />
                    </div>
                    <div className='logo-concept'>
                        <b>the psyche and the canelé</b><br /><br />



                        The unique structure of the canelé–hard crust and soft, delicate interior–represents the protective layers humans present to the world and the vulnerability that lies beneath.<br /><br />

                        The name ‘SYKi’ is a word play from the pronunciation of ‘psyche’, ‘sai-kee’. The intentional lower-case of the ‘i’ represents ‘the self’, the unification consciousness and unconsciousness of an individual in Jung’s archetypes.<br /><br />

                        In accordance with the brand name, the symbol is a one-eyed canelé, representing the brand’s main product and the self. The eye is a symbol Jung uses to represent the cosmos of the self.<br /><br />

                    </div>

                </div>
                <div className='jumbotron'>
                    <img src={three_syki} className="komma-jumbotron img-jumbo" alt="Img" />
                </div>
                <div className='jumbotron'>
                    <img src={four_syki} className="komma-jumbotron img-jumbo2" alt="Img" />
                </div>
                <div className='custom-paragraph-syki'>
                    <b style={{ fontSize: '20px' }}>the tounge and the archetypes</b><br></br>
                    <br></br>
                    Five most important archetypes of the Map of the Psyche are illustrated through flavours and symbols. Sensory experience is illustrated through the flavour profile and presentation of the canelé.                </div>

                <div className='jumbotron'>
                    <img src={five_syki} className="komma-jumbotron img-jumbo" alt="Img" />
                </div>
                <div className='two-flex-dyptique custom-margin'>
                    <div className='logo-concept-dyptique'>
                        <b style={{ fontSize: '20px' }}>concept 01</b><br />
                        <br />

                        Focusing on storytelling, without utilising any typography except for the name itself. Typography is inspired by Diptyque’s iconic disordered typography.
                        The streams at the back creates a sense of direction, leading the viewer as if they’re on a journey on the junkboats and reaches the final destination, the pagoda with blooming tuberoses.
                    </div>
                    <div className='two-flex-image-container-dyptique'>
                        <img src={six_syki} className="two-flex-image-dyptique" alt="Img" />
                    </div>

                </div>
                <div className='jumbotron'>
                    <img src={seven_syki} className="komma-jumbotron img-jumbo2" alt="Img" />
                </div>
                <div className='jumbotron'>
                    <img src={eight_syki} className="komma-jumbotron img-jumbo2" alt="Img" />
                </div>
                <div className='view-brand-guidelines'>
                <a href="https://drive.google.com/file/d/1K-i7vJxUS9viErkA-IvO-HqijRGXKal3/view" className="custom-link" target="_blank" rel="noopener noreferrer">
                        view brand guidelines
                    </a>
                </div>
                <div className='view-brand-guidelines'>
                    <a href="https://www.figma.com/proto/miUvAhOm7ddXF2nKf0TmTt/syki-web-2?page-id=0%3A1&node-id=1-2&node-type=canvas&viewport=155%2C4%2C0.16&t=HvkRaQlqDUvO248l-1&scaling=contain&content-scaling=fixed&starting-point-node-id=50%3A27" className="custom-link" target="_blank" rel="noopener noreferrer">
                        view website prototype
                    </a>
                </div>



            </div>


            <Footer></Footer>
        </div>
    );
}

export default Syki;