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
  tags: [String], techStack: [{ name: String, category: String }], thumbnail: imageSchema, coverImage: imageSchema,
  galleryImages: [imageSchema], overview: String, problemStatement: String, objectives: String, goals: String,
  targetAudience: String, challenges: [String], solution: [String],
  processSteps: [{ title: String, description: String, image: imageSchema }],
  metrics: [{ label: String, value: String, unit: String }], featured: Boolean, showInPortfolio: Boolean,
  showInHomepage: Boolean, displayOrder: Number, seoTitle: String, seoDescription: String, seoKeywords: [String],
  status: String, publishDate: Date,
}, { timestamps: true });
const layoutSchema = new mongoose.Schema({ order: { type: Number, unique: true }, projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project' } }, { timestamps: true });

const Category = mongoose.models.Category || mongoose.model('Category', categorySchema);
const Project = mongoose.models.Project || mongoose.model('Project', projectSchema);
const PortfolioLayoutBox = mongoose.models.PortfolioLayoutBox || mongoose.model('PortfolioLayoutBox', layoutSchema);

const media = (id, format = 'png') => `/canva/canva-${id}.${format}`;
const projects = [
  {
    title: 'Hosur Independent House', slug: 'hosur-independent-house', category: ['Residential', 'residential'],
    summary: 'A completed independent house documented across its street elevation and external envelope.',
    description: 'This residential project from the SDC company portfolio demonstrates a compact, practical home with a clear street presence, protected openings and a durable painted exterior.',
    client: 'Private residential client', location: 'Hosur region, Tamil Nadu', use: 'Independent family house',
    cover: media('e3daa938-10fc-456b-aadf-1dc688b22340', 'jpg'),
    gallery: [media('952d1151-e36e-4d1f-8165-6910fab71c69', 'jpg'), media('8c9a9132-a578-41da-bb67-b655b8f25d32', 'jpg'), media('c64d75cf-1a9c-4812-9b26-1e34fcb57b80', 'jpg')],
    materials: [['Reinforced concrete', 'Structure'], ['Masonry', 'Envelope'], ['Painted render', 'External finish']],
  },
  {
    title: 'Industrial Stores Facility Upgrade', slug: 'industrial-stores-facility-upgrade', category: ['Industrial', 'industrial'],
    summary: 'Targeted building and access improvements to an operational industrial stores facility.',
    description: 'The published project imagery records external improvement work around an existing stores building, including access, envelope and steel stair interventions within a live industrial setting.',
    client: 'Industrial client', location: 'Tamil Nadu', use: 'Industrial stores and operations',
    cover: media('e9b7c1de-e8cb-491f-96d0-b2cc6a492f99', 'jpg'),
    gallery: [media('a8c1b7ac-d095-445e-8879-1b1a04eec667', 'jpg'), media('c34de289-c9c9-4d46-9c3e-97aac5b0be15', 'jpg'), media('e9b7c1de-e8cb-491f-96d0-b2cc6a492f99', 'jpg')],
    materials: [['Existing concrete building', 'Base structure'], ['Fabricated steel', 'External access'], ['Protective coating', 'Finish']],
  },
  {
    title: 'Government School Development', slug: 'government-school-development', category: ['Public Works', 'public-works'],
    summary: 'School infrastructure work documented from foundations through community-facing completion.',
    description: 'SDC’s published portfolio includes active government-school construction and completed improvement work supporting rural students and local communities.',
    client: 'Government school programme', location: 'Tamil Nadu', use: 'Education and community infrastructure',
    cover: media('68e67889-063d-493d-9a8c-62707300557a'),
    gallery: [media('738ca25b-8343-44c4-a200-625a8b373df4'), media('e1a5f872-95c7-497f-b32d-e73503e38308'), media('2a45d16a-e5ad-433d-b018-114f74318aa1')],
    materials: [['Reinforced concrete', 'Structure'], ['Brick masonry', 'Walls'], ['Education-focused finishes', 'Completion']],
  },
  {
    title: 'Industrial Roofing Facility', slug: 'industrial-roofing-facility', category: ['Industrial Roofing', 'industrial-roofing'],
    summary: 'A steel-framed industrial enclosure developed from foundations through cladding and completion.',
    description: 'The project documents a practical industrial shed system with a structural steel frame, profiled roof and wall cladding, and large operational access openings.',
    client: 'Industrial client', location: 'Hosur region, Tamil Nadu', use: 'Industrial production and storage',
    cover: media('9db5987c-9892-4e38-afda-aa860bea7bac'),
    gallery: [media('38c55a6b-ee4f-4b4b-a28f-72d89ff4fd2e'), media('6b921098-cb51-49a9-a8bc-6843e8453817'), media('9e64b530-be8c-4067-9715-9b527321d9d8'), media('d866a748-8fe8-4f04-901c-0206c5b3eda5')],
    materials: [['Structural steel', 'Primary frame'], ['Profiled metal sheeting', 'Roof and walls'], ['Concrete foundations', 'Groundwork']],
  },
  {
    title: 'Rural Road & Drainage Works', slug: 'rural-road-drainage-works', category: ['Public Works', 'public-works'],
    summary: 'Cement-road, drainage and rural access works delivered across community settings.',
    description: 'The SDC portfolio records concrete road preparation, placement, drainage construction and surfaced rural access work in Tamil Nadu.',
    client: 'Public infrastructure programme', location: 'Tamil Nadu', use: 'Community access and drainage',
    cover: media('b58bfa8c-a009-4f9c-95cf-2850e1e72078'),
    gallery: [media('267bf812-d4d8-454b-ba59-4643aca17410'), media('466b8f64-4295-44c9-bc7a-6a3250eb16ca'), media('be795791-de16-43c4-9906-c8c19f57d82c'), media('3382bb76-9882-46e5-be0c-1e1b584aedd5'), media('88639f64-15d9-4de9-82f2-b849f8df0d08')],
    materials: [['Prepared sub-base', 'Groundwork'], ['Cement concrete', 'Road surface'], ['Reinforced drainage', 'Water management']],
  },
  {
    title: 'Mullai Matric School, Mampatty', slug: 'mullai-matric-school-mampatty', category: ['Institutional', 'institutional'],
    summary: 'A multi-storey school construction project from the published SDC portfolio.',
    description: 'Mullai Matric School at Mampatty is identified in the company profile as an institutional project, with structural and masonry work coordinated across multiple levels.',
    client: 'Mullai Matric School', location: 'Mampatty, Tamil Nadu', use: 'Educational building',
    cover: media('9a751362-a694-4ccc-99b1-f2eba6a43f82'),
    gallery: [media('f91c80af-1c5f-4b49-b690-df147debe93b'), media('2a45d16a-e5ad-433d-b018-114f74318aa1'), media('1dff9d7b-f6c1-43c8-9d0e-511cd1c861b3')],
    materials: [['Reinforced concrete', 'Frame'], ['Concrete block and brick', 'Infill'], ['Institutional planning', 'Building use']],
  },
];

async function run() {
  if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI is missing');
  await mongoose.connect(process.env.MONGODB_URI);
  const oldSampleIds = await Project.find({ slug: /^sample-/ }).distinct('_id');
  if (oldSampleIds.length) {
    await PortfolioLayoutBox.deleteMany({ projectId: { $in: oldSampleIds } });
    await Project.deleteMany({ _id: { $in: oldSampleIds } });
  }

  const seeded = [];
  for (let index = 0; index < projects.length; index++) {
    const item = projects[index];
    const category = await Category.findOneAndUpdate({ slug: item.category[1] }, { $set: { name: item.category[0], status: 'active' } }, { upsert: true, new: true, setDefaultsOnInsert: true });
    const image = (url, alt, caption) => ({ url, alt, caption });
    const allImages = [item.cover, ...item.gallery];
    const update = {
      title: item.title, slug: item.slug, shortSummary: item.summary, description: item.description,
      clientName: item.client, clientCompany: item.client, projectYear: 'Published portfolio', projectLocation: item.location, projectDuration: 'Documented work',
      categoryId: category._id, displayCategoryOverride: item.category[0], tags: [item.category[0].toLowerCase(), 'SDC portfolio', 'Tamil Nadu'],
      techStack: item.materials.map(([name, type]) => ({ name, category: type })),
      thumbnail: image(item.cover, item.title), coverImage: image(item.cover, item.title),
      galleryImages: item.gallery.map((url, galleryIndex) => image(url, `${item.title} — view ${galleryIndex + 1}`, 'Published in the SDC company profile')),
      overview: item.summary,
      problemStatement: 'Coordinate people, materials, structure and site conditions while maintaining strict quality and safety standards.',
      objectives: 'Deliver the required construction outcome through clear planning, consultative coordination and controlled site execution.',
      goals: 'A dependable, fit-for-purpose result aligned with the client brief.', targetAudience: item.use,
      challenges: ['Live site conditions and sequencing', 'Quality control across construction stages', 'Coordination between client, engineers, vendors and site teams'],
      solution: ['A project manager-led engineering team coordinates progress.', 'Daily review and next-day scheduling keep actions visible.', 'Quality and safety checks are maintained through each stage.'],
      processSteps: [
        { title: 'Plan and investigate', description: 'Review the brief, site conditions and technical requirements.', image: image(allImages[0], `${item.title} planning and site condition`) },
        { title: 'Coordinate the work', description: 'Align engineers, vendors, materials and the construction sequence.', image: image(allImages[1] || item.cover, `${item.title} coordinated construction`) },
        { title: 'Execute with control', description: 'Build in reviewed stages with quality and safety checks.', image: image(allImages[2] || item.cover, `${item.title} site execution`) },
        { title: 'Review and complete', description: 'Close outstanding details and prepare the work for use.', image: image(allImages[3] || item.cover, `${item.title} completion`) },
      ],
      metrics: [], featured: index < 4, showInPortfolio: true, showInHomepage: index < 4, displayOrder: index + 1,
      seoTitle: item.title, seoDescription: item.summary, seoKeywords: [item.category[0], 'construction Hosur', 'Shree Dhurga Constructions'],
      status: 'published', publishDate: new Date(),
    };
    seeded.push(await Project.findOneAndUpdate({ slug: item.slug }, { $set: update }, { upsert: true, new: true, setDefaultsOnInsert: true }));
  }

  let nextOrder = ((await PortfolioLayoutBox.findOne().sort({ order: -1 }).lean())?.order || 0) + 1;
  for (const project of seeded) {
    const existing = await PortfolioLayoutBox.findOne({ projectId: project._id });
    if (!existing) await PortfolioLayoutBox.create({ order: nextOrder++, projectId: project._id });
  }

  console.log(`Published ${seeded.length} verified Canva portfolio projects and removed ${oldSampleIds.length} editorial samples.`);
  await mongoose.disconnect();
}

run().catch(async (error) => {
  console.error('Failed to seed Canva portfolio projects:', error.message);
  await mongoose.disconnect();
  process.exit(1);
});
