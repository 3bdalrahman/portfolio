import {React, useEffect} from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { trackPageView } from './utils/analytics';
function App() {
  useEffect(()=>{
    AOS.init({
      duration:1000,
    });
    // Track page view
    trackPageView('Portfolio Home');
  },[]);
  return (
    <main className='bg-gray-950'>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Certificates/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App
