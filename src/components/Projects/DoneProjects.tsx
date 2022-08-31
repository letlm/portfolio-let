import { DoneProject, Project } from './styles';
import Link from 'next/link';
import { ReactNode } from 'react';

interface DoneProjects {
  title: string;
  techs: string;
  img: string;
  repo: string;
  demo: string;
}

function DoneProjects({ title, techs, img, repo, demo }: DoneProjects) {
  return (
    <DoneProject>
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
