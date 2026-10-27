import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownRight, ArrowRight, ArrowUpRight, Building2, MapPin, Phone } from 'lucide-react';
import Reveal from './Reveal';
import ParallaxMedia from './ParallaxMedia';
import { siteConfig } from '@/config/site';

const buyerPaths = [
  { title: 'Industrial & commercial', copy: 'Factories, warehouses, roofing, business premises and coordinated civil or electrical work.', href: '/services/industrial-building', link: 'Explore industrial capability', image: '/canva/canva-9db5987c-9892-4e38-afda-aa860bea7bac.png' },
  { title: 'Residential construction', copy: 'Independent homes, villas, apartments, renovations and carefully coordinated interiors.', href: '/services/building-construction', link: 'Plan a residential project', image: '/canva/canva-e3daa938-10fc-456b-aadf-1dc688b22340.jpg' },
  { title: 'Institutional & public work', copy: 'Schools, roads and public infrastructure delivered around defined project requirements.', href: '/services/government-projects', link: 'View public-work capability', image: '/canva/canva-68e67889-063d-493d-9a8c-62707300557a.png' },
];

const capabilities = [
  ['01', 'Planning & pre-construction', 'Site assessment, drawings, estimates, approvals and a buildable route before mobilisation.', '/services/building-planning'],
  ['02', 'Civil construction', 'Residential, commercial, industrial and institutional construction coordinated through active site stages.', '/services/building-construction'],
  ['03', 'Industrial & specialist works', 'Facilities, roofing, waterproofing, roads and improvements designed around real operating conditions.', '/services/industrial-building'],
  ['04', 'Electrical coordination', 'HT/LT liaisoning, documentation support and electrical requirements aligned with the wider project.', '/services/electrical-liaisoning'],
];

const process = [
  ['01', 'Understand the requirement', 'We begin with the site, intended use, available drawings, priorities and constraints—not a generic package.'],
  ['02', 'Define scope and inputs', 'The team identifies the information, approvals, materials and decisions needed before execution.'],
  ['03', 'Coordinate the work', 'Drawings, vendors, labour and construction stages are aligned around the agreed project programme.'],
  ['04', 'Review and hand over', 'Final details are inspected, outstanding work is closed and the completed scope is prepared for use.'],
];

export function BuyerPathways() {
  return (
    <section className="home2-pathways" aria-labelledby="pathways-title">
      <div className="site-shell home2-pathways-layout">
        <Reveal className="home2-pathways-intro">
          <p className="home2-label">Find your project path</p>
          <h2 id="pathways-title">Start with the kind of project you need to deliver.</h2>
          <p>Different projects require different conversations. Choose the route closest to your requirement.</p>
          <span>Choose a project category <ArrowDownRight size={17} /></span>
        </Reveal>
        <div className="home2-pathway-grid">
          {buyerPaths.map((item, index) => {
            return <Reveal key={item.title} delay={index * .05}><Link href={item.href} className="home2-pathway-row"><span className="home2-pathway-number">0{index + 1}</span><div className="home2-pathway-image"><Image src={item.image} alt="" fill sizes="(max-width: 699px) 34vw, 18vw" className="object-cover" /></div><div className="home2-pathway-copy"><h3>{item.title}</h3><p>{item.copy}</p></div><strong>{item.link} <ArrowUpRight size={16} /></strong></Link></Reveal>;
          })}
        </div>
      </div>
    </section>
  );
}

export function HomeIntroduction() {
  return (
    <section className="home2-intro" id="about">
      <div className="site-shell home2-intro-layout">
        <Reveal className="home2-intro-title"><p className="home2-label">One coordinated practice</p><h2>Civil and electrical thinking, connected from the start.</h2></Reveal>
        <Reveal className="home2-intro-copy">
          <p className="home2-lead">Construction works better when planning, technical coordination and execution are treated as one continuous responsibility.</p>
          <p>SDC supports private, industrial and public projects from Hosur, with a practical approach grounded in the site, the intended use and the agreed scope.</p>
          <Link href="/about" className="home2-text-link">About the company <ArrowRight size={17} /></Link>
        </Reveal>
        <ParallaxMedia className="home2-intro-image"><Image src="/canva/canva-9a751362-a694-4ccc-99b1-f2eba6a43f82.png" alt="Multi-storey institutional structure under construction by SDC" fill sizes="(max-width: 900px) 100vw, 66vw" className="object-cover" /></ParallaxMedia>
        <Reveal className="home2-intro-note"><span>What clients should expect</span><p>Clear scope<br />Direct coordination<br />Visible progress</p></Reveal>
      </div>
    </section>
  );
}

export function Capabilities() {
  return (
    <section className="home2-capabilities" id="services">
      <div className="site-shell">
        <Reveal className="home2-section-head home2-section-head--light">
          <p className="home2-label">Core capability</p><h2>What SDC can coordinate for your project.</h2><Link href="/services" className="home2-text-link">View all services <ArrowRight size={17} /></Link>
        </Reveal>
        <div className="home2-capability-list">
          {capabilities.map(([number, title, copy, href], index) => (
            <Reveal key={number} delay={index * .04}><Link href={href} className="home2-capability"><span className="home2-capability-number">{number}</span><h3>{title}</h3><p>{copy}</p><ArrowUpRight className="home2-capability-arrow" /></Link></Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeProcess() {
  return (
    <section className="home2-process">
      <div className="site-shell">
        <Reveal className="home2-process-heading"><p className="home2-label">From enquiry to handover</p><h2>A clear route through the work.</h2><p>The exact programme depends on your project. The responsibility at every stage should remain clear.</p></Reveal>
        <div className="home2-process-grid">
          {process.map(([number, title, copy], index) => <Reveal key={number} delay={index * .04} className="home2-process-card"><span>{number}</span><h3>{title}</h3><p>{copy}</p></Reveal>)}
        </div>
      </div>
    </section>
  );
}

export function FieldStatement() {
  return (
    <section className="home2-field">
      <div className="site-shell home2-field-grid">
        <div className="home2-field-media"><ParallaxMedia className="home2-field-image"><Image src="/canva/canva-738ca25b-8343-44c4-a200-625a8b373df4.png" alt="Reinforcement and foundation work on an active SDC site" fill sizes="(max-width: 900px) 100vw, 52vw" className="object-cover" /></ParallaxMedia><p className="home2-photo-credit">Site evidence / Foundation-stage execution</p></div>
        <Reveal className="home2-field-copy">
          <p className="home2-label">Before an initial discussion</p><h2>Bring the information you already have.</h2><p>You do not need a complete tender package to begin. A useful first conversation can start with:</p>
          <ul><li><span>01</span>Project type and site location</li><li><span>02</span>Approximate area or intended use</li><li><span>03</span>New construction, extension or renovation</li><li><span>04</span>Current drawings, approvals or target schedule</li></ul>
          <a href={`mailto:${siteConfig.email}?subject=Project consultation request`} className="home2-button home2-button--light">Request a project consultation <ArrowUpRight size={18} /></a>
        </Reveal>
      </div>
    </section>
  );
}

export function TrustPanel() {
  return (
    <section className="home2-trust">
      <div className="site-shell">
        <Reveal className="home2-trust-heading"><p className="home2-label">Straightforward to verify</p><h2>Know who you are speaking to before work begins.</h2></Reveal>
        <div className="home2-trust-grid">
          <Reveal className="home2-trust-card"><MapPin aria-hidden="true" /><span>Visit the office</span><p>{siteConfig.address}</p></Reveal>
          <Reveal delay={.05} className="home2-trust-card"><Building2 aria-hidden="true" /><span>Review completed work</span><p>Explore published project pages with real SDC site and completion photography.</p><Link href="/works">View projects <ArrowRight size={15} /></Link></Reveal>
          <Reveal delay={.1} className="home2-trust-card"><Phone aria-hidden="true" /><span>Speak directly</span><p>Discuss project fit, available information and the appropriate next step with the team.</p><a href={siteConfig.phoneHref}>{siteConfig.phone} <ArrowRight size={15} /></a></Reveal>
        </div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section id="contact" className="home2-cta">
      <div className="site-shell"><Reveal className="home2-cta-layout"><div><p className="home2-label">Start the right conversation</p><h2>Tell us what you are planning.</h2></div><div><p>Share the project type, site location and current stage. We can then identify the most useful next step—an initial discussion, document review or site visit.</p><div className="home2-actions"><a href={siteConfig.phoneHref} className="home2-button home2-button--solid">Call the team <ArrowUpRight size={18} /></a><a href={`mailto:${siteConfig.email}?subject=New project enquiry`} className="home2-button home2-button--line">Send project details</a></div></div></Reveal></div>
    </section>
  );
}

export function HomeFooter() {
  return (
    <footer className="home2-footer">
      <div className="home2-footer-frame">
        <div className="home2-footer-pitch">
          <div><p className="home2-footer-chip"><span /> Built with purpose</p><h2>Shree Dhurga<br /><em>Constructions</em></h2><p>Civil and electrical engineering for homes, industries, businesses and public infrastructure.</p></div>
          <div className="home2-footer-action"><span>Have a project in mind?</span><p>Share the location, project type and current stage. We will help identify the right next step.</p><a href={siteConfig.phoneHref}>Discuss your project <ArrowUpRight size={16} /></a></div>
        </div>

        <div className="home2-footer-directory">
          <div className="home2-footer-brand"><Image src="/brand/sdc-logo-transparent-v2.png" alt="Shree Dhurga Constructions" width={512} height={512} /><p>Engineers, consultants and contractors based in Hosur, Tamil Nadu.</p><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><a href={siteConfig.phoneHref}>{siteConfig.phone}</a></div>
          <nav aria-label="Homepage footer navigation"><span>Explore</span><Link href="/about">Company</Link><Link href="/works">Project work</Link><Link href="/blog">Field notes</Link><Link href="#contact">Contact</Link></nav>
          <nav aria-label="Construction services"><span>Construction</span><Link href="/services/building-construction">Building construction</Link><Link href="/services/industrial-building">Industrial facilities</Link><Link href="/services/commercial-building">Commercial buildings</Link><Link href="/services/government-projects">Public works</Link></nav>
          <nav aria-label="Specialist services"><span>Specialist work</span><Link href="/services/building-planning">Planning &amp; approvals</Link><Link href="/services/electrical-liaisoning">Electrical liaisoning</Link><Link href="/services/industrial-roofing">Industrial roofing</Link><Link href="/services/renovation">Renovation</Link></nav>
        </div>

        <div className="home2-footer-bottom"><p>© {new Date().getFullYear()} Shree Dhurga Constructions. All rights reserved.</p><p>Hosur · Tamil Nadu</p><a href="#top">Back to top ↑</a></div>
      </div>
    </footer>
  );
}
