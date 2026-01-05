import { Video, TrendingUp, MessageSquare, ShoppingCart, Briefcase } from "lucide-react";
import ServiceCard from "./ServiceCard";

const services = [
  {
    name: "Bob Studios",
    tagline: "Servicios generales · Negocios · Soluciones integrales",
    description: "Mi empresa matriz de servicios y negocios generales. Coordinamos proyectos, ofrecemos soluciones integrales y gestionamos todos mis emprendimientos bajo un mismo techo.",
    icon: <Briefcase className="w-10 h-10 text-neon-magenta" />,
    color: "magenta" as const,
    packages: [],
    contactEmail: "bobstudios.games.dev@gmail.com",
  },
  {
    name: "Vexora",
    tagline: "Contenido digital · Edición · Trailers · TikTok · Reels",
    description: "Creación y edición de videos optimizados para redes sociales, proyectos creativos y promoción digital. Contenido dinámico, con ritmo, subtítulos y formato adaptado a cada plataforma.",
    icon: <Video className="w-10 h-10 text-primary" />,
    color: "primary" as const,
    packages: [
      {
        name: "Básico",
        price: "$300 MXN",
        features: [
          "Edición de 1 video corto (hasta 45 s)",
          "Cortes limpios y ritmo optimizado",
          "Subtítulos simples",
          "Música libre de derechos",
          "Ajuste básico de color y audio",
        ],
      },
      {
        name: "Creador",
        price: "$900 MXN",
        features: [
          "3 a 5 videos cortos (TikTok, Reels o Shorts)",
          "Subtítulos dinámicos",
          "Transiciones personalizadas",
          "Corrección de color mejorada",
          "Optimización de formato (vertical/horizontal)",
          "1 revisión incluida",
        ],
      },
      {
        name: "Pro",
        price: "$1,500 MXN",
        features: [
          "Trailer o video principal (hasta 1 minuto)",
          "Edición avanzada y efectos visuales",
          "Motion graphics y textos animados",
          "Subtítulos premium",
          "Diseño visual acorde al proyecto",
          "2 a 3 cambios incluidos",
        ],
      },
      {
        name: "Studio",
        price: "$2,800 MXN / mes",
        features: [
          "Paquete mensual de contenido",
          "8 a 12 videos cortos",
          "1 trailer o video principal",
          "Branding visual (colores y estilo)",
          "Entregas listas para múltiples plataformas",
        ],
      },
    ],
  },
  {
    name: "Braylix",
    tagline: "Marketing digital · Ads · Crecimiento · Redes sociales",
    description: "Gestión de marketing digital enfocada en visibilidad, alcance y conversión. Estrategias de crecimiento, campañas publicitarias y manejo de redes sociales.",
    icon: <TrendingUp className="w-10 h-10 text-secondary" />,
    color: "secondary" as const,
    comingSoon: true,
    packages: [
      {
        name: "Social",
        price: "$1,000 MXN / mes",
        features: [
          "Manejo de 1 red social",
          "Calendario de contenido",
          "Diseño de publicaciones",
          "Optimización de perfil",
          "Reporte básico",
        ],
      },
      {
        name: "Ads",
        price: "$1,500 MXN / campaña",
        features: [
          "Creación y gestión de campañas publicitarias",
          "Segmentación de público",
          "Configuración de píxeles",
          "Optimización continua",
          "Reporte de resultados",
        ],
      },
      {
        name: "Growth",
        price: "$2,800 MXN / mes",
        features: [
          "Manejo de 2 a 3 redes sociales",
          "Estrategia mensual de crecimiento",
          "Contenido optimizado",
          "Campañas de anuncios activas",
          "Análisis y reportes detallados",
        ],
      },
    ],
  },
  {
    name: "GuildDash",
    tagline: "Discord · Servidores · Bots · Configuraciones",
    description: "Creación y configuración de servidores de Discord organizados, seguros y funcionales. Implementación de bots, roles, sistemas automáticos y estructuras para comunidades y proyectos.",
    icon: <MessageSquare className="w-10 h-10 text-accent" />,
    color: "accent" as const,
    packages: [
      {
        name: "Starter",
        price: "$400 MXN",
        features: [
          "Creación de servidor desde cero",
          "Organización básica de canales",
          "Roles principales con permisos",
          "Seguridad básica",
          "1 bot configurado",
        ],
      },
      {
        name: "Community",
        price: "$900 MXN",
        features: [
          "Servidor completo y estructurado",
          "Roles con jerarquía y colores",
          "Sistema de tickets o soporte",
          "Automod y protección anti-spam",
          "2 a 3 bots configurados",
        ],
      },
      {
        name: "Advanced",
        price: "$1,500 MXN",
        features: [
          "Servidor avanzado",
          "Sistema de logs y verificación",
          "Anti-raid y seguridad reforzada",
          "Menús con botones o reacciones",
          "4 a 5 bots configurados",
        ],
      },
      {
        name: "Premium",
        price: "$2,300 MXN",
        features: [
          "Servidor totalmente personalizado",
          "Sistemas automáticos completos",
          "Economía, niveles o XP (opcional)",
          "Bots avanzados o personalizados",
          "Soporte posterior a la entrega",
        ],
      },
    ],
  },
  {
    name: "UrbanDrops",
    tagline: "Tienda digital · Productos variados · Próximamente",
    description: "Mi tienda digital personal con diversos productos y artículos. Próximamente disponible con una selección variada de productos exclusivos.",
    icon: <ShoppingCart className="w-10 h-10 text-primary" />,
    color: "primary" as const,
    comingSoon: true,
    packages: [],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Negocios y <span className="text-gradient">Servicios</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluciones profesionales para tu negocio, proyecto o comunidad
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.name} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
