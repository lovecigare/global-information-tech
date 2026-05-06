import { Briefcase, Cog, LineChart, Shield } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const RPO = () => (
  <ServicePage
    eyebrow="IT Consulting"
    title="Recruitment Process Outsourcing"
    subtitle="Run your entire hiring engine — end-to-end, at enterprise scale."
    intro="Our RPO model embeds an experienced talent team inside your organization. We own sourcing, screening, scheduling, offer management, and onboarding under your brand — driving cost-per-hire down and quality-of-hire up."
    highlights={[
      "30–40% reduction in cost-per-hire on average",
      "Scalable from 10 to 1,000+ hires per year",
      "ATS-agnostic — we work with Greenhouse, Lever, Workday, and more",
      "Quarterly business reviews with clear KPIs",
    ]}
    features={[
      { icon: Briefcase, title: "Full-Cycle Hiring", description: "End-to-end ownership from intake to onboarding." },
      { icon: Cog, title: "Process Engineering", description: "We optimize your workflow, scorecards, and interview loops." },
      { icon: LineChart, title: "Talent Analytics", description: "Real-time dashboards on funnel, source, and quality metrics." },
      { icon: Shield, title: "Compliance Built In", description: "EEO, GDPR, and global employment compliance handled." },
    ]}
  />
);
export default RPO;
