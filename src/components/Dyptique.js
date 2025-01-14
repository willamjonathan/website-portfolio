import Header from '../components/parts/Header';
import Footer from '../components/parts/Footer';
import Back from '../components/parts/Back'
import '../styles/Dyptique.css'
import one_dyptique from '../img/dyptique/1.png';
import two_dyptique from '../img/dyptique/2.png'
import three_dyptique from '../img/dyptique/3.png'
import four_dyptique from '../img/dyptique/4.png'
import five_dyptique from '../img/dyptique/5.png'
import six_dyptique from '../img/dyptique/6.png'

function Dyptique() {
    return (
        <div>
            <Header></Header>
            <Back></Back>
            <div className='project-detail-section'>
                <div className='project-introduction'>
                <div className='project-position-name-container'>
                    <div className='project-position2'>
                        creative direction<br />
                        illustration<br /><br />
                    </div>
                    <div className="project-name2">
                        diptyque do son<br /><br />
                    </div></div>
                    <div className='project-description2'>
                        Embracing the two elements behind Do Son.
                        Inspired by the seaside scene of Ha Long Bay in Vietnam, Diptyque's Do Son fragrances holds meaningful and nostalgic summer memories of one of its founder. Presenting a new look by fusing the brand's Parisian origin and the fragrance's Vietnamese inspirations.<br /><br />
                    </div>
                </div>
                <div className='jumbotron'>
                    <img src={one_dyptique} className="komma-jumbotron img-jumbo" alt="Img" />
                </div>
                {/* cek */}
                <div className='two-flex-dyptique'>
                    <div className='two-flex-image-container-dyptique'>
                        <img src={two_dyptique} className="two-flex-image-dyptique" alt="Img" />
                    </div>
                    <div className='logo-concept-dyptique'>
                        <b style={{ fontSize: '20px' }}>surreal, nostalgic, modern oriental</b><br />
                        <br />
                        These are the three keywords established as the guidance for the conception of the design. As the main objective is to create a fresh and compelling advertising campaign for the fragrance, the strategy is to develop window display designs that  pays homage to the Vietnamese landscape while maintaining Diptyque’s signature elegance.
                        brand tagline, ‘PAUSE AND CHERISH’.
                    </div>
                </div>
                {/* jumbotron */}
                <div className='jumbotron'>
                    <img src={three_dyptique} className="komma-jumbotron img-jumbo2" alt="Img" />
                </div>

                <div className='two-flex-dyptique custom-margin'>
                    <div className='logo-concept-dyptique'>
                        <b style={{ fontSize: '20px' }}>concept 01</b><br />
                        <br />
                        Focusing on storytelling, without utilising any typography except for the name itself. Typography is inspired by Diptyque’s iconic disordered typography.
                        The streams at the back creates a sense of direction, leading the viewer as if they’re on a journey on the junkboats and reaches the final destination, the pagoda with blooming tuberoses.
                    </div>
                    <div className='two-flex-image-container-dyptique'>
                        <img src={four_dyptique} className="two-flex-image-dyptique" alt="Img" />
                    </div>

                </div>
                                {/* jumbotron */}
                                <div className='jumbotron'>
                    <img src={five_dyptique} className="komma-jumbotron img-jumbo2" alt="Img" />
                </div>

                <div className='two-flex-dyptique custom-margin'>
                    <div className='logo-concept-dyptique'>
                        <b style={{ fontSize: '20px' }}>concept 02</b><br />
                        <br />
                        Utilising flat illustrations, a tuberose branch going through three perfume bottles is pictured in replacement of the streams. Each bottles includes elements inspired by the fragrance’s back story, which conveys the experience Do Son offers from their fragrance. Disordered typography is based on Diptyque’s logo design, and tag lines is included to enhance the experience.
                    </div>
                    <div className='two-flex-image-container-dyptique'>
                        <img src={six_dyptique} className="two-flex-image-dyptique" alt="Img" />
                    </div>

                </div>


            </div>

            <Footer></Footer>
        </div>
    );
}

export default Dyptique;