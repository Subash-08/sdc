import { IProject } from '@/models/Project';
import Image from 'next/image';
import Reveal from '@/components/home/Reveal';
import ImageReveal from '@/components/home/ImageReveal';

export default function CaseStudyProcess({ steps }: { steps: IProject['processSteps'] }) {
  if (!steps?.length) return null;
  return <div className="case-process">{steps.map((step, index) => <article key={index} className="case-process-step"><Reveal className="case-process-copy"><span>{String(index + 1).padStart(2, '0')}</span><h3>{step.title}</h3><p>{step.description}</p></Reveal>{step.image?.url && <ImageReveal className="relative aspect-[16/10] overflow-hidden"><Image src={step.image.url} alt={step.image.alt || step.title} fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" /></ImageReveal>}</article>)}</div>;
}
