export function ExperienceSection() {
  return (
    <section id="experiencia" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-medium tracking-wider text-primary uppercase">
              Experiencia
            </h2>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">
                Desarrollador Backend
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                Desarrollador backend con experiencia en la construcción de
                aplicaciones web enfocadas en la gestión de datos y procesos
                empresariales.
              </p>

              <div className="space-y-4">
                <ExperienceItem>
                  He participado en el análisis, diseño e implementación de
                  sistemas como plataformas de capacitación y gestión
                  financiera, desarrollando{" "}
                  <span className="text-primary font-medium">APIs REST</span>,
                  lógica de negocio y estructuras de base de datos eficientes.
                </ExperienceItem>

                <ExperienceItem>
                  He trabajado con{" "}
                  <span className="text-primary font-medium">
                    autenticación de usuarios
                  </span>
                  , control de acceso y{" "}
                  <span className="text-primary font-medium">
                    optimización de consultas SQL
                  </span>
                  , asegurando el correcto funcionamiento y seguridad de los
                  sistemas.
                </ExperienceItem>

                <ExperienceItem>
                  También he colaborado en equipos de desarrollo, aplicando{" "}
                  <span className="text-primary font-medium">
                    buenas prácticas de programación
                  </span>{" "}
                  y organización de proyectos.
                </ExperienceItem>

                <ExperienceItem>
                  Experiencia en desarrollo de proyectos reales para clientes,
                  con enfoque en soluciones escalables y mantenibles.
                </ExperienceItem>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
      <p className="text-foreground leading-relaxed">{children}</p>
    </div>
  );
}
