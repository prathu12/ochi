import React from 'react';
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import Marquee from './components/Marquee';
import About from './components/About';
import Eyes from './components/Eyes';
import Featured from './components/Featured';
import Featured1 from './components/Featured1';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-screen min-h-screen text-white bg-zinc-900">
      {/* <BrowserRouter> */}
      <NavBar />
      {/* <Routes> */}
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Featured1 />
      <Cards />
      <Footer />
      {/* </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
