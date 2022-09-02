import { Container, TextContainer, Line } from './styles';
import Leticia from '../../assets/Leticia.png';
import Image from 'next/image';
import Typical from 'react-typical';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { SiCodewars } from 'react-icons/si';
import Link from 'next/link';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

function About() {
  const Github = 'https://github.com/letlm';
  const Codewars = 'https://www.codewars.com/users/letlm';
  const Linkedin = 'https://www.linkedin.com/in/leticia-leal-moreira/';

  const handleScroll = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <Container>
      <div className="container-line">
        <div
          className="image"
          data-aos="fade-right"
          data-aos-offset="500"
          data-aos-easing="ease-in-sine"
          data-aos-mirror="true"
        >
          <div>
            <Image
              src={Leticia}
              alt="Letícia"
              className="img-leticia"
              width={'300px'}
              height={'300px'}
            />
          </div>
        </div>
        <div
          className="about"
          data-aos="fade-left"
          data-aos-offset="500"
          // data-aos-easing="ease-in-sine"
          data-aos-mirror="true"
        >
          <TextContainer>
            <h3>Letícia Leal Moreira</h3>
            <p>
              {/* <Typical
              loop={Infinity}
              className="typical"
              steps={[
                'Front End Developer ✨',
                4000,
                'Back End Student 🧱',
                4000,
              ]}
            /> */}
            </p>

            <div className="buttons">
              <button className="btnDownload">
                <span className="text">Currículo</span>

                <span>
                  <FaFileDownload />
                </span>
              </button>
              <button className="btnAbout">
                <span className="content">Contato</span>
              </button>
            </div>
            <div className="icons">
              <button className="btnHome">
                <Link href={Github}>
                  <a>
                    <FaGithub size={31} />
                  </a>
                </Link>
              </button>
              <button className="btnHome">
                <Link href={Linkedin}>
                  <a>
                    <FaLinkedin size={31} />
                  </a>
                </Link>
              </button>
              <button className="btnHome">
                <Link href={Codewars}>
                  <a>
                    <SiCodewars size={28} />
                  </a>
                </Link>
              </button>
            </div>
          </TextContainer>
        </div>
      </div>
      <Line id="resume" />
      <button type="button" onClick={handleScroll} className="return">
        <BsFillArrowUpCircleFill size={30} />
      </button>
    </Container>
  );
}

export default About;
