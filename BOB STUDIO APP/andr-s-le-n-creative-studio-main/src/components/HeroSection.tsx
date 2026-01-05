import { Button } from "@/components/ui/button";
import { ChevronDown, Code, Palette, Music, Gamepad2, Users } from "lucide-react";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[150px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[150px] animate-pulse-glow delay-300" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-[100px] animate-pulse-glow delay-500" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated icons */}
          <div className="flex justify-center gap-6 mb-8 opacity-0 animate-fade-in">
            <div className="p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 animate-float">
              <Code className="w-6 h-6 text-primary" />
            </div>
            <div className="p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 animate-float delay-100">
              <Palette className="w-6 h-6 text-secondary" />
            </div>
            <div className="p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 animate-float delay-200">
              <Music className="w-6 h-6 text-accent" />
            </div>
            <div className="p-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 animate-float delay-300">
              <Gamepad2 className="w-6 h-6 text-neon-magenta" />
            </div>
          </div>

          {/* Main title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-slide-up">
            <span className="text-foreground">Andrés</span>{" "}
            <span className="text-gradient">León</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 opacity-0 animate-slide-up delay-100">
            Programador • Diseñador Web • Diseñador Gráfico
          </p>
          <p className="text-lg text-muted-foreground mb-8 opacity-0 animate-slide-up delay-200">
            Músico • Ex-Modelador 3D • Creador de Bots para Discord
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-slide-up delay-300">
            <Button 
              variant="gradient" 
              size="xl"
              onClick={() => scrollToSection("services")}
            >
              Mis Servicios
            </Button>
            <Button 
              variant="neonPurple" 
              size="xl"
              onClick={() => scrollToSection("communities")}
            >
              <Users className="w-5 h-5" />
              Comunidades
            </Button>
            <Button 
              variant="glass" 
              size="xl"
              onClick={() => scrollToSection("contact")}
            >
              Contáctame
            </Button>
          </div>

          {/* Roles tags */}
          <div className="flex flex-wrap justify-center gap-3 mt-12 opacity-0 animate-fade-in delay-400">
            {["Dueño de Bob Studios", "Dueño de VisuaLink", "Dueño de Vexora", "Dueño de GuildDash", "Dueño de Braylix", "Dueño de UrbanDrops"].map((role) => (
              <span 
                key={role}
                className="px-4 py-2 rounded-full text-sm bg-card/50 border border-border/50 text-muted-foreground backdrop-blur-sm hover:border-primary/50 hover:text-primary transition-all duration-300"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors cursor-pointer opacity-0 animate-fade-in delay-500"
      >
        <span className="text-sm font-medium">Scroll</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};

export default HeroSection;
