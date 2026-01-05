import { Code2, Palette, Music2, Box, Bot, Briefcase } from "lucide-react";

const skills = [
  { icon: Code2, label: "Programador", color: "text-primary" },
  { icon: Code2, label: "Programador Web", color: "text-primary" },
  { icon: Palette, label: "Diseñador Web", color: "text-secondary" },
  { icon: Palette, label: "Diseñador Gráfico", color: "text-accent" },
  { icon: Music2, label: "Músico", color: "text-neon-magenta" },
  { icon: Box, label: "Ex-Modelador 3D", color: "text-neon-purple" },
  { icon: Bot, label: "Creador de Bots", color: "text-neon-blue" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="text-gradient">Mí</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Apasionado por la tecnología, el diseño y la creatividad. 
            Fundador de múltiples proyectos y negocios digitales.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.label}
              className="group p-6 rounded-2xl card-glass hover:border-primary/50 transition-all duration-500 text-center w-40"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex p-4 rounded-xl bg-muted/50 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className={`w-8 h-8 ${skill.color}`} />
              </div>
              <p className="text-sm font-medium text-foreground">{skill.label}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { value: "5+", label: "Negocios Fundados" },
            { value: "2", label: "Comunidades Activas" },
            { value: "∞", label: "Proyectos Creativos" },
            { value: "24/7", label: "Pasión por Crear" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center p-6 rounded-2xl card-glass">
              <div className="font-display text-4xl md:text-5xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
