const mongoose = require('mongoose');
const path = require('path');
const crypto = require('crypto');
const dotenv = require('dotenv');

dotenv.config({ path: path.resolve(__dirname, '../.env.local'), quiet: true });

const categorySchema = new mongoose.Schema({ name: String, slug: { type: String, unique: true }, description: String, blogCount: { type: Number, default: 0 } }, { timestamps: true });
const blogSchema = new mongoose.Schema({}, { strict: false, timestamps: true });
const BlogCategory = mongoose.models.BlogCategory || mongoose.model('BlogCategory', categorySchema);
const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);

const articles = [
  {
    title: 'Reading a Site Before Construction Begins',
    slug: 'reading-a-site-before-construction-begins',
    category: ['Planning', 'planning'],
    excerpt: 'A practical field note on access, levels, drainage, orientation and the early observations that shape a clearer construction brief.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=85',
    focus: 'construction site assessment',
    tags: ['site planning', 'construction', 'Hosur'],
    blocks: [
      ['h2', 'Start with what the ground is telling you'],
      ['paragraph', '<p>Before drawings become a build sequence, the site needs to be read as a working environment. Access, neighbouring conditions, levels, existing services and the path of water all influence what can be built and how the work should move.</p>'],
      ['h3', 'Five useful observations'],
      ['list', ['Approach and delivery access', 'Natural fall and drainage paths', 'Sun, wind and exposed edges', 'Existing structures and services', 'Space for safe material handling']],
      ['paragraph', '<p>A concise site record gives the project team a shared starting point. It also exposes questions early, when they are easier to resolve.</p>'],
    ],
  },
  {
    title: 'Choosing Materials for Everyday Durability',
    slug: 'choosing-materials-for-everyday-durability',
    category: ['Materials', 'materials'],
    excerpt: 'How exposure, use, maintenance and construction detail can guide more practical material decisions for homes and workplaces.',
    image: 'https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=1600&q=85',
    focus: 'durable construction materials',
    tags: ['materials', 'building durability', 'maintenance'],
    blocks: [
      ['h2', 'A material is only as good as its context'],
      ['paragraph', '<p>Appearance is one part of material selection. Exposure to sun and rain, frequency of use, cleaning, repair access and the skill required for installation are equally important.</p>'],
      ['h3', 'Questions worth asking'],
      ['list', ['Where will the material be exposed?', 'How will the surface age?', 'Can important junctions be built cleanly?', 'What regular maintenance will be required?', 'Can damaged areas be repaired without replacing everything?']],
      ['paragraph', '<p>Durability comes from matching the material, its finish and its detailing to the conditions it will face—not from specification alone.</p>'],
    ],
  },
  {
    title: 'A Clearer Path from Brief to Handover',
    slug: 'clearer-path-from-brief-to-handover',
    category: ['Construction Process', 'construction-process'],
    excerpt: 'A simple overview of the decisions, reviews and handoffs that help a construction project move with greater clarity.',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=85',
    focus: 'construction project process',
    tags: ['construction process', 'project planning', 'handover'],
    blocks: [
      ['h2', 'Make the sequence visible'],
      ['paragraph', '<p>Construction becomes easier to coordinate when the major decisions and review points are visible to everyone involved. The aim is not more paperwork; it is a shared understanding of what must happen next.</p>'],
      ['h3', 'A practical four-part rhythm'],
      ['list', ['Define the brief and known constraints', 'Coordinate drawings, materials and responsibilities', 'Build in stages with planned quality reviews', 'Inspect, close details and prepare the handover record']],
      ['paragraph', '<p>Each stage should close the important questions needed by the next. This reduces avoidable rework and gives the final inspection a clearer foundation.</p>'],
    ],
  },
];

function contentBlocks(items) {
  return items.map(([type, value], order) => type === 'list'
    ? { id: crypto.randomUUID(), type, order, listType: 'unordered', listItems: value }
    : { id: crypto.randomUUID(), type, order, content: value, anchorId: type.startsWith('h') ? value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') : undefined });
}

async function run() {
  if (!process.env.MONGODB_URI) throw new Error('MONGODB_URI is missing');
  await mongoose.connect(process.env.MONGODB_URI);
  for (let index = 0; index < articles.length; index++) {
    const item = articles[index];
    const category = await BlogCategory.findOneAndUpdate({ slug: item.category[1] }, { $set: { name: item.category[0], description: `Practical notes about ${item.category[0].toLowerCase()}.` } }, { upsert: true, new: true });
    const publishedAt = new Date(Date.now() - index * 86400000 * 5);
    await Blog.findOneAndUpdate({ slug: item.slug }, { $set: {
      title: item.title, slug: item.slug, excerpt: item.excerpt, author: 'Shree Dhurga Constructions', contentBlocks: contentBlocks(item.blocks),
      featuredImage: { url: item.image, publicId: '', alt: item.title, width: 1600, height: 1067 },
      seo: { metaTitle: item.title, metaDescription: item.excerpt, focusKeyword: item.focus, secondaryKeywords: item.tags, canonicalUrl: `${process.env.APP_ORIGIN || 'http://localhost:3000'}/blog/${item.slug}`, ogTitle: item.title, ogDescription: item.excerpt, ogImage: item.image, twitterCard: 'summary_large_image', robots: 'index, follow', structuredDataType: 'BlogPosting' },
      category: { id: category._id, name: category.name, slug: category.slug }, tags: item.tags, keyTakeaways: [], internalLinks: [], externalLinks: [], outgoingLinkCount: 0, incomingLinkCount: 0,
      workflow: { status: 'published', creationType: 'manual', publishedAt, lastModifiedAt: new Date() },
      seoMetrics: { wordCount: 170, readingTime: 2, headingStructure: { h1Count: 0, h2Count: 1, h3Count: 1 }, internalLinkDensity: 0, externalLinkDensity: 0, imagesCount: 1, imagesWithAlt: 1, lastCalculated: new Date() },
      flags: { isFeatured: true, isEvergreen: true, needsUpdate: false }, notifications: [],
    } }, { upsert: true, new: true });
  }
  for (const category of await BlogCategory.find()) category.blogCount = await Blog.countDocuments({ 'category.id': category._id, 'workflow.status': 'published' }), await category.save();
  console.log(`Seeded ${articles.length} construction articles into the sdc database.`);
  await mongoose.disconnect();
}

run().catch(async (error) => { console.error('Failed to seed construction blogs:', error.message); await mongoose.disconnect(); process.exit(1); });
