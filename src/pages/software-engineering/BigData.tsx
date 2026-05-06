import { BarChart3, Database, GitMerge, Zap } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const BigData = () => (
  <ServicePage
    eyebrow="Software Engineering"
    title="Big Data"
    subtitle="Modern data platforms — from ingestion to insight, at petabyte scale."
    intro="We design and build the data infrastructure that powers analytics, ML, and product personalization. Lakehouse architectures, streaming pipelines, and governed data products built on Snowflake, Databricks, BigQuery, and the open data stack."
    highlights={[
      "Petabyte-scale lakehouse architectures in production",
      "Real-time streaming with Kafka, Flink, and Kinesis",
      "Governance and lineage built in from day one",
      "Cost optimization that pays for itself",
    ]}
    features={[
      { icon: Database, title: "Lakehouse Platforms", description: "Snowflake, Databricks, BigQuery — implemented to best-practice standards." },
      { icon: GitMerge, title: "Data Pipelines", description: "Reliable batch and streaming pipelines with dbt, Airflow, and Spark." },
      { icon: Zap, title: "Real-Time Analytics", description: "Sub-second insights for product, ops, and customer experience." },
      { icon: BarChart3, title: "Data Products", description: "Reusable, discoverable, governed datasets your whole org can trust." },
    ]}
  />
);
export default BigData;
