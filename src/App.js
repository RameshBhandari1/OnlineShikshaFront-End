import './App.css' 
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './css/style.css'
import './css/responsive.css'
import './js/style.js'
import 'jquery'
import 'popper.js'
import 'font-awesome/css/font-awesome.min.css'
import './css/props.css'
import './css/App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, 
  faEnvelope, 
  faLock, 
  faPhoneVolume, 
  faPhoneAlt, 
  faMapMarkerAlt, 
  faCopyright, 
  faWindowClose, 
  faPaperPlane, 
  faGlobe } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter } from 'react-router-dom'

import Header from './Header/Header'
import Body from './Body/Body'
import Footer from './Footer/Footer'
library.add(faUser, faEnvelope, faLock, faPhoneVolume, faPhoneAlt, faMapMarkerAlt,faCopyright, faWindowClose, faPaperPlane, faGlobe)

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Body></Body>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
