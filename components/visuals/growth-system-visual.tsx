"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

const stageNotes = [
  "Qué mover",
  "Cómo atraer",
  "Dónde se pierde",
  "Cómo capturar valor",
  "Qué mejorar después",
];

type GrowthSystemVisualProps = {
  stages: readonly string[];
};

export function GrowthSystemVisual({ stages }: GrowthSystemVisualProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="system-map">
      <div className="system-map__brand" aria-hidden="true">
        <Image src="/brand/dbn-growth-icon.png" alt="" width={477} height={495} sizes="180px" />
        <span>DBN GROWTH SYSTEM</span>
      </div>

      <div className="system-map__rail" aria-hidden="true" />

      <ol className="system-map__stages" aria-label="Las cinco capas del DBN Growth System">
        {stages.map((stage, index) => (
          <motion.li
            className="system-map__stage"
            key={stage}
            initial={reduceMotion ? false : { y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={reduceMotion ? { duration: 0 } : { duration: 0.45, delay: index * 0.07 }}
          >
            <div className="system-map__stage-top">
              <span className="system-map__number" aria-hidden="true">0{index + 1}</span>
              <span className="system-map__node" aria-hidden="true" />
            </div>
            <strong lang="en">{stage}</strong>
            <small>{stageNotes[index]}</small>
          </motion.li>
        ))}
      </ol>

      <p className="system-map__caption">
        El sistema no obliga a mover todo a la vez. La prioridad define dónde intervenir primero.
      </p>
    </div>
  );
}
