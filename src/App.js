import "./App.css";
import Home from "./Pages/HomePage/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/common/header/Header";
import Footer from "./components/common/footer/Footer";
import AboutPage from "./Pages/AboutPage/AboutPage";
import PropertyPage from "./Pages/PropertyPage/PropertyPage";
import ServicePage from "./Pages/ServicesPage/ServicePage";
import ContactPage from "./Pages/ContactPage/ContactPage";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/property" component={PropertyPage} />
        <Route exact path="/services" component={ServicePage} />
        <Route exact path="/contact" component={ContactPage} />
        {/* 
   
       
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/pricing" component={Pricing} />
*/}
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
