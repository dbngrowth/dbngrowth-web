TAREA: QA FINAL Y REMATE DE DBN GROWTH — VERSIÓN ALINEADA CON LA FORMACIÓN

Trabaja SOBRE EL ZIP ADJUNTO. Es la versión actual de DBN Growth y es la fuente de verdad.

NO reconstruyas el sitio.
NO rediseñes la home.
NO cambies la dirección de arte salvo para corregir un bug real.
NO vuelvas a una versión anterior.

Antes de tocar nada:
1. Lee `AGENTS.md`.
2. Lee `README.md`.
3. Lee `COURSE_COPY_ALIGNMENT.md`.
4. Revisa `config/site.ts`.
5. Revisa `reference/course-landing-reference.png` únicamente como referencia de intención comercial y contenido, NO como layout a copiar.
6. Ejecuta `git status` y `git diff` si el repositorio conserva historial.

CONTEXTO IMPORTANTE

El copy de esta entrega ya fue reescrito para acercarse a los principios del curso de Growth Partner del usuario:
- especialización clara;
- Growth Partner frente a agencia/freelancer;
- crecimiento como sistema;
- entender situación actual, objetivo y restricción;
- priorizar antes de ejecutar;
- primera llamada como conversación exploratoria y sin compromiso;
- CTA principal hacia la llamada;
- cero claims inventados.

La imagen de referencia del curso tiene hero, video, Calendly, social proof y about. NO debes copiar esa estructura. El usuario ya decidió conservar la arquitectura actual de DBN, no usar video y no dejar que Calendly domine la home.

OBJETIVO

Tu función ahora es únicamente:
A. confirmar que el copy nuevo está integrado correctamente;
B. comprobar que no introdujo problemas de layout;
C. corregir fallos técnicos o responsive;
D. ejecutar lint y build de verdad;
E. dejar el proyecto listo para Vercel Preview.

NO CAMBIAR

- Nombre visible: Diego Boscán.
- Rol: Growth Partner · DBN Growth.
- Foto actual.
- Nicho: e-commerce de wellness, fitness y nutrición deportiva.
- Posicionamiento: Growth Partner, no agencia tradicional.
- Ausencia de testimonios/clientes/métricas inventadas.
- Sin video.
- Calendly como CTA externo cuando exista; formulario como fallback.
- SEO, sitemap, robots, analytics, Resend, accesibilidad y reduced motion.
- Identidad visual y assets oficiales de DBN.

REVISIÓN DE COPY

No reescribas el copy por gusto. Solo corrige si encuentras:
- una contradicción;
- una promesa que no pueda sostenerse;
- una frase confusa;
- un error gramatical;
- un término inconsistente con el posicionamiento.

En particular, confirma que la home comunica de forma clara:
1. Para quién es DBN.
2. Qué significa trabajar como Growth Partner.
3. Que no se vende una lista fija de servicios.
4. Que se identifica una prioridad/restricción antes de ejecutar.
5. Qué capacidades puede conectar DBN.
6. Para qué tipo de marca tiene sentido.
7. Qué ocurre en la primera llamada.
8. Que no se garantizan resultados.
9. Que el siguiente paso principal es agendar una llamada.

RESPONSIVE

Revisa al menos:
- 1440
- 1280
- 1024
- 768
- 430
- 390
- 360

Busca específicamente:
- headings demasiado grandes;
- saltos de línea malos;
- cards/paneles demasiado altos;
- overflow horizontal;
- hero visual fuera de posición;
- Growth System roto;
- foto de Diego mal recortada;
- FAQ demasiado larga o abierta con layout roto;
- CTA y formulario con spacing excesivo;
- navbar móvil;
- footer.

Si encuentras un problema, corrígelo con el cambio mínimo posible. NO hagas una nueva dirección visual.

ACCESIBILIDAD

Confirma:
- navegación por teclado;
- focus visible;
- contraste;
- accordion accesible;
- prefers-reduced-motion;
- semantic HTML;
- enlaces y botones correctos.

TÉCNICO

Este proyecto usa Next.js 16.3.5, React 19 y TypeScript. Sigue `AGENTS.md` y consulta la documentación local en `node_modules/next/dist/docs/` cuando sea necesario.

Ejecuta REALMENTE:

pnpm install
pnpm lint
pnpm build

Si `pnpm install` ya no es necesario porque existen dependencias, no reinstales sin razón.

Corrige todos los errores reales de lint/build que aparezcan.
NO afirmes que los comandos pasaron si no los ejecutaste.

NO INVENTAR

No inventes:
- clientes;
- testimonios;
- resultados;
- métricas;
- años de experiencia;
- certificaciones;
- dominio;
- email oficial;
- Calendly;
- URLs sociales.

Los placeholders técnicos pendientes pueden mantenerse si el código los oculta/fallback correctamente.

SALIDA FINAL

Cuando termines, responde brevemente con:
1. archivos modificados;
2. bugs visuales/técnicos corregidos;
3. si cambiaste copy y por qué;
4. resultado REAL de `pnpm lint`;
5. resultado REAL de `pnpm build`;
6. cualquier dato externo todavía pendiente para publicar en Vercel.

NO HAGAS OTRA ITERACIÓN CREATIVA.
ESTO ES QA FINAL Y REMATE TÉCNICO.
