import { Globe, Layout, Smartphone, Zap } from "lucide-react";
import ServicePage from "@/components/ServicePage";

const MobileWeb = () => (
  <ServicePage
    eyebrow="Software Engineering"
    title="Mobile & Web Development"
    subtitle="Beautiful, fast, scalable apps across every platform your customers use."
    intro="We design and build digital products end-to-end — from product strategy and UX to React, React Native, Swift, and Kotlin. Apps that load fast, feel native, and scale to millions."
    highlights={[
      "Native iOS, Android, and cross-platform with React Native",
      "Modern web on React, Next.js, Remix, and Astro",
      "Performance budgets and Core Web Vitals built in",
      "Design systems that scale across teams and surfaces",
    ]}
    features={[
      { icon: Smartphone, title: "Mobile Apps", description: "Native and cross-platform apps with stellar UX." },
      { icon: Globe, title: "Web Applications", description: "Modern, fast, accessible web apps and experiences." },
      { icon: Layout, title: "Design Systems", description: "Reusable component libraries that compound velocity." },
      { icon: Zap, title: "Performance", description: "Core Web Vitals, mobile performance, and SEO baked in." },
    ]}
  />
);
export default MobileWeb;
