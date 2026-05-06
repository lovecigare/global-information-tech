import { Search, Target, Users, Zap } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const SourcingRecruiting = () => (
  <ServicePage
    eyebrow="IT Consulting"
    title="Sourcing & Recruiting"
    subtitle="Find and engage exceptional technical talent — faster than the market."
    intro="Our sourcing and recruiting practice combines deep technical screening with a global candidate network. We embed within your hiring team to deliver senior engineers, data scientists, and product leaders who pass your bar — and stay."
    highlights={[
      "Average time-to-hire of 18 days for senior engineering roles",
      "Pre-vetted talent pool spanning 40+ countries",
      "Technical screening by practicing engineers, not generalists",
      "Diversity-first sourcing with measurable outcomes",
    ]}
    features={[
      { icon: Search, title: "Global Sourcing", description: "Multi-channel sourcing across LinkedIn, GitHub, niche communities, and our private network." },
      { icon: Target, title: "Precision Screening", description: "Engineering-led screens for technical depth, communication, and culture fit." },
      { icon: Zap, title: "Fast Time-to-Offer", description: "Tight feedback loops and dedicated recruiters keep your pipeline moving." },
      { icon: Users, title: "Candidate Experience", description: "White-glove candidate experience that protects and elevates your employer brand." },
    ]}
  />
);
export default SourcingRecruiting;
