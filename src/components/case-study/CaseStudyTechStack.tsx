import { IProject } from '@/models/Project';

export default function CaseStudyTechStack({ techStack }: { techStack: IProject['techStack'] }) {
  if (!techStack?.length) return null;
  return <div className="material-register">{techStack.map((item, index) => <div key={index}><span>{String(index + 1).padStart(2, '0')}</span><strong>{item.name}</strong><em>{item.category || 'Specification'}</em></div>)}</div>;
}
