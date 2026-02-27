import { motion } from "framer-motion";

const OfferSection = () => {
  return (
    <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        className="mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6 block">
          L'Offre
        </span>
        <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight max-w-4xl">
          Un prix fixe. <span className="italic text-gradient-gold">Tout est pris en charge.</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          className="border border-primary/30 p-10 md:p-14 glow-gold relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-4 left-10 bg-background px-4">
            <span className="font-mono text-xs tracking-widest uppercase text-primary">Livrable Principal</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Script VSL Haute Rétention
          </h3>
          <p className="text-secondary-foreground leading-relaxed mb-8">
            Un script de vidéo de vente complet — recherché, structuré et écrit pour maintenir 
            l'attention au-delà du point où vos concurrents la perdent. Conçu autour de votre offre 
            spécifique, votre marché et la psychologie de vos acheteurs.
          </p>
          
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-5xl font-serif font-bold text-gradient-gold">1 650 €</span>
            <span className="text-muted-foreground font-mono text-sm">HT / unique</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Pas d'abonnement. Pas de frais récurrents. Pas de dérive de périmètre.
          </p>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="mb-4">
            <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
              Bonus « Vous ne levez pas le petit doigt »
            </span>
          </div>

          {[
            {
              title: "Slide Deck VSL Complet",
              desc: "Designé, formaté, prêt à ouvrir et enregistrer. Fini les templates Canva vides qui vous fixent."
            },
            {
              title: "Audit & Réécriture de Landing Page",
              desc: "Je démonte la page où vit votre VSL et je reconstruis le copy autour. Parce qu'une bonne vidéo sur une mauvaise page, c'est du gâchis."
            },
            {
              title: "Intégration Technique",
              desc: "Je branche tout — Systeme.io, Clickfunnels ou GoHighLevel. Vous arrivez devant une machine qui tourne déjà."
            }
          ].map((bonus, i) => (
            <div key={i} className="border border-border p-6 hover:border-gold-dim transition-colors duration-300">
              <div className="flex items-start gap-4">
                <span className="font-mono text-primary text-sm mt-1">+</span>
                <div>
                  <h4 className="font-serif text-lg font-bold mb-2">{bonus.title}</h4>
                  <p className="text-sm text-secondary-foreground leading-relaxed">{bonus.desc}</p>
                </div>
              </div>
            </div>
          ))}

          <p className="text-sm text-muted-foreground italic pt-4">
            Inclus sans surcoût. Pas des upsells. Pas du « offre limitée ». Ça fait partie du package.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
