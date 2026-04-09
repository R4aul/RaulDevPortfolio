"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {

      const response = await fetch("https://formspree.io/f/xlgorjzd",{
        method:'POST',
        headers:{
          "Content-Type":"application/json",
          "Accept":"application/json"
        },
        body:JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        })
      });  

      if (response.ok) {

       setIsSubmitted(true);

       setTimeout(()=>{
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });

       },3000);

      }else{
        setError("Hubo un error al enviar el formulario. Inténtalo de nuevo.");
      }
    } catch (error) {
      setError("Error de conexion. Inténtalo mas tarde o envia directamente un correo");
    } finally {
      setIsSubmitting(false);
    }

  };

  return (
    <section id="contacto" className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-sm font-medium tracking-wider text-primary uppercase mb-4">
            Contacto
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-foreground text-balance">
            Trabajemos juntos
          </p>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Si tienes un proyecto en mente o simplemente quieres conectar, no dudes en escribirme.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <ContactLink
                icon={Github}
                label="GitHub"
                value="github.com/R4aul"
                href="https://github.com/R4aul"
              />
              <ContactLink
                icon={Linkedin}
                label="LinkedIn"
                value="Raul Damian Rafael"
                href="https://www.linkedin.com/in/raul-damian-rafael-1703462a7"
              />
              <ContactLink
                icon={MapPin}
                label="Ubicacion"
                value="Ixmiquilpan, Hidalgo, Mexico"
              />
            </div>

            <div className="p-6 rounded-xl bg-secondary/50 border border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Actualmente estoy buscando nuevas oportunidades laborales como 
                Backend Developer. Si tienes una posicion abierta o un proyecto 
                interesante, me encantaria escucharte.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-foreground"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-foreground"
                >
                  Asunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all appearance-none cursor-pointer"
                >
                  <option value="" disabled>
                    Selecciona un asunto
                  </option>
                  <option value="job">Oportunidad laboral</option>
                  <option value="project">Proyecto freelance</option>
                  <option value="collaboration">Colaboracion</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-foreground"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Cuentame sobre tu proyecto o propuesta..."
                  className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full py-6 text-base font-medium"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Enviando...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Mensaje enviado
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Enviar mensaje
                  </>
                )}
              </Button>

              {isSubmitted && (
                <p className="text-center text-sm text-primary">
                  Gracias por tu mensaje. Te respondere lo antes posible.
                </p>
              )}
              {error && (
                <p className="text-center text-sm text-red-500">
                  {error}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© 2025 Raul Damian Rafael. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/R4aul"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/raul-damian-rafael-1703462a7"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-lg bg-secondary">
        <Icon size={20} className="text-primary" />
      </div>
      <div>
        <p className="text-xs text-muted-foreground uppercase tracking-wider">
          {label}
        </p>
        <p className="text-foreground mt-1">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="block hover:opacity-80 transition-opacity"
      >
        {content}
      </Link>
    );
  }

  return content;
}
