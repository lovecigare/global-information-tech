export type SearchEntry = {
  title: string;
  path: string;
  section: string;
  description: string;
  keywords: string;
};

export const SEARCH_INDEX: SearchEntry[] = [
  { title: "Home", path: "/", section: "Main", description: "Global Information Technology — IT consulting and software engineering.", keywords: "home landing main overview" },
  { title: "About", path: "/about", section: "About", description: "Who we are, what we believe, and how we work.", keywords: "company team mission values" },
  { title: "Our Company", path: "/about/our-company", section: "About", description: "Our story, leadership, and global footprint.", keywords: "history leadership offices" },
  { title: "FAQ", path: "/about/faq", section: "About", description: "Answers to the most common questions about working with us.", keywords: "questions answers help support" },
  { title: "Our Clients", path: "/about/clients", section: "About", description: "Enterprises and startups that trust Global IT.", keywords: "customers logos testimonials references" },
  { title: "Technology Partners", path: "/about/partners", section: "About", description: "AWS, Azure, GCP, Snowflake, Databricks and more.", keywords: "aws azure gcp snowflake databricks oracle sap salesforce mongodb partners ecosystem" },
  { title: "Career", path: "/career", section: "Career", description: "Join Global IT — open roles across engineering, data, and consulting.", keywords: "jobs hiring careers roles openings work apply" },
  { title: "IT Consulting", path: "/it-consulting", section: "IT Consulting", description: "End-to-end IT consulting services.", keywords: "consulting advisory strategy" },
  { title: "Sourcing & Recruiting", path: "/it-consulting/sourcing-recruiting", section: "IT Consulting", description: "Find and hire elite tech talent fast.", keywords: "sourcing recruiting talent hire candidates" },
  { title: "Recruitment Process Outsourcing", path: "/it-consulting/rpo", section: "IT Consulting", description: "Full-cycle RPO managed by senior recruiters.", keywords: "rpo outsourcing recruitment hiring" },
  { title: "Talent Management", path: "/it-consulting/talent-management", section: "IT Consulting", description: "Workforce planning, retention, performance.", keywords: "talent hr workforce people management" },
  { title: "Business Intelligence Tools", path: "/it-consulting/bi-tools", section: "IT Consulting", description: "BI strategy, dashboards, and analytics platforms.", keywords: "bi business intelligence dashboards analytics tableau powerbi looker" },
  { title: "Software Engineering", path: "/software-engineering", section: "Software Engineering", description: "Modern software engineering across the stack.", keywords: "software engineering development build" },
  { title: "DevOps", path: "/software-engineering/devops", section: "Software Engineering", description: "CI/CD, platform engineering, SRE.", keywords: "devops ci cd kubernetes docker sre platform" },
  { title: "Big Data", path: "/software-engineering/big-data", section: "Software Engineering", description: "Lakehouse, streaming, analytics at scale.", keywords: "big data spark kafka snowflake databricks pipelines" },
  { title: "Blockchain", path: "/software-engineering/blockchain", section: "Software Engineering", description: "Smart contracts, web3, and distributed ledger.", keywords: "blockchain web3 ethereum solidity smart contracts crypto" },
  { title: "Machine Learning", path: "/software-engineering/machine-learning", section: "Software Engineering", description: "From PoC to production ML systems.", keywords: "ml machine learning models mlops production" },
  { title: "Digital Marketing", path: "/software-engineering/digital-marketing", section: "Software Engineering", description: "SEO, paid, content, and growth engineering.", keywords: "digital marketing seo growth ads content" },
  { title: "Artificial Intelligence", path: "/software-engineering/ai", section: "Software Engineering", description: "GenAI, LLMs, RAG, and agentic systems.", keywords: "ai artificial intelligence genai llm rag chatbot openai" },
  { title: "Mobile / Web Development", path: "/software-engineering/mobile-web", section: "Software Engineering", description: "Native, cross-platform, and modern web apps.", keywords: "mobile web ios android react native flutter app development" },
  { title: "Blog", path: "/blog", section: "Resources", description: "Articles on AI, data, DevOps, hiring and more.", keywords: "blog articles posts insights writing" },
  { title: "Contact", path: "/contact", section: "Contact", description: "Get in touch with our team.", keywords: "contact email phone reach out form" },
];

export const searchSite = (q: string): SearchEntry[] => {
  const query = q.trim().toLowerCase();
  if (!query) return [];
  const tokens = query.split(/\s+/).filter(Boolean);
  return SEARCH_INDEX
    .map((e) => {
      const hay = `${e.title} ${e.description} ${e.keywords} ${e.section}`.toLowerCase();
      let score = 0;
      tokens.forEach((t) => {
        if (e.title.toLowerCase().includes(t)) score += 5;
        if (hay.includes(t)) score += 1;
      });
      return { e, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.e);
};
