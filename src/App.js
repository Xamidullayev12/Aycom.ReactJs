import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';



import MainPage from ".";
import AboutPage from "./Pages/About";
import ContactPage from "./Pages/Contact";
import CatalogPage from "./Pages/Catalog";
import NavBar from "./Components/NavBar";
import BaseFooter from "./Components/BaseFooter";





const App = () => {
  return (
   <Router>
     <NavBar />
     <main>
        <Switch>
          <Route path="/" exact>
            <MainPage />
          </Route>
          <Route path="/about" exact>
            <AboutPage />
          </Route>
          <Route path="/contact" exact>
            <ContactPage />
          </Route>
          <Route path="/catalog/:id" exact>
            <CatalogPage />
          </Route>
          <Redirect to="/"/>
        </Switch>
     </main>
     <BaseFooter />
   </Router>
  );
}

// catalog/1


export default App;