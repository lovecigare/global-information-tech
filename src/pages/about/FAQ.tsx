import PageHero from "@/components/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "What industries do you serve?", a: "We work across financial services, healthcare, retail, manufacturing, and SaaS — anywhere technology is a competitive lever." },
  { q: "How do engagements typically start?", a: "Most engagements begin with a 2-week discovery sprint where we align on goals, success metrics, and a delivery roadmap." },
  { q: "Do you offer fixed-price or T&M models?", a: "Both. We tailor the commercial model to risk profile and engagement scope." },
  { q: "Where are your teams located?", a: "We operate hybrid global delivery teams across North America, Europe, and Asia." },
  { q: "How do you ensure security and compliance?", a: "All engagements follow SOC 2, ISO 27001, and HIPAA-aligned controls. Dedicated security review on every project." },
  { q: "Can you augment my existing team?", a: "Absolutely — staff augmentation, dedicated pods, and managed services are all available." },
];

const FAQ = () => (
  <>
    <PageHero eyebrow="FAQ" title="Answers to the questions we hear most" subtitle="Don't see what you're looking for? Reach out — we're happy to chat." />
    <section className="container mx-auto px-4 py-20 max-w-3xl">
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="gradient-card border border-border rounded-xl px-5">
            <AccordionTrigger className="text-left font-display font-semibold hover:no-underline">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  </>
);

export default FAQ;
