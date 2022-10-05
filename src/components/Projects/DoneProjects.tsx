import { DoneProject, Project } from './styles';
import Link from 'next/link';

interface DoneProjects {
  title: string;
  techs: string;
  img: string;
  repo: string;
  demo: string;
  stack: string;
}

function DoneProjects({ title, techs, img, repo, demo, stack }: DoneProjects) {
  return (
    <DoneProject>
      <p className="stack">{stack}</p>
      <div className="text">
        <h1>{title}</h1>
        <span>{techs}</span>
      </div>
      <Project imgUrl={img} />
      <div className="infos">
        <button>
          <Link href={repo}>
            <a>Repo</a>
          </Link>
        </button>
        <button>
          <Link href={demo}>
            <a>Demo</a>
          </Link>
        </button>
      </div>
    </DoneProject>
  );
}

export default DoneProjects;
