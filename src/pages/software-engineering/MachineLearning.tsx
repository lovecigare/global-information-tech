import { Brain, Cpu, GitBranch, Sparkles } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const MachineLearning = () => (
  <ServicePage
    eyebrow="Software Engineering"
    title="Machine Learning"
    subtitle="From experiment to production — ML that actually ships."
    intro="We build ML systems that move past prototypes into production. Forecasting, recommendations, vision, NLP — paired with the MLOps discipline to keep them performing in the real world."
    highlights={[
      "Production ML platforms on AWS SageMaker, Vertex, and Databricks",
      "Recommender, forecasting, vision, and NLP models in production",
      "Feature stores, model registries, and CI for models",
      "Monitoring for drift, bias, and performance",
    ]}
    features={[
      { icon: Brain, title: "Model Development", description: "Classical ML and deep learning, tuned for your problem." },
      { icon: Cpu, title: "MLOps Platforms", description: "Reproducible training, deployment, and monitoring at scale." },
      { icon: GitBranch, title: "Feature Engineering", description: "Reusable, governed feature pipelines and stores." },
      { icon: Sparkles, title: "Continuous Learning", description: "Retraining loops that keep models accurate over time." },
    ]}
  />
);
export default MachineLearning;
