import PageProjects from '../components/PageProjects';
import { Container } from '../styles/themes/Projects';
import { projects } from '../components/PageProjects/projects.db';
import Footer from '../components/Footer';
import HeaderProjects from '../components/HeaderProjects/Header';

function Projects() {
  return (
    <Container>
      <HeaderProjects />
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

export default Projects;
