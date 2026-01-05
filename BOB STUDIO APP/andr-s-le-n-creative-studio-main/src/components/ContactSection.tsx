import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, AlertTriangle, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [copiedDiscord, setCopiedDiscord] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);
  const { toast } = useToast();

  const copyToClipboard = (text: string, type: "discord" | "whatsapp") => {
    navigator.clipboard.writeText(text);
    if (type === "discord") {
      setCopiedDiscord(true);
      setTimeout(() => setCopiedDiscord(false), 2000);
    } else {
      setCopiedWhatsApp(true);
      setTimeout(() => setCopiedWhatsApp(false), 2000);
    }
    toast({
      title: "¡Copiado!",
      description: `${type === "discord" ? "Usuario de Discord" : "Número de WhatsApp"} copiado al portapapeles`,
    });
  };

  const openEmail = () => {
    window.location.href = "mailto:bobstudios.games.dev@gmail.com";
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Contáctame</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Para cualquier información, cotización o proyecto, no dudes en contactarme por cualquiera de estos medios
            </p>
          </div>

          <div className="rounded-3xl card-glass p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {/* Gmail */}
              <button 
                onClick={openEmail}
                className="group p-6 rounded-2xl bg-muted/30 border border-border/30 hover:border-primary/50 transition-all duration-300 text-center cursor-pointer"
              >
                <div className="inline-flex p-4 rounded-xl bg-primary/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">Gmail</h3>
                <p className="text-sm text-muted-foreground break-all">
                  bobstudios.games.dev@gmail.com
                </p>
                <p className="text-xs text-primary mt-2">Click para enviar email</p>
              </button>

              {/* WhatsApp */}
              <div className="group p-6 rounded-2xl bg-muted/30 border border-border/30 hover:border-green-500/50 transition-all duration-300 text-center">
                <div className="inline-flex p-4 rounded-xl bg-green-500/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  +52 938 405 6450
                </p>
                <button
                  onClick={() => copyToClipboard("+529384056450", "whatsapp")}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10 text-green-500 text-xs hover:bg-green-500/20 transition-colors"
                >
                  {copiedWhatsApp ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copiedWhatsApp ? "¡Copiado!" : "Copiar número"}
                </button>
              </div>

              {/* Discord */}
              <div className="group p-6 rounded-2xl bg-muted/30 border border-border/30 hover:border-[#5865F2]/50 transition-all duration-300 text-center">
                <div className="inline-flex p-4 rounded-xl bg-[#5865F2]/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-[#5865F2]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">Discord</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  bob_laardilla_00667
                </p>
                <button
                  onClick={() => copyToClipboard("bob_laardilla_00667", "discord")}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#5865F2]/10 text-[#5865F2] text-xs hover:bg-[#5865F2]/20 transition-colors"
                >
                  {copiedDiscord ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  {copiedDiscord ? "¡Copiado!" : "Copiar usuario"}
                </button>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center mb-8">
              <Button variant="gradient" size="xl" onClick={openEmail}>
                <Mail className="w-5 h-5" />
                Enviar Email
              </Button>
            </div>

            {/* Warning */}
            <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 flex items-start gap-4">
              <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                <span className="text-destructive font-medium">Aviso importante:</span> Si mandan mensajes en forma de burla serán bloqueados, reportados y en casos extremos denunciados.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
