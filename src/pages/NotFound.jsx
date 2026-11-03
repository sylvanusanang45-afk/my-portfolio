import { ArrowUpRight } from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">
      <a href="/" className="logo">
        SA<span>.</span>
      </a>

      <nav>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      <a href="mailto:sylvanusanang45@gmail.com" className="nav-contact">
        Let's talk <ArrowUpRight size={16} />
      </a>
    </header>
  );
}

export default Navbar;