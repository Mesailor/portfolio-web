import type { ExperienceEntry } from "@/lib/types";
import { renderInline } from "@/lib/types";

interface ExperienceProps {
  experience: ExperienceEntry[];
}

export default function Experience({ experience }: ExperienceProps) {
  return (
    <section className="section" id="experience">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">
            <span className="num">02</span> Experience
          </span>
          <h2>From junior frontend to full-stack ownership.</h2>
          <p>
            Roughly two years across product teams — including a Junior → Middle
            → Full-Stack progression at Phone2.
          </p>
        </div>

        <div className="xp-list">
          {experience.map((entry) => (
            <div className="xp-company reveal" key={entry.company}>
              <div className="xp-grid">
                <div className="xp-head">
                  <div className="co">{entry.company}</div>
                  <div className="span">{entry.span}</div>
                  <div className="loc">{entry.location}</div>
                </div>
                <div className="xp-roles">
                  {entry.roles.map((role) => (
                    <div className="role" key={role.title + role.dates}>
                      <div className="rt">
                        <span className="title">{role.title}</span>
                        <span className="dates">{role.dates}</span>
                      </div>
                      <ul>
                        {role.bullets.map((bullet, i) => (
                          <li key={i}>{renderInline(bullet)}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
