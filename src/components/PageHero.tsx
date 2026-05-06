import { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const PageHero = ({ eyebrow, title, subtitle, children }: Props) => (
  <section className="relative overflow-hidden border-b border-border">
    <div className="absolute inset-0 gradient-hero" />
    <div className="absolute inset-0 bg-gradient-glow opacity-80" />
    <div className="container mx-auto px-4 py-24 md:py-32 relative">
      {eyebrow && (
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4 animate-fade-up">{eyebrow}</p>
      )}
      <h1 className="font-display text-4xl md:text-6xl font-bold max-w-3xl leading-[1.05] animate-fade-up">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl animate-fade-up">{subtitle}</p>
      )}
      {children && <div className="mt-8 animate-fade-up">{children}</div>}
    </div>
  </section>
);

export default PageHero;
