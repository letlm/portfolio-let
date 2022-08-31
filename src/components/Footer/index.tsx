import { ReactNode } from 'react';
import { Container } from './styles';

interface FooterProps {
  children: ReactNode;
}

function Footer() {
  const handleClick = (url: string) => {
    window.open(url);
  };

  return (
    <Container>
      <div className="container">
        <span>Feito com ❤ </span>
        {/* <div>
          <AiOutlineGithub
            onClick={() => handleClick('https://github.com/letlm')}
          />
          <AiFillLinkedin
            onClick={() =>
              handleClick('https://www.linkedin.com/in/leticia-leal-moreira/')
            }
          />
        </div> */}
      </div>
    </Container>
  );
}

export default Footer;
