import '@elastic/eui/dist/eui_theme_amsterdam_dark.css';/* 
import '@elastic/eui/dist/eui_theme_amsterdam_light.css'; */
import './App.css';
import Header from './../Header/Header';
import PreFooter from './../PreFooter/PreFooter';
import Footer from './../Footer/Footer';
import Main from './../Main/Main';
import Zone from './../Zone/Zone';
import Consultation from './../Consultation/Consultation';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { IoLogoWhatsapp } from "react-icons/io5";

const App = () => {
  return(
    <div className="container">
      <HashRouter>
        <Header/>
          <Switch>
            <Route path="/" exact>
              <Main/>
            </Route>
            <Route path="/Zona_de_Atencion" exact>
              <Zone/> 
            </Route>
            <Route path="/Consulta" exact>
              <Consultation/>
            </Route>
          </Switch>

            <a href="https://api.whatsapp.com/send?phone=541162263170" target="_blank" className="whatsapp"> 
              <IoLogoWhatsapp className="whatsappIcon"/>
            </a>
        <PreFooter />
        <Footer/>
      </HashRouter>       
    </div>
  )
}

export default App;