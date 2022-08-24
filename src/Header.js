//new

import logo from './pages/image/Logo.png';
import icon1 from './pages/image/wallet.png';
import icon2 from './pages/image/profile.png';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

export default function Header(){
  return(
    <Navbar bg="dark" variant="dark">
      <Container>
        <Link to="/">
          <img
            alt="Anasayfa"
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
          />{' '}
          MOIRA
        </Link>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Link to="/TransferInputScreen">
            <img
              to="./pages/TransferInputScreen.js"
              src={icon2}
              alt="Profile"
              width="40"
              height="40"
            />
          </Link>
          <Link to="/Heritage">
            <img
              to="./pages/Heritage"
              src={icon1}
              alt="Wallet"
              width="40"
              height="40"
            />
          </Link>
        </Nav>
      </Container>
    </Navbar>
  )
}