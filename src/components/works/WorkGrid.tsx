import { IProject } from '@/models/Project';
import WorkCard from './WorkCard';

export default function WorkGrid({ projects }: { projects: IProject[] }) {
  return <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-12 lg:gap-x-12 lg:gap-y-28">{projects.map((project, index) => <div key={(project._id as unknown) as string} className={index % 4 === 0 || index % 4 === 3 ? 'md:col-span-7' : 'md:col-span-5 md:pt-24'}><WorkCard project={project} index={index} /></div>)}</div>;
}
