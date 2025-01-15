import '../styles/Info.css'
import { Link } from 'react-router-dom';
import bintangIcon from '../img/icon/bintang.png';
import Header from '../components/parts/Header';
// import Footer from '../components/parts/Footer';



function Info() {
    return (
        <div>
            <Header></Header>
            <div className = "info-section">
            <div className='introduction'>
                <b>(jesslyn)</b> is a creative currently based in Melbourne.
                Freshly graduated from RMIT University with a Bachelor’s degree in Communication Design, she is passionate about visual communication, branding and identity, and creative direction.
                Beyond visuals, her expertise extend to digital marketing, content creation, and copywriting. <br/><br/>

                You can find her doing walks or taking photos with her camera when she’s not designing!
            </div>
            <div className='info-section2'>
                <div className='letsgetintouch'>
                let’s get in touch!
                </div>
                <div className='contact'>
                {/* https://www.instagram.com/j____isuals?igsh=dzRwbTBuNGwxaWZj */}
               
                <a href="mailto:jesslyngerardhine.j@gmail.com " className="custom-link" rel="noopener noreferrer">jesslyngerardhine.j@gmail.com </a> <br/>
                <a href="https://www.instagram.com/j____isuals?igsh=dzRwbTBuNGwxaWZj" className="custom-link" target="_blank" rel="noopener noreferrer">
                @j____isuals
                    </a>
            </div>
            </div>
            </div>
            <div className='info-back'>
            <Link to="/" className="custom-link">
                        back
                    </Link>
            </div>
        </div>
    )
}

export default Info;
