import { IProject } from '@/models/Project';
import WorkCard from './WorkCard';

export default function WorkGrid({ projects }: { projects: IProject[] }) {
  return <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:gap-x-12 lg:gap-y-24">{projects.map((project, index) => <div key={(project._id as unknown) as string} className={index % 4 === 1 || index % 4 === 2 ? 'md:pt-20' : ''}><WorkCard project={project} index={index} /></div>)}</div>;
}
