import { motion } from "framer-motion";
import garantieImg from "@/assets/garantie.png";

const GuaranteeSection = () => {
  return (
    <section className="py-32 px-6 lg:px-12 relative">
      <div className="absolute inset-0 bg-card" />

      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}>

          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-8 block">
            GARANTIE TRANSFERT DE RISQUE
          </span>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-8">
            Si je ne casse pas votre plafond de verre,
            <br />
            <span className="italic text-gradient-gold">je travaille gratuitement</span>
          </h2>

          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-secondary-foreground leading-relaxed mb-8">
              Si, à l'issue des 30 premiers jours de lancement sur votre trafic froid, le nouvel écosystème ne fait pas baisser votre CPA ou ne génère pas de croissance mesurable par rapport à votre ancienne version, je travaille gratuitement jusqu'à ce que vous soyez rentables.
            </p>
          </div>

          <div className="inline-block border border-primary/30 px-8 py-4 mb-12">
            <span className="font-mono text-sm text-primary tracking-wider">
              ROI GARANTI — TRANSFERT DE RISQUE TOTAL
            </span>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex justify-center"
          >
            <img 
              src={garantieImg} 
              alt="Garantie Satisfait ou Remboursé" 
              className="w-72 h-72 md:w-96 md:h-96 object-contain"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>);

};
export default GuaranteeSection;