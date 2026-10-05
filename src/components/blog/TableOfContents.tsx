'use client';

import { useEffect, useState } from 'react';
import type { TOCItem } from '@/lib/blog/tableOfContents';

interface Props {
  items: TOCItem[];
}

export default function TableOfContents({ items }: Props) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -35% 0px' }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.anchorId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <div className="sticky top-28 border-t border-ink/20 pt-5">
      <p className="eyebrow mb-5 text-accent">Article index</p>
      <ol className="list-none space-y-2">
        {items.map((item) => (
          <li key={item.anchorId} className={item.level === 3 ? 'ml-4' : ''}>
            <a
              href={`#${item.anchorId}`}
              className={`block border-l pl-3 text-sm leading-6 transition-all ${
                activeId === item.anchorId
                  ? 'border-accent font-medium text-accent'
                  : 'border-ink/15 text-stone-500 hover:border-ink hover:text-ink'
              }`}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ol>
    </div>
  );
}
