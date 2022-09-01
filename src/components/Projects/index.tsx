import Link from 'next/link';
import { AiOutlineBulb } from 'react-icons/ai';
import DoneProjects from './DoneProjects';

import { Container } from './styles';

function Projects() {
  return (
    <Container>
      <h2>Alguns dos projetos desenvolvidos...</h2>

      <section>
        <DoneProjects
          img="https://i.imgur.com/BMOqmxH.png"
          title="KenzieHub"
          techs="Gerenciamento de estudos"
          repo="https://github.com/letlm/kenziehub-REACT"
          demo="https://kenzie-hub-letlm.vercel.app/"
        />
        <DoneProjects
          img="https://i.imgur.com/5vrQjVV.png"
          title="BurguerKenzie"
          techs="Simulação de hamburgueria"
          repo="https://github.com/letlm/kenzieBurguer-REACT"
          demo="https://kenzie-burguer-letlm.vercel.app/"
        />
        <DoneProjects
          img="https://i.imgur.com/psgkvHk.png"
          title="NuKenzie"
          techs="Gerenciamento de despesas"
          repo="https://github.com/letlm/nukenzie-REACT"
          demo="https://nu-kenzie-letlm.vercel.app/"
        />
      </section>

      <div className="div">
        <button type="button" className="button">
          <Link href="/projects">
            <a className="more">Ver mais</a>
          </Link>
          <AiOutlineBulb size={20} className="icon" />
        </button>
      </div>
      <span id="contact"></span>
    </Container>
  );
}

export default Projects;
