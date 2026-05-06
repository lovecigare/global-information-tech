import { Activity, Cloud, GitBranch, Server } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const DevOps = () => (
  <ServicePage
    eyebrow="Software Engineering"
    title="DevOps & Platform Engineering"
    subtitle="Ship faster, safer, and more reliably with modern delivery platforms."
    intro="We build internal developer platforms, automate everything between commit and production, and instrument your systems with first-class observability. The result: shorter cycle times, fewer incidents, happier engineers."
    highlights={[
      "10x faster deploy frequency on average",
      "Reduce MTTR by 60% with modern observability",
      "Infrastructure-as-Code on AWS, Azure, and GCP",
      "Kubernetes platforms hardened for production",
    ]}
    features={[
      { icon: GitBranch, title: "CI/CD Pipelines", description: "Trunk-based delivery with automated testing and progressive rollouts." },
      { icon: Cloud, title: "Cloud Infrastructure", description: "Terraform-based, multi-account, multi-region by default." },
      { icon: Server, title: "Kubernetes Platforms", description: "Production-grade K8s with GitOps and policy-as-code." },
      { icon: Activity, title: "Observability", description: "Logs, metrics, and traces unified — incidents resolved in minutes." },
    ]}
  />
);
export default DevOps;
