import { ContactForm } from "@/components/forms/contact-form";

export function ContactSection() {
  return (
    <section className="section contact-section" id="contacto" aria-labelledby="contact-title">
      <div className="container-shell contact-grid">
        <div className="contact-intro">
          <p className="eyebrow eyebrow--dark">ANTES DE CONVERSAR</p>
          <h2 id="contact-title">¿Prefieres compartir el contexto primero?</h2>
          <p>Cuéntame lo esencial de tu marca, qué quieres mover y qué sientes que está frenando el crecimiento.</p>
          <div className="contact-intro__axis" aria-hidden="true">
            <span>MARCA</span><i /><span>PRIORIDAD</span><i /><span>CONTEXTO</span>
          </div>
        </div>
        <div className="contact-form-shell">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
