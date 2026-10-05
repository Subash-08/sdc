import { IProject } from '@/models/Project';
import Image from 'next/image';
import ImageReveal from '@/components/home/ImageReveal';

export default function CaseStudyGallery({ images }: { images: IProject['galleryImages'] }) {
  if (!images?.length) return null;
  return <div className="case-gallery">{images.map((img, index) => <figure key={index} className={index % 3 === 0 ? 'case-gallery-wide' : ''}><ImageReveal className={`relative overflow-hidden ${index % 3 === 0 ? 'aspect-[16/8]' : 'aspect-[4/3]'}`}><Image src={img.url} alt={img.alt || `Project image ${index + 1}`} fill sizes={index % 3 === 0 ? '100vw' : '(max-width: 1024px) 100vw, 50vw'} className="object-cover" /></ImageReveal>{img.caption && <figcaption><span>{String(index + 1).padStart(2, '0')}</span>{img.caption}</figcaption>}</figure>)}</div>;
}
