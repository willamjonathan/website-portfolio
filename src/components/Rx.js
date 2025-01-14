import Header from '../components/parts/Header';
import Footer from '../components/parts/Footer';
import Back from '../components/parts/Back'
import '../styles/Rx.css'
import one_rx from '../img/rx/1.png';
import two_rx from '../img/rx/2.png'
import three_rx from '../img/rx/3.png'
import four_rx from '../img/rx/4.png'


import { Link } from 'react-router-dom';


function Rx() {
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
                        rx<br /><br />
                    </div>
                    </div>
                    <div className='project-description2'>
                        Introducing Turkish dishes to Indonesian youngsters.
                        Located in ShopHaus Menteng, Jakarta Pusat, Indonesia, rx Kebab House sells kebab cuisines, tailored perfectly to fit Indonesian taste.
                        A fuse of Turkish personality and modern freshness and friendliness, aims to bring joyous atmosphere and new experiences.<br /><br />
                    </div>
                </div>

                <div className='jumbotron'>
                    <img src={one_rx} className="komma-jumbotron img-jumbo" alt="Img" />
                </div>

                {/* <div className='two-flex-text-rx'> */}

                <div className='two-flex-text-rx-subcontent1'>
                    the problem
                    <div className='two-flex-text-rx-content'>
                        <div className='two-flex-text-rx-content1'>
                            Arnauld Plas, co-founder and CEO of Prose, stated that between 20-40% of beauty products end up as waste. Brands produce in bulk, advertise them with all those claims, people buy the product, try them, if it’s not suitable, they buy another one, and so on. The unused products would either sit on their shelf forever or even worse, go into waste without considering its recycleability.
                        </div>
                        <div className='two-flex-text-rx-content2'>

                            With the same problem as it is in apparel, waste is built into the beauty’s business model. Most work to eliminate waste has so far been connected to packaging, where there’s also still many room for improvement, other sources are overlooked.                     </div>
                    </div>
                </div>
                {/* </div> */}

                <div className='jumbotron-rx'>
                    <img src={two_rx} className="komma-jumbotron img-jumbo2" alt="Img" />
                </div>


                <div className='two-flex-text-rx-subcontent1'>
                    skincare, redefined.
                    <div className='two-flex-text-rx-content'>
                        <div className='two-flex-text-rx-content1'>

                            RX, an abbreviation of ReconteXtualise, is a personalised skincare brand,
                            backed by science and technology. The product is a lyophilised serum, where the ingredients are freeze-dried, preserved in their most effective state, until
                            awakened by water to immediately applied to skin.
                        </div>
                        <div className='two-flex-text-rx-content2'>
                            RX also stands for and medical prescription. This represents the skincare routine that has been formulated personally to suit each person’s skin type and troubles. The ‘prescription’ comes in a form of a tablet, adopting pharameutical concept of the brand and the product.
                        </div>
                    </div>
                </div>

                <div className='jumbotron'>
                    <img src={three_rx} className="komma-jumbotron img-jumbo" alt="Img" />
                </div>

                <div className='two-flex-text-rx-subcontent1'>

                    <div className='two-flex-text-rx-content'>
                        <div className='two-flex-text-rx-content1'>
                            <b style={{ fontSize: '20px' }}>logo concept</b><br /><br />
                            Our brand names consist of different typefaces of each letter, this represents our practice of collaborations, which consist several parties. This also portray how our products are bespoke and unique for each client.<br />
                            <br />
                        </div>
                        <div className='two-flex-text-rx-content2'>
                            <b style={{ fontSize: '20px' }}>logomark</b><br /><br />
                            The logomark is a molecule structure, as a skincare brand who works with chemicals and technology.
                        </div>
                    </div>
                </div>

                <div className='jumbotron'>
                    <img src={four_rx} className="komma-jumbotron img-jumbo" alt="Img" />
                </div>

                <div className='two-flex-text-rx-subcontent1'>
                    sustainable packaging
                    <div className='two-flex-text-rx-content'>
                        <div className='two-flex-text-rx-content1'>

                            All of the packaging is sustainably designed, including the materials,
                            with the consideration of easier recycling and lower carbon emissions, both from manufacturing and shipping.
                        </div>
                        <div className='two-flex-text-rx-content2'>
                            The outer packaging is a single-material box, which will use Barry Uncoated paper, which is free from optical brightening agents and is approved for direct contact with pharmaceutical and healthcare products.
                            All printing will use soy-based ink. <br /><br />

                            The blister pack will use dry moulded fibre, which is plastic-free and renewable. This material requires less water and CO2, and produces low manufacturing waste.                                                  </div>
                    </div>
                </div>
                <div className='view-brand-guidelines'>
                <a href="https://drive.google.com/file/d/1WTtKOxeNx6uTPKp-PresFIgBVI2SgNMT/view?usp=sharing" className="custom-link" target="_blank" rel="noopener noreferrer">
                        view research + brand guidelines
                    </a>
                </div>

            </div>

            <Footer></Footer>
        </div>
    );
}

export default Rx;