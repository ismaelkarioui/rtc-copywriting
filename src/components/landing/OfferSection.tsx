import { motion } from "framer-motion";

const OfferSection = () => {
  return (
    <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        className="mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}>
        
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6 block">LE MODÈLE PARTENAIRE</span>
        <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight max-w-4xl">
          Fini le tunnel fracturé,{" "}
          <span className="italic text-gradient-gold">voici l'écosystème complet</span>
        </h2>
        <p className="mt-8 text-xl text-secondary-foreground leading-relaxed max-w-3xl">
          J'implémente un système de conversion complet basé sur les frameworks utilisés dans les lancements des challenges 5 jours sur lesquels j'ai travaillé.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        <motion.div
          className="border border-primary/30 p-10 md:p-14 glow-gold relative flex flex-col h-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>
          
          <div className="absolute -top-4 left-10 bg-background px-4">
            <span className="font-mono text-xs tracking-widest uppercase text-primary">L'Écosystème</span>
          </div>

          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            L'architecture narrative RTC
          </h3>
          
          <ul className="space-y-4 mb-8 text-secondary-foreground text-sm">
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <div>
                <strong className="text-foreground">La génération de leads — Valeur 200€ :</strong> 5 scripts d'ads pour générer des leads qualifiés, abaisser le CPA et teaser le reste du tunnel d'acquisition.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <div>
                <strong className="text-foreground">Le cœur du réacteur (la VSL) — Valeur 2500€ :</strong> Le script haute performance, calibré seconde par seconde pour détruire les objections avant qu'elles ne se forment.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <div>
                <strong className="text-foreground">L'harmonisation pré et post-VSL — Valeur 500€ :</strong> Optimisation du copywriting de la landing page pour maximiser le clic vers la VSL et de la page de réservation d'appel pour éviter une perte de leads aux moments critiques.
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-primary font-bold">✓</span>
              <div>
                <strong className="text-foreground">Le filet de sécurité — Valeur 500€ :</strong> Séquence de 5 emails de vente pour rattraper les indécis dans les jours qui viennent de manière 100% automatisée.
              </div>
            </li>
          </ul>

          <div className="mt-auto">
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-mono">Valeur totale : 3 700 €</p>
            <p className="text-sm text-secondary-foreground mb-6 leading-relaxed">
              Au lieu de vous facturer 3700€ cash et de vous laisser seul avec la pression du ROAS, je m'adosse à vos résultats en tant que partenaire.
            </p>

            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 mb-2">
              <span className="text-5xl font-serif font-bold text-green-600">1000€</span>
              <span className="text-muted-foreground font-mono text-sm">HT de frais d'installation</span>
            </div>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-3xl font-serif font-bold text-foreground">+ 15%</span>
              <span className="text-sm font-bold uppercase tracking-wider text-primary">de Prime de Croissance</span>
            </div>
            
            <p className="text-xs text-muted-foreground mb-8 border-l-2 border-primary/50 pl-4">
              La prime de 15% ne s'applique que sur le chiffre d'affaires SUPPLÉMENTAIRE généré. Je ne prends ma commission que sur la croissance qui dépasse votre palier de revenus actuel. Si vous ne gagnez pas plus qu'avant notre collaboration, je ne touche aucun pourcentage. Vous aurez économisé 2 700 € HT.
            </p>

            <p className="text-red-500 font-bold text-center mb-4 animate-pulse uppercase tracking-wide text-sm">
              2 places restantes avant que le prix augmente
            </p>

            <a
              href="https://cal.com/ismaelkarioui/diagnostic"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-primary text-primary-foreground font-mono text-sm tracking-wider uppercase py-4 px-8 hover:bg-gold-glow transition-all duration-300 glow-gold-sm"
            >
              Réserver mon diagnostic RTC →
            </a>
          </div>
        </motion.div>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}>
          
          <div className="mb-4">
            <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
              Les Bonus Offerts
            </span>
          </div>

          {[
            {
              title: "Les indications scénaristiques pour le montage",
              desc: "La plupart des copywriters envoient un texte sans aucune annotation et laissent les monteurs se débrouiller. Moi, je livre le script avec des annotations pour optimiser la mise en scène et faciliter le travail de votre monteur."
            },
            {
              title: "Le récapitulatif des objections",
              desc: "Un document de synthèse pour votre équipe de vente. Il résume les objections de votre persona et les réponses à donner, alignées avec la VSL, pour éviter toute incohérence et perte de confiance au moment du closing."
            },
            {
              title: "Le renouvellement mensuel des ads",
              desc: "Tant que notre partenariat court, je fournis 3 nouveaux scripts d'ads chaque mois pour combattre la fatigue publicitaire sans frais supplémentaires."
            }
          ].map((bonus, i) => (
            <div key={i} className="border border-border p-6 hover:border-gold-dim transition-colors duration-300">
              <div className="flex items-start gap-4">
                <span className="font-mono text-primary text-xl mt-0">🎁</span>
                <div>
                  <h4 className="font-serif text-lg font-bold mb-2">{bonus.title}</h4>
                  <p className="text-sm text-secondary-foreground leading-relaxed">{bonus.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;