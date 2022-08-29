import Link from 'next/link';

import DoneProjects from './DoneProjects';

import { Container } from './styles';

export function Projects() {
  return (
    <Container>
      <h1>Alguns dos projetos desenvolvidos</h1>
      <div>
        <button type="button">
          <Link href="/projects">
            <a>Ver todos</a>
          </Link>
        </button>
      </div>

      <section>
        <DoneProjects
          img="https://i.imgur.com/psgkvHk.png"
          title="NuKenzie"
          techs="React"
          repo="https://github.com/letlm/nukenzie-REACT"
          demo="https://nu-kenzie-letlm.vercel.app/"
        />
        <DoneProjects
          img="https://i.imgur.com/psgkvHk.png"
          title="NuKenzie"
          techs="React"
          repo="https://github.com/letlm/nukenzie-REACT"
          demo="https://nu-kenzie-letlm.vercel.app/"
        />
        <DoneProjects
          img="https://i.imgur.com/psgkvHk.png"
          title="NuKenzie"
          techs="React"
          repo="https://github.com/letlm/nukenzie-REACT"
          demo="https://nu-kenzie-letlm.vercel.app/"
        />
      </section>
    </Container>
  );
}
