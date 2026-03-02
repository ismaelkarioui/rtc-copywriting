import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-8">
            Réparons ensemble le <span className="text-gradient-gold italic">centre névralgique</span> de votre système d'acquisition
          </h2>
          <p className="text-lg text-secondary-foreground max-w-lg leading-relaxed mb-4">Vous voulez continuer à envoyer des leads froids vers une vidéo qui ne convertit pas... ou vous préférez réparer la vidéo et relancer la machine ?

          </p>
        </motion.div>

        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}>
          
          <div className="border border-primary/30 p-10 glow-gold">
            <h3 className="font-serif text-2xl font-bold mb-4">Réserver un diagnostic rétention (30 min)</h3>
            <p className="text-sm text-secondary-foreground mb-8 leading-relaxed">
              Analyse de votre stratégie, de votre VSL et proposition de réécriture des 3 premières minutes optimisée pour la rétention.
            </p>
            
            <a
              href="https://cal.com/ismaelkarioui/diagnostic"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-primary text-primary-foreground font-mono text-sm tracking-wider uppercase py-4 px-8 hover:bg-gold-glow transition-colors duration-300">
              
              Réserver le diagnostic →
            </a>
            
            <p className="text-xs text-muted-foreground mt-4 text-center">⚠️ Attention : il ne reste que 2 places pour cette offre de lancement.

            </p>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default CTASection;
