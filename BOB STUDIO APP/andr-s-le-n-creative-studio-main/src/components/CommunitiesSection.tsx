import { Button } from "@/components/ui/button";
import { Gamepad2, Code2, Users, Star, ExternalLink } from "lucide-react";

const communities = [
  {
    name: "GVX Greenville Roleplay",
    description: "Servidor de Roblox dedicado al entretenimiento y roleplay. Una comunidad activa donde puedes vivir experiencias únicas en Greenville.",
    tags: ["Roblox", "Entretenimiento", "Roleplay"],
    icon: Gamepad2,
    color: "primary",
    discord: "https://discord.gg/tSCeNHcT",
    tiktok: "https://www.tiktok.com/@greenvx.boblaardilla?is_from_webapp=1&sender_device=pc",
  },
  {
    name: "Brixel's Studios",
    description: "Studio dedicado a la creación de juegos en Roblox. Desarrollamos experiencias innovadoras y divertidas para la plataforma.",
    tags: ["Roblox", "Game Development", "Studio"],
    icon: Code2,
    color: "secondary",
    discord: "https://discord.gg/SZt5eV7F",
  },
];

const CommunitiesSection = () => {
  return (
    <section id="communities" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Mis <span className="text-gradient">Comunidades</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Proyectos y comunidades que lidero en el mundo de Roblox
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {communities.map((community, index) => (
            <div 
              key={community.name}
              className="group relative p-8 rounded-3xl card-glass overflow-hidden hover:border-primary/50 transition-all duration-500"
            >
              {/* Glow effect */}
              <div className={`absolute -top-20 -right-20 w-40 h-40 bg-${community.color}/20 rounded-full blur-[80px] group-hover:bg-${community.color}/30 transition-all duration-500`} />
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-${community.color}/10 border border-${community.color}/20 mb-6`}>
                  <community.icon className={`w-10 h-10 text-${community.color}`} />
                </div>

                <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                  {community.name}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {community.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {community.tags.map((tag) => (
                    <span 
                      key={tag}
                      className={`px-3 py-1 rounded-full text-xs bg-${community.color}/10 text-${community.color} border border-${community.color}/20`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button 
                    variant={community.color === "primary" ? "neon" : "neonPurple"}
                    size="sm"
                    asChild
                  >
                    <a href={community.discord} target="_blank" rel="noopener noreferrer">
                      <Users className="w-4 h-4" />
                      Discord
                    </a>
                  </Button>
                  {community.tiktok && (
                    <Button variant="glass" size="sm" asChild>
                      <a href={community.tiktok} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        TikTok
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunitiesSection;
