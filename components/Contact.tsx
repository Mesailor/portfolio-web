import type { Contact as ContactType, ContactLink } from "@/lib/types";

const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95C20.4 8.75 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3s-2.3 1.57-2.3 3.2V21H9V9Z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05a9.34 9.34 0 0 1 2.5-.34c.85 0 1.71.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.35 4.8-4.58 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.02 10.02 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const TelegramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M21.5 4.3 2.8 11.5c-.9.36-.9.86-.16 1.08l4.78 1.5 1.85 5.7c.24.66.43.92.86.92.43 0 .62-.2.85-.66l2.5-2.43 4.93 3.64c.9.5 1.55.24 1.78-.84l3.2-15.1c.33-1.3-.5-1.9-1.4-1.5Z" />
  </svg>
);

function IconFor({ icon }: { icon: ContactLink["icon"] }) {
  switch (icon) {
    case "email": return <EmailIcon />;
    case "linkedin": return <LinkedInIcon />;
    case "github": return <GitHubIcon />;
    case "telegram": return <TelegramIcon />;
  }
}

interface ContactProps {
  contact: ContactType;
}

export default function Contact({ contact }: ContactProps) {
  return (
    <section className="section contact" id="contact">
      <div className="wrap contact-grid">
        <div className="reveal">
          <span className="eyebrow">
            <span className="num">05</span> Contact
          </span>
          <h2>{contact.heading}</h2>
          <p className="sub">{contact.sub}</p>
          <div className="contact-actions">
            <a href={contact.primaryHref} className="btn btn-on-dark-primary">
              {contact.primaryLabel} <span className="arr">→</span>
            </a>
            <a
              href={contact.secondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-on-dark-ghost"
            >
              {contact.secondaryLabel}
            </a>
          </div>
        </div>

        <div className="contact-card reveal">
          {contact.links.map((link) => (
            <a
              key={link.icon}
              className="cc-row"
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
            >
              <span className="cc-ic">
                <IconFor icon={link.icon} />
              </span>
              <span className="cc-meta">
                <span className="k">{link.label}</span>
                <span className="v">{link.value}</span>
              </span>
              <span className="arr">→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
