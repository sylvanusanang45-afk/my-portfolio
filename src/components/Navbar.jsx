
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <motion.header
      className="navbar"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <a href="#home" className="logo">
        <span className="logo-mark">S</span>
        <span className="logo-name">SYLVANUS<span>.</span></span>
      </a>

      <nav className="navbar-links">
        {navLinks.map((link) => (
          <a key={link.name} href={link.href}>
            {link.name}
          </a>
        ))}
      </nav>

      <a
        href="mailto:sylvanusanang45@gmail.com"
        className="nav-contact"
      >
        Contact me <ArrowUpRight size={16} />
      </a>
    </motion.header>
  );
}

export default Navbar;
