import { ArrowUpRight, GitBranch, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="#top" className="footer-logo">
          SA<span>.</span>
        </a>

        <p>Designed & built by Sylvanus Anang.</p>

        <a href="#top" className="back-to-top">
          Back to top <ArrowUpRight size={15} />
        </a>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Sylvanus Anang</span>

        <div className="footer-links">
          <a
            href="https://github.com/sylvanusanang45-afk"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <GitBranch size={17} />
          </a>

          <a
            href="mailto:sylvanusanang45@gmail.com"
            aria-label="Email"
          >
            <Mail size={17} />
          </a>
        </div>

        <span>Built with React</span>
      </div>
    </footer>
  );
}

export default Footer;