import { Award, Globe2, Heart, Target } from "lucide-react";
import PageHero from "@/components/PageHero";

const About = () => (
  <>
    <PageHero
      eyebrow="About Global IT"
      title="A global technology partner built for the next decade"
      subtitle="We combine deep engineering expertise with a relentless focus on business outcomes — partnering with leaders to design, build, and scale modern technology."
    />
    <section className="container mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-start">
      <div>
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our story</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 leading-tight">
          Trusted by enterprises, <span className="gradient-text">loved by builders</span>
        </h2>
        <div className="space-y-4 text-muted-foreground leading-relaxed">
          <p>Global Information Technology was founded with a simple belief: great software comes from great teams. For more than a decade we've built and embedded those teams inside Fortune 500 enterprises and high-growth startups across the globe.</p>
          <p>Today we operate across IT consulting, software engineering, AI, data, and digital — helping organizations modernize their core, build new digital products, and find the talent that powers them.</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        {[
          { icon: Target, title: "Mission", text: "Engineer technology that creates measurable business value." },
          { icon: Heart, title: "Values", text: "Craftsmanship, integrity, and relentless customer focus." },
          { icon: Globe2, title: "Global", text: "Distributed teams across 4 continents and 12+ time zones." },
          { icon: Award, title: "Recognized", text: "Trusted by industry leaders and award-winning engineers." },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="gradient-card border border-border rounded-xl p-6">
            <Icon className="h-8 w-8 text-primary mb-3" />
            <h3 className="font-display font-semibold mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{text}</p>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default About;
