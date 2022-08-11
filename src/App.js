import "./App.css";
import Carousal from "./components/Carousal/Carousal";
import Equipments from "./components/Equipments/Equipments";
import Form from "./components/Form/Form";
import Contact from "./components/Contact/Contact";
import Subscription from "./components/Subscription/Subscription";
import Testimonial from "./components/Testimonial/Testimonial";
import ResponsiveAppBar from "./components/Navbar/Navbar";
import ProductDisplay from "./components/Stripe/ProductDisplay";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/Auth/SignUp";
import { useEffect, useState } from "react";
function App() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(true);
 
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
         <Route exact path="/" element={isUserSignedIn && <SignUp />} /> 
          <Route
            exact
            path="/homepage"
            element={
              isUserSignedIn && <>
               <ResponsiveAppBar /> <Carousal /> <Equipments />
                <Form />
                <Subscription />
                <Testimonial />
                <Contact />
              </>
            }
          />
          <Route
            exact
            path="/whySoSerious"
            element={
              <ProductDisplay
                img="https://epostalnews.com/wallpaper/wallpaper/20220428/joker-wallpapers-wallpapers-hd-preview.webp"
                name="Why So Serious"
                price="$50"
              />
            }
          />
          <Route
            exact
            path="/Batcycle"
            element={
              <ProductDisplay
                img="https://wallpapercave.com/wp/wp7149547.jpg"
                name="Batcycle"
                price="$70"
              />
            }
          />
          <Route
            exact
            path="/Batmobile"
            element={
              <ProductDisplay
                img="https://wallpapercave.com/wp/8K3mVCl.jpg"
                name="Batmobile"
                price="$100"
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
