import { Bot, Brain, MessageSquare, Sparkles } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const AI = () => (
  <ServicePage
    eyebrow="Software Engineering"
    title="Artificial Intelligence"
    subtitle="Generative AI, agents, and intelligent automation — built for production."
    intro="We help enterprises move past AI demos into systems that drive measurable value. RAG architectures, agentic workflows, fine-tuning, and evaluation harnesses — engineered for safety, accuracy, and cost."
    highlights={[
      "Production RAG systems serving millions of queries",
      "Agentic workflows that automate complex back-office tasks",
      "Eval harnesses to keep AI systems accurate over time",
      "Cost-aware architectures that scale economically",
    ]}
    features={[
      { icon: Sparkles, title: "Generative AI", description: "RAG, fine-tuning, and prompt engineering for real workloads." },
      { icon: Bot, title: "AI Agents", description: "Tool-using agents that execute workflows end-to-end." },
      { icon: MessageSquare, title: "Conversational AI", description: "Voice and chat experiences that delight customers." },
      { icon: Brain, title: "AI Governance", description: "Safety, evaluation, and observability for AI systems." },
    ]}
  />
);
export default AI;
