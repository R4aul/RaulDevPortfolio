import { Server, Database, Github, Layout, ServerCog } from "lucide-react";
import { ProjectCarousel } from "./project-carousel";

interface GitHubLinks {
  fullstack?:string,
  frontend?:string
  backend?:string
}

const projects = [
  {
    title: "Sistema de Gestion de Capacitacion",
    company: "E-Karpay (Praxis)",
    problem:
      "Las organizaciones no contaban con una herramienta centralizada para gestionar la capacitacion de empleados, lo que dificultaba el seguimiento del progreso y la evaluacion de cursos.",
    contributions: [
      "Participe en el analisis y diseno del sistema orientado a la gestion de capacitacion",
      "Desarrolle una aplicacion web para el registro, asignacion y evaluacion de cursos",
      "Implemente logica backend para el seguimiento del progreso individual y grupal",
      "Disene estructuras de datos para gestionar usuarios, cursos y evaluaciones",
      "Contribui a la mejora de procesos mediante la digitalizacion del sistema",
    ],
    technologies: ["Laravel", "MySQL"],
    icon: Server,
    images: [
      "/images/e-karpay/c-login.png",
      "/images/e-karpay/c-dashboard.png",
      "/images/e-karpay/c-cources.png",
      "/images/e-karpay/c-courses-create.png",
      "/images/e-karpay/c-progress.png",
    ],
    github:{
      fullstack: "https://github.com/R4aul/app-project-spei"
    } as GitHubLinks
  },
  {
    title: "Sistema de Gestion de Dividendos",
    company: "Grupo Remas (MetLife)",
    problem:
      "La gestion manual de informacion financiera generaba ineficiencias y riesgos en el manejo de datos de clientes.",
    contributions: [
      "Desarrolle una aplicacion web para la administracion de dividendos y datos financieros",
      "Implemente autenticacion y autorizacion para proteger el acceso a la informacion",
      "Disene y estructure el backend utilizando Laravel bajo arquitectura MVC",
      "Optimice consultas SQL para mejorar el rendimiento del sistema",
      "Modele la base de datos para garantizar integridad y eficiencia en el manejo de datos",
    ],
    technologies: ["Laravel", "MySQL"],
    icon: Database,
    images: [
      "/images/g-rhemas/s-login.png",
      "/images/g-rhemas/s-search.png",
      "/images/g-rhemas/s-users.png",
      "/images/g-rhemas/s-users-create.png",
    ],
    github:{
      fullstack: "https://github.com/R4aul/grupo-rhemas-app"
    } as GitHubLinks
  },
];

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium tracking-wider text-primary uppercase mb-4">
            Proyectos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proyectos desarrollados en entornos profesionales reales.
          </p>
        </div>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} isReversed={index % 2 !== 0} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GitHubButton({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: typeof Github;
}) {
  if (!href) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-border text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
    >
      <Icon size={16} />
      {label}
    </a>
  );
}

function ProjectCard({
  title,
  company,
  problem,
  contributions,
  technologies,
  icon: Icon,
  images,
  github,
  isReversed,
}: {
  title: string;
  company: string;
  problem: string;
  contributions: string[];
  technologies: string[];
  icon: typeof Server;
  images: string[];
  github: GitHubLinks;
  isReversed: boolean;
}) {

  const hasGitHubLinks = github.fullstack || github.frontend || github.backend;

  return (
    <article className={`grid lg:grid-cols-2 gap-8 items-center ${isReversed ? "lg:flex-row-reverse" : ""}`}>
      {/* Image Carousel */}
      <div className={`${isReversed ? "lg:order-2" : ""}`}>
        <ProjectCarousel images={images} projectName={title} />
      </div>

      {/* Content */}
      <div className={`space-y-6 ${isReversed ? "lg:order-1" : ""}`}>
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-xl bg-primary/10">
            <Icon size={24} className="text-primary" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-primary">{company}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Problema que resuelve
            </h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {problem}
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
              Mi contribucion tecnica
            </h4>
            <ul className="space-y-2">
              {contributions.slice(0, 3).map((contribution, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {contribution}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg text-xs font-medium bg-secondary text-foreground border border-border"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub Links */}
        {hasGitHubLinks && (
          <div className="flex flex-wrap gap-3 pt-2">
            {github.fullstack && (
              <GitHubButton
                href={github.fullstack}
                label="Ver Codigo"
                icon={Github}
              />
            )}
            {github.frontend && (
              <GitHubButton
                href={github.frontend}
                label="Frontend"
                icon={Layout}
              />
            )}
            {github.backend && (
              <GitHubButton
                href={github.backend}
                label="Backend"
                icon={ServerCog}
              />
            )}
          </div>
        )}

      </div>
    </article>
  );
}
