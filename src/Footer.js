import Logo from './pages/image/Logo.png';
import Navbar from 'react-bootstrap/Navbar';

export default function Footer(){
    return(
        <Navbar bg="dark" variant="dark">
            <div className="container-fluid">
                <Link to="/">
                    <img src={Logo} 
                    to="/"
                    alt="" 
                    width="30" 
                    height="30" 
                    className="d-inline-block align-text-top" 
                    style={{display:"inline"}}>
                    </img>
                    <p style={{display:"inline", color:'white'}}>MOIRA</p>
                </Link>
            </div>
        </Navbar>
    )
}