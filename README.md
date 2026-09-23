# Sitio oficial de DBN Growth

Sitio de DBN Growth, Growth Partner para e-commerce de wellness & fitness. La home presenta una relación de partnership y el DBN Growth System: Strategy → Acquisition → Conversion → Revenue → Optimization. Está desarrollada sobre el proyecto existente con Next.js, TypeScript, Tailwind CSS, Framer Motion y Lucide, y preparada para Vercel, Supabase, Resend, Calendly y Google Analytics 4.

La conversión principal es **Agenda una llamada**. El copy final toma como referencia los principios del material de formación aportado por el usuario —especialización, Growth Partner frente a agencia/freelancer, proceso claro y llamada de demo como siguiente paso— sin copiar promesas de ingresos, garantías ni claims sin evidencia. El formulario se conserva como vía secundaria para compartir contexto antes de agendar. No se añaden dependencias, testimonios ni clientes ficticios.

## 1. Abrir el sitio en tu computadora

Necesitas Node.js 20 o superior y pnpm.

```bash
pnpm install
pnpm dev
```

Abre `http://localhost:3000`. Para detenerlo, vuelve a la terminal y presiona `Ctrl + C`.

## 2. Dónde cambiar textos y datos

La mayoría de la información modificable está en `config/site.ts`:

- navegación y copy principal del hero;
- problemas;
- etapas públicas del sistema y capacidades;
- audiencias y proceso resumido;
- FAQ;
- datos del fundador;
- marcas verificadas (`trustedBrands`, vacío por defecto);
- email, redes y Calendly;
- título y descripción SEO.

Los textos estructurales de cada sección están en `components/sections/`. Usa la búsqueda del editor si quieres localizar una frase exacta.

## 3. Completar los datos pendientes

En `config/site.ts`, los datos visibles de Diego Boscán y su foto ya están configurados. Sigue pendiente sustituir:

- `[DOMAIN]` por el dominio final;
- `[LINKEDIN_URL]` y `[INSTAGRAM_URL]` por las URLs oficiales.

Las páginas legales no muestran placeholders públicos. Aun así, conviene revisarlas con asesoría jurídica antes del lanzamiento definitivo.

## 4. Cambiar la foto del fundador

La foto actual está en `public/brand/diego-boscan.jpg` y se referencia desde `config/site.ts`. Para reemplazarla en el futuro, conserva la misma ruta o actualiza `founder.photo`.

`components/sections/founder-section.tsx` usa `next/image` y mantiene la imagen responsive; no hace falta editar el componente para cambiar la foto.

## 5. Logos e identidad visual

Los archivos oficiales están en `public/brand/`. Consulta `public/brand/README.md` antes de reemplazarlos. Los colores, tipografía, espacios, radios y sombras están centralizados en `app/globals.css`; los estilos específicos de secciones están en `app/sections.css`.

Para activar social proof, agrega únicamente marcas verificadas al array `trustedBrands` de `config/site.ts`. Cada entrada usa `name` (nombre real), `logo` (ruta local, por ejemplo `/brands/archivo-real.svg`), `width` y `height` (dimensiones originales). Guarda sus assets en `public/brands/` con autorización para utilizarlos. `components/sections/trusted-brands-section.tsx` usa `next/image` y no renderiza ninguna sección mientras el array esté vacío. No se muestran placeholders de logos.

## 6. Configurar Calendly

1. Copia `.env.example` como `.env.local`.
2. Escribe la URL HTTPS pública de tu página real de Calendly:

```env
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/tu-cuenta/diagnostico
```

3. Reinicia `pnpm dev`; en producción, vuelve a ejecutar el build y desplegar, porque las variables `NEXT_PUBLIC_` se incorporan durante la compilación.

Los CTAs de navbar, hero, founder y cierre abren directamente esa URL en una pestaña nueva con `rel="noreferrer"`. No hay embed ni popup. Todos usan `components/ui/booking-link.tsx` y el destino se resuelve una sola vez por enlace mediante `lib/booking.ts`.

Si falta la variable, conserva `[CALENDLY_URL]` o contiene una URL inválida, con credenciales o un dominio de ejemplo, el destino es `#contacto`. El formulario sigue disponible. Tras enviarlo, aparece el mismo CTA si Calendly está configurado; si no, se muestra un texto limpio de agenda pendiente, sin un enlace roto.

Cada CTA registra `cta_click` y, cuando abre la agenda externa, también `calendly_click`, con `location` para distinguir navbar, hero, founder, cierre, menú móvil y confirmación del formulario.

## 7. Configurar el formulario, Supabase y Resend

El formulario guarda primero cada solicitud válida en `public.contact_submissions` mediante la REST API de Supabase y después envía la notificación por email con Resend. Completa en `.env.local`:

```env
SUPABASE_URL=https://tu-proyecto.supabase.co
SUPABASE_SECRET_KEY=tu_secret_key_del_servidor
RESEND_API_KEY=tu_clave_privada
CONTACT_TO_EMAIL=destino@tudominio.com
CONTACT_FROM_EMAIL=DBN Growth <contacto@tudominio.com>
```

`SUPABASE_SECRET_KEY` es exclusivamente server-side: no debe usar el prefijo `NEXT_PUBLIC_`, incluirse en componentes cliente ni exponerse al navegador. No pongas claves en `config/site.ts`. La ruta `app/api/contact/route.ts` inserta únicamente `name`, `email`, `company` y `message` en `contact_submissions`; después utiliza Resend con el email del prospecto como `replyTo`.

El formulario conserva normalización y validación en cliente/servidor, honeypot `companyWebsite`, respuesta neutra a bots, mensajes accesibles y estados de carga/error/éxito. En desarrollo local sin credenciales mantiene el modo de demostración. En producción, una configuración incompleta de Supabase devuelve un error y no simula que el lead fue almacenado. Si Supabase guarda el lead y el email falla, la solicitud se considera recibida para evitar envíos repetidos y filas duplicadas.

## 8. Configurar Google Analytics 4

Añade el ID de medición a `.env.local`:

```env
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

Si la variable está vacía, Analytics no se carga. Los eventos preparados son:

- `cta_click`;
- `diagnostic_form_start`;
- `diagnostic_form_submit`;
- `calendly_click`;
- `service_interaction`.

La implementación está en `components/analytics/google-analytics.tsx` y `lib/analytics.ts`.

## 9. Dominio, SEO y enlaces sociales

Antes del despliegue, configura:

```env
NEXT_PUBLIC_SITE_URL=https://tudominio.com
```

Esta variable alimenta canonical, sitemap, robots y datos estructurados. El sitio ya incluye metadata, Open Graph, Twitter, favicon, `Organization`, `ProfessionalService`, `sitemap.xml` y `robots.txt`.

## 10. Comprobar el proyecto

```bash
pnpm lint
pnpm build
```

Ambos comandos deben terminar sin errores antes de publicar.

## 11. Desplegar en Vercel

1. Sube el proyecto a un repositorio Git.
2. En Vercel, selecciona “Add New Project” e importa el repositorio.
3. Vercel detectará Next.js y pnpm automáticamente.
4. Copia todas las variables de `.env.local` a Project Settings → Environment Variables.
5. Haz el deploy.

No subas `.env.local` al repositorio.

## 12. Conectar el dominio

1. En Vercel abre el proyecto y entra a Settings → Domains.
2. Añade el dominio oficial.
3. Sigue las instrucciones DNS de Vercel en el proveedor del dominio.
4. Actualiza `NEXT_PUBLIC_SITE_URL` con la URL final y vuelve a desplegar.

## 13. Cambios futuros

- Edita contenido en `config/site.ts` siempre que sea posible.
- Mantén los componentes interactivos separados con `"use client"` para no aumentar JavaScript innecesariamente.
- Activa logos reales solo mediante `trustedBrands` y assets locales verificados. La home no muestra testimonios, clientes ni métricas inventadas.
- Fase 2 puede añadir `/insights`, CMS y panel administrativo sin cambiar la estructura principal.

Los snapshots de entrega anteriores se conservan como referencia histórica. La fuente de verdad del rediseño es el código actual y este README.

## 14. Estado del diseño final

La home ya incluye la pasada final de dirección de arte: hero más editorial y menos SaaS, uso reforzado del emblema DBN, sistema visual simplificado, secciones compactadas, capacidades alineadas con la metodología de Growth Partner, foto real de Diego Boscán, proceso en cuatro pasos, FAQ y formulario de menor fricción. Los overrides finales están en `app/final-polish.css`, importado después de los estilos anteriores para no romper la base existente.

Antes del lanzamiento público solo faltan datos que no deben inventarse: dominio, Calendly y URLs sociales. Después de completarlos, ejecuta obligatoriamente `pnpm lint` y `pnpm build`.
