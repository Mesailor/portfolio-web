import Image from "next/image";
import type { About as AboutType } from "@/lib/types";

interface AboutProps {
  about: AboutType;
}

export default function About({ about }: AboutProps) {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">
            <span className="num">01</span> About
          </span>
          <h2>Product-minded engineering, backend to pixel.</h2>
        </div>
        <div className="about-grid">
          <div className="photo-ph reveal" aria-label="Aleksei Nikolskii">
            <Image
              src="/headshot.JPG"
              alt="Aleksei Nikolskii"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1000px) 340px, 380px"
              priority
            />
          </div>
          <div className="about-body reveal">
            <p className="lead">{about.lead}</p>
            {about.bio.map((para, i) => (
              <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
            ))}
            <div className="skills">
              {about.skills.map((group) => (
                <div className="skill-col" key={group.category}>
                  <h4>{group.category}</h4>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
