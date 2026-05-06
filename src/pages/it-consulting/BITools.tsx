import { BarChart3, Database, LineChart, PieChart } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const BITools = () => (
  <ServicePage
    eyebrow="IT Consulting"
    title="Business Intelligence Tools"
    subtitle="Modern BI platforms that turn data into decisions."
    intro="We architect, deploy, and operationalize modern BI stacks — from semantic layers to executive dashboards. Whether you're standing up Looker, Tableau, Power BI, or building custom analytics, our team brings the patterns that scale."
    highlights={[
      "Certified across Looker, Tableau, Power BI, and Mode",
      "Semantic layer design with dbt and LookML",
      "Self-serve analytics adoption strategies",
      "Executive dashboards built around real decisions",
    ]}
    features={[
      { icon: Database, title: "Data Modeling", description: "Star schemas, semantic layers, and metrics frameworks done right." },
      { icon: BarChart3, title: "Dashboard Design", description: "Beautiful, fast, decision-grade dashboards." },
      { icon: LineChart, title: "Self-Serve Analytics", description: "Enable business teams to answer their own questions." },
      { icon: PieChart, title: "Executive Reporting", description: "Board-ready insights, automated and trustworthy." },
    ]}
  />
);
export default BITools;
