import Header from '../components/parts/Header';
import Footer from '../components/parts/Footer';
import Back from '../components/parts/Back'
import '../styles/Arboreta.css'
import one_arboreta from '../img/arboreta/1.png';
import two_arboreta from '../img/arboreta/2.png'
import three_arboreta from '../img/arboreta/3.png'
import four_arboreta from '../img/arboreta/4.png'
import five_arboreta from '../img/arboreta/5.png'
import six_arboreta from '../img/arboreta/6.png'
import seven_arboreta from '../img/arboreta/7.png'
import eight_arboreta from '../img/arboreta/8.png'
import nine_arboreta from '../img/arboreta/9.png'

import { Link } from 'react-router-dom';


function Arboreta() {
    return (
        <div>
            <Header></Header>
            <Back></Back>
            <div className='project-detail-section'>
                <div className='project-introduction'>
                <div className='project-position-name-container'>
                    <div className='project-position2'>
                        branding + identity
                        <br />
                        sustainable strategy<br /><br />
                    </div>
                    <div className="project-name2">
                        arboréta<br /><br />
                        </div>
                    </div>
                    <div className='project-description2'>
                        <div className='project-description2-content'>

                            A solution for the future of fast fashion.<br />

                            Clothes are used up 10 times before being thrown away and will sit on the landfill for almost 200 years. <br />
                            ARBORÉTA is a fashion brand that encourages sustainability, with the idea of eco-friendly fast fashion. <br /><br />
                        </div>
                    </div>
                </div>
                <div className='jumbotron'>
                    <img src={one_arboreta} className="komma-jumbotron img-jumbo" alt="Img" />
                </div>
                <div className='custom-text-arboreta'>
                    <b style={{ fontSize: '20px' }}>less waste, more oxygen.<br></br> </b>
                    <br></br>


                    Arboréta is a sustainable clothing with biodegradable materials that dissolves into seeds when buried on land. The brand is a solution for fast fashion,
                    having the same buying experience whilst leaving out the environmental harm. The seeds from the unused clothes will grow as various plants, which contributes to a greener tomorrow.
                </div>
                <div className='arboreta-jumbotron-container'>
                    <div className='jumbotron'>
                        <img src={two_arboreta} className="komma-jumbotron img-jumbo2" alt="Img" />
                    </div>
                </div>
                <div className='custom-text-arboreta'>
                    <b style={{ fontSize: '20px' }}>attire in bloom<br></br> </b>
                    <br></br>

                    <p>The name came from the plural of arboretum, which refers to a botanical garden devoted to trees. Therefore, the logo mark is a symbol of a tree, which is a visualisation of the products.     </p>



                    <p>Styled in a modern, minimalist sans serif font, the wordmark’s
                        prominent feature is on the letter ‘e’, which stands for eco-friendly.
                        The ‘e’ stands for eco-friendly. It is styled in a lowercase with a modified acute that stands as a leaf symbol.</p>
                </div>

                <div className='two-flex-two-image'>
                    <div className='two-flex-image-container3'>
                        <img src={three_arboreta} className="two-flex-image2 komma-six-seven" alt="Img" />
                    </div>
                    <div className='two-flex-image-container2'>
                        <img src={four_arboreta} className="two-flex-image2 komma-six-seven" alt="Img" />
                    </div>

                </div>
                <div className='two-flex-two-image-container'>
                    <div className='two-flex-two-image'>
                        <div className='two-flex-image-container2'>
                            <img src={five_arboreta} className="two-flex-image2 komma-six-seven" alt="Img" />
                        </div>
                        <div className='two-flex-image-container3'>
                            <img src={six_arboreta} className="two-flex-image2 komma-six-seven" alt="Img" />
                        </div>

                    </div>
                </div>
                <div className='jumbotron'>
                    <img src={seven_arboreta} className="komma-jumbotron img-jumbo" alt="Img" />
                </div>
                <div className='two-flex-two-image-container'>
                    <div className='two-flex-two-image-arboreta'>
                        <div className='two-flex-image-container3-arboreta'>
                            <img src={eight_arboreta} className="two-flex-image2 komma-six-seven" alt="Img" />
                        </div>
                        <div className='two-flex-image-container2-arboreta'>
                            <img src={nine_arboreta} className="two-flex-image2 komma-six-seven" alt="Img" />
                        </div>

                    </div>
                </div>


                <div className='two-flex-text-rx-subcontent1'>
                    green packaging

                    <div className='two-flex-text-rx-content'>
                        <div className='two-flex-text-rx-content1'>
                            As the aim is less waste, the paper bag can be reused as a pot or vase to grow the plants from the clothes.

                        </div>
                        <div className='two-flex-text-rx-content2'>
                            Just like the products, the brown mailer is made from decomposable materials.
                            They will disintegrate to plant fertilisers when buried into soil and watered.</div>
                    </div>
                </div>


            </div>


            <Footer></Footer>
        </div>
    );
}

export default Arboreta;