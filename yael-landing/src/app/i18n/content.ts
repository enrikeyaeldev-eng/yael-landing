export type Lang = 'es' | 'en';

export const LANGS: readonly Lang[] = ['es', 'en'];

/**
 * Absolute origin of the production site, no trailing slash.
 * Used for canonical, og:url and hreflang. Update this when a custom
 * domain is attached in Vercel — it is the only place the host is written.
 */
export const SITE_URL = 'https://yael-landing.vercel.app';

/** Path each language is prerendered at. Spanish is the root. */
export const LANG_PATH: Record<Lang, string> = { es: '/', en: '/en' };

export interface ServiceItem {
  /** Short category label — leads the card. */
  kicker: string;
  /** The symptom, in the visitor's own words. */
  sintoma: string;
  texto: string;
}

export interface StepItem {
  num: string;
  titulo: string;
  texto: string;
}

export interface LandingContent {
  htmlLang: string;
  metaTitle: string;
  metaDescription: string;

  brand: string;
  disponible: string;
  langLabel: string;
  skipToContent: string;

  heroTitulo: string;
  heroSub: string;
  heroVisualAlt: string;
  cta: string;

  serviciosKicker: string;
  serviciosTitulo: string;
  servicios: ServiceItem[];

  pasosTitulo: string;
  pasos: StepItem[];

  sobreTitulo: string;
  sobreTexto: string;
  aboutVisualAlt: string;

  contactoKicker: string;
  contactoTitulo: string;
  contactoTexto: string;
  contactoEmail: string;
  whatsappCta: string;
  whatsappNumero: string;

  stackLine: string;
  copyright: string;
}

const EMAIL = 'enrikeyaeldev@gmail.com';
/** E.164 without the leading "+" — the format wa.me expects. */
const WHATSAPP_E164 = '524611913583';
const WHATSAPP_DISPLAY = '+52 461 191 3583';

const ES: LandingContent = {
  htmlLang: 'es',
  metaTitle: 'Yael cmp — Diseño de sitios y apps para negocios en México',
  metaDescription:
    'Desarrollador web medio tiempo en México. Rediseño sitios que se ven mal en celular, armo sitios nuevos desde cero y conecto tu sitio con los sistemas que ya usas. Diagnóstico sin costo.',

  brand: 'Yael cmp',
  disponible: 'Disponible medio tiempo',
  langLabel: 'Idioma',
  skipToContent: 'Saltar al contenido',

  heroTitulo: 'Diseño apps y ayudo a tu empresa a tener presencia en la web',
  heroSub:
    'Trabajo con negocios que ya existen pero no se ven en internet, o que tienen un sitio que ya se siente viejo. Escríbeme y te digo qué se puede hacer.',
  heroVisualAlt: 'Ilustración de una nutria con suéter de cuello alto trabajando en su computadora',
  cta: 'Escríbeme un correo',

  serviciosKicker: 'Servicios',
  serviciosTitulo: '¿Cuál de estas te suena?',
  servicios: [
    {
      kicker: 'Rediseño',
      sintoma: 'Tu sitio se ve bien en compu pero mal en celular',
      texto:
        'Lo rehago para que se lea igual de bien en un teléfono, cargue rápido y se vea actual, sin cambiar lo que ya funciona de tu negocio.',
    },
    {
      kicker: 'Sitio nuevo',
      sintoma: 'No tienes sitio y hoy todo se busca en Google',
      texto:
        'Armo el sitio desde cero: qué secciones necesitas, los textos ordenados y el sitio publicado a tu nombre y tu dominio.',
    },
    {
      kicker: 'Sistemas',
      sintoma: 'Tu sitio y tus sistemas no se hablan entre sí',
      texto:
        'Conecto tu sitio con lo que ya usas — inventario, pagos, correo, hojas de cálculo — con backend en .NET y C#.',
    },
  ],

  pasosTitulo: 'Cómo trabajo',
  pasos: [
    {
      num: '1',
      titulo: 'Diagnóstico',
      texto: 'Reviso tu sitio y te digo en palabras claras qué está mal y qué tanto importa.',
    },
    {
      num: '2',
      titulo: 'Propuesta cerrada',
      texto:
        'Dos opciones con precio y tiempo fijos. Tú eliges una; no hay costos que aparezcan después.',
    },
    {
      num: '3',
      titulo: 'Entrega y capacitación',
      texto: 'Te lo entrego funcionando y te enseño a moverle sin miedo a romperlo.',
    },
  ],

  sobreTitulo: 'Sobre mí',
  sobreTexto:
    'Hablo inglés y puedo trabajar internacionalmente; vivo en México. Esto lo hago medio tiempo, así que tomo pocos proyectos a la vez y cada uno lleva atención real. Me encanta aprender cosas nuevas.',
  aboutVisualAlt: 'Ilustración de una nutria con suéter de cuello alto hablando por teléfono',

  contactoKicker: 'Hablemos',
  contactoTitulo: '¿Quieres saber qué le pasa a tu sitio?',
  contactoTexto:
    'Mándame la dirección de tu sitio o cuéntame qué necesitas. Te contesto con un diagnóstico en claro, sin costo.',
  contactoEmail: EMAIL,
  whatsappCta: 'Mándame un WhatsApp',
  whatsappNumero: WHATSAPP_DISPLAY,

  stackLine: '.NET · C# · Angular · TypeScript · WordPress',
  copyright: '© 2026 Yael cmp · México',
};

const EN: LandingContent = {
  htmlLang: 'en',
  metaTitle: 'Yael cmp — Websites and apps for small businesses',
  metaDescription:
    'Half-time web developer based in Mexico. I rebuild sites that look bad on phones, build new sites from scratch, and connect your site to the systems you already use. Free diagnosis.',

  brand: 'Yael cmp',
  disponible: 'Available half time',
  langLabel: 'Language',
  skipToContent: 'Skip to content',

  heroTitulo: 'I design apps and help your company have a web presence',
  heroSub:
    "I work with businesses that already exist but can't be found online, or that have a site which already feels old. Write to me and I'll tell you what can be done.",
  heroVisualAlt: 'Illustration of an otter in a turtleneck working at a computer',
  cta: 'Send me an email',

  serviciosKicker: 'Services',
  serviciosTitulo: 'Which of these sounds like you?',
  servicios: [
    {
      kicker: 'Redesign',
      sintoma: 'Your site looks fine on a computer and bad on a phone',
      texto:
        'I rebuild it so it reads just as well on a phone, loads fast and looks current, without changing what already works for your business.',
    },
    {
      kicker: 'New site',
      sintoma: 'You have no site, and today everything gets searched on Google',
      texto:
        'I build the site from scratch: which sections you need, the copy in order, and the site published under your name and your domain.',
    },
    {
      kicker: 'Systems',
      sintoma: "Your site and your systems don't talk to each other",
      texto:
        'I connect your site to what you already use — inventory, payments, email, spreadsheets — with a .NET and C# backend.',
    },
  ],

  pasosTitulo: 'How I work',
  pasos: [
    {
      num: '1',
      titulo: 'Diagnosis',
      texto: "I review your site and tell you in plain words what's wrong and how much it matters.",
    },
    {
      num: '2',
      titulo: 'Fixed proposal',
      texto: 'Two options with fixed price and timeline. You pick one; no costs show up later.',
    },
    {
      num: '3',
      titulo: 'Delivery and training',
      texto: 'I hand it over working and teach you to edit it without fear of breaking it.',
    },
  ],

  sobreTitulo: 'About me',
  sobreTexto:
    'I speak English and can work internationally; I live in Mexico. This is half time, so I take few projects at once and each one gets real attention. I love learning new things.',
  aboutVisualAlt: 'Illustration of an otter in a turtleneck talking on the phone',

  contactoKicker: "Let's talk",
  contactoTitulo: "Want to know what's wrong with your site?",
  contactoTexto:
    "Send me your site's address or tell me what you need. I'll reply with a diagnosis in plain words, at no cost.",
  contactoEmail: EMAIL,
  whatsappCta: 'Message me on WhatsApp',
  whatsappNumero: WHATSAPP_DISPLAY,

  stackLine: '.NET · C# · Angular · TypeScript · WordPress',
  copyright: '© 2026 Yael cmp · México',
};

export const CONTENT: Record<Lang, LandingContent> = { es: ES, en: EN };

export const CONTACT_EMAIL = EMAIL;
export const MAILTO_HREF = `mailto:${EMAIL}`;
export const WHATSAPP_HREF = `https://wa.me/${WHATSAPP_E164}`;
