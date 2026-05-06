import { Link } from "react-router-dom";
import {
  ArrowRight, Brain, Cloud, Code2, Database, Globe, LineChart,
  Lock, Network, Sparkles, Users, Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import hero from "@/assets/hero.jpg";

const services = [
  { icon: Users, title: "IT Consulting", desc: "Sourcing, RPO, talent management & BI tools.", to: "/it-consulting" },
  { icon: Code2, title: "Software Engineering", desc: "Web, mobile, AI, blockchain & cloud-native.", to: "/software-engineering" },
  { icon: Brain, title: "Artificial Intelligence", desc: "Production-grade ML and intelligent agents.", to: "/software-engineering/ai" },
  { icon: Cloud, title: "DevOps", desc: "CI/CD, observability, and platform engineering.", to: "/software-engineering/devops" },
  { icon: Database, title: "Big Data", desc: "Data lakes, pipelines & real-time analytics.", to: "/software-engineering/big-data" },
  { icon: LineChart, title: "Digital Marketing", desc: "Performance-driven growth engineering.", to: "/software-engineering/digital-marketing" },
];

const stats = [
  { k: "12+", v: "Years in Tech" },
  { k: "240+", v: "Engineers Placed" },
  { k: "60+", v: "Enterprise Clients" },
  { k: "98%", v: "Client Retention" },
];

const Home = () => (
  <>
    {/* Hero */}
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 gradient-hero" />
      <img src={hero} alt="Connected global technology network" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-luminosity" width={1920} height={1280} />
      <div className="absolute inset-0 bg-gradient-glow" />
      <div className="container mx-auto px-4 py-28 md:py-40 relative">
        <div className="max-w-3xl">
          <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary mb-6 glass rounded-full px-4 py-1.5 animate-fade-up">
            <Sparkles className="h-3 w-3" /> Global Information Technology
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-[1.02] mb-6 animate-fade-up">
            Engineering the <span className="gradient-text">intelligent enterprise</span> of tomorrow
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-up">
            We help organizations unlock growth through expert IT consulting, world-class engineering,
            and AI-driven software platforms.
          </p>
          <div className="flex flex-wrap gap-3 animate-fade-up">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact" className="inline-flex items-center">Start a project <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button variant="outlineHero" size="lg" asChild>
              <Link to="/it-consulting">Explore services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="border-b border-border bg-card/30">
      <div className="container mx-auto px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.v} className="text-center">
            <div className="font-display text-3xl md:text-4xl font-bold gradient-text">{s.k}</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mt-2">{s.v}</div>
          </div>
        ))}
      </div>
    </section>

    {/* Services */}
    <section className="container mx-auto px-4 py-24">
      <div className="max-w-2xl mb-14">
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">What we do</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight">
          A full-stack partner for <span className="gradient-text">modern technology</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ icon: Icon, title, desc, to }) => (
          <Link key={title} to={to} className="group gradient-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:-translate-y-1 transition-smooth">
            <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-smooth">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{desc}</p>
            <span className="inline-flex items-center text-sm text-primary font-medium">
              Learn more <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
            </span>
          </Link>
        ))}
      </div>
    </section>

    {/* Why us */}
    <section className="border-y border-border bg-card/20">
      <div className="container mx-auto px-4 py-24 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Why Global IT</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6">
            Outcomes that compound — <span className="gradient-text">quarter after quarter</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            From Fortune 500 transformations to fast-moving startups, we embed senior teams that own
            outcomes, not tickets. Every engagement is measured in value shipped.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Zap, label: "Senior-only teams" },
              { icon: Lock, label: "Enterprise-grade security" },
              { icon: Network, label: "Global delivery model" },
              { icon: Globe, label: "24/7 follow-the-sun" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 glass rounded-lg p-4">
                <Icon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-glow blur-2xl" />
          <div className="relative gradient-card border border-border rounded-2xl p-10 shadow-elegant">
            <blockquote className="font-display text-2xl leading-relaxed mb-6">
              "Global IT didn't just deliver — they reshaped how our engineering org thinks about platforms."
            </blockquote>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full gradient-primary" />
              <div>
                <div className="font-semibold text-sm">Sarah Mitchell</div>
                <div className="text-xs text-muted-foreground">VP Engineering, Northwind Systems</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="container mx-auto px-4 py-24">
      <div className="relative gradient-card border border-border rounded-3xl p-12 md:p-20 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-60" />
        <div className="relative">
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-5">Let's build what's next</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Tell us about your goals — we'll match you with a senior team in days, not months.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact" className="inline-flex items-center">Get in touch <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default Home;
