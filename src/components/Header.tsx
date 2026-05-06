import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

type NavItem = { label: string; to: string; children?: { label: string; to: string }[] };

const NAV: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "About",
    to: "/about",
    children: [
      { label: "Our Company", to: "/about/our-company" },
      { label: "FAQ", to: "/about/faq" },
      { label: "Our Clients", to: "/about/clients" },
      { label: "Technology Partners", to: "/about/partners" },
    ],
  },
  { label: "Career", to: "/career" },
  {
    label: "IT Consulting",
    to: "/it-consulting",
    children: [
      { label: "Sourcing, Recruiting", to: "/it-consulting/sourcing-recruiting" },
      { label: "Recruitment Process Outsourcing", to: "/it-consulting/rpo" },
      { label: "Talent Management", to: "/it-consulting/talent-management" },
      { label: "Business Intelligence Tools", to: "/it-consulting/bi-tools" },
    ],
  },
  {
    label: "Software Engineering",
    to: "/software-engineering",
    children: [
      { label: "DevOps", to: "/software-engineering/devops" },
      { label: "Big Data", to: "/software-engineering/big-data" },
      { label: "Blockchain", to: "/software-engineering/blockchain" },
      { label: "Machine Learning", to: "/software-engineering/machine-learning" },
      { label: "Digital Marketing", to: "/software-engineering/digital-marketing" },
      { label: "Artificial Intelligence", to: "/software-engineering/ai" },
      { label: "Mobile / Web Development", to: "/software-engineering/mobile-web" },
    ],
  },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [openSub, setOpenSub] = useState<string | null>(null);
  const navigate = useNavigate();

  const submitSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setSearchOpen(false);
      setQuery("");
    }
  };

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="container mx-auto flex h-20 items-center justify-between gap-4 px-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logo} alt="Global Information Technology logo" className="h-11 w-auto" />
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="font-display text-base font-bold text-primary">Global IT</span>
            <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Information Technology</span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <div key={item.label} className="relative group">
              <NavLink
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-smooth hover:text-primary ${
                    isActive ? "text-primary" : "text-foreground/85"
                  }`
                }
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5 opacity-70" />}
              </NavLink>
              {item.children && (
                <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-smooth absolute left-0 top-full pt-2 min-w-[260px]">
                  <div className="gradient-card border border-border rounded-lg shadow-elegant p-2">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        className="block rounded-md px-3 py-2 text-sm text-foreground/85 hover:bg-secondary hover:text-primary transition-smooth"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {searchOpen ? (
            <form onSubmit={submitSearch} className="hidden md:flex items-center gap-2 glass rounded-full px-4 py-2">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="bg-transparent outline-none text-sm w-44"
              />
              <button type="button" onClick={() => setSearchOpen(false)} aria-label="Close search">
                <X className="h-4 w-4 text-muted-foreground hover:text-primary" />
              </button>
            </form>
          ) : (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(true)}
              aria-label="Open search"
              className="hover:text-primary"
            >
              <Search className="h-5 w-5" />
            </Button>
          )}

          <Button variant="hero" className="hidden md:inline-flex" asChild>
            <Link to="/contact">Get in touch</Link>
          </Button>

          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            <form onSubmit={submitSearch} className="flex items-center gap-2 glass rounded-full px-4 py-2 mb-3">
              <Search className="h-4 w-4 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="bg-transparent outline-none text-sm flex-1"
              />
            </form>
            {NAV.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <Link
                    to={item.to}
                    onClick={() => !item.children && setOpen(false)}
                    className="flex-1 px-3 py-2 text-sm font-medium hover:text-primary"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => setOpenSub(openSub === item.label ? null : item.label)}
                      className="p-2"
                      aria-label="Toggle submenu"
                    >
                      <ChevronDown className={`h-4 w-4 transition-smooth ${openSub === item.label ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                {item.children && openSub === item.label && (
                  <div className="ml-4 border-l border-border pl-3 space-y-1 mb-2">
                    {item.children.map((c) => (
                      <Link
                        key={c.to}
                        to={c.to}
                        onClick={() => setOpen(false)}
                        className="block px-3 py-1.5 text-sm text-muted-foreground hover:text-primary"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
