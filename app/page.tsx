import content from "@/content.json";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import type { Content } from "@/lib/types";

const data = content as unknown as Content;

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Nav person={data.person} />
      <main id="top">
        <Hero person={data.person} />
        <About about={data.about} />
        <Experience experience={data.experience} />
        <Projects projects={data.projects} />
        <Services services={data.services} />
        <Contact contact={data.contact} />
      </main>
      <Footer footer={data.footer} name={data.person.name} />
    </>
  );
}
