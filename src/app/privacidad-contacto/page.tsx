import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de privacidad | Bavaria Motors",
  description:
    "Política de privacidad de Bavaria Motors para canales de contacto y captación digital.",
};

const policySections = [
  {
    title: "1. Responsable del tratamiento",
    content: [
      "En cumplimiento de la normativa vigente en materia de protección de datos personales, se informa de que el responsable del tratamiento de los datos facilitados a través de los canales digitales de contacto es:",
      "Bavaria Motors Augsburg, S.L.\nC/ Tuéjar, 41\n46183 La Eliana (Valencia)\nCorreo electrónico: info@bavariamotors.net",
    ],
  },
  {
    title: "2. Finalidad del tratamiento",
    content: [
      "Los datos personales facilitados por el usuario serán tratados con las siguientes finalidades:",
      "Gestionar solicitudes de información sobre vehículos, servicios o disponibilidad.\nContactar con el usuario para responder a consultas comerciales.\nGestionar solicitudes de búsqueda personalizada de vehículos.\nGestionar solicitudes de cita comercial o atención personalizada.\nRealizar seguimiento comercial relacionado con la solicitud efectuada.\nGestionar comunicaciones posteriores por teléfono, correo electrónico o mensajería digital cuando proceda.",
    ],
  },
  {
    title: "3. Datos tratados",
    content: [
      "Podrán tratarse, entre otros:",
      "Nombre y apellidos\nTeléfono\nCorreo electrónico\nPreferencias comerciales\nInformación facilitada voluntariamente por el usuario en formularios o conversaciones\nDatos de interacción con los canales digitales de contacto",
      "Bavaria Motors no solicita datos especialmente protegidos salvo que resulte estrictamente necesario y conforme a la normativa aplicable.",
    ],
  },
  {
    title: "4. Base jurídica",
    content: [
      "La base legal para el tratamiento de los datos es:",
      "el consentimiento otorgado por el usuario al enviar formularios o solicitar contacto;\nla ejecución de actuaciones precontractuales solicitadas por el interesado;\nel interés legítimo en la gestión y mejora del servicio comercial cuando resulte aplicable.",
    ],
  },
  {
    title: "5. Canales de recogida",
    content: [
      "Los datos podrán recogerse mediante:",
      "formularios web de contacto;\nformularios de solicitud de llamada;\nformularios de reserva de cita;\nformularios de búsqueda personalizada;\ncontacto telefónico;\nWhatsApp u otros canales de mensajería;\nsistemas digitales de atención comercial.",
    ],
  },
  {
    title: "6. Atención automatizada y herramientas tecnológicas",
    content: [
      "Con el objetivo de agilizar la atención comercial y mejorar la experiencia del usuario, determinadas solicitudes podrán gestionarse inicialmente mediante sistemas automatizados de atención conversacional o herramientas tecnológicas de automatización comercial.",
      "Estas herramientas podrán asistir en:",
      "recepción de solicitudes;\nclasificación de consultas;\nasignación de leads;\nprogramación de contactos;\nseguimiento comercial inicial.",
      "Las decisiones comerciales finales relevantes serán supervisadas por personal humano.",
    ],
  },
  {
    title: "7. Destinatarios y proveedores tecnológicos",
    content: [
      "Para la correcta prestación del servicio, Bavaria Motors podrá utilizar proveedores tecnológicos que actúen como encargados del tratamiento, incluyendo servicios de:",
      "gestión CRM;\nautomatización comercial;\nalojamiento cloud;\ncomunicaciones telefónicas;\nmensajería digital;\ninteligencia artificial aplicada a atención comercial.",
      "Estos proveedores tratarán los datos únicamente siguiendo instrucciones del responsable y bajo las garantías legales aplicables.",
    ],
  },
  {
    title: "8. Conservación",
    content: [
      "Los datos se conservarán durante el tiempo necesario para gestionar la solicitud realizada y, posteriormente, durante los plazos legalmente exigibles o mientras exista una relación comercial o interés legítimo aplicable.",
    ],
  },
  {
    title: "9. Derechos",
    content: [
      "El usuario puede ejercer sus derechos de:",
      "acceso\nrectificación\nsupresión\noposición\nlimitación del tratamiento\nportabilidad",
      "mediante solicitud dirigida a:",
      "info@bavariamotors.net",
      "indicando en el asunto:",
      "PROTECCIÓN DE DATOS",
      "Asimismo, podrá presentar reclamación ante la Agencia Española de Protección de Datos.",
    ],
  },
  {
    title: "10. Seguridad",
    content: [
      "Bavaria Motors adopta medidas técnicas y organizativas razonables para proteger los datos personales frente a accesos no autorizados, pérdida, alteración o tratamiento indebido.",
    ],
  },
  {
    title: "11. Modificaciones",
    content: [
      "La presente política podrá actualizarse para adaptarse a cambios normativos, técnicos o de servicio.",
    ],
  },
];

export default function PrivacyContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070b12] text-slate-50">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#15345d]/40 bg-[#060b13]/88 backdrop-blur-xl">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8"
          aria-label="Navegación principal"
        >
          <Link className="group flex items-center gap-3" href="/" aria-label="Inicio de Bavaria Motors">
            <span className="logo-shell relative flex h-14 w-[220px] items-center overflow-hidden rounded-md border border-white/10 bg-[#07101f] px-3 shadow-lg shadow-black/20 transition duration-300 sm:h-[4.5rem] sm:w-[320px] lg:w-[340px]">
              <Image
                src="/bavaria-motors-logo-primary.png"
                alt="Bavaria Motors"
                width={2048}
                height={819}
                priority
                className="h-[156%] w-[156%] max-w-none object-contain"
              />
            </span>
            <span className="hidden border-l border-white/12 pl-3 text-xs leading-5 text-slate-400 lg:block">
              Premium Selection
              <br />
              Valencia
            </span>
          </Link>
          <Link
            href="/#contacto"
            className="conversation-cta rounded-full bg-[#0e63d8] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#07101f] focus:outline-none focus:ring-2 focus:ring-[#6aa8ff] focus:ring-offset-2 focus:ring-offset-[#070b12]"
          >
            Contacto
          </Link>
        </nav>
      </header>

      <section className="relative isolate px-5 pb-24 pt-36 sm:px-8 sm:pt-44">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(10,19,33,0.98)_0%,#070b12_48%,#09101b_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_50%_0%,rgba(14,99,216,0.18),transparent_58%)]" />
        <div className="hero-light-sweep absolute inset-x-0 top-0 -z-10 h-[34rem] opacity-25" />

        <div className="mx-auto max-w-4xl">
          <div className="border-b border-white/10 pb-10 text-center">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-[#7db5ff]">
              Bavaria Motors
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-normal text-white sm:text-6xl">
              Privacidad y tratamiento de datos
            </h1>
          </div>

          <div className="mt-8 rounded-lg border border-white/10 bg-white/[0.045] shadow-2xl shadow-black/25">
            {policySections.map((section) => (
              <section
                key={section.title}
                className="border-b border-white/10 px-5 py-8 last:border-b-0 sm:px-8 sm:py-10"
              >
                <h2 className="text-2xl font-semibold leading-tight text-white">
                  {section.title}
                </h2>
                <div className="mt-5 space-y-5 text-base leading-8 text-slate-300 sm:text-lg">
                  {section.content.map((paragraph) => (
                    <p key={paragraph} className="whitespace-pre-line">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-5 py-8 text-sm text-slate-400 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>Bavaria Motors</p>
          <div className="flex flex-wrap gap-5">
            <Link className="hover:text-white" href="/#stock">
              Stock
            </Link>
            <Link className="hover:text-white" href="/#catalogo">
              Catálogo
            </Link>
            <Link className="hover:text-white" href="/#busqueda">
              Búsqueda personalizada
            </Link>
            <Link className="hover:text-white" href="/#financiacion">
              Servicios
            </Link>
            <Link className="hover:text-white" href="/#contacto">
              Cita
            </Link>
            <Link className="text-white" href="/privacidad-contacto">
              Política de privacidad
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
