import { Megaphone, MousePointerClick, Search, TrendingUp } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const DigitalMarketing = () => (
  <ServicePage
    eyebrow="Software Engineering"
    title="Digital Marketing"
    subtitle="Performance-driven growth engineering for modern brands."
    intro="We engineer the technology behind growth — martech stacks, attribution, conversion optimization, and SEO. Strategy meets engineering to deliver measurable, durable customer acquisition."
    highlights={[
      "First-party data architectures built for the post-cookie era",
      "Attribution models that match how customers actually buy",
      "SEO and content systems that compound over time",
      "Conversion optimization grounded in experimentation",
    ]}
    features={[
      { icon: Search, title: "SEO Engineering", description: "Technical SEO, content systems, and structured data done right." },
      { icon: MousePointerClick, title: "Conversion Optimization", description: "Experimentation platforms, A/B testing, and growth loops." },
      { icon: TrendingUp, title: "Attribution & Analytics", description: "Multi-touch attribution and unified marketing analytics." },
      { icon: Megaphone, title: "Martech Architecture", description: "Composable martech stacks built around your customers." },
    ]}
  />
);
export default DigitalMarketing;
