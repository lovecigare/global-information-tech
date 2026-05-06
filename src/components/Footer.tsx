import { Link } from "react-router-dom";
import { Mail, MapPin, Phone, Linkedin, Twitter, Github } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-card/40 mt-24">
    <div className="container mx-auto px-4 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
      <div>
        <Link to="/" className="flex items-center gap-3 mb-4">
          <img src={logo} alt="Global IT" className="h-10 w-auto" />
          <span className="font-display font-bold text-primary">Global IT</span>
        </Link>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Engineering intelligent technology solutions that move enterprises forward — from talent to platforms.
        </p>
        <div className="flex gap-3 mt-5">
          {[Linkedin, Twitter, Github].map((Icon, i) => (
            <a key={i} href="#" className="p-2 rounded-md glass hover:text-primary transition-smooth" aria-label="Social link">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/about/our-company" className="hover:text-primary transition-smooth">Our Company</Link></li>
          <li><Link to="/about/clients" className="hover:text-primary transition-smooth">Our Clients</Link></li>
          <li><Link to="/about/partners" className="hover:text-primary transition-smooth">Technology Partners</Link></li>
          <li><Link to="/career" className="hover:text-primary transition-smooth">Careers</Link></li>
          <li><Link to="/blog" className="hover:text-primary transition-smooth">Blog</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">Services</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/it-consulting" className="hover:text-primary transition-smooth">IT Consulting</Link></li>
          <li><Link to="/it-consulting/rpo" className="hover:text-primary transition-smooth">RPO</Link></li>
          <li><Link to="/software-engineering/ai" className="hover:text-primary transition-smooth">AI & Machine Learning</Link></li>
          <li><Link to="/software-engineering/devops" className="hover:text-primary transition-smooth">DevOps</Link></li>
          <li><Link to="/software-engineering/mobile-web" className="hover:text-primary transition-smooth">Mobile / Web</Link></li>
        </ul>
      </div>

      <div>
        <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">Get in touch</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 text-primary" /> 1200 Tech Avenue, Suite 400, San Francisco, CA</li>
          <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> +1 (415) 555-0199</li>
          <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> hello@globalit.com</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Global Information Technology. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="#" className="hover:text-primary">Privacy</a>
          <a href="#" className="hover:text-primary">Terms</a>
          <a href="#" className="hover:text-primary">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
