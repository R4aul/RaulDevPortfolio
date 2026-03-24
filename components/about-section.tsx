export function AboutSection() {
  return (
    <section id="sobre-mi" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-sm font-medium tracking-wider text-primary uppercase">
              Sobre mí
            </h2>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <p className="text-lg text-foreground leading-relaxed">
              Soy desarrollador backend especializado en la construcción de{" "}
              <span className="text-primary font-medium">
                APIs seguras y escalables
              </span>{" "}
              utilizando <span className="font-medium">Laravel</span> y{" "}
              <span className="font-medium">Spring Boot</span>. Cuento con
              experiencia en el desarrollo de sistemas reales, donde he
              implementado autenticación, gestión de datos y lógica de negocio
              orientada a resolver problemas específicos.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Me enfoco en escribir código limpio, estructurado y mantenible,
              aplicando buenas prácticas y patrones de diseño. He trabajado en
              proyectos que requieren integración de servicios externos, como
              sistemas de pago y manejo de webhooks, lo que me ha permitido
              entender cómo construir soluciones robustas en entornos reales.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Busco seguir creciendo como desarrollador backend, participando en
              proyectos donde pueda aportar soluciones eficientes y escalables.
            </p>

            <div className="pt-6 flex flex-wrap gap-4">
              <InfoCard
                title="Formación"
                value="Ing. en Desarrollo y Gestión de Software"
              />
              <InfoCard
                title="Metodologías"
                value="SCRUM / Agile"
              />
              <InfoCard
                title="Enfoque"
                value="Código limpio y mantenible"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="px-4 py-3 bg-secondary rounded-lg">
      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
        {title}
      </p>
      <p className="text-sm font-medium text-foreground">{value}</p>
    </div>
  );
}
