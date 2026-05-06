import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import PageHero from "./PageHero";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface Props {
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  highlights: string[];
  features: { icon: LucideIcon; title: string; description: string }[];
}

const ServicePage = ({ eyebrow, title, subtitle, intro, highlights, features }: Props) => (
  <>
    <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle}>
      <div className="flex flex-wrap gap-3">
        <Button variant="hero" asChild><Link to="/contact">Talk to an expert</Link></Button>
        <Button variant="outlineHero" asChild><Link to="/it-consulting">All services</Link></Button>
      </div>
    </PageHero>

    <section className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Overview</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Built for outcomes, <span className="gradient-text">delivered with rigor</span>
        </h2>
        <p className="text-muted-foreground leading-relaxed">{intro}</p>
      </div>
      <ul className="space-y-4">
        {highlights.map((h) => (
          <li key={h} className="flex gap-3 gradient-card border border-border rounded-lg p-5">
            <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <span className="text-sm">{h}</span>
          </li>
        ))}
      </ul>
    </section>

    <section className="container mx-auto px-4 pb-24">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map(({ icon: Icon, title, description }) => (
          <div key={title} className="gradient-card border border-border rounded-xl p-6 hover:border-primary/40 transition-smooth group">
            <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="container mx-auto px-4 pb-24">
      <div className="gradient-card border border-border rounded-2xl p-10 md:p-14 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-50" />
        <div className="relative">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Ready to accelerate your roadmap?</h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            Partner with engineers and consultants who have shipped at scale across industries.
          </p>
          <Button variant="hero" asChild>
            <Link to="/contact" className="inline-flex items-center">Start a conversation <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default ServicePage;
