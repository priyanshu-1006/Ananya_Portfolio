import { ArrowDownRight, ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const brings = [
  ['01', 'Open source', 'Build in public. Collaborate globally. Ship meaningful changes.', 'blue'],
  ['02', 'Security', 'Privacy-first thinking, secure storage and threat-aware systems.', 'red'],
  ['03', 'Engineering', 'Architecture. APIs. Testing. Code review.', 'yellow'],
  ['04', 'Community', 'Events, mentorship, developer communities and technical leadership.', 'pink'],
  ['05', 'Product thinking', 'Build around actual user and contributor needs.', 'green'],
]
const experience = [
  ['2026', 'Google Summer of Code', 'OWASP Foundation · Contributor'],
  ['2025–now', 'OWASP BLT', 'Content Strategist & Project Developer'],
  ['2025', 'GirlScript Summer of Code', 'Open-source contributor'],
]
type TechItem = { name: string; icon: string; color: string }
const skills: Record<string, TechItem[]> = {
  Languages: [{ name: 'Python', icon: 'python', color: '3776AB' }, { name: 'C/C++', icon: 'cplusplus', color: '00599C' }, { name: 'JavaScript', icon: 'javascript', color: 'F7DF1E' }, { name: 'TypeScript', icon: 'typescript', color: '3178C6' }, { name: 'SQL', icon: 'postgresql', color: '4169E1' }],
  Frameworks: [{ name: 'Flutter', icon: 'flutter', color: '02569B' }, { name: 'React', icon: 'react', color: '61DAFB' }, { name: 'Django', icon: 'django', color: '092E20' }, { name: 'Node.js', icon: 'nodedotjs', color: '5FA04E' }],
  'Data & cloud': [{ name: 'PostgreSQL', icon: 'postgresql', color: '4169E1' }, { name: 'MySQL', icon: 'mysql', color: '4479A1' }, { name: 'Google Cloud', icon: 'googlecloud', color: '4285F4' }, { name: 'Docker', icon: 'docker', color: '2496ED' }],
  Engineering: [{ name: 'Git', icon: 'git', color: 'F05032' }, { name: 'GitLab', icon: 'gitlab', color: 'FC6D26' }, { name: 'Gradle', icon: 'gradle', color: '02303A' }, { name: 'GitHub', icon: 'github', color: '181717' }],
}
const links = {
  github: 'https://github.com/ananya-in-tech',
  linkedin: 'https://www.linkedin.com/in/ananya-in-tech/',
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const update = () => setProgress((window.scrollY / Math.max(document.body.scrollHeight - innerHeight, 1)) * 100)
    update(); addEventListener('scroll', update, { passive: true }); return () => removeEventListener('scroll', update)
  }, [])
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('.section, .marquee')
    const observer = new IntersectionObserver((entries) => entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) { target.classList.add('in-view'); observer.unobserve(target) }
    }), { threshold: .08 })
    nodes.forEach(node => observer.observe(node))
    return () => observer.disconnect()
  }, [])
  const close = () => setMenuOpen(false)
  return <>
    <div className="progress" style={{ transform: `scaleX(${progress / 100})` }} />
    <header className="nav"><a className="wordmark" href="#top">ANANYA<span>✦</span></a><nav className={menuOpen ? 'open' : ''}>
      <a onClick={close} href="#work">Work</a><a onClick={close} href="#open">Open source</a><a onClick={close} href="#about">About</a><a onClick={close} href="#contact">Contact</a>
    </nav><div className="nav-actions"><a aria-label="GitHub" href={links.github} target="_blank" rel="noreferrer"><BrandIcon brand="github" /></a><a aria-label="LinkedIn" href={links.linkedin} target="_blank" rel="noreferrer"><BrandIcon brand="linkedin" /></a><a className="nav-cta" href="#contact">Let’s connect <ArrowUpRight /></a><button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button></div></header>
    <main id="top">
      <section className="hero section"><div className="hero-copy reveal"><p className="eyebrow"><i /> Open source developer · GSoC 2026</p><h1>Hello,<br />I’m <em>Ananya.</em></h1><p className="hero-line">I build secure, useful software <span>in the open.</span></p><p className="lede">Developer working across React, Flutter, Python, TypeScript and backend systems—with a focus on open-source software, security and reliable engineering.</p><div className="buttons"><a className="button primary" href="#work">View my work <ArrowDownRight /></a><a className="button" href="#contact">Let’s connect <ArrowUpRight /></a></div></div>
        <div className="hero-art reveal"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="portrait"><img src="/ananya-pic.png" alt="Ananya" /><small>Built in the open</small></div><div className="sticker gsoc">GSoC<br /><b>2026</b></div><div className="sticker owasp">OWASP<br />× Security</div><div className="dot-grid">● ● ●<br/>● ● ●<br/>● ● ●</div></div>
      </section>
      <section className="marquee" aria-label="Key themes"><div>OPEN SOURCE <b>✦</b> SECURITY <b>✦</b> COMMUNITY <b>✦</b> SOFTWARE <b>✦</b> OPEN SOURCE <b>✦</b></div></section>
      <section id="open" className="gsoc section"><div className="section-tag">01 / A defining chapter</div><div className="gsoc-head"><h2>Google<br/>Summer<br/>of Code</h2><div><p className="year">2026</p><p className="big-copy">I spent GSoC 2026 building <strong>privacy-first cybersecurity software.</strong></p><p className="label">Contributor @ OWASP Foundation</p></div></div><div className="vanish-card"><div><p className="eyebrow light"><i /> Featured contribution</p><h3>OWASP<br/>BLT—Vanish</h3><p>Local-first cybersecurity application</p><div className="pills"><span>Flutter</span><span>Security</span><span>Privacy</span><span>Open source</span></div></div><div className="security-flow"><span>User</span><b>↓</b><span>Local-first app</span><b>↓</b><span>Secure storage</span><b>↓</b><span>Explainable response</span></div></div><div className="metrics"><Metric n="18+" t="merged MRs"/><Metric n="56+" t="automated assertions"/><Metric n="100%" t="passing checks"/><Metric n="0" t="PII by design"/></div></section>
      <section className="bring section"><div className="section-tag">02 / How I work</div><h2>What I bring<br/>to the table.</h2><div className="bring-grid">{brings.map(([n,t,d,c]) => <article className={`bring-card ${c}`} key={t}><small>{n}</small><h3>{t}</h3><p>{d}</p><ArrowUpRight /></article>)}</div></section>
      <section id="about" className="about section"><div className="section-tag">03 / A little context</div><div className="about-grid"><h2>A developer who likes building things that matter.</h2><div><p className="big-copy">I’m Ananya, an open-source developer interested in secure, practical software and the communities that make it possible.</p><dl><div><dt>Currently</dt><dd>MMMUT</dd></div><div><dt>Studying</dt><dd>B.Tech Civil Engineering<br/>Minor in Data Science</dd></div><div><dt>Based in</dt><dd>India</dd></div><div><dt>Focus</dt><dd>Software + Open Source</dd></div></dl></div></div></section>
      <section className="journey section"><div className="section-tag">04 / The journey</div><h2>The journey.</h2><div className="timeline">{experience.map(([year, role, detail]) => <article key={role}><span>{year}</span><div className="timeline-dot"/><div><h3>{role}</h3><p>{detail}</p></div><ArrowUpRight /></article>)}</div></section>
      <section id="work" className="work section"><div className="section-tag">05 / Featured work</div><div className="work-title"><h2>Things I’ve<br/>made.</h2><p>Projects with the strongest engineering and contributor stories get the spotlight here.</p></div><article className="waypoint"><div className="browser"><div className="browser-bar"><i/><i/><i/><b>WAYPOINT</b><span>Project directory</span></div><div className="browser-body"><p>Discover a project</p><div className="search">Search the OWASP BLT ecosystem <b>⌘ K</b></div><div className="project-tiles"><span>Contributor<br/>onboarding</span><span>Open-source<br/>projects</span><span>Community<br/>discovery</span></div></div></div><div className="waypoint-copy"><p className="eyebrow"><i /> OWASP BLT project directory</p><h3>Waypoint <ArrowUpRight /></h3><p>A centralized project directory designed to simplify project discovery and contributor onboarding across the OWASP BLT ecosystem.</p><a href="#contact">Explore the story <ArrowDownRight /></a></div></article><div className="subwork"><article><p>GSoC 2026</p><h3>BLT—<br/>Vanish</h3><span>Privacy-first cybersecurity</span></article><article><p>Built in public</p><h3>More work,<br/>soon.</h3><span>Only real projects. No filler.</span></article></div></section>
      <section className="stack section"><div className="section-tag">06 / Technical ecosystem</div><h2>Tools I reach<br/>for.</h2><div className="skill-grid">{Object.entries(skills).map(([group, items]) => <article key={group}><h3>{group}</h3><div>{items.map(item => <span className="tech-pill" key={item.name}><img src={`https://cdn.simpleicons.org/${item.icon}/${item.color}`} alt="" aria-hidden="true" /><b>{item.name}</b></span>)}</div></article>)}</div></section>
      <section className="leadership section"><div className="section-tag">07 / Beyond the code</div><h2>People make<br/>the work better.</h2><div className="lead-grid"><article><p>FLUX Society · Executive Member</p><h3>Co-directed<br/>Ideathon ’25</h3><div><b>100+</b><span>team registrations</span><b>500+</b><span>active participants</span></div></article><article><p>Google Developer Group on Campus · Co-Lead</p><h3>Making technical<br/>events happen.</h3><div><b>3+</b><span>major tech events</span><b>600+</b><span>participants</span></div></article></div></section>
      <section className="achievements section"><div className="section-tag">08 / Small wins, big energy</div><div className="achievement-top"><h2>Good things<br/>happen when<br/>you show up.</h2><p>Recognition is lovely. The learning, the people and the next build matter more.</p></div><div className="achievement-grid"><article className="award"><span>🥇</span><p>TechSrijan ’24</p><h3>1st place<br/>CAD-athon</h3><small>SAE Collegiate Club</small></article><article className="study"><p>Google Cloud</p><h3>Gen AI<br/>Study Jam</h3><div><b>2024</b><b>2025</b><b>2026</b></div></article></div></section>
      <section className="principles section"><div className="section-tag">09 / Behind the code</div><h2>How I think<br/>when I build.</h2>{['Privacy by default', 'Build for contributors', 'Test what you ship', 'Make complex things feel simple'].map((p,i)=><div className="principle" key={p}><span>0{i+1}</span><h3>{p}</h3><ArrowUpRight /></div>)}</section>
      <section id="contact" className="contact section"><p className="eyebrow light"><i /> Say hello</p><h2>Let’s build<br/>something <em>good.</em></h2><a className="email" href="mailto:ananyar0912@gmail.com">ananyar0912@gmail.com <ArrowUpRight /></a><div className="contact-foot"><span>© 2026 Ananya</span><span>Built in the open.</span><a href={links.github} target="_blank" rel="noreferrer">GitHub</a><a href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div></section>
    </main>
  </>
}
function Metric({n,t}:{n:string,t:string}) { return <div><b>{n}</b><span>{t}</span></div> }
function BrandIcon({ brand }: { brand: 'github' | 'linkedin' }) {
  return brand === 'github'
    ? <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.1 0-1.13.39-2.05 1.04-2.77-.1-.26-.45-1.31.1-2.73 0 0 .85-.28 2.75 1.06A9.2 9.2 0 0 1 12 6.4c.85 0 1.71.12 2.51.35 1.9-1.34 2.75-1.06 2.75-1.06.55 1.42.2 2.47.1 2.73.64.72 1.04 1.64 1.04 2.77 0 3.96-2.34 4.83-4.57 5.09.36.32.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.69.49A10.25 10.25 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z" /></svg>
    : <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35v-11.5h3.41v1.57h.05c.47-.9 1.64-1.85 3.37-1.85 3.61 0 4.27 2.37 4.27 5.46v6.32ZM5.34 7.38a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14ZM7.12 20.45H3.56v-11.5h3.56v11.5Z" /></svg>
}
export default App
