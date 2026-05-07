import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent", description: "Thanks — we'll get back to you within one business day." });
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <>
      <PageHero eyebrow="Contact" title="Let's talk about what you're building" subtitle="Tell us about your goals and we'll match you with the right team." />
      <section className="container mx-auto px-4 py-20 grid lg:grid-cols-3 gap-10">
        <div className="space-y-5 lg:col-span-1">
          {[
            { icon: MapPin, title: "Visit us", text: "1200 Tech Avenue, Suite 400\nSan Francisco, CA 94107" },
            { icon: Phone, title: "Call us", text: "+1 (415) 555-0199\nMon–Fri, 9am–6pm PT" },
            { icon: Mail, title: "Email us", text: "support@globalinnovationtechnology.org\ncareers@globalinnovationtechnology.org" },
          ].map(({ icon: Icon, title, text }) => (
            <div key={title} className="gradient-card border border-border rounded-xl p-6">
              <Icon className="h-7 w-7 text-primary mb-3" />
              <h3 className="font-display font-semibold mb-1">{title}</h3>
              <p className="text-sm text-muted-foreground whitespace-pre-line">{text}</p>
            </div>
          ))}
        </div>
        <form onSubmit={onSubmit} className="lg:col-span-2 gradient-card border border-border rounded-2xl p-8 md:p-10 space-y-5">
          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-2"><Label htmlFor="name">Full name</Label><Input id="name" required placeholder="Jane Doe" /></div>
            <div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" type="email" required placeholder="jane@company.com" /></div>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            <div className="space-y-2"><Label htmlFor="company">Company</Label><Input id="company" placeholder="Acme Inc." /></div>
            <div className="space-y-2"><Label htmlFor="topic">How can we help?</Label><Input id="topic" placeholder="IT Consulting, AI, Hiring..." /></div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" required rows={6} placeholder="Tell us a bit about your project..." />
          </div>
          <Button type="submit" variant="hero" size="lg" disabled={loading} className="w-full md:w-auto">
            {loading ? "Sending..." : <>Send message <Send className="ml-2 h-4 w-4" /></>}
          </Button>
        </form>
      </section>
    </>
  );
};

export default Contact;
