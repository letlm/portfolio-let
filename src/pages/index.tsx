import { useEffect } from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header/Header';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import { HomeContainer } from '../styles/themes/Home';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    Aos.init({ disable: false });
  }, []);

  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <About />

        <Resume />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </HomeContainer>
  );
}

export default Home;
