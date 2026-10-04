'use client';

interface CategoryTabsProps { categories: any[]; activeCategory: string; onSelect: (categoryId: string) => void; }

export default function CategoryTabs({ categories, activeCategory, onSelect }: CategoryTabsProps) {
  const items = [{ _id: 'all', name: 'All projects' }, ...categories];
  return <div className="no-scrollbar mb-14 flex overflow-x-auto border-b border-ink/20" role="tablist" aria-label="Project categories">{items.map((category, index) => <button key={category._id} type="button" role="tab" aria-selected={activeCategory === category._id} onClick={() => onSelect(category._id)} className={`project-tab ${activeCategory === category._id ? 'project-tab--active' : ''}`}><span>0{index + 1}</span>{category.name}</button>)}</div>;
}
