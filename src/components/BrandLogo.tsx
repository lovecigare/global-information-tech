import { Cpu, Cloud, Database, Shield, Zap, Globe, Layers, Activity, Rocket, Hexagon, Building2, Sparkles, Box, Server, CircuitBoard, Triangle } from "lucide-react";

const ICONS = [Cpu, Cloud, Database, Shield, Zap, Globe, Layers, Activity, Rocket, Hexagon, Building2, Sparkles, Box, Server, CircuitBoard, Triangle];

// Deterministic hash → pick icon + accent
const hash = (s: string) => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
};

interface Props {
  name: string;
  className?: string;
}

const BrandLogo = ({ name, className = "" }: Props) => {
  const h = hash(name);
  const Icon = ICONS[h % ICONS.length];
  // Choose between primary and accent for variety, all from design tokens
  const accent = h % 2 === 0 ? "text-primary" : "text-accent";
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className={`flex items-center justify-center h-9 w-9 rounded-lg bg-secondary ${accent}`}>
        <Icon className="h-5 w-5" strokeWidth={2.2} />
      </div>
      <span className="font-display text-base font-bold tracking-tight text-foreground">{name}</span>
    </div>
  );
};

export default BrandLogo;
