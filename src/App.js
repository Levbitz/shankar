import "./App.css";
import Home from "./Pages/HomePage/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Footer from "./components/common/footer/Footer";
import AboutPage from "./Pages/AboutPage/AboutPage";
import PropertyPage from "./Pages/PropertyPage/PropertyPage";
import ServicePage from "./Pages/ServicesPage/ServicePage";
import ContactPage from "./Pages/ContactPage/ContactPage";
import AuthProvider from "./assets/lib/AuthContext/auth";
import LoginPage from "./Pages/LoginPage/LoginPage";
import PrivateRoute from "./assets/lib/PrivateRoute/PrivateRoute";
import Profile from "./Pages/Profile/Profile";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import PostAd from "./Pages/PostAd/PostAd";
import PhotoUpload from "./Pages/PhotoUpload/PhotoUpload";
import EditAdInfo from "./AdminPages/EditAdInfo/EditAdInfo";
import PhotoEdit from "./AdminPages/PhotoEdit/PhotoEdit";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/property" element={<PropertyPage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<PrivateRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="/edit/:id" element={<EditAdInfo />}>
            <Route path="/edit/:id" element={<EditAdInfo />} />
          </Route>
          {/* 
   
       
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/pricing" component={Pricing} />
*/}

          <Route path="/post_ad" element={<PrivateRoute />}>
            <Route path="/post_ad" element={<PostAd />} />
          </Route>
          <Route path="/photo_upload" element={<PrivateRoute />}>
            <Route path="/photo_upload" element={<PhotoUpload />} />
          </Route>
          <Route path="edit_img/:id" element={<PhotoEdit />}>
            <Route path="edit_img/:id" element={<PhotoEdit />} />
          </Route>
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
