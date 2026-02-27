import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-16">
        <motion.div 
          className="lg:col-span-5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6 block">
            Le Problème
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Vous payez pour de
            <br />
            <span className="italic text-gradient-gold">l'attention que vous n'obtenez jamais.</span>
          </h2>
        </motion.div>

        <motion.div 
          className="lg:col-span-7 space-y-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-secondary-foreground leading-relaxed">
            Chaque euro injecté dans vos pubs vous achète une chance. Quelques secondes d'attention 
            fracturée. Et qu'est-ce que le prospect trouve en face ? Une vidéo de vente qui ressemble 
            à une demande de rançon rédigée par un comité.
          </p>
          
          <div className="space-y-6 border-l border-border pl-8">
            {[
              {
                stat: "47 €",
                label: "Coût moyen par clic qualifié dans les niches concurrentielles.",
                detail: "Ce prospect vous accorde 8 secondes avant de passer au suivant."
              },
              {
                stat: "73%",
                label: "D'abandon dans les 30 premières secondes de la plupart des VSL.",
                detail: "Votre offre n'est jamais entendue. Vos preuves ne sont jamais vues."
              },
              {
                stat: "0 €",
                label: "Le retour sur une vidéo que personne ne regarde.",
                detail: "Les chiffres ne mentent pas. L'ennui est le mot le plus cher en publicité."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15 }}
              >
                <div className="flex items-baseline gap-4 mb-1">
                  <span className="text-3xl font-serif font-bold text-primary">{item.stat}</span>
                  <span className="text-foreground font-medium">{item.label}</span>
                </div>
                <p className="text-sm text-muted-foreground ml-[calc(3ch+1rem)]">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="pt-8">
            <p className="text-xl text-foreground font-serif italic">
              « Le problème, ce n'est jamais le trafic. C'est ce qui se passe après le clic. »
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
