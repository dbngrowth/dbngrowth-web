"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

import { SectionHeader } from "@/components/ui/section-header";
import { siteConfig } from "@/config/site";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq-section" id="faq" aria-labelledby="faq-title">
      <div className="container-shell faq-grid">
        <div className="faq-intro">
          <SectionHeader
            id="faq-title"
            eyebrow="PREGUNTAS FRECUENTES"
            title="Antes de agendar, esto es lo importante."
            copy="Qué significa trabajar con un Growth Partner, para quién tiene sentido y qué puedes esperar de una primera conversación."
          />
          <div className="faq-intro__orbit" aria-hidden="true">
            <span>FAQ / 0{siteConfig.faq.length}</span>
            <i />
            <i />
          </div>
        </div>
        <div className="faq-list">
          {siteConfig.faq.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const triggerId = `faq-trigger-${index}`;
            return (
              <article className="faq-item" data-open={isOpen} key={item.question}>
                <h3>
                  <button
                    aria-controls={panelId}
                    aria-expanded={isOpen}
                    id={triggerId}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    type="button"
                  >
                    <span className="faq-item__number" aria-hidden="true">0{index + 1}</span>
                    <span>{item.question}</span>
                    <Plus aria-hidden="true" />
                  </button>
                </h3>
                <div
                  className="faq-answer"
                  id={panelId}
                  role="region"
                  aria-labelledby={triggerId}
                  aria-hidden={!isOpen}
                >
                  <div><p>{item.answer}</p></div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
