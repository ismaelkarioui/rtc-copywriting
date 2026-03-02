import { motion } from "framer-motion";

const OfferSection = () => {
  return (
    <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        className="mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6 block">OFFRE DE LANCEMENT

        </span>
        <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight max-w-4xl">Une offre exceptionnelle avec prise en charge de A à Z
          <span className="italic text-gradient-gold">prise en charge de A à Z</span>
        </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          className="border border-primary/30 p-10 md:p-14 glow-gold relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          
        <div className="absolute -top-4 left-10 bg-background px-4">
          <span className="font-mono text-xs tracking-widest uppercase text-primary">Livrable Principal</span>
        </div>

        <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Architecture narrative RTC clé en main
        </h3>
        <p className="text-secondary-foreground leading-relaxed mb-8">
          Un script de vidéo de vente complet — recherché, structuré et écrit pour maintenir 
          l'attention au-delà du point où vos concurrents la perdent. Conçu autour de votre offre 
          spécifique, votre marché et la psychologie de vos acheteurs.
        </p>

        <div className="flex items-baseline gap-2 mb-2">
          <span className="text-5xl font-serif font-bold text-gradient-gold">1 650 €</span>
          <span className="text-muted-foreground font-mono text-sm">HT</span>
        </div>
        <p className="text-sm font-bold uppercase tracking-wider mb-2 text-destructive">
          ⚠️ Offre de lancement : 2 places restantes
        </p>
        <p className="text-xs text-muted-foreground">
          Pas d'abonnement. Pas de frais récurrents. Pas de dérive de périmètre.
        </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}>
          
        <div className="mb-4">
          <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
            Bonus (Valeur totale des bonus 1250€)
          </span>
        </div>

        {[
          {
            title: "Support visuel VSL complet",
            desc: "Designé, formaté, prêt pour le tournage."
          },
          {
            title: "Optimisation de la page de destination",
            desc: "Je démonte la page de destination qui redirige vers votre VSL et j'optimise la copie pour installer la tension avant que le prospect ait vu votre VSL."
          },
          {
            title: "Intégration Technique",
            desc: "J'installe votre VSL et votre landing page directement dans votre plateforme favorite de tunnel de vente (systeme.io, Clickfunnels, GoHighLevel, etc.)"
          }].
          map((bonus, i) => <div key={i} className="border border-border p-6 hover:border-gold-dim transition-colors duration-300">
              <div className="flex items-start gap-4">
                <span className="font-mono text-primary text-sm mt-1">+</span>
                <div>
                  <h4 className="font-serif text-lg font-bold mb-2">{bonus.title}</h4>
                  <p className="text-sm text-secondary-foreground leading-relaxed">{bonus.desc}</p>
                </div>
              </div>
            </div>
          )}

          <p className="text-sm text-muted-foreground italic pt-4">
            Inclus sans surcoût. Pas des upsells. Pas du « offre limitée ». Ça fait partie du package.
          </p>
        </motion.div>
      </div>
    </section>);

};

export default OfferSection;