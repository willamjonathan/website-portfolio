import { useState, useEffect } from 'react';
import '../styles/Works.css';
import kommaWork from '../img/work-page/komma.png';
import diptikWork from '../img/work-page/diptik.png';
import nefisWork from '../img/work-page/nefis.png';
import rxWork from '../img/work-page/rx.png';
import sykiWork from '../img/work-page/syki.png';
import abboretaWork from '../img/work-page/abboreta.png'
import { Link } from 'react-router-dom';

import Header from '../components/parts/Header';
import Footer from '../components/parts/Footer';
function Works() {

    return (
        <div>
            <Header />
            <div className='info-back-workpage'>
                <Link to="/" className="custom-link">
                    back
                </Link>
            </div>
            <div className="works-section">
                {/* Project 001 */}
                <div className="project-section">
                    <div className="project-section2">
                        <div className="project-id">001</div>
                        <div className="project-name">
                            <Link to="/komma" className="custom-link">
                                komma
                            </Link></div>
                        <div className="project-description">creative direction<br/>
                            illustration</div>
                    </div>
                    <div className="project-picture">
                        <img src={kommaWork} className="komma workpicture" alt="Img" />
                    </div>
                </div>
                {/* Project 002 */}
                <div className="project-section">
                    <div className="project-section2">
                        <div className="project-id">002</div>
                        <div className="project-name">
                            <Link to="/dyptique" className="custom-link">
                                diptyque do son
                            </Link></div>

                        <div className="project-description">branding + identity<br /></div>
                    </div>
                    <div className="project-picture">
                        <img src={diptikWork} className="komma workpicture" alt="Img" />
                    </div>
                </div>
                {/* Project 002 */}
                <div className="project-section">
                    <div className="project-section2">
                        <div className="project-id">003</div>
                        <div className="project-name">       
                        <Link to="/nefis" className="custom-link">
                            nefis                            
                        </Link> </div>
                        <div className="project-description">branding + identity<br />
                            packaging design<br />
                            marketing + communication</div>
                    </div><div className="project-picture">
                        <img src={nefisWork} className="komma workpicture" alt="Img" />
                    </div>
                </div>
                <div className="project-section">
                    <div className="project-section2">
                        <div className="project-id">004</div>
                        <div className="project-name">
                        <Link to="/rx" className="custom-link">
                            rx                            
                        </Link> </div>
                        <div className="project-description">branding + identity<br />
                            product design<br />
                            sustainable strategy</div>
                    </div><div className="project-picture">
                        <img src={rxWork} className="komma workpicture" alt="Img" />
                    </div>
                </div>
                <div className="project-section">
                    <div className="project-section2">
                        <div className="project-id">005</div>
                        <div className="project-name"> 
                            <Link to="/syki" className="custom-link">
                            syki                            
                        </Link> </div>
                        <div className="project-description">creative direction<br />
                            branding + identity</div>
                    </div><div className="project-picture">
                        <img src={sykiWork} className="komma workpicture" alt="Img" />
                    </div>
                </div>
                <div className="project-section">
                    <div className="project-section2">
                        <div className="project-id">006</div>
                        <div className="project-name"><Link to="/arboreta" className="custom-link">
                        arboréta                            
                        </Link></div>
                        <div className="project-description">branding + identity<br />
                            sustainable strategy</div>
                    </div><div className="project-picture">
                        <img src={abboretaWork} className="komma workpicture" alt="Img" />
                    </div>
                </div>


            </div>

            <Footer></Footer>

        </div>
    );
}

export default Works;
