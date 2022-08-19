import { ReactNode } from 'react';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { Container } from './styles';

interface FooterProps {
  children: ReactNode;
}

export function Footer() {
  const handleClick = (url: string) => {
    window.open(url);
  };

  const handleScroll = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScroll}>
          Voltar
        </button>
        <div>
          <AiOutlineGithub
            onClick={() => handleClick('https://github.com/letlm')}
          />
          <AiFillLinkedin
            onClick={() =>
              handleClick('https://www.linkedin.com/in/leticia-leal-moreira/')
            }
          />
        </div>
      </div>
    </Container>
  );
}
