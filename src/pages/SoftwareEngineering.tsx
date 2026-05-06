import { Link } from "react-router-dom";
import { ArrowRight, Bot, Cloud, Code2, Cpu, Database, Link2, Smartphone, TrendingUp } from "lucide-react";
import PageHero from "@/components/PageHero";

const cards = [
  { icon: Cloud, title: "DevOps", text: "CI/CD, IaC, observability, and platform engineering.", to: "/software-engineering/devops" },
  { icon: Database, title: "Big Data", text: "Modern data platforms, lakehouses, and streaming pipelines.", to: "/software-engineering/big-data" },
  { icon: Link2, title: "Blockchain", text: "Smart contracts, tokenization, and decentralized apps.", to: "/software-engineering/blockchain" },
  { icon: Cpu, title: "Machine Learning", text: "From model training to production-grade MLOps.", to: "/software-engineering/machine-learning" },
  { icon: TrendingUp, title: "Digital Marketing", text: "Performance marketing engineering and martech.", to: "/software-engineering/digital-marketing" },
  { icon: Bot, title: "Artificial Intelligence", text: "Generative AI, agents, and intelligent automation.", to: "/software-engineering/ai" },
  { icon: Smartphone, title: "Mobile / Web Development", text: "Beautiful, fast, scalable apps across every platform.", to: "/software-engineering/mobile-web" },
];

const SoftwareEngineering = () => (
  <>
    <PageHero
      eyebrow="Software Engineering"
      title="Engineering the products that move your business"
      subtitle="Senior-only teams architecting and shipping production-grade software across cloud, data, AI, and digital."
    />
    <section className="container mx-auto px-4 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map(({ icon: Icon, title, text, to }) => (
        <Link key={title} to={to} className="group gradient-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:-translate-y-1 transition-smooth">
          <div className="h-12 w-12 rounded-lg gradient-primary flex items-center justify-center mb-5">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{text}</p>
          <span className="inline-flex items-center text-sm text-primary font-medium">
            Explore <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
          </span>
        </Link>
      ))}
    </section>
  </>
);

export default SoftwareEngineering;
