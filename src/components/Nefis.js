import Header from '../components/parts/Header';
import Footer from '../components/parts/Footer';
import Back from '../components/parts/Back'
import '../styles/Nefis.css'
import one_nefis from '../img/nefis/1.png';
import two_nefis from '../img/nefis/2.png'
import three_nefis from '../img/nefis/3.png'
import four_nefis from '../img/nefis/4.png'
import five_nefis from '../img/nefis/5.png'
import six_nefis from '../img/nefis/6.png'
import seven_nefis from '../img/nefis/7.png'
import eight_nefis from '../img/nefis/8.png'

import { Link } from 'react-router-dom';


function Nefis() {
    return (
        <div>
            <Header></Header>
            <Back></Back>
            <div className='project-detail-section'>
                <div className='project-introduction'>
                <div className='project-position-name-container'>

                    <div className='project-position2'>
                        branding + identity<br />
                        packaging design<br />
                        marketing + communication<br /><br />
                    </div>
                    <div className="project-name2">
                        nefis<br /><br />
                    </div>
                    </div>
                    <div className='project-description2'>
                        Introducing Turkish dishes to Indonesian youngsters.
                        Located in ShopHaus Menteng, Jakarta Pusat, Indonesia, NEFIS Kebab House sells kebab cuisines, tailored perfectly to fit Indonesian taste.
                        A fuse of Turkish personality and modern freshness and friendliness, aims to bring joyous atmosphere and new experiences.<br /><br />
                    </div>
                </div>
                <div className='two-flex-two-image'>
                    <div className='two-flex-image-container2-nefis'>
                        <img src={one_nefis} className="two-flex-image2 komma-six-seven" alt="Img" />
                    </div>
                    <div className='two-flex-image-container3-nefis'>
                        <img src={two_nefis} className="two-flex-image2 komma-six-seven" alt="Img" />
                    </div>

                </div>
                <div className='jumbotron-nefis'>
                    <img src={three_nefis} className="komma-jumbotron img-jumbo2" alt="Img" />
                </div>
                <div className='gradient nefis-meaning'>
                    
                <b>it’s delicious, it’s nefis!</b><br/><br/>

                    From Ottoman Turkish نفيس (“good, precious”),
                    ‘nefis’ means delicious and exquisite.
                    Living up to the name, Nefis aims to provide high quality
                    and delicious Turkish kebabs to satisfy our costumers.
                </div>
                <div className='custom-margin-nefis'></div>
                <div className='jumbotron '>
                    <img src={four_nefis} className="komma-jumbotron img-jumbo" alt="Img" />
                </div>

                <div className='two-flex-nefis'>
                    <div className='two-flex-image-container-nefis'>
                        <img src={five_nefis} className="two-flex-image-nefis" alt="Img" />
                    </div>
                    
                    <div className='logo-concept-nefis'>
                        <b style={{ fontSize: '20px' }}>mr. yagiz</b><br />
                        <br />
                        

As the aim is to introduce Turkish dishes to Indonesian youngsters, the brand is represented by a mascot, Mr. Yagiz. The mascot is a coming together of traditional culture and current trends to approach our target audience.

Mr. Yagiz is a cool kebab chef, with prominent moustache and is always seen wearing sunglasses and his fez, a traditional Turksih hat. 
                    </div>
                </div>

                <div className='jumbotron'>
                    <img src={six_nefis} className="komma-jumbotron img-jumbo-nefis" alt="Img" />
                </div>

                <div className='jumbotron-nefis2'>
                    <img src={seven_nefis} className="komma-jumbotron img-jumbo-nefis" alt="Img" />
                </div>
                
                <div className='jumbotron'>
                    <img src={eight_nefis} className="komma-jumbotron img-jumbo-nefis" alt="Img" />
                </div>


            </div>

            <Footer></Footer>
        </div>
    );
}

export default Nefis;