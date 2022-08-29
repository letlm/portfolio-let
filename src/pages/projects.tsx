import { Header } from '../components/Header/Header';
import { PageProjects } from '../components/PageProjects';
import { Container } from '../styles/themes/Projects';
import { projects } from '../components/PageProjects/projects.db';
import { Footer } from '../components/Footer';
export default function Projects() {
  return (
    <Container>
      <Header />
      <main className="container">
        {projects.map((project, index) => (
          <PageProjects
            key={index}
            title={project.title}
            img={project.img}
            tags={project.tags}
            repo={project.repo}
            demo={project.demo}
            description={project.description}
          />
        ))}
      </main>
      <Footer />
    </Container>
  );
}
