import '../../styles/parts/Header.css';
import { useState, useEffect } from 'react';
import bintangIcon from '../../img/icon/bintang.png';
import { NavLink } from 'react-router-dom';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    // useEffect(() => {
    //     const handleResize = () => setIsMobile(window.innerWidth <= 768);
    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);

    // const toggleMenu = () => {
    //     if (isMobile) {
    //         setMenuOpen(!menuOpen);
    //     }
    // };

    return (
        <div>
            <div className='header'>
                <div className='title-header'>
                <NavLink to="/" className="custom-link">
                jesslyn gerardhine
                    </NavLink>
                </div>
                {/* <div className="logo-header" onClick={toggleMenu}> */}
                <div className="logo-header" >

                    <img
                        src={bintangIcon}
                        className="icon-header"
                        alt="Icon"
                    />
                </div>
                {/* {(isMobile ? menuOpen : true) && ( */}
                    <div className="actions-header">
                        <div className="work-header">
                        <NavLink to="/works" className="custom-link">
                        works
                    </NavLink></div>
                    <div className="logo-header2">
                    <img
                        src={bintangIcon}
                        className="icon-header"
                        alt="Icon"
                    />
                    </div>
                        <div className="info-header">
                        <NavLink to="/info" className="custom-link">
                        info
                    </NavLink>
                            </div>
                    </div>
                {/* )} */}
            </div>
        </div>
    );
}

export default Header;
