import '../../styles/parts/Footer.css'
function Footer(){
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', 
        });
      };
    
    return(
        
        <div>
    <div className="footer">
        <div className="back-to-top" onClick={scrollToTop}>
          back to top
        </div>
      </div>
        </div>
    );
}

export default Footer;
