import Image from "next/image";
import Link from "next/link";
import GhlCallModal from "./GhlCallModal";

const photos = {
  showroomExterior:
    "https://images.unsplash.com/photo-1760161116224-462f5249bc5f?auto=format&fit=crop&q=82&w=1800",
  showroomBmw:
    "https://images.unsplash.com/photo-1752883749124-e08ed9a79589?auto=format&fit=crop&q=82&w=1400",
  mercedesSuv:
    "https://images.unsplash.com/photo-1563721911289-ada2924d66f1?auto=format&fit=crop&q=82&w=1400",
  audiInterior:
    "https://images.unsplash.com/photo-1657779912132-be6f76df2b47?auto=format&fit=crop&q=82&w=1400",
  cupraFormentor: "/cupra-formentor.png",
  location: "/bavaria-location.jpg",
};

const vehicles = [
  {
    name: "BMW Serie 5 530e M Sport",
    type: "Berlina híbrida enchufable",
    price: "42.900 EUR",
    image: photos.showroomBmw,
    year: "2023",
    km: "18.400 km",
    tag: "Garantía incluida",
  },
  {
    name: "Mercedes-Benz GLC 300",
    type: "SUV premium familiar",
    price: "49.500 EUR",
    image: photos.mercedesSuv,
    year: "2022",
    km: "31.200 km",
    tag: "Entrega revisada",
  },
  {
    name: "Audi A6 Avant 45 TDI",
    type: "Familiar ejecutivo",
    price: "45.700 EUR",
    image: photos.audiInterior,
    year: "2024",
    km: "12.900 km",
    tag: "Financiación flexible",
  },
  {
    name: "CUPRA Formentor 2.0 TSI",
    type: "Crossover deportivo",
    price: "34.900 EUR",
    image: photos.cupraFormentor,
    year: "2022",
    km: "28.300 km",
    tag: "Entrada reciente",
  },
];

const catalogueVehicles = [
  ["BMW Serie 3 Touring", "Familiar", "2021", "56.900 km", "Disponible bajo cita"],
  ["Audi Q5 40 TDI", "SUV", "2022", "39.500 km", "Entrada reciente"],
  ["Mercedes-Benz Clase C", "Berlina", "2023", "22.800 km", "Financiable"],
  ["CUPRA Formentor", "Crossover", "2022", "28.300 km", "En revisión"],
  ["Audi A4 Avant", "Familiar", "2020", "71.000 km", "Historial completo"],
  ["BMW X1 sDrive18d", "SUV compacto", "2022", "34.200 km", "Próxima entrada"],
];

const benefits = [
  "Seleccionamos vehículos premium usados y seminuevos con historial claro.",
  "Atención cercana por WhatsApp, teléfono o cita presencial en Valencia.",
  "Te ayudamos a encontrar o importar el coche concreto que buscas.",
  "Financiación y entrega explicadas con transparencia, sin presión comercial.",
];

const searchSteps = [
  ["Definimos el encargo", "Modelo, presupuesto, kilometraje, motor y equipamiento deseado."],
  ["Buscamos opciones reales", "Stock propio, red nacional y unidades seleccionadas en Europa."],
  ["Te presentamos alternativas", "Comparamos historial, estado, precio y viabilidad de importación."],
];

const trustItems = [
  ["Valencia", "Atención local y trato directo"],
  ["Europa", "Búsqueda de vehículos seleccionados"],
  ["Seminuevos", "Historial y revisión antes de entrega"],
];

const services = [
  [
    "Vehículos revisados y garantizados",
    "Selección cuidada de vehículos premium revisados antes de entrega.",
  ],
  [
    "Financiación personalizada",
    "Opciones adaptadas a cada cliente y tipo de compra.",
  ],
  [
    "Búsqueda e importación",
    "Localización de unidades en España y Europa bajo encargo.",
  ],
  [
    "Atención cercana",
    "Seguimiento por WhatsApp, llamada o cita presencial en Valencia.",
  ],
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070b12] text-slate-50">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#15345d]/40 bg-[#060b13]/88 backdrop-blur-xl">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-3 sm:px-8"
          aria-label="Navegación principal"
        >
          <a href="#" className="group flex items-center gap-3" aria-label="Inicio de Bavaria Motors">
            <span className="logo-shell relative flex h-11 w-[166px] items-center overflow-hidden rounded-md border border-white/10 bg-[#07101f] px-2 shadow-lg shadow-black/20 transition duration-300 sm:h-[4.5rem] sm:w-[320px] sm:px-3 lg:w-[340px]">
              <Image
                src="/bavaria-motors-logo-primary.png"
                alt="Bavaria Motors"
                width={2048}
                height={819}
                priority
                className="h-full w-full max-w-none scale-[1.2] object-contain sm:h-[156%] sm:w-[156%] sm:scale-100"
              />
            </span>
            <span className="hidden border-l border-white/12 pl-3 text-xs leading-5 text-slate-400 lg:block">
              Premium Selection
              <br />
              Valencia
            </span>
          </a>
          <div className="hidden items-center gap-1 rounded-full border border-white/8 bg-white/[0.035] p-1 text-sm text-slate-300 md:flex">
            {[
              ["Stock", "#stock"],
              ["Catálogo", "#catalogo"],
              ["Búsqueda", "#busqueda"],
              ["Contacto", "#contacto"],
            ].map(([label, href]) => (
              <a key={href} className="nav-pill" href={href}>
                {label}
              </a>
            ))}
          </div>
          <a
            href="https://wa.me/34000000000"
            data-conversation-intent="whatsapp-contact"
            className="conversation-cta max-w-[142px] rounded-full bg-[#0e63d8] px-3 py-2 text-center text-[0.7rem] font-semibold leading-4 text-white shadow-lg shadow-blue-950/30 transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#07101f] focus:outline-none focus:ring-2 focus:ring-[#6aa8ff] focus:ring-offset-2 focus:ring-offset-[#070b12] sm:max-w-none sm:px-5 sm:text-sm sm:leading-normal"
          >
            Contáctanos por WhatsApp
          </a>
        </nav>
      </header>

      <section className="relative isolate min-h-screen px-4 pt-24 sm:px-8 sm:pt-28">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(10,19,33,0.98)_0%,#070b12_68%,#09101b_100%)]" />
        <div className="absolute inset-0 -z-10">
          <Image
            src={photos.showroomExterior}
            alt=""
            width={1800}
            height={1200}
            priority
            className="h-full w-full object-cover object-[72%_74%] opacity-58 sm:object-[center_72%]"
          />
        </div>
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,#070b12_0%,rgba(7,11,18,0.93)_34%,rgba(7,11,18,0.62)_70%,rgba(7,11,18,0.82)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,11,18,0.16)_0%,rgba(7,11,18,0.34)_55%,#070b12_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_36%,rgba(14,99,216,0.14),transparent_34%)]" />
        <div className="hero-light-sweep absolute inset-0 -z-10 opacity-35" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-[#070b12] to-transparent" />

        <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-10 py-10 sm:min-h-[calc(100vh-7rem)] sm:gap-12 sm:py-12 lg:grid-cols-[0.96fr_1.04fr]">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.16em] text-[#7db5ff] sm:mb-5 sm:text-sm sm:tracking-[0.24em]">
              Concesionario premium en Valencia
            </p>
            <h1 className="text-4xl font-semibold leading-[1.04] tracking-normal text-white sm:text-6xl lg:text-8xl">
              Tu próximo coche, con asesoramiento real.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:mt-6 sm:text-lg sm:leading-8">
              Compra vehículos premium usados y seminuevos en stock, o pídenos
              que localicemos por ti el modelo exacto en España o Europa.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <a
                href="#stock"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-white px-4 text-center text-sm font-semibold text-[#07101f] transition duration-300 hover:-translate-y-0.5 hover:bg-[#dcecff] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#070b12] sm:w-auto sm:px-6"
              >
                Ver vehículos disponibles
              </a>
              <a
                href="#busqueda"
                data-conversation-intent="personal-search"
                className="conversation-cta inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#0e63d8] px-4 text-center text-sm font-semibold text-white shadow-lg shadow-blue-950/35 transition duration-300 hover:-translate-y-0.5 hover:bg-[#247cff] focus:outline-none focus:ring-2 focus:ring-[#6aa8ff] focus:ring-offset-2 focus:ring-offset-[#070b12] sm:w-auto sm:px-6"
              >
                Buscar mi coche
              </a>
            </div>
            <dl className="mt-8 grid max-w-2xl grid-cols-1 gap-5 border-t border-white/10 pt-6 min-[390px]:grid-cols-3 sm:mt-10 sm:gap-4">
              {trustItems.map(([value, label]) => (
                <div key={label}>
                  <dt className="text-xl font-semibold text-white sm:text-2xl">{value}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.1em] text-slate-400 sm:tracking-[0.14em]">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative hidden min-h-[620px] lg:block" aria-label="Atención comercial Bavaria Motors">
            <div className="absolute bottom-10 right-0 max-w-sm rounded-lg border border-white/12 bg-[#07101f]/78 p-5 shadow-2xl shadow-black/40 backdrop-blur-md">
              <p className="text-sm font-semibold text-[#7db5ff]">Dos formas de comprar</p>
              <div className="mt-4 grid gap-3">
                <div className="rounded-md bg-white/8 p-4">
                  <p className="font-semibold text-white">Stock disponible</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    Coches seleccionados, revisados y listos para consultar.
                  </p>
                </div>
                <div className="rounded-md bg-white/8 p-4">
                  <p className="font-semibold text-white">Búsqueda personalizada</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">
                    Localizamos el vehículo que encaja con tu presupuesto.
                  </p>
                </div>
              </div>
              <p className="mt-4 border-t border-white/10 pt-4 text-sm leading-6 text-slate-300">
                Atención cercana, cita previa y seguimiento por WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="stock" className="relative px-4 py-20 sm:px-8 sm:py-32">
        <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_50%_0%,rgba(14,99,216,0.12),transparent_55%)]" />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#7db5ff] sm:text-sm sm:tracking-[0.24em]">
              Stock curado premium
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
              Vehículos seleccionados, presentados con calma.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-300">
              Una muestra visual del stock disponible y próximas entradas. Cada
              ficha está pensada para consultar disponibilidad de forma clara y
              directa.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 md:grid-cols-2 xl:grid-cols-4 xl:gap-7">
            {vehicles.map((vehicle) => (
              <article key={vehicle.name} className="stock-card group">
                <div className="relative h-24 overflow-hidden rounded-t-lg bg-slate-900 min-[390px]:h-28 sm:h-64">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.name}
                    width={900}
                    height={650}
                    className={`h-full w-full transition duration-700 group-hover:scale-[1.035] ${
                      vehicle.name.startsWith("CUPRA")
                        ? "object-cover object-center"
                        : "object-cover"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050913] via-transparent to-transparent" />
                  <span className="absolute left-2 top-2 rounded-full border border-white/15 bg-black/35 px-2 py-0.5 text-[0.56rem] font-medium leading-4 text-white backdrop-blur-md sm:left-4 sm:top-4 sm:px-3 sm:py-1 sm:text-xs">
                    {vehicle.tag}
                  </span>
                </div>
                <div className="p-3 sm:p-5">
                  <p className="text-[0.56rem] font-medium uppercase tracking-[0.08em] text-[#7db5ff] sm:text-xs sm:tracking-[0.18em]">
                    {vehicle.type}
                  </p>
                  <h3 className="mt-1.5 min-h-10 text-sm font-semibold leading-tight text-white sm:mt-3 sm:min-h-16 sm:text-2xl">
                    {vehicle.name}
                  </h3>
                  <div className="mt-2 flex items-end justify-between gap-2 sm:mt-5 sm:gap-4">
                    <div>
                      <p className="text-[0.56rem] uppercase tracking-[0.08em] text-slate-500 sm:text-xs sm:tracking-[0.16em]">Precio</p>
                      <p className="mt-0.5 text-sm font-semibold text-white sm:mt-1 sm:text-xl">{vehicle.price}</p>
                    </div>
                    <div className="text-right text-[0.62rem] leading-4 text-slate-300 sm:text-sm sm:leading-normal">
                      <p>{vehicle.year}</p>
                      <p>{vehicle.km}</p>
                    </div>
                  </div>
                  <div className="mt-3 grid gap-2 sm:mt-6">
                    <a
                      href="#contacto"
                      data-conversation-intent={`team-${vehicle.name}`}
                      className="inline-flex min-h-8 w-full items-center justify-center rounded-full border border-white/15 px-2 text-center text-[0.62rem] font-semibold leading-4 text-slate-100 transition duration-300 hover:border-[#7db5ff]/50 hover:bg-white/10 sm:min-h-10 sm:text-sm"
                    >
                      Solicitar información
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="catalogo" className="relative border-y border-[#15345d]/45 bg-[#08111d] px-4 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7db5ff] sm:text-sm sm:tracking-[0.22em]">
                Catálogo boutique
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
                Catálogo seleccionado.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                Una forma limpia de revisar unidades disponibles y próximas
                entradas sin perder la sensación de selección cuidada.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs min-[390px]:text-sm sm:grid-cols-4 sm:gap-3">
              {["Marca", "Carrocería", "Presupuesto", "Kilometraje"].map((filter) => (
                <button key={filter} className="premium-filter" type="button">
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <details className="catalogue-panel group mt-10" open>
            <summary className="flex cursor-pointer list-none flex-col items-start justify-between gap-3 border-b border-white/10 p-4 text-sm font-semibold text-white marker:hidden min-[390px]:flex-row min-[390px]:items-center sm:gap-4 sm:p-5">
              <span>Unidades disponibles y próximas entradas</span>
              <span className="rounded-full border border-[#7db5ff]/35 px-4 py-2 text-xs text-[#dcecff] transition group-open:bg-[#0e63d8] group-open:text-white">
                Ver catálogo
              </span>
            </summary>
            <div className="grid grid-cols-2 gap-3 p-3 md:grid-cols-2 lg:grid-cols-3">
              {catalogueVehicles.map(([name, body, year, km, status]) => (
                <article key={name} className="catalogue-item !p-3 sm:!p-5">
                  <div>
                    <p className="text-[0.56rem] font-medium uppercase tracking-[0.08em] text-[#7db5ff] sm:text-xs sm:tracking-[0.16em]">
                      {body}
                    </p>
                    <h3 className="mt-1.5 min-h-10 text-sm font-semibold leading-tight text-white sm:mt-2 sm:min-h-0 sm:text-xl sm:leading-normal">{name}</h3>
                  </div>
                  <div className="mt-3 flex flex-wrap gap-1.5 text-[0.62rem] leading-4 text-slate-300 sm:mt-5 sm:gap-2 sm:text-xs sm:leading-normal">
                    <span className="rounded-full bg-white/7 px-2 py-0.5 sm:px-3 sm:py-1">{year}</span>
                    <span className="rounded-full bg-white/7 px-2 py-0.5 sm:px-3 sm:py-1">{km}</span>
                    <span className="rounded-full border border-[#7db5ff]/25 px-2 py-0.5 text-[#dcecff] sm:px-3 sm:py-1">
                      {status}
                    </span>
                  </div>
                  <a
                    href="https://wa.me/34000000000"
                    data-conversation-intent={`info-${name}`}
                    className="mt-3 inline-flex min-h-8 w-full items-center justify-center rounded-full border border-white/15 px-2 text-center text-[0.62rem] font-semibold leading-4 text-white transition duration-300 hover:border-[#7db5ff]/55 hover:bg-white/10 sm:mt-5 sm:min-h-10 sm:text-sm"
                  >
                    Solicitar información
                  </a>
                </article>
              ))}
            </div>
          </details>
        </div>
      </section>

      <section id="busqueda" className="border-y border-white/10 bg-[#0b1320] px-4 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#7db5ff] sm:text-sm sm:tracking-[0.24em]">
              Búsqueda e importación
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
              ¿No encuentras el coche que buscas?
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Si no ves el modelo exacto en stock, nuestro equipo puede ayudarte
              a localizarlo. Revisamos opciones, kilometraje, historial,
              equipamiento y viabilidad de importación antes de proponerte una
              compra.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://wa.me/34000000000"
                data-conversation-intent="custom-search"
                className="conversation-cta inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[#0e63d8] px-4 text-center text-sm font-semibold text-white shadow-lg shadow-blue-950/35 transition duration-300 hover:-translate-y-0.5 hover:bg-[#247cff] sm:w-auto sm:px-6"
              >
                Solicitar búsqueda personalizada
              </a>
              <a
                href="#contacto"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-white/20 px-4 text-center text-sm font-semibold text-white transition duration-300 hover:border-[#7db5ff]/55 hover:bg-white/10 sm:w-auto sm:px-6"
              >
                Concertar una llamada
              </a>
            </div>
          </div>
          <div className="grid gap-4">
            {searchSteps.map(([title, text], index) => (
              <div key={title} className="search-step">
                <span className="grid size-10 place-items-center rounded-full border border-[#7db5ff]/35 bg-[#0e63d8]/15 text-sm font-semibold text-[#dcecff]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-base leading-7 text-slate-300">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl border-y border-white/10 py-12 sm:py-16">
          <div className="max-w-4xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#7db5ff] sm:text-sm sm:tracking-[0.24em]">
              Desde 2000
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
              Más de 20 años seleccionando vehículos.
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Trabajamos con selección cuidada, historial claro y atención
              directa, combinando stock propio con búsqueda personalizada en
              España y Europa.
            </p>
          </div>
        </div>
      </section>

      <section id="financiacion" className="px-4 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#7db5ff] sm:text-sm sm:tracking-[0.24em]">
              Servicios Bavaria
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
              Todo lo importante, explicado con claridad.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Servicios pensados para comprar con confianza, sin procesos
              complicados ni presión comercial.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, text], index) => (
              <article
                key={title}
                className="rounded-lg border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-[#7db5ff]/35 hover:bg-white/[0.065]"
              >
                <span className="text-sm font-semibold text-[#7db5ff]">
                  0{index + 1}
                </span>
                <h3 className="mt-5 text-xl font-semibold leading-tight text-white">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="por-que" className="px-4 pb-20 sm:px-8 sm:pb-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#7db5ff] sm:text-sm sm:tracking-[0.24em]">
              Por qué elegirnos
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
              Profesional, cercano y sin complicaciones.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div key={benefit} className="border-t border-white/15 pt-5 transition duration-300 hover:border-[#7db5ff]/45">
                <span className="text-sm font-semibold text-[#7db5ff]">
                  0{index + 1}
                </span>
                <p className="mt-4 text-base leading-7 text-slate-200 sm:text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="ubicacion" className="px-4 pb-20 sm:px-8 sm:pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#7db5ff] sm:text-sm sm:tracking-[0.24em]">
              Ubicación
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-5xl">
              Visítanos en Valencia.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
              Atención presencial con cita previa en La Eliana. Te mostramos
              vehículos disponibles, opciones bajo encargo y alternativas reales
              adaptadas a tu presupuesto.
            </p>
          </div>

          <div className="grid gap-4 min-[390px]:grid-cols-2 lg:grid-cols-[0.82fr_1.18fr] lg:gap-5">
            <div className="rounded-lg border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/20 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7db5ff] sm:text-sm sm:tracking-[0.22em]">
                Bavaria Motors
              </p>
              <div className="mt-5 space-y-3 text-sm leading-6 text-white sm:mt-7 sm:space-y-4 sm:text-lg sm:leading-7">
                <p>C/ Tuéjar, 41</p>
                <p>46183 L’Eliana, Valencia</p>
                <p>
                  <a className="transition hover:text-[#7db5ff]" href="tel:+34962725027">
                    96 272 50 27
                  </a>
                </p>
                <p>
                  <a
                    className="transition hover:text-[#7db5ff]"
                    href="mailto:info@bavariamotors.net"
                  >
                    info@bavariamotors.net
                  </a>
                </p>
              </div>
              <p className="mt-5 rounded-full border border-[#7db5ff]/25 bg-[#0e63d8]/10 px-3 py-2 text-center text-xs font-semibold text-[#dcecff] sm:mt-6 sm:px-4 sm:text-left sm:text-sm">
                Atención con cita previa
              </p>
              <div className="mt-5 grid gap-2 sm:mt-8 sm:grid-cols-2 sm:gap-3">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=C%2F%20Tu%C3%A9jar%2C%2041%2C%2046183%20L%27Eliana%2C%20Valencia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center justify-center rounded-full bg-white px-3 text-center text-xs font-semibold text-[#07101f] transition duration-300 hover:-translate-y-0.5 hover:bg-[#dcecff] sm:min-h-12 sm:px-5 sm:text-sm"
                >
                  Abrir en Google Maps
                </a>
                <a
                  href="https://wa.me/34962725027"
                  className="conversation-cta inline-flex min-h-10 items-center justify-center rounded-full bg-[#0e63d8] px-3 text-center text-xs font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#247cff] sm:min-h-12 sm:px-5 sm:text-sm"
                >
                  Contactar por WhatsApp
                </a>
              </div>
            </div>

            <div className="relative min-h-[260px] overflow-hidden rounded-lg border border-white/10 bg-[#07101f] shadow-2xl shadow-black/25 min-[390px]:min-h-full lg:min-h-[360px]">
              <Image
                src={photos.location}
                alt="Exterior de concesionario premium"
                width={1400}
                height={900}
                className="h-full min-h-[260px] w-full object-cover object-center opacity-78 saturate-[0.92] contrast-[1.04] min-[390px]:min-h-full lg:min-h-[360px]"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,11,18,0.74),rgba(7,11,18,0.12)_52%,rgba(7,11,18,0.7))]" />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,11,18,0.08),rgba(7,11,18,0.62))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_30%,rgba(14,99,216,0.24),transparent_38%)]" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-3 sm:bottom-6 sm:left-6 sm:right-6 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7db5ff] sm:text-sm sm:tracking-[0.22em]">
                    Bavaria Motors
                  </p>
                  <p className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                    La Eliana · Valencia
                  </p>
                </div>
                <span className="w-fit rounded-full border border-white/15 bg-black/35 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md">
                  Cita previa
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="px-4 pb-16 sm:px-8 sm:pb-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-lg border border-white/10 bg-white text-[#07101f]">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.7fr]">
            <div className="p-5 sm:p-10 lg:p-14">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0e63d8] sm:text-sm sm:tracking-[0.22em]">
                Contacto y citas
              </p>
              <h2 className="mt-4 max-w-3xl text-3xl font-semibold sm:text-4xl lg:text-6xl">
                Ven a ver un coche o déjanos buscarlo por ti.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
                Agenda una visita, pide más información de un vehículo o solicita
                una búsqueda personalizada. Te guiaremos con un trato directo y
                realista.
              </p>
            </div>
            <div className="flex flex-col justify-end gap-3 bg-slate-100 p-5 sm:p-10 lg:p-14">
              <a
                href="https://wa.me/34000000000"
                data-conversation-intent="appointment-whatsapp"
                className="conversation-cta inline-flex min-h-12 items-center justify-center rounded-full bg-[#0e63d8] px-4 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#07101f] sm:px-6"
              >
                Escribir por WhatsApp
              </a>
              <a
                href="mailto:appointments@bavariamotors.example"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white px-4 text-center text-sm font-semibold text-[#07101f] transition duration-300 hover:-translate-y-0.5 hover:bg-slate-50 sm:px-6"
              >
                Reservar cita
              </a>
              <p className="pt-3 text-sm leading-6 text-slate-600">
                Atención de lunes a sábado con cita previa. Te confirmaremos
                disponibilidad, condiciones y próximos pasos de forma directa.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-sm text-slate-400 sm:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>Bavaria Motors</p>
          <div className="flex flex-wrap gap-5">
            <a className="hover:text-white" href="#stock">
              Stock
            </a>
            <a className="hover:text-white" href="#catalogo">
              Catálogo
            </a>
            <a className="hover:text-white" href="#busqueda">
              Búsqueda personalizada
            </a>
            <a className="hover:text-white" href="#financiacion">
              Servicios
            </a>
            <a className="hover:text-white" href="#contacto">
              Cita
            </a>
            <Link className="hover:text-white" href="/privacidad-contacto">
              Política de privacidad
            </Link>
          </div>
        </div>
      </footer>

      <GhlCallModal />
    </main>
  );
}
