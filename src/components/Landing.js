import '../styles/Landing.css';
import { Link } from 'react-router-dom';
import bintangIcon from '../img/icon/bintang.png';



function Landing() {
    return (
        <div>
            <div className="cover">
                <div className ="landing-section">
                    <div className='title-icon'>
                    <img
                    src={bintangIcon}
                    className="landing-icon"
                    alt="Icon"
                />
                <div className="title">
                    jesslyn gerardhine
                </div>
                
                </div>
                <div className="position">
                    (communication designer)
                </div>
                <div className="work" >
                    <Link to="/works" className="custom-link">
                        works
                    </Link>
                </div>
                <div className="info">
                    <Link to="/info" className="custom-link">
                        info
                    </Link>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Landing;
