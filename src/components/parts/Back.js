import '../../styles/parts/Back.css'
import { Link } from 'react-router-dom';

function Back(){
    return(
        <div>
            <div className="back-style">
            <Link to="/works" className="custom-link">
                        back
                    </Link>
            </div>
        </div>
    );
}

export default Back;