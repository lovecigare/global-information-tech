import PageHero from "@/components/PageHero";
import { Building2, Calendar, Globe2, Users } from "lucide-react";

const OurCompany = () => (
  <>
    <PageHero
      eyebrow="Our Company"
      title="Global IT — engineered for impact"
      subtitle="Headquartered in San Francisco with delivery hubs around the world, we partner with leaders who refuse to settle for incremental change."
    />
    <section className="container mx-auto px-4 py-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { icon: Calendar, k: "Founded", v: "2014" },
        { icon: Users, k: "Team", v: "320+ experts" },
        { icon: Globe2, k: "Offices", v: "8 countries" },
        { icon: Building2, k: "HQ", v: "San Francisco" },
      ].map(({ icon: Icon, k, v }) => (
        <div key={k} className="gradient-card border border-border rounded-xl p-6">
          <Icon className="h-7 w-7 text-primary mb-3" />
          <div className="text-xs uppercase tracking-widest text-muted-foreground">{k}</div>
          <div className="font-display text-xl font-semibold mt-1">{v}</div>
        </div>
      ))}
    </section>
    <section className="container mx-auto px-4 pb-24 max-w-3xl">
      <h2 className="font-display text-3xl font-bold mb-5">Leadership that ships</h2>
      <p className="text-muted-foreground leading-relaxed">
        Our leaders are practitioners — former CTOs, principal engineers, and operators who have built
        platforms used by millions. We bring that same operator's mindset to every engagement.
      </p>
    </section>
  </>
);

export default OurCompany;
