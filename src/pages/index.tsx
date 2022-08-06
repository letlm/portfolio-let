import { About } from '../components/About';
import { Header } from '../components/Header/Header';
import { HomeContainer } from '../styles/themes/HomeStyles';
function Home() {
  return (
    <HomeContainer>
      <Header />
      <main className="container">
        <About />
      </main>
    </HomeContainer>
  );
}

export default Home;
