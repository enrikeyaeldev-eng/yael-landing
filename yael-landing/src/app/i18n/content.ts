export type Lang = 'es' | 'en';

export interface ServiceItem {
  num: string;
  kicker: string;
  sintoma: string;
  texto: string;
}

export interface StepItem {
  num: string;
  titulo: string;
  texto: string;
}

export interface LandingContent {
  brand: string;
  disponible: string;
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
  stackLine: string;
  copyright: string;
}

const EMAIL = 'enrikeyaeldev@gmail.com';

const ES: LandingContent = {
  brand: 'Yael cmp',
  disponible: 'Disponible medio tiempo',
  heroTitulo: 'Diseño apps y ayudo a tu empresa a tener presencia en la web',
  heroSub:
    'Trabajo con negocios que ya existen pero no se ven en internet, o que tienen un sitio que ya se siente viejo. Escríbeme y te digo qué se puede hacer.',
  heroVisualAlt: 'Ilustración de una nutria con suéter de cuello alto trabajando en su computadora',
  cta: 'Escríbeme un correo',
  serviciosKicker: 'Servicios',
  serviciosTitulo: 'En qué te ayudo',
  servicios: [
    {
      num: '01.',
      kicker: 'Rediseño',
      sintoma: 'Tu sitio se ve bien en compu pero mal en celular',
      texto:
        'Lo rehago para que se lea igual de bien en un teléfono, cargue rápido y se vea actual, sin cambiar lo que ya funciona de tu negocio.',
    },
    {
      num: '02.',
      kicker: 'Sitio nuevo',
      sintoma: 'No tienes sitio y hoy todo se busca en Google',
      texto:
        'Armo el sitio desde cero: qué secciones necesitas, los textos ordenados y el sitio publicado a tu nombre y tu dominio.',
    },
    {
      num: '03.',
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
      texto: 'Dos opciones con precio y tiempo fijos. Tú eliges una; no hay costos que aparezcan después.',
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
  stackLine: '.NET · C# · Angular · TypeScript · WordPress',
  copyright: '© 2026 Yael cmp · México',
};

const EN: LandingContent = {
  brand: 'Yael cmp',
  disponible: 'Available half time',
  heroTitulo: 'I design apps and help your company have a web presence',
  heroSub:
    "I work with businesses that already exist but can't be found online, or that have a site which already feels old. Write to me and I'll tell you what can be done.",
  heroVisualAlt: 'Illustration of an otter in a turtleneck working at a computer',
  cta: 'Send me an email',
  serviciosKicker: 'Services',
  serviciosTitulo: 'How I can help',
  servicios: [
    {
      num: '01.',
      kicker: 'Redesign',
      sintoma: 'Your site looks fine on a computer and bad on a phone',
      texto:
        'I rebuild it so it reads just as well on a phone, loads fast and looks current, without changing what already works for your business.',
    },
    {
      num: '02.',
      kicker: 'New site',
      sintoma: 'You have no site, and today everything gets searched on Google',
      texto:
        'I build the site from scratch: which sections you need, the copy in order, and the site published under your name and your domain.',
    },
    {
      num: '03.',
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
  contactoTexto: "Send me your site's address or tell me what you need. I'll reply with a diagnosis in plain words, at no cost.",
  contactoEmail: EMAIL,
  stackLine: '.NET · C# · Angular · TypeScript · WordPress',
  copyright: '© 2026 Yael cmp · México',
};

export const CONTENT: Record<Lang, LandingContent> = { es: ES, en: EN };

export const CONTACT_EMAIL = EMAIL;
export const MAILTO_HREF = `mailto:${EMAIL}`;
