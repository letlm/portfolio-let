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

export default function DoneProjects({
  title,
  techs,
  img,
  repo,
  demo,
}: DoneProjects) {
  return (
    <DoneProject>
      <Project imgUrl={img}>
        <div className="text">
          <h1>{title}</h1>
          <span>{techs}</span>
        </div>
      </Project>
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
    </DoneProject>
  );
}
