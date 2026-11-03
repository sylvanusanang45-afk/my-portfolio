
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Mail,
  GitBranch,
  MessageCircle,
} from "lucide-react";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <motion.div
          className="contact-content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-kicker">
            04 — LET'S CONNECT
          </span>

          <div className="contact-heading">
            <h2>
              Let's build
              <br />
              something <span>great.</span>
            </h2>

            <div className="contact-decoration">
              <MessageCircle size={30} />
            </div>
          </div>

          <p className="contact-description">
            Have an idea, a project, or an opportunity in mind?
            I'd love to hear from you. Let's connect and create
            something meaningful together.
          </p>

          <motion.a
            href="mailto:sylvanusanang45@gmail.com"
            className="contact-button"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.97 }}
          >
            Let's talk
            <ArrowUpRight size={18} />
          </motion.a>

          <div className="contact-details">
            <a href="mailto:sylvanusanang45@gmail.com">
              <Mail size={17} />
              sylvanusanang45@gmail.com
            </a>

            <a
              href="https://github.com/sylvanusanang45-afk"
              target="_blank"
              rel="noreferrer"
            >
              <GitBranch size={17} />
              GitHub
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
