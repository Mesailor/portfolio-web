import type { Footer as FooterType, Person } from "@/lib/types";

interface FooterProps {
  footer: FooterType;
  name: Person["name"];
}

export default function Footer({ footer, name }: FooterProps) {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <div className="flinks">
          {footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="fmeta">{footer.copy}</div>
      </div>
    </footer>
  );
}
