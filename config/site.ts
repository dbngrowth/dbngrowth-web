export type TrustedBrand = {
  name: string;
  logo: string;
  width: number;
  height: number;
};

export const siteConfig = {
  brandName: "DBN Growth",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "[DOMAIN]",
  email: "diegoiboscan@dbngrowth.com",
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "[CALENDLY_URL]",
  founder: {
    name: "Diego Boscán",
    role: "Growth Partner · DBN Growth",
    photo: "/brand/diego-boscan.jpg",
    bio: "DBN Growth es la estructura desde la que trabajo como Growth Partner: entender el contexto del negocio, detectar la restricción principal y conectar las capacidades necesarias alrededor de esa prioridad. Menos capas, menos tácticas aisladas y más claridad sobre qué mover y por qué.",
  },
  socialLinks: {
    linkedin: "[LINKEDIN_URL]",
    instagram: "[INSTAGRAM_URL]",
  },
  navigation: [
    { label: "Sistema", href: "#sistema" },
    { label: "Para quién", href: "#para-quien" },
    { label: "Sobre DBN", href: "#sobre-dbn" },
  ],
  hero: {
    eyebrow: "GROWTH PARTNER PARA E‑COMMERCE DE WELLNESS, FITNESS Y NUTRICIÓN DEPORTIVA",
    title: "Convierte el crecimiento de tu marca en un sistema.",
    emphasis: "No en una colección de tácticas.",
    description:
      "DBN Growth trabaja como Growth Partner para identificar qué limita el crecimiento y conectar oferta, adquisición, creatividad, conversión y retención alrededor de esa prioridad.",
    secondaryCta: "Ver cómo funciona",
    note: "Sin fórmulas mágicas. Sin servicios aislados. Una prioridad a la vez.",
  },
  partnership: {
    title: "No sumamos otro proveedor.",
    emphasis: "Trabajamos como Growth Partner.",
    description:
      "La relación empieza por entender dónde está la marca, adónde quiere llegar y qué está frenando esa brecha. Después priorizamos una palanca y conectamos la ejecución alrededor de ella.",
    principles: ["Entender", "Priorizar", "Ejecutar"],
  },
  problems: [
    {
      number: "01",
      title: "Adquisición impredecible.",
      description: "La inversión sube, pero la entrada de nuevos clientes sigue dependiendo demasiado de campañas, promociones o momentos puntuales.",
    },
    {
      number: "02",
      title: "Una oferta que no convierte suficiente atención en acción.",
      description: "El tráfico llega, pero la propuesta, el mensaje o el recorrido no hacen suficientemente clara la razón para elegir y comprar.",
    },
    {
      number: "03",
      title: "Creativos que se agotan.",
      description: "Lo que captaba atención deja de producir respuesta y el sistema pierde impulso.",
    },
    {
      number: "04",
      title: "Un sistema fragmentado.",
      description: "Oferta, funnel, paid media, conversión, email y retención avanzan como piezas separadas en lugar de aprender unas de otras.",
    },
  ],
  growthSystem: ["Strategy", "Acquisition", "Conversion", "Revenue", "Optimization"],
  capabilities: ["Strategy", "Offer", "Funnels", "Creative", "Paid Acquisition", "Email & Retention"],
  // Añadir únicamente marcas verificadas y sus assets locales en public/.
  trustedBrands: [] as TrustedBrand[],
  audiences: [
    {
      title: "Producto validado.",
      description: "Ya existe una oferta real y señales de demanda. DBN no está planteado para buscar product-market fit desde cero.",
    },
    {
      title: "E-commerce con ventas reales.",
      description: "Ya existe tráfico, clientes y suficiente contexto para diagnosticar qué está limitando el siguiente tramo de crecimiento.",
    },
    {
      title: "Capacidad para ejecutar.",
      description: "Existe disposición para compartir contexto, tomar decisiones con datos e implementar cambios cuando la prioridad lo exige.",
    },
  ],
  process: [
    { number: "01", name: "Entender", description: "Situación actual, objetivo, números y fricciones." },
    { number: "02", name: "Priorizar", description: "Definir la restricción que merece atención primero." },
    { number: "03", name: "Ejecutar", description: "Conectar las capacidades necesarias alrededor de esa prioridad." },
    { number: "04", name: "Aprender", description: "Medir, extraer aprendizajes y decidir el siguiente movimiento." },
  ],
  faq: [
    {
      question: "¿Qué es exactamente un Growth Partner?",
      answer:
        "Es una forma de trabajar el crecimiento desde el negocio completo, no desde un único entregable. Se parte del contexto y de la restricción principal para decidir qué capacidades conviene conectar: oferta, funnel, creatividad, paid acquisition, conversión o retención.",
    },
    {
      question: "¿DBN Growth es una agencia?",
      answer:
        "No funciona como una agencia tradicional organizada alrededor de una lista fija de servicios. DBN se plantea como una relación de Growth Partner: primero se identifica la prioridad y después se activa la ejecución que esa prioridad necesita.",
    },
    {
      question: "¿Para qué tipo de marcas está pensado?",
      answer:
        "Para e-commerce de wellness, fitness y nutrición deportiva con producto validado, ventas reales y capacidad para implementar. El encaje es mayor cuando ya existe algo que escalar y suficiente contexto para tomar decisiones con datos.",
    },
    {
      question: "¿Qué pueden trabajar dentro del sistema?",
      answer:
        "Según la restricción: estrategia, oferta, funnels, creatividad, paid acquisition, conversión, email y retención. No todas las marcas necesitan mover todo al mismo tiempo.",
    },
    {
      question: "¿Qué ocurre en la primera llamada?",
      answer:
        "Es una conversación inicial para entender la situación actual, hacia dónde quiere ir la marca y qué parece estar frenando esa brecha. La idea es compartir contexto e identificar cómo —y si— DBN puede aportar valor. No obliga a contratar nada.",
    },
    {
      question: "¿Garantizan resultados?",
      answer:
        "No. El crecimiento depende de variables que ninguna persona controla por completo. DBN no utiliza promesas de ingresos ni resultados garantizados sin evidencia que las sostenga; el compromiso está en el diagnóstico, la priorización, la ejecución y el aprendizaje continuo.",
    },
  ],
  seo: {
    title: "DBN Growth — Growth Partner para E-commerce de Wellness, Fitness y Nutrición Deportiva",
    description:
      "DBN Growth trabaja como Growth Partner para marcas e-commerce de wellness, fitness y nutrición deportiva, conectando estrategia, oferta, adquisición, creatividad, conversión y retención alrededor de la prioridad que más limita el crecimiento.",
  },
} as const;

export type SiteConfig = typeof siteConfig;
