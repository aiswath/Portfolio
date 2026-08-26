import Image from "next/image";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Database,
  Github,
  Linkedin,
  Mail,
  Server,
  Sparkles,
  Terminal
} from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Conversational AI Chatbot",
    description:
      "A Python-based chatbot project using Dialogflow with backend logic for handling conversations and application data.",
    stack: ["Python", "Dialogflow", "MySQL", "Backend"],
    github: "https://github.com/aiswath/chatbot",
    accent: "from-cyan-400/20 via-cyan-400/5 to-transparent"
  },
  {
    number: "02",
    title: "WGAN-GP",
    description:
      "A Wasserstein GAN with Gradient Penalty implementation exploring stable adversarial training, model generation and experiment outputs.",
    stack: ["Python", "PyTorch", "GANs", "Deep Learning"],
    github: "https://github.com/aiswath/WGAN-GP",
    accent: "from-violet-400/20 via-violet-400/5 to-transparent"
  }
];

const skills = [
  ["Languages", "Python · C++ · Java · JavaScript · SQL", Code2],
  ["AI / ML", "PyTorch · TensorFlow · Scikit-learn · Pandas", BrainCircuit],
  ["Web / Backend", "React · Node.js · Express · FastAPI", Server],
  ["Tools", "Git · GitHub · Linux · Docker", Terminal],
  ["Data", "MySQL · Data Processing · APIs", Database]
] as const;

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">
          <span>Aung Thu Htet</span>
        </a>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <a
          className="nav-github"
          href="https://github.com/aiswath"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profile"
        >
          <Github size={17} />
        </a>
      </nav>
      <section id="top" className="hero section">
        <div className="hero-glow" />

        <h1>
          Aung Thu Htet
        </h1>

        <div className="profile-image">
          <Image
            src="/images/profile.jpg"
            alt="Aung Thu Htet"
            fill
            priority
            className="profile-image-img"
          />
        </div>

        <div className="eyebrow">
          <span className="status-dot" />
          SOFTWARE ENGINEERING · AI / ML
        </div>

        <p className="hero-copy">
          I&apos;m a software engineering student interested in
          building practical applications and understanding how
          intelligent systems work under the hood.
        </p>

        <div className="hero-actions">
          <a className="button primary" href="#projects">
            View projects <ArrowUpRight size={17} />
          </a>

          <a
            className="button secondary"
            href="https://github.com/aiswath"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} /> GitHub
          </a>
        </div>

        <div className="scroll-hint">
          SCROLL TO EXPLORE ↓
        </div>
      </section>
      {/* <section id="top" className="hero section">
        <div className="hero-glow" />
        <div className="eyebrow">
          <span className="status-dot" />
          SOFTWARE ENGINEERING · AI / ML
        </div>
        
        <h1>
          Building software , 
          <br />
          Exploring <em>intelligence.</em>
        </h1>

        <p className="hero-copy">
          I&apos;m Aung Thu Htet, a software engineering student interested in
          building practical applications and understanding how intelligent
          systems work under the hood.
        </p>

        <div className="hero-actions">
          <a className="button primary" href="#projects">
            View projects <ArrowUpRight size={17} />
          </a>
          <a
            className="button secondary"
            href="https://github.com/aiswath"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} /> GitHub
          </a>
        </div>

        <div className="scroll-hint">SCROLL TO EXPLORE ↓</div>
      </section> */}

      <section id="about" className="section two-column">
        <div>
          <div className="section-label">01 / ABOUT</div>
          <h2>Curious about how things actually work.</h2>
        </div>
        <div className="section-body">
          <p>
            I&apos;m studying software engineering and developing my skills
            across application development, backend systems and machine
            learning.
          </p>
          <p>
            My current interests sit at the intersection of software
            engineering and AI — from building conversational applications to
            implementing generative models and experimenting with their
            training behavior.
          </p>
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-label">02 / SKILLS</div>
        <div className="skills-grid">
          {skills.map(([title, items, Icon]) => (
            <div className="skill-card" key={title}>
              <Icon size={21} strokeWidth={1.5} />
              <h3>{title}</h3>
              <p>{items}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="section-heading-row">
          <div>
            <div className="section-label">03 / SELECTED WORK</div>
            <h2>Two projects. Two sides of AI.</h2>
          </div>
          <Sparkles className="section-icon" size={30} />
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className={`project-visual bg-gradient-to-br ${project.accent}`}>
                <span className="project-number">{project.number}</span>
                <div className="project-orbit">
                  <div className="orbit orbit-one" />
                  <div className="orbit orbit-two" />
                  <div className="orbit-core">
                    {project.number === "01" ? "AI" : "W"}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-meta">FEATURED PROJECT</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="tags">
                  {project.stack.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

                <a
                  className="project-link"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub <ArrowUpRight size={16} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section quote-section">
        <div className="quote-mark">“</div>
        <blockquote>
          The best way to understand a system is to build one.
        </blockquote>
      </section>

      <section id="contact" className="section contact-section">
        <div className="section-label">04 / CONTACT</div>
        <h2>Let&apos;s build something interesting.</h2>
        <p>
          I&apos;m open to software engineering, AI/ML and internship
          opportunities.
        </p>

        <div className="contact-actions">
          <a className="button primary" href="mailto:htet48016@gmail.com">
            <Mail size={17} /> Get in touch
          </a>
          <a
            className="button secondary"
            href="https://github.com/aiswath"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} /> GitHub
          </a>
          <a className="button secondary" href="https://www.linkedin.com/in/ath-aisw/" aria-label="LinkedIn placeholder">
            <Linkedin size={17} /> LinkedIn
          </a>
        </div>
      </section>

      <footer>
        <span>© 2026 Aung Thu Htet</span>
        <span>Built with Next.js · TypeScript · Docker</span>
      </footer>
    </main>
  );
}