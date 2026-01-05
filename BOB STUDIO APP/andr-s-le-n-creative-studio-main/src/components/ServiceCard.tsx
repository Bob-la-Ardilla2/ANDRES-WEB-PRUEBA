import { ReactNode } from "react";
import { Check, Clock, Mail } from "lucide-react";

interface ServicePackage {
  name: string;
  features: string[];
  price?: string;
}

export interface ServiceCardProps {
  name: string;
  tagline: string;
  description: string;
  icon: ReactNode;
  packages: ServicePackage[];
  color: "primary" | "secondary" | "accent" | "magenta";
  comingSoon?: boolean;
  contactEmail?: string;
}

const colorClasses = {
  primary: {
    bg: "bg-primary/10",
    border: "border-primary/20",
    text: "text-primary",
    glow: "group-hover:shadow-[0_0_40px_hsl(var(--primary)/0.2)]",
  },
  secondary: {
    bg: "bg-secondary/10",
    border: "border-secondary/20",
    text: "text-secondary",
    glow: "group-hover:shadow-[0_0_40px_hsl(var(--secondary)/0.2)]",
  },
  accent: {
    bg: "bg-accent/10",
    border: "border-accent/20",
    text: "text-accent",
    glow: "group-hover:shadow-[0_0_40px_hsl(var(--accent)/0.2)]",
  },
  magenta: {
    bg: "bg-neon-magenta/10",
    border: "border-neon-magenta/20",
    text: "text-neon-magenta",
    glow: "group-hover:shadow-[0_0_40px_hsl(var(--neon-magenta)/0.2)]",
  },
};

const ServiceCard = ({ name, tagline, description, icon, packages, color, comingSoon, contactEmail }: ServiceCardProps) => {
  const colors = colorClasses[color];

  return (
    <div className={`group relative rounded-3xl card-glass overflow-hidden transition-all duration-500 ${colors.glow}`}>
      {/* Coming soon badge */}
      {comingSoon && (
        <div className="absolute top-4 right-4 z-20">
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary border border-secondary/30">
            <Clock className="w-3 h-3" />
            Próximamente
          </span>
        </div>
      )}

      {/* Header */}
      <div className="p-8 pb-6 border-b border-border/50">
        <div className={`inline-flex p-4 rounded-2xl ${colors.bg} ${colors.border} border mb-6`}>
          {icon}
        </div>
        
        <h3 className="font-display text-3xl font-bold mb-2 text-foreground">{name}</h3>
        <p className={`text-sm font-medium ${colors.text} mb-3`}>{tagline}</p>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </div>

      {/* Packages */}
      <div className="p-8 pt-6">
        {packages.length > 0 ? (
          <>
            <h4 className="font-display text-lg font-semibold mb-6 text-foreground">Paquetes</h4>
            <div className="space-y-6">
              {packages.map((pkg) => (
                <div 
                  key={pkg.name}
                  className={`p-5 rounded-2xl bg-muted/30 border border-border/30 hover:border-${color}/30 transition-all duration-300`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display font-semibold text-lg text-foreground">{pkg.name}</span>
                    {pkg.price && (
                      <span className={`text-sm font-bold ${colors.text}`}>{pkg.price}</span>
                    )}
                  </div>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Check className={`w-4 h-4 mt-0.5 ${colors.text} flex-shrink-0`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </>
        ) : contactEmail ? (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Mail className={`w-12 h-12 ${colors.text} mb-4 opacity-60`} />
            <p className="font-display text-xl font-semibold text-foreground mb-2">Contacto</p>
            <a 
              href={`mailto:${contactEmail}`}
              className={`text-sm ${colors.text} hover:underline transition-all`}
            >
              {contactEmail}
            </a>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Clock className={`w-12 h-12 ${colors.text} mb-4 opacity-60`} />
            <p className="font-display text-xl font-semibold text-foreground mb-2">Próximamente</p>
            <p className="text-muted-foreground text-sm">Estamos preparando algo increíble para ti</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;
