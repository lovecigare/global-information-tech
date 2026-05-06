import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Heart, MapPin, Rocket, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";

const jobs = [
  { title: "Senior Full-Stack Engineer", team: "Engineering", loc: "Remote / SF" },
  { title: "ML Engineer (LLM platforms)", team: "AI", loc: "Remote / NYC" },
  { title: "DevOps Architect", team: "Platform", loc: "Remote / EU" },
  { title: "Talent Acquisition Lead", team: "People", loc: "San Francisco" },
  { title: "Data Engineer", team: "Data", loc: "Remote / India" },
  { title: "Product Designer", team: "Design", loc: "Remote" },
];

const Career = () => (
  <>
    <PageHero
      eyebrow="Careers"
      title="Build a career that compounds"
      subtitle="Work with people at the top of their craft, on problems that move the needle. Remote-first, senior-only, and obsessed with quality."
    />
    <section className="container mx-auto px-4 py-20 grid md:grid-cols-3 gap-6">
      {[
        { icon: Rocket, title: "Real ownership", text: "You'll own outcomes end-to-end — no babysitting, no busywork." },
        { icon: Heart, title: "Health & wellbeing", text: "Top-tier health coverage, mental health support, generous PTO." },
        { icon: Users, title: "Senior peers", text: "Learn from the best — every team is staffed senior-only." },
      ].map(({ icon: Icon, title, text }) => (
        <div key={title} className="gradient-card border border-border rounded-xl p-7">
          <Icon className="h-8 w-8 text-primary mb-4" />
          <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground">{text}</p>
        </div>
      ))}
    </section>

    <section className="container mx-auto px-4 pb-24">
      <div className="flex items-end justify-between mb-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-2">Open roles</p>
          <h2 className="font-display text-3xl font-bold">Find your next chapter</h2>
        </div>
      </div>
      <div className="space-y-3">
        {jobs.map((j) => (
          <div key={j.title} className="gradient-card border border-border rounded-xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-primary/40 transition-smooth group">
            <div>
              <h3 className="font-display font-semibold text-lg">{j.title}</h3>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mt-1">
                <span className="inline-flex items-center gap-1"><Briefcase className="h-3 w-3" /> {j.team}</span>
                <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {j.loc}</span>
              </div>
            </div>
            <Button variant="outlineHero" size="sm" asChild>
              <Link to="/contact" className="inline-flex items-center">Apply <ArrowRight className="ml-1 h-3.5 w-3.5 group-hover:translate-x-1 transition-smooth" /></Link>
            </Button>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Career;
