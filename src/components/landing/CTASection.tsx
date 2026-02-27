import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-8">
            Arrêtez de nourrir l'algorithme
            <br />
            <span className="text-gradient-gold italic">avec du contenu mort.</span>
          </h2>
          <p className="text-lg text-secondary-foreground max-w-lg leading-relaxed mb-4">
            Vous avez lu jusqu'ici parce que quelque chose dans votre funnel actuel ne fonctionne pas. 
            Vous le savez. Votre rapport de dépenses publicitaires vous le confirme chaque mois.
          </p>
          <p className="text-foreground max-w-lg">
            Deux options : continuer à optimiser des audiences pour une vidéo qui ne convertit pas, 
            ou réparer la vidéo.
          </p>
        </motion.div>

        <motion.div 
          className="lg:col-span-5"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="border border-primary/30 p-10 glow-gold">
            <h3 className="font-serif text-2xl font-bold mb-4">Réservez un appel stratégique.</h3>
            <p className="text-sm text-secondary-foreground mb-8 leading-relaxed">
              15 minutes. Pas de pitch. J'analyse votre VSL ou votre funnel actuel, 
              je vous dis exactement ce qui fait fuir vos conversions, et si je suis le bon fit.
            </p>
            
            <a
              href="#contact"
              className="block w-full text-center bg-primary text-primary-foreground font-mono text-sm tracking-wider uppercase py-4 px-8 hover:bg-gold-glow transition-colors duration-300"
            >
              Réserver l'appel →
            </a>
            
            <p className="text-xs text-muted-foreground mt-4 text-center">
              Pas d'engagement. Pas de relance. Juste de la clarté.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
