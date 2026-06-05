import type { Person } from "@/lib/types";
import { renderInline } from "@/lib/types";

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.34 9.34 0 0 1 2.5-.34c.85 0 1.71.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
  </svg>
);

interface HeroProps {
  person: Person;
}

export default function Hero({ person }: HeroProps) {
  const headlineParts = person.headline.map((line) => {
    if (!line.includes("**")) return { text: line, accent: null };
    const parts = line.split("**");
    return { parts };
  });

  return (
    <section className="section hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <div className="hero-eyebrow reveal">
            <span className="status-dot" />
            {person.availability}
          </div>
          <h1 className="reveal">
            {person.headline.map((line, i) => {
              const isLast = i === person.headline.length - 1;
              if (!line.includes("**")) {
                return (
                  <span key={i}>
                    {line}
                    {!isLast && <br />}
                  </span>
                );
              }
              const [before, bold, after] = line.split("**");
              return (
                <span key={i}>
                  {before}
                  <span className="accent">{bold}</span>
                  {after}
                  {!isLast && <br />}
                </span>
              );
            })}
          </h1>
          <p className="hero-lede reveal">{renderInline(person.lede)}</p>
          <div className="hero-actions reveal">
            <a href="#work" className="btn btn-primary">
              See my work <span className="arr">→</span>
            </a>
            <a href="#contact" className="btn btn-ghost">
              Let&apos;s talk
            </a>
          </div>
          <div className="hero-meta reveal">
            <div className="item">
              <div className="k">Based in</div>
              <div className="v">{person.location}</div>
            </div>
            <div className="item">
              <div className="k">Focus</div>
              <div className="v">{person.focus}</div>
            </div>
            <div className="item">
              <div className="k">Experience</div>
              <div className="v">{person.experienceLabel}</div>
            </div>
          </div>
        </div>

        <aside className="spec-card reveal" aria-label="Profile summary">
          <div className="spec-top">
            <span className="dots">
              <i /><i /><i />
            </span>
            <span className="file">~/aleksei.profile</span>
          </div>
          <div className="spec-body">
            {person.specCard.map((row, i) => (
              <div className="spec-row" key={i}>
                <span className="label">{row.label}</span>
                <span className="val">
                  {row.isStatus ? (
                    <>
                      <span className="ok">●</span> {row.val}
                    </>
                  ) : (
                    row.val
                  )}
                </span>
              </div>
            ))}
            <div className="spec-stack">
              {person.chips.map((chip) => (
                <span className="chip" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
