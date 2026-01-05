import { Palette, Globe, Check } from "lucide-react";

const graphicDesign = [
  { name: "Logo profesional", description: "Diseño original y profesional", price: "$500 MXN" },
  { name: "Banners publicitarios", description: "Diseño para redes o anuncios", price: "$350 MXN" },
  { name: "Publicaciones para redes sociales", description: "Diseño individual optimizado", price: "$200 MXN c/u" },
  { name: "Promociones y material publicitario", description: "Flyers, anuncios y gráficos promocionales", price: "$300 MXN" },
  { name: "Otros diseños", description: "Proyectos personalizados", price: "Precio a consultar" },
];

const webPackages = [
  {
    name: "GitHub (HTML a mano)",
    features: [
      "Código hecho desde cero",
      "Diseño 100% personalizado",
      "Carga de imágenes e información",
    ],
    price: "$1,500 MXN",
  },
  {
    name: "Hostinger Básico",
    subtitle: "(dominio y hosting pagados por el cliente)",
    features: [
      "Página informativa (1–3 secciones)",
      "Plantilla personalizada",
      "HTML y diseño adaptado",
    ],
    price: "$1,200 MXN",
  },
  {
    name: "Hostinger Premium",
    subtitle: "(dominio y hosting pagados por el cliente)",
    features: [
      "Tienda en línea",
      "Base de datos",
      "Optimización SEO básica",
      "Seguridad incluida",
    ],
    price: "$2,000 MXN",
  },
];

const VisualinkSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex p-4 rounded-2xl bg-secondary/10 border border-secondary/20 mb-6">
            <Palette className="w-12 h-12 text-secondary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">VisuaLink</span>
          </h2>
          <p className="text-lg text-secondary font-medium mb-4">
            Diseño gráfico · Páginas web · Identidad visual
          </p>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Servicios de diseño gráfico y creación de páginas web personalizadas, orientadas a imagen profesional, presencia digital y funcionalidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Graphic Design */}
          <div className="rounded-3xl card-glass p-8">
            <div className="flex items-center gap-3 mb-8">
              <Palette className="w-8 h-8 text-secondary" />
              <h3 className="font-display text-2xl font-bold">Diseño Gráfico</h3>
            </div>

            <div className="space-y-4">
              {graphicDesign.map((item) => (
                <div 
                  key={item.name}
                  className="p-5 rounded-xl bg-muted/30 border border-border/30 hover:border-secondary/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <span className="text-secondary font-bold text-sm whitespace-nowrap">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Web Design */}
          <div className="rounded-3xl card-glass p-8">
            <div className="flex items-center gap-3 mb-8">
              <Globe className="w-8 h-8 text-accent" />
              <h3 className="font-display text-2xl font-bold">Creación de Páginas Web</h3>
            </div>

            <div className="space-y-6">
              {webPackages.map((pkg) => (
                <div 
                  key={pkg.name}
                  className="p-5 rounded-xl bg-muted/30 border border-border/30 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h4 className="font-semibold text-foreground">{pkg.name}</h4>
                      {pkg.subtitle && (
                        <p className="text-xs text-muted-foreground mt-1">{pkg.subtitle}</p>
                      )}
                    </div>
                    <span className="text-accent font-bold text-sm whitespace-nowrap">{pkg.price}</span>
                  </div>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisualinkSection;
