import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import OurCompany from "./pages/about/OurCompany";
import FAQ from "./pages/about/FAQ";
import Clients from "./pages/about/Clients";
import Partners from "./pages/about/Partners";
import Career from "./pages/Career";
import ITConsulting from "./pages/ITConsulting";
import SourcingRecruiting from "./pages/it-consulting/SourcingRecruiting";
import RPO from "./pages/it-consulting/RPO";
import TalentManagement from "./pages/it-consulting/TalentManagement";
import BITools from "./pages/it-consulting/BITools";
import SoftwareEngineering from "./pages/SoftwareEngineering";
import DevOps from "./pages/software-engineering/DevOps";
import BigData from "./pages/software-engineering/BigData";
import Blockchain from "./pages/software-engineering/Blockchain";
import MachineLearning from "./pages/software-engineering/MachineLearning";
import DigitalMarketing from "./pages/software-engineering/DigitalMarketing";
import AI from "./pages/software-engineering/AI";
import MobileWeb from "./pages/software-engineering/MobileWeb";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const wrap = (el: JSX.Element) => <Layout>{el}</Layout>;

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={wrap(<About />)} />
          <Route path="/about/our-company" element={wrap(<OurCompany />)} />
          <Route path="/about/faq" element={wrap(<FAQ />)} />
          <Route path="/about/clients" element={wrap(<Clients />)} />
          <Route path="/about/partners" element={wrap(<Partners />)} />
          <Route path="/career" element={wrap(<Career />)} />
          <Route path="/it-consulting" element={wrap(<ITConsulting />)} />
          <Route path="/it-consulting/sourcing-recruiting" element={wrap(<SourcingRecruiting />)} />
          <Route path="/it-consulting/rpo" element={wrap(<RPO />)} />
          <Route path="/it-consulting/talent-management" element={wrap(<TalentManagement />)} />
          <Route path="/it-consulting/bi-tools" element={wrap(<BITools />)} />
          <Route path="/software-engineering" element={wrap(<SoftwareEngineering />)} />
          <Route path="/software-engineering/devops" element={wrap(<DevOps />)} />
          <Route path="/software-engineering/big-data" element={wrap(<BigData />)} />
          <Route path="/software-engineering/blockchain" element={wrap(<Blockchain />)} />
          <Route path="/software-engineering/machine-learning" element={wrap(<MachineLearning />)} />
          <Route path="/software-engineering/digital-marketing" element={wrap(<DigitalMarketing />)} />
          <Route path="/software-engineering/ai" element={wrap(<AI />)} />
          <Route path="/software-engineering/mobile-web" element={wrap(<MobileWeb />)} />
          <Route path="/blog" element={wrap(<Blog />)} />
          <Route path="/contact" element={wrap(<Contact />)} />
          <Route path="/search" element={wrap(<Search />)} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
