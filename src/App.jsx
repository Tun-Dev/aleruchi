import { Home, Profile, Contact, Article, Gallery } from "components";

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
            <Route path="/articles" element={<Article />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </BrowserRouter>
      </>
    </>
  );
}

export default App;
