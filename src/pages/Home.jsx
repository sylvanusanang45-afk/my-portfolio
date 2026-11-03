
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Sparkles,
  Globe,
  Palette,
  Braces,
  Database,
  Route,
  GitBranch,
  Smartphone,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import portrait from "../assets/sylvanus-portrait.png";
import cv from "../assets/Sylvanus-Anang-CV.pdf";

const skills = [
  {
    name: "HTML5",
    category: "Structure",
    description: "Building accessible and well-structured web pages.",
    icon: Globe,
  },
  {
    name: "CSS3",
    category: "Styling",
    description: "Creating responsive layouts and polished interfaces.",
    icon: Palette,
  },
  {
    name: "JavaScript",
    category: "Programming",
    description: "Adding interactivity and dynamic functionality.",
    icon: Braces,
  },
  {
    name: "React",
    category: "Frontend",
    description: "Building reusable components and interactive apps.",
    icon: Code2,
  },
  {
    name: "React Router",
    category: "Navigation",
    description: "Creating smooth multi-page application experiences.",
    icon: Route,
  },
  {
    name: "Supabase",
    category: "Backend services",
    description: "Working with authentication and database services.",
    icon: Database,
  },
  {
    name: "REST APIs",
    category: "Integration",
    description: "Fetching and displaying data from external APIs.",
    icon: Globe,
  },
  {
    name: "Git & GitHub",
    category: "Version control",
    description: "Managing code and collaborating through repositories.",
    icon: GitBranch,
  },
  {
    name: "Responsive Design",
    category: "User experience",
    description: "Making websites work across different screen sizes.",
    icon: Smartphone,
  },
];

function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* HERO */}
        <section className="hero-section" id="home">
          <div className="hero-container">
            <motion.div
              className="hero-copy"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="hero-eyebrow">
                <span className="eyebrow-line" />
                HELLO, I'M SYLVANUS ANANG
              </p>

              <h1>
                I build digital
                <br />
                experiences that
                <br />
                <span className="highlight-text">make an impact.</span>
              </h1>

              <p className="hero-description">
                I'm a frontend developer passionate about creating
                beautiful, responsive, and user-friendly web
                experiences. I turn ideas into products people
                enjoy using.
              </p>

              <div className="hero-actions">
                <a href="#projects" className="primary-button">
                  Explore my work
                  <ArrowUpRight size={18} />
                </a>

                <a
                  href={cv}
                  download="Sylvanus-Anang-CV.pdf"
                  className="secondary-button"
                >
                  Download CV
                  <ArrowUpRight size={17} />
                </a>
              </div>

              <div className="hero-social-proof">
                <span className="availability-dot" />
                Available for remote opportunities
              </div>
            </motion.div>

            <motion.div
              className="hero-visual"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <div className="hero-yellow-shape" />
              <div className="hero-black-shape" />
              <div className="hero-dots">••••••</div>

              <div className="portrait-frame">
                <img
                  src={portrait}
                  alt="Portrait of Sylvanus Anang"
                />
              </div>

              <motion.div
                className="floating-card developer-card"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="floating-icon">
                  <Code2 size={21} />
                </div>
                <div>
                  <strong>Frontend Developer</strong>
                  <span>Building for the web</span>
                </div>
              </motion.div>

              <motion.div
                className="floating-card react-card"
                animate={{ y: [0, 9, 0] }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles size={20} />
                <div>
                  <strong>React Developer</strong>
                  <span>Creating modern interfaces</span>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <a href="#about" className="scroll-indicator">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown size={16} />
          </a>
        </section>

        {/* ABOUT */}
        <section className="about-section" id="about">
          <div className="section-container">
            <div className="section-heading">
              <span className="section-kicker">01 — ABOUT ME</span>
              <h2>
                A little about
                <span> what I do.</span>
              </h2>
            </div>

            <div className="about-content">
              <div className="about-decoration">
                <div className="about-yellow-shape" />
                <div className="about-image-placeholder">
                  <img src={portrait} alt="Sylvanus Anang" />
                </div>
              </div>

              <div className="about-text">
                <p className="about-intro">
                  I'm Sylvanus, a frontend developer who enjoys
                  turning ideas into useful digital experiences.
                </p>

                <p>
                  I work with HTML, CSS, JavaScript and React to
                  build responsive websites and applications.
                  I care about the details — from how a page looks
                  to how it feels when someone uses it.
                </p>

                <p>
                  I'm constantly learning, experimenting with
                  new ideas, and building projects that challenge
                  me to become a better developer.
                </p>

                <a href="#projects" className="text-link">
                  See what I've been building
                  <ArrowUpRight size={17} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills-section" id="skills">
          <div className="section-container">
            <div className="section-heading">
              <span className="section-kicker">02 — MY TOOLKIT</span>
              <h2>
                Skills & <span>technologies.</span>
              </h2>
              <p className="skills-intro">
                The tools I use to turn ideas into functional,
                responsive and engaging web experiences.
              </p>
            </div>

            <div className="skills-grid">
              {skills.map((skill, index) => {
                const Icon = skill.icon;

                return (
                  <motion.article
                    className="skill-card"
                    key={skill.name}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: (index % 3) * 0.1,
                    }}
                    whileHover={{ y: -6 }}
                  >
                    <div className="skill-card-top">
                      <div className="skill-icon">
                        <Icon size={21} />
                      </div>
                      <span>{skill.category}</span>
                    </div>

                    <h3>{skill.name}</h3>
                    <p>{skill.description}</p>
                  </motion.article>
                );
              })}
            </div>

            <div className="skills-note">
              <span className="skills-note-icon">
                <Sparkles size={17} />
              </span>
              <p>
                Always learning, always building. I'm continuously
                expanding my skills through hands-on projects.
              </p>
            </div>
          </div>
        </section>

        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default Home;
