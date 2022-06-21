import "./App.scss";
import {
  Home,
  GalleryLoader,
  LandingLoader,
  Profile,
  Contact,
  NavBar,
} from "components";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <>
        {/* <NavBar /> */}
        {/* <Contact /> */}
        {/* <Profile /> */}
        {/* <LandingLoader /> */}
        {/* <GalleryLoader /> */}
        {/* <Home /> */}
      </>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </>
    </>
  );
}

export default App;
