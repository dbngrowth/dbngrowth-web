# PROMPT FINAL PARA CODEX — DBN GROWTH

Trabaja SOBRE ESTE PROYECTO ACTUAL. No lo reconstruyas y no reviertas el rediseño ya implementado.

## Objetivo

Cerrar la web de DBN Growth a nivel de producción mediante una última pasada de QA visual + técnico. La estrategia, copy, identidad y arquitectura actuales son la fuente de verdad.

DBN Growth debe sentirse como un Growth Partner premium para e-commerce de wellness, fitness y nutrición deportiva; no como agencia genérica, SaaS, freelancer o consultora tradicional.

## Antes de tocar código

1. Lee `AGENTS.md`, `README.md`, `config/site.ts` y este archivo.
2. Revisa la estructura actual y cualquier `git diff` disponible.
3. Instala dependencias con pnpm.
4. Como el proyecto usa Next.js 16.3.5, consulta la documentación local de Next en `node_modules/next/dist/docs/` antes de modificar APIs o convenciones de framework.
5. Usa el código actual como fuente de verdad.

## NO hacer

- No reconstruir desde cero.
- No eliminar `app/final-polish.css`; contiene la pasada final de dirección de arte y se importa después de los estilos base.
- No inventar clientes, testimonios, métricas, resultados, credenciales, experiencia, dirección, dominio, correo, Calendly ni redes.
- No crear datos para placeholders como `[OFFICIAL_EMAIL]`, `[DOMAIN]`, `[CALENDLY_URL]`, `[LINKEDIN_URL]` o `[INSTAGRAM_URL]`.
- No añadir dashboards falsos, stock cliché, vídeo, partículas ni estética SaaS.
- No añadir librerías pesadas para decoración.
- No cambiar la geometría/proporciones/colores oficiales de los logos.
- No hacer la página más larga ni más vacía.
- No sobreexplicar el proceso.

## Estado de diseño que debes preservar

La versión actual ya incluye:

- Hero editorial oscuro con el emblema DBN como pieza visual principal.
- Mensaje central: "Tu marca no necesita otra agencia. Necesita un sistema para crecer."
- Especialización visible: wellness, fitness y nutrición deportiva.
- Manifiesto compacto: proveedor vs partner.
- Problemas de crecimiento tratados en formato editorial.
- DBN Growth System simplificado y menos tecnológico.
- Capacidades: Strategy, Offer, Funnels, Creative, Paid Acquisition, Retention.
- Sección "Para quién" enfocada en producto validado, e-commerce con ventas y founder/equipo con ambición de crecer.
- Foto real y nombre "Diego Boscán" integrados en Sobre DBN, sin presentarlo como founder si no corresponde.
- Proceso compacto de cuatro pasos: Entender, Priorizar, Ejecutar, Mejorar.
- FAQ accesible.
- CTA final y formulario secundario de menor fricción.
- Footer dark.
- Nueva imagen Open Graph coherente con el posicionamiento.
- SEO, sitemap, robots, analytics, formulario, Resend y fallback de Calendly preservados.
- Páginas legales sin placeholders visibles.

## Tu trabajo

### 1. Ejecuta la web y haz QA visual real

Revisa la home completa en:

- 1440px
- 1280px
- 1024px
- 768px
- 430px
- 390px
- 360px

Haz una pasada completa de arriba a abajo. Busca y corrige únicamente problemas reales:

- overflow horizontal;
- saltos de layout;
- textos cortados;
- elementos absolutos fuera de posición;
- logo o emblema demasiado grande/pequeño;
- espacios verticales accidentales;
- secciones que se sientan vacías;
- tipografía demasiado grande en ciertos breakpoints;
- líneas/nodos desalineados;
- foto de Diego mal recortada;
- hover o motion que mueva el layout;
- navbar móvil;
- FAQ;
- formulario;
- footer.

No hagas cambios por gusto si la sección ya funciona.

### 2. Revisa el hero con especial atención

Debe verse premium y terminado, no como wireframe.

- copy legible y protagonista;
- visual del emblema presente pero sin tapar contenido;
- buena composición en desktop/tablet/mobile;
- motion casi imperceptible;
- ningún espacio oscuro accidental;
- CTAs claros.

### 3. Revisa el DBN Growth System

Debe sentirse como una metodología propia, no como dashboard ni gráfico SaaS.

Asegura que las cinco capas se entiendan:

Strategy → Acquisition → Conversion → Revenue → Optimization

Sin añadir explicaciones extensas.

### 4. Revisa Sobre DBN

Debe mostrar correctamente:

- Diego Boscán
- Growth Partner · DBN Growth
- `public/brand/diego-boscan.jpg`

La foto debe verse profesional y bien recortada en todos los breakpoints. No inventes bio adicional ni credenciales.

### 5. Mantén los placeholders no visibles

La web debe funcionar elegantemente aunque aún falten:

- dominio;
- email;
- Calendly;
- LinkedIn;
- Instagram.

Si Calendly no está configurado, el CTA debe continuar usando el fallback al formulario. Si email/redes no están configurados, no deben aparecer enlaces rotos.

### 6. Accesibilidad y reduced motion

Comprueba:

- navegación por teclado;
- `focus-visible`;
- contraste;
- headings en orden razonable;
- acordeón accesible;
- botones vs enlaces;
- `prefers-reduced-motion`;
- imágenes con alt apropiado.

### 7. SEO y técnico

Preserva y verifica:

- metadata;
- Open Graph;
- canonical;
- schema JSON-LD;
- sitemap;
- robots;
- `NEXT_PUBLIC_SITE_URL` y fallback Vercel/local;
- GA4;
- analytics events;
- Resend;
- honeypot;
- validación servidor/cliente;
- no exposición de secretos.

## Validación obligatoria

Ejecuta REALMENTE:

```bash
pnpm lint
pnpm build
```

Corrige cualquier error o warning que corresponda al proyecto. No digas que pasaron si no los ejecutaste.

Después, vuelve a abrir la web y realiza una segunda pasada visual rápida en desktop y mobile para comprobar que las correcciones técnicas no alteraron el diseño.

## Entrega final

Reporta de forma breve:

1. Archivos modificados.
2. Bugs visuales corregidos.
3. Bugs responsive corregidos.
4. Cualquier ajuste de accesibilidad/performance.
5. Resultado real de `pnpm lint`.
6. Resultado real de `pnpm build`.
7. Datos externos todavía pendientes del propietario (sin inventarlos).

No me hagas preguntas estéticas menores. Toma decisiones conservadoras. La prioridad es TERMINAR y VALIDAR, no volver a rediseñar.
