
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import ColorSchemesExample from './Component/HomePage/home';
import Contact from './Component/ContactUs/contact';
import AboutUs from './Component/AboutUs/aboutUs';
import NavBar from './Component/navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Photo from './Component/photo';




function App() {
 
  return (
  <BrowserRouter>
      <NavBar/>
      <Switch>
       
        <Route exact path="/"><ColorSchemesExample/></Route>
        <Route  path="/photoGalleryApp"><ColorSchemesExample/></Route>
        <Route path="/about"> <AboutUs/> </Route>
        <Route path="/contact"><Contact/></Route>
        <Route path ="/photos/:id"><Photo/></Route>
      </Switch>
    
      </BrowserRouter>
     
   
    
  
  );
}

export default App;
