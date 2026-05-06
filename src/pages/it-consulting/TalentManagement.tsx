import { Award, GraduationCap, Heart, TrendingUp } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const TalentManagement = () => (
  <ServicePage
    eyebrow="IT Consulting"
    title="Talent Management"
    subtitle="Career frameworks, retention programs, and leadership pipelines that scale."
    intro="Hiring is only the beginning. We design career ladders, performance systems, and leadership development programs that turn great hires into long-tenured leaders. Built for tech orgs, by tech operators."
    highlights={[
      "Engineering career ladders adopted by 50+ companies",
      "Retention improvement averaging 22% in year one",
      "Leadership coaching for managers and senior ICs",
      "Performance frameworks aligned to business outcomes",
    ]}
    features={[
      { icon: GraduationCap, title: "Career Ladders", description: "Clear, measurable growth paths for ICs and managers." },
      { icon: TrendingUp, title: "Performance Systems", description: "Calibrated review cycles tied to outcomes, not activity." },
      { icon: Heart, title: "Retention Programs", description: "Stay interviews, comp benchmarking, and engagement insights." },
      { icon: Award, title: "Leadership Development", description: "Coaching and cohort-based programs for emerging leaders." },
    ]}
  />
);
export default TalentManagement;
