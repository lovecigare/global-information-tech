import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";
import PageHero from "@/components/PageHero";
import aiImg from "@/assets/blog/ai-enterprise.jpg";
import dataImg from "@/assets/blog/data-lakehouse.jpg";
import rpoImg from "@/assets/blog/rpo.jpg";
import devopsImg from "@/assets/blog/devops.jpg";
import mlImg from "@/assets/blog/ml-production.jpg";
import mobileImg from "@/assets/blog/mobile-design.jpg";

const posts = [
  { title: "How AI is reshaping enterprise IT in 2026", cat: "AI", date: "May 2, 2026", excerpt: "Generative AI has moved past hype into measurable business outcomes. Here's what's working.", img: aiImg },
  { title: "Building a modern data platform on the lakehouse", cat: "Data", date: "Apr 24, 2026", excerpt: "Why the lakehouse pattern is becoming the default architecture for analytics workloads.", img: dataImg },
  { title: "RPO done right: 5 lessons from 100 engagements", cat: "Hiring", date: "Apr 12, 2026", excerpt: "Recruitment Process Outsourcing isn't magic — it's discipline. These five practices separate winners.", img: rpoImg },
  { title: "DevOps maturity in regulated industries", cat: "DevOps", date: "Mar 30, 2026", excerpt: "How financial services and healthcare are catching up — and even leading — on platform engineering.", img: devopsImg },
  { title: "From PoC to production: shipping ML that lasts", cat: "ML", date: "Mar 18, 2026", excerpt: "Most ML models never see production. Here's the playbook our teams use to change that.", img: mlImg },
  { title: "Designing mobile experiences that actually convert", cat: "Mobile", date: "Mar 5, 2026", excerpt: "Performance, polish, and product sense — the trifecta behind every great mobile app.", img: mobileImg },
];

const Blog = () => (
  <>
    <PageHero eyebrow="Blog" title="Ideas, insights & engineering deep dives" subtitle="Stories from the field — written by the engineers, consultants, and operators who lived them." />
    <section className="container mx-auto px-4 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((p) => (
        <article key={p.title} className="group gradient-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-smooth flex flex-col">
          <div className="h-48 relative overflow-hidden">
            <img
              src={p.img}
              alt={p.title}
              loading="lazy"
              width={1024}
              height={640}
              className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/10 to-transparent" />
            <span className="absolute top-4 left-4 glass text-xs uppercase tracking-widest px-3 py-1 rounded-full">{p.cat}</span>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <div className="flex items-center text-xs text-muted-foreground mb-3 gap-2">
              <Calendar className="h-3 w-3" /> {p.date}
            </div>
            <h3 className="font-display text-lg font-semibold mb-2 leading-snug group-hover:text-primary transition-smooth">{p.title}</h3>
            <p className="text-sm text-muted-foreground mb-4 flex-1">{p.excerpt}</p>
            <Link to="/blog" className="inline-flex items-center text-sm text-primary font-medium">
              Read article <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-smooth" />
            </Link>
          </div>
        </article>
      ))}
    </section>
  </>
);

export default Blog;
