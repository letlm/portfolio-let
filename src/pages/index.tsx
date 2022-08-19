import { About } from '../components/About';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header/Header';
import { Projects } from '../components/Projects';
import { HomeContainer } from '../styles/themes/HomeStyles';
function Home() {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </HomeContainer>
  );
}

export default Home;
