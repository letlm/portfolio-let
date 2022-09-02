import { Container } from './styles';

function Resume() {
  return (
    <Container>
      <h2>Breve resumo...</h2>

      <div
        className="resume"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <span>
          Desenvolvedora Front End, estudante de Desenvolvimento Web Full Stack
          da Kenzie Academy Brasil e professora de Química.
        </span>
      </div>

      <div className="card" data-aos="fade-down" data-aos-duration="1500">
        <p>
          Sempre gostei de desafios e de solucionar problemas, por isso acabei
          escolhendo a Licenciatura em Química como formação, porém não estava
          convencida de que aquilo era a minha paixão. Por esse motivo e por ser
          uma entusiasta da tecnologia comecei a fazer alguns cursos pequenos de
          html/css e fiquei completamente apaixonada e encantada, certa de que o
          desenvolvimento realmente era o que brilhava meus olhos. Assim,
          resolvi fazer minha transição de carreira para a área do
          desenvolvimento web e atualmente meu objetivo é conquistar minha
          primeira oportunidade como desenvolvedora.
        </p>
      </div>

      <div
        className="techs"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <span>
          Algumas das tecnologias e ferramentas que tenho conhecimento:
        </span>
        <div className="imgs">
          <img
            width={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="React JS"
          />

          <img
            width={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="JavaScript"
          />
          <img
            width={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="Typescript"
          />
          <img
            width={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="Python"
          />
          <img
            width={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain-wordmark.svg"
            alt="Django"
          />
          <img
            width={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="Node Js"
          />
          <img
            width={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            alt="HTML 5"
          />

          <img
            width={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            alt="CSS 3"
          />
          <img
            width={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
            alt="Express.js"
          />
          <img
            width={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
            alt="PostgreSQL"
          />
          <img
            width={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
            alt="Redux"
          />
          <img
            width={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg"
            alt="Heroku"
          />
          <img
            width={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
            alt="Docker"
          />

          <img
            width={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt="Git"
          />

          <img
            width={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            alt="Visual Studio Code"
          />
          <img
            width={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
            alt="NextJs"
          />
          <img
            width={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
            alt="Jest"
          />

          <img
            width={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg"
            alt="Bash"
          />

          <img
            width={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/yarn/yarn-original.svg"
            alt="Yarn"
          />

          <img
            width={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
            alt="Linux"
          />

          <img
            width={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg"
            alt="Ubuntu"
          />
          <img
            width={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            alt="Figma"
          />
          <img
            width={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg"
            alt="Canva"
          />
          <img
            width={56}
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gimp/gimp-original.svg"
            alt="Gimp"
          />
        </div>
      </div>

      <span id="projects"></span>
    </Container>
  );
}

export default Resume;
