import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Briefcase, Search, Users } from "lucide-react";
import PageHero from "@/components/PageHero";

const cards = [
  { icon: Search, title: "Sourcing, Recruiting", text: "Identify and engage elite technical talent at speed.", to: "/it-consulting/sourcing-recruiting" },
  { icon: Briefcase, title: "Recruitment Process Outsourcing", text: "Run your entire hiring engine — end-to-end.", to: "/it-consulting/rpo" },
  { icon: Users, title: "Talent Management", text: "Career frameworks, retention, and leadership growth.", to: "/it-consulting/talent-management" },
  { icon: BarChart3, title: "Business Intelligence Tools", text: "Modern BI platforms that drive real decisions.", to: "/it-consulting/bi-tools" },
];

const ITConsulting = () => (
  <>
    <PageHero
      eyebrow="IT Consulting"
      title="Talent and intelligence — engineered together"
      subtitle="From sourcing the right engineers to standing up modern BI, our consulting practice is built to deliver measurable business outcomes."
    />
    <section className="container mx-auto px-4 py-20 grid md:grid-cols-2 gap-6">
      {cards.map(({ icon: Icon, title, text, to }) => (
        <Link key={title} to={to} className="group gradient-card border border-border rounded-2xl p-8 hover:border-primary/40 hover:-translate-y-1 transition-smooth">
          <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-5">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <h3 className="font-display text-2xl font-semibold mb-3">{title}</h3>
          <p className="text-muted-foreground mb-5">{text}</p>
          <span className="inline-flex items-center text-sm text-primary font-medium">
            Explore <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
          </span>
        </Link>
      ))}
    </section>
  </>
);

export default ITConsulting;
