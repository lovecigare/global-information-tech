import { Link, useSearchParams } from "react-router-dom";
import { ArrowRight, Search as SearchIcon } from "lucide-react";
import PageHero from "@/components/PageHero";
import { searchSite } from "@/lib/searchIndex";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [params, setParams] = useSearchParams();
  const navigate = useNavigate();
  const q = params.get("q") || "";
  const [draft, setDraft] = useState(q);
  const results = q ? searchSite(q) : [];

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (draft.trim()) navigate(`/search?q=${encodeURIComponent(draft.trim())}`);
  };

  return (
    <>
      <PageHero
        eyebrow="Search"
        title={q ? `Results for "${q}"` : "Search the site"}
        subtitle="Find services, pages, and resources across Global IT."
      />
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <form onSubmit={submit} className="flex items-center gap-2 glass rounded-full px-5 py-3 mb-10 border border-border">
          <SearchIcon className="h-5 w-5 text-muted-foreground" />
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Try AI, DevOps, RPO, careers..."
            className="bg-transparent outline-none text-base flex-1"
          />
          <button type="submit" className="text-sm font-medium text-primary hover:underline">Search</button>
        </form>

        {q && results.length === 0 && (
          <div className="gradient-card border border-border rounded-xl p-8 text-center text-muted-foreground">
            No results for "{q}". Try a different keyword.
          </div>
        )}

        {results.length > 0 && (
          <>
            <p className="text-sm text-muted-foreground mb-4">{results.length} result{results.length === 1 ? "" : "s"}</p>
            <ul className="space-y-3">
              {results.map((r) => (
                <li key={r.path}>
                  <Link
                    to={r.path}
                    className="group block gradient-card border border-border rounded-xl p-5 hover:border-primary/40 transition-smooth"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="min-w-0">
                        <div className="text-xs uppercase tracking-widest text-primary mb-1">{r.section}</div>
                        <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-smooth">{r.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">{r.description}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-smooth shrink-0" />
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>
    </>
  );
};

export default Search;
