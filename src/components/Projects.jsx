import { motion } from "motion/react";
import { ArrowUpRight, GitBranch, ExternalLink } from "lucide-react";

import novacartPreview from "../assets/novacart-preview.png";
import humanizerPreview from "../assets/humanizer-preview.png";
import todoPreview from "../assets/todo-preview.png";

const projects = [
  {
    number: "01",
    name: "NovaCart",
    category: "FEATURED PROJECT · E-COMMERCE",
    description:
      "A full-stack e-commerce application with user authentication, product management, shopping cart, wishlist, order history, Paystack payments and an AI shopping assistant.",
    image: novacartPreview,
    technologies: ["React", "Supabase", "JavaScript", "Paystack"],
    live: "https://novacart-mauve.vercel.app",
    github: "https://github.com/sylvanusanang45-afk/novacart",
    featured: true,
  },
  {
    number: "02",
    name: "Humanizer",
    category: "AI WRITING ASSISTANT",
    description:
      "An AI-powered writing application that helps users humanize text, analyze their writing voice, and manage their writing history.",
    image: humanizerPreview,
    technologies: ["React", "Express.js", "Supabase", "Gemini AI"],
    live: "https://humanizer-mu-eight.vercel.app",
    github: "https://github.com/sylvanusanang45-afk/humanizer",
    featured: false,
  },
  {
    number: "03",
    name: "Todo App",
    category: "TASK MANAGEMENT",
    description:
      "A task management application that allows users to manage their tasks with authentication and persistent data storage.",
    image: todoPreview,
    technologies: ["React", "Supabase", "CSS"],
    live: "https://my-react-app-eight-weld.vercel.app/",
    github: "https://github.com/sylvanusanang45-afk/todo-app",
    featured: false,
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <motion.div
          className="section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-kicker">03 — SELECTED WORK</span>

          <h2>
            Things I've <span>built.</span>
          </h2>

          <p className="projects-intro">
            A selection of projects where ideas become real,
            functional digital experiences.
          </p>
        </motion.div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.article
              className={`project-card ${
                project.featured ? "featured-project" : ""
              }`}
              key={project.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="project-preview">
                <div className="browser-bar">
                  <div className="browser-dots">
                    <span />
                    <span />
                    <span />
                  </div>

                  <span className="browser-label">
                    {project.name}
                  </span>
                </div>

                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={`${project.name} application preview`}
                  />
                </div>
              </div>

              <div className="project-details">
                <div className="project-number">
                  PROJECT {project.number}
                </div>

                <span className="project-category">
                  {project.category}
                </span>

                <h3>{project.name}</h3>

                <p>{project.description}</p>

                <div className="project-tags">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live preview
                    <ExternalLink size={14} />
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source code
                    <GitBranch size={15} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="projects-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>More projects and experiments coming soon.</p>

          <a
            href="https://github.com/sylvanusanang45-afk"
            target="_blank"
            rel="noreferrer"
            className="github-link"
          >
            Explore my GitHub
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;