import {
  Server,
  Shield,
  Layers,
  Link,
  Database,
  Zap,
  Webhook,
  GitBranch,
  CheckCircle,
  Cog,
} from "lucide-react";

const skills = [
  {
    icon: Server,
    title: "Desarrollo de APIs REST",
    description: "Diseño e implementación de APIs robustas y bien documentadas",
  },
  {
    icon: Shield,
    title: "Autenticación y Autorización",
    description: "JWT, Sanctum, control de acceso basado en roles",
  },
  {
    icon: Layers,
    title: "Arquitectura Backend",
    description: "MVC, servicios, patrones de diseño escalables",
  },
  {
    icon: Link,
    title: "Integración de APIs",
    description: "Conexión con servicios externos y terceros",
  },
  {
    icon: Database,
    title: "Bases de Datos Relacionales",
    description: "MySQL, PostgreSQL, SQL Server, Oracle, MongoDB",
  },
  {
    icon: Zap,
    title: "Optimización SQL",
    description: "Consultas eficientes y mejora de rendimiento",
  },
  {
    icon: Webhook,
    title: "Manejo de Webhooks",
    description: "Integración de eventos en tiempo real",
  },
  {
    icon: GitBranch,
    title: "Control de Versiones",
    description: "Git, GitHub, GitLab, flujos de trabajo colaborativos",
  },
  {
    icon: CheckCircle,
    title: "Validación de Datos",
    description: "Manejo de errores y validación robusta",
  },
  {
    icon: Cog,
    title: "Lógica de Negocio",
    description: "Implementación de reglas y procesos empresariales",
  },
];

export function SkillsSection() {
  return (
    <section id="habilidades" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-medium tracking-wider text-primary uppercase">
              Habilidades Clave
            </h2>
            <p className="mt-4 text-muted-foreground text-sm">
              Competencias técnicas desarrolladas en proyectos reales.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <SkillCard key={skill.title} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  icon: Icon,
  title,
  description,
}: {
  icon: typeof Server;
  title: string;
  description: string;
}) {
  return (
    <div className="p-4 rounded-lg bg-card border border-border hover:border-primary/30 transition-colors">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-md bg-primary/10 shrink-0">
          <Icon size={16} className="text-primary" />
        </div>
        <div>
          <h3 className="font-medium text-foreground text-sm">{title}</h3>
          <p className="text-xs text-muted-foreground mt-1">{description}</p>
        </div>
      </div>
    </div>
  );
}
