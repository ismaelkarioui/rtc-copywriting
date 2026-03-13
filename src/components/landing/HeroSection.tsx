import { motion } from "framer-motion";
import logoRtc from "@/assets/logo-rtc.png";

const HeroSection = () => {
  return (
    <section className="relative py-20 lg:min-h-screen flex items-center overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(hsl(215 50% 20%) 1px, transparent 1px), linear-gradient(90deg, hsl(215 50% 20%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-0">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <motion.div
            className="lg:col-span-12"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>

            <div className="mb-8">
              <img alt="RTC Copywriting" className="h-36 md:h-24 w-auto" src="/lovable-uploads/15f3e3c4-4439-40da-84a9-f788f3b4f076.png" />
            </div>

            <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6 block">
              POUR LES INFOPRENEURS QUI VEULENT PASSER LE CAP DES 100K€/MOIS
            </span>
            
            <h1 className="text-5xl md:text-7xl font-serif font-900 leading-[0.9] tracking-tight mb-8 max-w-5xl">
              Arrêtez de <span className="italic text-gradient-gold">brûler votre cash sur du trafic froid</span> à cause d'un tunnel VSL fracturé
            </h1>
            
            <div className="line-gold w-32 mt-8 mb-6" />
            
            <p className="text-lg md:text-xl text-secondary-foreground max-w-3xl leading-relaxed py-0 pb-[80px]">
              Votre coût par acquisition explose, vos marges se réduisent, et vos prospects sont mal qualifiés ? C'est le signe que votre tunnel VSL doit être réparé pour colmater les fuites et enfin scaler.
            </p>
          </motion.div>
        </div>
        
        <motion.div
          className="absolute bottom-12 left-6 lg:left-12"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}>

          <span className="font-mono text-xs tracking-wider uppercase text-primary my-0 py-[70px]">
            Découvrir comment réparer votre tunnel VSL ↓
          </span>
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;