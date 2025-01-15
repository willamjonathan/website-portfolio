import Header from '../components/parts/Header';
import Footer from '../components/parts/Footer';
import Back from '../components/parts/Back'
import '../styles/Komma.css'
import one_komma from '../img/komma/1.png';
import two_komma from '../img/komma/2.png'
import three_komma from '../img/komma/3.png'
import four_komma from '../img/komma/4.png'
import five_komma from '../img/komma/5.png'
import six_komma from '../img/komma/6.png'
import seven_komma from '../img/komma/7.png'
import { Link } from 'react-router-dom';


function Komma() {
    return (
        <div>
            <Header></Header>
            <Back></Back>
            <div className='project-detail-section'>
                <div className='project-introduction'>
                    <div className='project-position-name-container'>
                    <div className='project-position2'>
                        branding + identity<br/><br/>
                    </div>
                    <div className="project-name2">
                        komma<br/><br/>
                    </div>
                    </div>
                    <div className='project-description2'>
                        Offering reprieve from the hustle and bustle of modern life,
                        KOMMA is an event organiser dedicated to curating spaces and experiences, enabling individuals to unwind and revitalise. Through their events,
                        they aim to bring people together while also making a meaningful contribution to the community.<br/>
                    </div>
                </div>
                <div className='jumbotron'>
                    <img src={one_komma} className="komma-jumbotron img-jumbo" alt="Img" />
                </div>
                <div className='two-flex'>
                    <div className='two-flex-image-container'>
                        <img src={two_komma} className="two-flex-image" alt="Img" />
                    </div>
                    <div className='logo-concept'>
                        <b>logo concept</b><br /><br />

                        The concept of the logomark is derived from KOMMA’s initial concept.
                        Inspired by the punctuation mark, comma, which serves to create a pause in a sentence, enhancing its flow and comprehension. It is also based on KOMMA’s
                        brand tagline, ‘PAUSE AND CHERISH’.
                    </div>

                </div>
                <div className='jumbotron'>
                    <img src={three_komma} className="komma-jumbotron img-jumbo" alt="Img" />
                </div>
                <div className='jumbotron'>
                    <img src={four_komma} className="komma-jumbotron img-jumbo2" alt="Img" />
                </div>
                <div className='jumbotron'>
                    <img src={five_komma} className="komma-jumbotron img-jumbo2" alt="Img" />
                </div>
                <div className='gradient'>
                <b style={{ fontSize: '20px' }}>mr. yagiz</b><br></br>
                    <br></br>
                    Symbolise energy and endless possibilities and growth. Gradients also contains multiple continuous colours, this defines KOMMA’s inclusive approach to experiences to connect people.
                </div>
                <div className='two-flex-two-image'>
                    <div className='two-flex-image-container2'>
                        <img src={six_komma} className="two-flex-image2 komma-six-seven" alt="Img" />
                    </div>
                    <div className='two-flex-image-container3'>
                        <img src={seven_komma} className="two-flex-image2 komma-six-seven" alt="Img" />
                    </div>

                </div>
                <div className='view-brand-guidelines'>
                <a href=" https://drive.google.com/file/d/1R1MGvbEEuQ2rM5oesFlj-vkCrcvwAtu8/view" className="custom-link" target="_blank" rel="noopener noreferrer">
                        view brand guidelines
                    </a>
                </div>


            </div>

            <Footer></Footer>
        </div>
    );
}

export default Komma;