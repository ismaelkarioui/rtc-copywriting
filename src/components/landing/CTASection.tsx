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
            Réparez les fuites de votre tunnel VSL et <span className="text-gradient-gold italic">scalez en toute tranquillité</span>
          </h2>
          <p className="text-lg text-secondary-foreground max-w-lg leading-relaxed mb-4">
            Vous voulez continuer à dilapider votre budget pub à cause d'un tunnel incohérent ou vous voulez trouver un partenaire qui fera tout pour y remédier ?
          </p>
        </motion.div>

        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}>
          
          <div className="border border-primary/30 p-10 glow-gold">
            <h3 className="font-serif text-2xl font-bold mb-4">Réserver un diagnostic RTC (30 min)</h3>
            <p className="text-sm text-secondary-foreground mb-8 leading-relaxed">
              Analyse de votre stratégie, du copywriting de votre tunnel et plan de route concret pour repartir sur de bonnes bases.
            </p>
            
            <a
              href="https://cal.com/ismaelkarioui/diagnostic"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-primary text-primary-foreground font-mono text-sm tracking-wider uppercase py-4 px-8 hover:bg-gold-glow transition-colors duration-300">
              
              Réserver le diagnostic RTC →
            </a>
            
            <p className="text-xs text-muted-foreground mt-4 text-center">⚠️ Attention : je ne prends que 2 nouveaux partenaires ce mois-ci pour garantir mes résultats.
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default CTASection;