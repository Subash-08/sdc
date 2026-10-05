const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '../.env.local'), quiet: true });

const imageSchema = new mongoose.Schema({ url: String, alt: String, caption: String }, { _id: false });
const categorySchema = new mongoose.Schema({ name: String, slug: { type: String, unique: true }, status: { type: String, default: 'active' } }, { timestamps: true });
const projectSchema = new mongoose.Schema({
  title: String, slug: { type: String, unique: true }, shortSummary: String, description: String,
  clientName: String, clientCompany: String, projectYear: String, projectLocation: String, projectDuration: String,
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' }, displayCategoryOverride: String,
  tags: [String], techStack: [{ name: String, category: String }],
  thumbnail: imageSchema, coverImage: imageSchema, galleryImages: [imageSchema],
  overview: String, problemStatement: String, objectives: String, goals: String, targetAudience: String,
  challenges: [String], solution: [String],
  processSteps: [{ title: String, description: String, image: imageSchema }],
  metrics: [{ label: String, value: String, unit: String }],
  featured: Boolean, showInPortfolio: Boolean, showInHomepage: Boolean, displayOrder: Number,
  seoTitle: String, seoDescription: String, seoKeywords: [String],
  status: String, publishDate: Date
}, { timestamps: true });
const layoutSchema = new mongoose.Schema({ order: { type: Number, unique: true }, projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' } }, { timestamps: true });

const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);
const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);
const PortfolioLayoutBox = mongoose.models.PortfolioLayoutBox || mongoose.model('PortfolioLayoutBox', layoutSchema);

const records = [
  {
    category: ['Residential', 'residential'], slug: 'sample-hosur-courtyard-residence', title: 'Courtyard Residence — Editorial Sample',
    summary: 'An illustrative residential case study organized around shade, privacy and a planted internal court.',
    description: 'This clearly labeled sample demonstrates how a completed residential project can be presented in the SDC portfolio. Replace the text and images with verified project information before using it as a company reference.',
    year: '2024', duration: 'Portfolio sample', client: 'Private residential brief',
    cover: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
    gallery: ['https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85'],
    materials: [['Reinforced concrete','Structure'],['Local stone','External finish'],['Timber screens','Shading']],
    problem: 'The illustrative brief calls for daylight and openness while maintaining privacy from the street and protection from Hosur’s strong afternoon sun.',
    objective: 'Organize family spaces around a shaded central court with clear movement between shared and private rooms.',
    use: 'Private family residence.',
  },
  {
    category: ['Commercial', 'commercial'], slug: 'sample-hosur-workplace', title: 'Linear Workplace — Editorial Sample',
    summary: 'A sample commercial building shaped around flexible floorplates, daylight and a clear arrival sequence.',
    description: 'An illustrative commercial portfolio entry created to demonstrate the construction case-study system. Content should be replaced with verified SDC project information.',
    year: '2024', duration: 'Portfolio sample', client: 'Confidential commercial brief',
    cover: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85',
    gallery: ['https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1497366811364-ccf3f4a4512f?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85'],
    materials: [['Concrete frame','Structure'],['Glazed facade','Envelope'],['Acoustic panels','Interior']],
    problem: 'The sample brief requires adaptable work areas without losing a strong sense of entrance, orientation and shared identity.',
    objective: 'Create a robust commercial shell with flexible internal planning and controlled daylight.',
    use: 'Office and collaborative workplace.',
  },
  {
    category: ['Industrial', 'industrial'], slug: 'sample-industrial-facility', title: 'Production Hall — Editorial Sample',
    summary: 'An illustrative industrial facility balancing clear logistics, durable construction and natural light.',
    description: 'This sample shows how industrial work can be documented through operational planning, construction logic and material decisions.',
    year: '2023', duration: 'Portfolio sample', client: 'Confidential industrial brief',
    cover: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=2000&q=85',
    gallery: ['https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=85'],
    materials: [['Steel frame','Structure'],['Insulated metal panel','Envelope'],['Industrial concrete','Flooring']],
    problem: 'The illustrative operational brief needs safe separation between production, loading and staff movement.',
    objective: 'Coordinate an efficient structural grid, service zones and a weather-protected logistics edge.',
    use: 'Light-manufacturing and dispatch facility.',
  },
  {
    category: ['Renovation', 'renovation'], slug: 'sample-adaptive-renovation', title: 'Adaptive House — Editorial Sample',
    summary: 'A sample renovation retaining the useful fabric of an existing house while improving light and circulation.',
    description: 'This illustrative renovation entry demonstrates before-to-after storytelling without claiming a completed SDC commission.',
    year: '2024', duration: 'Portfolio sample', client: 'Private renovation brief',
    cover: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=85',
    gallery: ['https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1400&q=85'],
    materials: [['Existing masonry','Retained fabric'],['Lime finish','Wall finish'],['Timber joinery','Interior']],
    problem: 'The sample house has disconnected rooms, limited daylight and additions that obscure the original structure.',
    objective: 'Retain sound construction, remove unnecessary partitions and create a clearer relationship to the garden.',
    use: 'Renovated family home.',
  },
  {
    category: ['Industrial Roofing', 'industrial-roofing'], slug: 'sample-long-span-roof', title: 'Long-span Roof — Editorial Sample',
    summary: 'An illustrative industrial-roofing study focused on drainage, daylight and maintainable junctions.',
    description: 'A clearly marked sample explaining how specialist roofing work can be communicated in the portfolio.',
    year: '2023', duration: 'Portfolio sample', client: 'Industrial roofing brief',
    cover: 'https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=2000&q=85',
    gallery: ['https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85'],
    materials: [['Steel truss','Primary structure'],['Metal roofing','Weather layer'],['Rooflights','Daylight']],
    problem: 'The illustrative brief requires a wide protected span with controlled daylight and straightforward maintenance access.',
    objective: 'Coordinate falls, drainage, rooflights and edge conditions as a single weather-resistant system.',
    use: 'Industrial production and storage.',
  },
  {
    category: ['Public Works', 'public-works'], slug: 'sample-civic-cement-road', title: 'Civic Approach Road — Editorial Sample',
    summary: 'A sample public-works case study centered on durable pavement, drainage and safe everyday access.',
    description: 'This illustrative entry demonstrates how road and infrastructure work can be structured as a project story.',
    year: '2023', duration: 'Portfolio sample', client: 'Public-infrastructure brief',
    cover: 'https://images.unsplash.com/photo-1486673748761-a8d18475c757?auto=format&fit=crop&w=2000&q=85',
    gallery: ['https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85','https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=85'],
    materials: [['Prepared sub-base','Groundwork'],['Cement concrete','Pavement'],['Drainage channels','Water management']],
    problem: 'The sample route must accommodate regular service traffic while moving surface water away from adjacent plots.',
    objective: 'Establish reliable levels, robust edges and a maintainable drainage strategy.',
    use: 'Shared civic and service access.',
  }
];

async function run() {
  if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI is missing');
  await mongoose.connect(process.env.MONGODB_URI);
  const seeded = [];
  for (let index = 0; index < records.length; index++) {
    const item = records[index];
    const category = await Category.findOneAndUpdate({ slug: item.category[1] }, { $set: { name: item.category[0], status: 'active' } }, { upsert: true, new: true, setDefaultsOnInsert: true });
    const image = (url, alt, caption) => ({ url, alt, caption });
    const steps = [
      { title: 'Read the brief', description: 'Map purpose, movement, constraints and the required construction outcome.', image: image(item.gallery[0], `${item.title} planning reference`) },
      { title: 'Resolve the system', description: 'Coordinate structure, envelope, materials and build sequence before execution.', image: image(item.gallery[1] || item.cover, `${item.title} material reference`) },
      { title: 'Build and review', description: 'Deliver the work in controlled stages, checking quality at the important junctions.', image: image(item.cover, `${item.title} construction reference`) },
      { title: 'Complete the handover', description: 'Close details, inspect the finished work and prepare it for everyday use.', image: image(item.gallery[2] || item.cover, `${item.title} completed reference`) },
    ];
    const update = {
      title: item.title, slug: item.slug, shortSummary: item.summary, description: item.description,
      clientName: item.client, clientCompany: 'Editorial sample', projectYear: item.year, projectLocation: 'Hosur, Tamil Nadu', projectDuration: item.duration,
      categoryId: category._id, displayCategoryOverride: 'Editorial sample', tags: [item.category[0].toLowerCase(), 'construction sample', 'Hosur'],
      techStack: item.materials.map(([name, type]) => ({ name, category: type })),
      thumbnail: image(item.cover, item.title), coverImage: image(item.cover, item.title),
      galleryImages: item.gallery.map((url, galleryIndex) => image(url, `${item.title} image ${galleryIndex + 1}`, galleryIndex === 0 ? 'Illustrative reference image' : undefined)),
      overview: item.summary, problemStatement: item.problem, objectives: item.objective, goals: item.objective, targetAudience: item.use,
      challenges: [item.problem], solution: ['A clear construction sequence aligned to the brief.', 'Material choices suited to use, maintenance and exposure.', 'Coordinated review at key stages before handover.'],
      processSteps: steps, metrics: [], featured: index < 4, showInPortfolio: true, showInHomepage: index < 4, displayOrder: index + 1,
      seoTitle: item.title, seoDescription: item.summary, seoKeywords: [item.category[0], 'construction Hosur', 'Shree Dhurga Constructions'],
      status: 'published', publishDate: new Date()
    };
    const project = await Project.findOneAndUpdate({ slug: item.slug }, { $set: update }, { upsert: true, new: true, setDefaultsOnInsert: true });
    seeded.push(project);
  }

  let nextOrder = ((await PortfolioLayoutBox.findOne().sort({ order: -1 }).lean())?.order || 0) + 1;
  for (const project of seeded) {
    const existing = await PortfolioLayoutBox.findOne({ projectId: project._id });
    if (!existing) {
      await PortfolioLayoutBox.create({ order: nextOrder++, projectId: project._id });
    }
  }

  console.log(`Seeded ${seeded.length} construction portfolio samples into the sdc database.`);
  await mongoose.disconnect();
}

run().catch(async (error) => {
  console.error('Failed to seed construction projects:', error.message);
  await mongoose.disconnect();
  process.exit(1);
});

