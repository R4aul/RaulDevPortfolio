import { ReactNode } from "react";
import Image from "next/image";

const technologies ={
  lenguajes: [
    { name: "PHP", icon: "/svg/php_dark.svg" },
    { name: "Java", icon: "/svg/java.svg" },
    { name: "TypeScript", icon: "/svg/typescript.svg" },
    { name: "JavaScript", icon: "/svg/javascript.svg" },
  ],
  frameworksBackend: [
    { name: "Laravel", icon: "/svg/laravel.svg" },
    { name: "Spring Boot", icon: "/svg/spring.svg" },
    { name: "Express.js", icon: "/svg/expressjs_dark.svg" },
  ],
  frontend: [
    { name: "Angular", icon: "/svg/angular.svg" },
  ],
  basesdeDatos: [
    { name: "MySQL", icon: "/svg/mysql-icon-light.svg" },
    { name: "PostgreSQL", icon: "/svg/postgresql.svg" },
    { name: "SQL Server", icon: "/svg/sql-server.svg" },
    { name: "Oracle Database", icon: "/svg/oracle.svg" },
    { name: "MongoDB", icon: "/svg/mongodb-icon-dark.svg" },
  ],
  herramientas: [
    { name: "Git", icon: "/svg/git.svg" },
    { name: "GitHub", icon: "/svg/github_dark.svg" },
    { name: "GitLab", icon: "/svg/gitlab.svg" },
    { name: "Postman", icon: "/svg/postman-icon.svg" },
    { name: "Docker", icon: "/svg/docker.svg" },
  ],
}

export function TechSection() {
  return (
        <section id="tecnologias" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-medium tracking-wider text-primary uppercase">
              Tecnologias
            </h2>
          </div>

          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-8">
              <TechCategory
                title="Lenguajes"
                techs={technologies.lenguajes}
                highlighted
              />
              <TechCategory
                title="Frameworks Backend"
                techs={technologies.frameworksBackend}
                highlighted
              />
              <TechCategory
                title="Frontend"
                techs={technologies.frontend}
              />
              <TechCategory
                title="Bases de Datos"
                techs={technologies.basesdeDatos}
              />
              <TechCategory
                title="Herramientas"
                techs={technologies.herramientas}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechCategory({
  title,
  techs,
  highlighted = false,
}: {
  title: string;
  techs: { name: string; icon: string }[];
  highlighted?: boolean;
}) {
  return (
    <div className="space-y-4">
      <h3
        className={`text-sm font-medium ${
          highlighted ? "text-primary" : "text-muted-foreground"
        }`}
      >
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {techs.map((tech) => (
          <span
            key={tech.name}
            className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-md text-sm ${
              highlighted
                ? "bg-primary/10 text-primary border border-primary/20"
                : "bg-secondary text-foreground"
            }`}
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              width={20}
              height={20}
              className="w-5 h-5"
            />
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
}

