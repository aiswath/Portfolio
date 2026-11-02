  import Image from "next/image";
  import {
    ArrowUpRight,
    BrainCircuit,
    Code2,
    Database,
    Github,
    Linkedin,
    Mail,
    Monitor,
    Sparkles
  } from "lucide-react";

  const projects = [
  {
    number: "01",
    title: "Ecommerce Storefront",
    description:
      "A React and TypeScript storefront with product search, cart management and order handling, backed by an Express API and MongoDB.",
    stack: ["React", "TypeScript", "Express", "MongoDB"],
    github: "https://github.com/aiswath/Ecommerce",
    image: "/images/ecommerce.jpg",
    imageAlt: "Ecommerce storefront featuring electronics, a phone promotion and product cards",
    accent: "from-rose-400/20 via-rose-400/5 to-transparent",
    visual: "EC",
  },
  {
    number: "02",
    title: "Potato Disease Detector",
    description:
      "A potato leaf classifier that identifies Early Blight, Late Blight or Healthy leaves with confidence scores, using a TensorFlow model and FastAPI with React web and Expo Android interfaces.",
    stack: ["Python", "TensorFlow", "FastAPI", "React", "React Native", "Expo"],
    github: "https://github.com/aiswath/ImageRecognition",
    image: "/images/pawscan-ai.png",
    imageAlt: "PawScan AI logo featuring a corgi, golden retriever and husky",
    accent: "from-lime-400/20 via-lime-400/5 to-transparent",
    visual: "🥔",
  },
  {
    number: "03",
    title: "Conversational AI Chatbot",
    description:
      "A Python-based chatbot using Dialogflow with backend logic for handling conversations and application data.",
    stack: ["Python", "Dialogflow", "MySQL", "FastAPI"],
    github: "https://github.com/aiswath/chatbot",
    accent: "from-cyan-400/20 via-cyan-400/5 to-transparent",
    visual: "AI",
  },
  {
    number: "04",
    title: "Snake Game",
    description:
      "A classic Snake game built from scratch, focusing on game logic, player input, collision detection and object-oriented programming.",
    stack: ["Java", "Game Development", "OOP"],
    github: "https://github.com/aiswath/Snake",
    accent: "from-emerald-400/20 via-emerald-400/5 to-transparent",
    visual: "🐍",
  },
  {
    number: "05",
    title: "Flappy Bird",
    description:
      "A Flappy Bird-style game implemented from scratch, featuring real-time game mechanics, collision detection, scoring and player controls.",
    stack: ["Java", "Game Development", "OOP"],
    github: "https://github.com/aiswath/Flappy-Bird",
    accent: "from-orange-400/20 via-orange-400/5 to-transparent",
    visual: "FB",
  },
  {
    number: "06",
    title: "WGAN-GP",
    description:
      "A Wasserstein GAN with Gradient Penalty implementation exploring stable adversarial training, image generation and experiment outputs.",
    stack: ["Python", "PyTorch", "GANs", "Deep Learning"],
    github: "https://github.com/aiswath/WGAN-GP",
    accent: "from-violet-400/20 via-violet-400/5 to-transparent",
    visual: "W",
  },
];

  const skills = [
    ["Languages", "Python · JavaScript · TypeScript · Java · C++ · SQL · HTML · CSS", Code2],
    ["Frameworks & Web", "React · React Native · Next.js · Node.js · Express · FastAPI · Tailwind CSS", Monitor],
    ["AI / Machine Learning", "TensorFlow · PyTorch · scikit-learn · Pandas · OpenCV", BrainCircuit],
    ["Tools & Databases", "Git · GitHub · Docker · Linux · MySQL · MongoDB · REST APIs", Database]
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
              <h2>Projects built to learn by doing.</h2>
            </div>

            <Sparkles className="section-icon" size={30} />
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div
                  className={`project-visual ${project.image ? "project-visual-image" : `bg-gradient-to-br ${project.accent}`}`}
                >
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 850px) 100vw, 560px"
                      className="project-image"
                    />
                  ) : (
                    <>
                      <span className="project-number">
                        {project.number}
                      </span>

                      <div className="project-orbit">
                        <div className="orbit orbit-one" />
                        <div className="orbit orbit-two" />

                        <div className="orbit-core">
                          {project.visual}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <div className="project-content">
                  <div className="project-meta">
                    FEATURED PROJECT
                  </div>

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
