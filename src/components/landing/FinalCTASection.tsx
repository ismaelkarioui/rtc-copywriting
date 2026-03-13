import { motion } from "framer-motion";

const FinalCTASection = () => {
  return (
    <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto border-t border-border/50">
      <div className="flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-8">
            Prêt à transformer votre tunnel VSL en{" "}
            <span className="text-gradient-gold italic">machine à conversion performante ?</span>
          </h2>
          <p className="text-lg text-secondary-foreground mb-12 leading-relaxed">
            Ne laissez plus votre budget publicitaire s'évaporer. Réservez votre diagnostic de 30 minutes pour identifier vos leviers d'optimisation immédiats.
          </p>
          
          <div className="w-full max-w-md mx-auto">
            <a
              href="https://cal.com/ismaelkarioui/diagnostic"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-primary text-primary-foreground font-mono text-sm tracking-wider uppercase py-5 px-10 hover:bg-gold-glow transition-all duration-300 shadow-xl glow-gold-sm mb-6"
            >
              Réserver mon diagnostic (30 min) →
            </a>
            <p className="text-xs text-muted-foreground">
              ⚠️ Rappel : je ne prends que 2 nouveaux partenaires ce mois-ci pour garantir mes résultats.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;