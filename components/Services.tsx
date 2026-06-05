import type { Service } from "@/lib/types";

interface ServicesProps {
  services: Service[];
}

export default function Services({ services }: ServicesProps) {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="eyebrow">
            <span className="num">04</span> Services
          </span>
          <h2>What I can build for you.</h2>
          <p>
            Freelance engagements, sprint-based delivery or end-to-end feature
            ownership.
          </p>
        </div>

        <div className="svc-grid reveal">
          {services.map((svc) => (
            <div className="svc" key={svc.no}>
              <div className="no">{svc.no}</div>
              <h3>{svc.title}</h3>
              <p>{svc.description}</p>
              <div className="svc-tags">{svc.tech}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
