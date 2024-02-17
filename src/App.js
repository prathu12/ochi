import React, { useEffect, useRef } from 'react';
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
  const scrollRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      el: scrollRef.current,
      // Add your options here
    });

    return () => {
      locomotiveScroll.destroy();
    };
  }, []);

  return (
    <div className="w-screen min-h-screen text-white bg-zinc-900" ref={scrollRef}>
      <NavBar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Featured1 />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
