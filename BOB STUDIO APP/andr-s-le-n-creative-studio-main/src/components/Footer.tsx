const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} <span className="text-gradient font-display font-semibold">Andrés León</span>. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-sm text-muted-foreground">
              Bob Studios • VisuaLink • Vexora • GuildDash • UrbanDrops • Braylix
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
