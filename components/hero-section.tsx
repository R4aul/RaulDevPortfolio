import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, ArrowDown, Download } from "lucide-react";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Info */}
        <div className="space-y-8">

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-balance">
              Raul Damian Rafael
            </h1>
            <p className="text-xl md:text-2xl text-primary font-medium">
              Backend Developer
            </p>
            <p className="text-lg text-muted-foreground">
              Laravel / Spring Boot
            </p>
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-lg">
            Construyo APIs seguras y escalables para resolver problemas reales
            de negocio.
          </p>

          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={18} className="text-primary" />
            <span>Ixmiquilpan, Hidalgo, México</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 pt-4">
            <Link
              href="https://github.com/R4aul"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/raul-damian-rafael-1703462a7"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-lg bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              href="#proyectos"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              Ver proyectos
            </Link>
            <Link
              href="#contacto"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors"
            >
              Contactar
            </Link>
            <a
              href="/CV_Raul_Damian_Rafael_2026.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <Download size={18} />
              Descargar CV
            </a>
          </div>
        </div>

        {/* Right Column - Navigation Links */}
        <div className="hidden lg:flex flex-col gap-6 pl-12 border-l border-border">
          <NavLink href="#sobre-mi" label="SOBRE MÍ" />
          <NavLink href="#experiencia" label="EXPERIENCIA" />
          <NavLink href="#proyectos" label="PROYECTOS" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <ArrowDown size={24} className="text-muted-foreground" />
      </div>
    </section>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
    >
      <span className="w-12 h-px bg-muted-foreground group-hover:w-20 group-hover:bg-primary transition-all" />
      <span className="text-sm font-medium tracking-wider">{label}</span>
    </Link>
  );
}
