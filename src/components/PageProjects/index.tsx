import { Container, Context, Projects, Figure } from './styles';

interface IPageProjectsProps {
  title: string;
  tags: string;
  img: string;
  repo: string;
  demo: string;
  description: string;
  level: string;
}

function PageProjects({
  title,
  tags,
  img,
  repo,
  demo,
  description,
  level,
}: IPageProjectsProps) {
  return (
    <Container>
      <Context>
        <Projects>
          <span className="level">{level}</span>
          <Figure>
            <div id="efect">
              <img src={img} className="image" />
              <p id="comentario">{description}</p>
            </div>
            <figcaption>{title}</figcaption>
            <div className="buttons">
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <button className="button">Demo</button>
              </a>
              <a href={repo} target="_blank" rel="noopener noreferrer">
                <button className="button">Repositório</button>
              </a>
            </div>

            <div className="techsDiv">{tags}</div>
          </Figure>
        </Projects>
      </Context>
    </Container>
  );
}

export default PageProjects;
