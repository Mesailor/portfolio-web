import type { ReactNode } from "react";

export interface Meta {
  title: string;
  description: string;
}

export interface SpecCardRow {
  label: string;
  val: string;
  isStatus?: boolean;
}

export interface Person {
  name: string;
  initials: string;
  title: string;
  availability: string;
  headline: string[];
  lede: string;
  location: string;
  timezone: string;
  focus: string;
  experienceLabel: string;
  status: string;
  specCard: SpecCardRow[];
  chips: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface About {
  lead: string;
  bio: string[];
  skills: SkillGroup[];
}

export interface Role {
  title: string;
  dates: string;
  bullets: string[];
}

export interface ExperienceEntry {
  company: string;
  span: string;
  location: string;
  roles: Role[];
}

export interface Project {
  kind: string;
  featured: boolean;
  title: string;
  description: string;
  tags: string[];
  github?: string;
  live?: string;
}

export interface Service {
  no: string;
  title: string;
  description: string;
  tech: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
  icon: "email" | "linkedin" | "github" | "telegram";
}

export interface Contact {
  heading: string;
  sub: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
  links: ContactLink[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface Footer {
  links: FooterLink[];
  copy: string;
}

export interface Content {
  meta: Meta;
  person: Person;
  about: About;
  experience: ExperienceEntry[];
  projects: Project[];
  services: Service[];
  contact: Contact;
  footer: Footer;
}

export function renderInline(text: string): ReactNode {
  if (!text.includes("**")) return text;
  const parts = text.split("**");
  return parts.map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  );
}
