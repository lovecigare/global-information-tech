import PageHero from "@/components/PageHero";
import BrandLogo from "@/components/BrandLogo";

const partners = ["AWS", "Microsoft Azure", "Google Cloud", "Snowflake", "Databricks", "MongoDB", "Salesforce", "ServiceNow", "Oracle", "SAP", "OpenAI", "HashiCorp"];

const Partners = () => (
  <>
    <PageHero eyebrow="Technology Partners" title="A best-of-breed ecosystem" subtitle="We architect with the platforms that power modern enterprises — and hold deep certifications across the stack." />
    <section className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {partners.map((p) => (
          <div key={p} className="gradient-card border border-border rounded-xl h-28 flex items-center justify-center px-4 hover:border-primary/40 transition-smooth">
            <BrandLogo name={p} />
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Partners;
