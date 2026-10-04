export type Service = {
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  summary: string;
  introduction: string;
  image: string;
  secondaryImage: string;
  capabilities: string[];
  process: { title: string; text: string }[];
};

export const services: Service[] = [
  {
    slug: 'building-construction',
    index: '01',
    title: 'Building Construction',
    shortTitle: 'Construction',
    summary: 'End-to-end construction delivery for residential and larger building projects.',
    introduction: 'We coordinate the journey from early planning through execution and handover, keeping quality, practical requirements and the final use of the building in view.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85',
    capabilities: ['Site assessment and planning', 'Residential construction', 'Commercial-scale execution', 'Finishing and handover'],
    process: [{ title: 'Define', text: 'Understand the site, ambition and practical scope.' }, { title: 'Plan', text: 'Coordinate the programme, materials and build sequence.' }, { title: 'Execute', text: 'Deliver each phase with attentive site coordination.' }, { title: 'Handover', text: 'Inspect, complete and prepare the building for use.' }],
  },
  {
    slug: 'commercial-building',
    index: '02',
    title: 'Commercial Building',
    shortTitle: 'Commercial',
    summary: 'Functional commercial spaces shaped around operations, people and long-term value.',
    introduction: 'Commercial buildings must work as hard as the businesses inside them. We bring planning and construction together to create clear, durable and adaptable environments.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85',
    capabilities: ['Commercial planning', 'Office and retail spaces', 'Material coordination', 'Interior finishing'],
    process: [{ title: 'Brief', text: 'Map business needs, visitor flow and operational priorities.' }, { title: 'Resolve', text: 'Turn requirements into a coordinated build plan.' }, { title: 'Construct', text: 'Manage site delivery with attention to programme and finish.' }, { title: 'Open', text: 'Complete the final checks for a confident first day.' }],
  },
  {
    slug: 'industrial-building',
    index: '03',
    title: 'Industrial Building',
    shortTitle: 'Industrial',
    summary: 'Robust facilities, warehouses and manufacturing environments built for performance.',
    introduction: 'Industrial projects demand clear circulation, durable construction and an understanding of how operations move through the building.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=85',
    capabilities: ['Warehouses', 'Manufacturing facilities', 'Industrial circulation', 'Durable material systems'],
    process: [{ title: 'Analyse', text: 'Understand operations, movement and site constraints.' }, { title: 'Coordinate', text: 'Align structural, access and facility requirements.' }, { title: 'Build', text: 'Execute a durable, efficient industrial envelope.' }, { title: 'Commission', text: 'Review the facility against its operational brief.' }],
  },
  {
    slug: 'industrial-roofing',
    index: '04',
    title: 'Industrial Roofing',
    shortTitle: 'Roofing',
    summary: 'Weather-resistant industrial roofing planned for protection and service life.',
    introduction: 'A dependable roof protects the operation below it. We approach industrial roofing with attention to drainage, exposure, maintenance and the demands of the building.',
    image: 'https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=1800&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85',
    capabilities: ['Industrial roof systems', 'Weather protection', 'Roof assessment', 'Repair and replacement'],
    process: [{ title: 'Inspect', text: 'Review the structure, exposure and existing condition.' }, { title: 'Specify', text: 'Select a practical roof and drainage approach.' }, { title: 'Install', text: 'Coordinate safe, careful on-site execution.' }, { title: 'Review', text: 'Complete final checks across the installed system.' }],
  },
  {
    slug: 'interior-design',
    index: '05',
    title: 'Interior Design',
    shortTitle: 'Interiors',
    summary: 'Practical interiors with a considered relationship between function and atmosphere.',
    introduction: 'We shape interiors around everyday use, balancing spatial clarity, material character and the details that make a place feel complete.',
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=85',
    capabilities: ['Space planning', 'Material and finish direction', 'Residential interiors', 'Commercial interiors'],
    process: [{ title: 'Listen', text: 'Understand use, preferences and priorities.' }, { title: 'Compose', text: 'Develop the spatial and material direction.' }, { title: 'Detail', text: 'Resolve key junctions, finishes and built elements.' }, { title: 'Realise', text: 'Coordinate the interior through to completion.' }],
  },
  {
    slug: 'renovation',
    index: '06',
    title: 'Renovation',
    shortTitle: 'Renovation',
    summary: 'Thoughtful upgrades that give existing homes and commercial spaces new purpose.',
    introduction: 'Renovation begins with understanding what should stay, what must change and how the finished space needs to perform.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1800&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=1400&q=85',
    capabilities: ['Home renovation', 'Commercial refurbishment', 'Structural repairs', 'Finishes and services upgrades'],
    process: [{ title: 'Survey', text: 'Read the existing building and identify priorities.' }, { title: 'Edit', text: 'Define what to retain, repair and transform.' }, { title: 'Renew', text: 'Coordinate construction with care for the existing fabric.' }, { title: 'Refine', text: 'Complete the details that unify old and new.' }],
  },
  {
    slug: 'cement-roads',
    index: '07',
    title: 'Cement Roads',
    shortTitle: 'Cement roads',
    summary: 'Durable, low-maintenance concrete roads for demanding everyday use.',
    introduction: 'Long-lasting road work depends on preparation, levels, drainage and disciplined execution from the ground up.',
    image: 'https://images.unsplash.com/photo-1486673748761-a8d18475c757?auto=format&fit=crop&w=1800&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85',
    capabilities: ['Site preparation', 'Concrete road construction', 'Drainage coordination', 'Finishing and joints'],
    process: [{ title: 'Assess', text: 'Review ground conditions, movement and water flow.' }, { title: 'Prepare', text: 'Establish formation, levels and edge conditions.' }, { title: 'Place', text: 'Execute concrete work to the planned sequence.' }, { title: 'Finish', text: 'Complete joints, curing and final inspection.' }],
  },
  {
    slug: 'waterproofing',
    index: '08',
    title: 'Waterproofing',
    shortTitle: 'Waterproofing',
    summary: 'Targeted waterproofing solutions that protect the building fabric.',
    introduction: 'Effective waterproofing begins with finding the source, understanding the assembly and choosing a solution suited to the condition.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1800&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85',
    capabilities: ['Terrace waterproofing', 'Wet-area protection', 'Leak assessment', 'Repair and remedial work'],
    process: [{ title: 'Trace', text: 'Identify the likely path and source of water.' }, { title: 'Prepare', text: 'Ready the substrate for the selected treatment.' }, { title: 'Protect', text: 'Apply the system with attention to vulnerable junctions.' }, { title: 'Check', text: 'Review the completed area before closure.' }],
  },
  {
    slug: 'government-projects',
    index: '09',
    title: 'Government Projects',
    shortTitle: 'Public works',
    summary: 'Public-infrastructure construction delivered with disciplined coordination.',
    introduction: 'Public work calls for clear documentation, dependable coordination and an execution process aligned with the agreed project requirements.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85',
    secondaryImage: 'https://images.unsplash.com/photo-1486673748761-a8d18475c757?auto=format&fit=crop&w=1400&q=85',
    capabilities: ['Public buildings', 'Infrastructure works', 'Programme coordination', 'Site execution'],
    process: [{ title: 'Review', text: 'Understand the brief, documentation and site.' }, { title: 'Programme', text: 'Coordinate resources and construction phases.' }, { title: 'Deliver', text: 'Execute the work to the agreed requirements.' }, { title: 'Close', text: 'Complete inspection, documentation and handover.' }],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
