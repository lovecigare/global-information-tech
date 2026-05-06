import PageHero from "@/components/PageHero";
import BrandLogo from "@/components/BrandLogo";

const clients = ["Northwind", "Acme Corp", "Vertex Bank", "Helio Health", "Quantica", "Polaris Retail", "Meridian", "Skyline AI", "Atlas Logistics", "Forge Industries", "Lumen Pay", "Orbital"];

const Clients = () => (
  <>
    <PageHero eyebrow="Our Clients" title="Trusted by industry leaders worldwide" subtitle="From Fortune 500 enterprises to high-growth startups, we've helped hundreds of teams ship technology that matters." />
    <section className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {clients.map((c) => (
          <div key={c} className="gradient-card border border-border rounded-xl h-28 flex items-center justify-center px-4 hover:border-primary/40 transition-smooth">
            <BrandLogo name={c} />
          </div>
        ))}
      </div>
      <div className="mt-16 grid md:grid-cols-3 gap-6">
        {[
          { quote: "A genuine partner — not a vendor.", author: "CTO, Vertex Bank" },
          { quote: "They shipped what nobody else could.", author: "VP Product, Helio Health" },
          { quote: "Senior-quality work on every engagement.", author: "Head of Engineering, Quantica" },
        ].map((t) => (
          <div key={t.author} className="gradient-card border border-border rounded-xl p-7">
            <p className="font-display text-lg leading-relaxed mb-4">"{t.quote}"</p>
            <p className="text-sm text-primary">{t.author}</p>
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Clients;
