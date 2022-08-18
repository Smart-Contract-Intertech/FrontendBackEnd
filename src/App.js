import './pages/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import MainPage from './pages/MainPage.js';
import Header from './Header';
import TransferInputScreen from './pages/TransferInputScreen';
import Heritage from './pages/Heritage';

import {  
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { Footer } from 'antd/lib/layout/layout';

function App() {
  return (
    <Router>
        <div className="App">
          <Header/>
          <Routes>
            <Route exact path='/' element={<MainPage/>}></Route>
            <Route exact path='/TransferInputScreen' element={<TransferInputScreen/>}></Route>
            <Route exact path='/Heritage' element={<Heritage/>}></Route>
          </Routes>
          <Footer/>
        </div>
    </Router>
  )
}

export default App;
