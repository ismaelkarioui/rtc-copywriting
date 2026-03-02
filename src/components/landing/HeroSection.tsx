import { motion } from "framer-motion";
import logoRtc from "@/assets/logo-rtc.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.04]" style={{
        backgroundImage: 'linear-gradient(hsl(215 50% 20%) 1px, transparent 1px), linear-gradient(90deg, hsl(215 50% 20%) 1px, transparent 1px)',
        backgroundSize: '60px 60px'
      }} />
      
      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-12 py-[70px]">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>

            <div className="mb-8">
              <img alt="RTC Copywriting" className="h-36 md:h-24 w-auto" src="/lovable-uploads/15f3e3c4-4439-40da-84a9-f788f3b4f076.png" />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-900 leading-[0.9] tracking-tight mb-8">
              Vous <span className="italic text-gradient-gold">brûlez du cash en pubs</span> à cause d'une VSL qui ne prédispose pas vos prospects à la conversion ?
            </h1>
            
            <div className="line-gold w-32 mt-12 mb-8" />
            
            <p className="text-lg md:text-xl text-secondary-foreground max-w-xl leading-relaxed">
              Je bâtis des architectures de VSL qui scotchent leur regard et les qualifient un peu plus chaque minute jusqu'au CTA. Sans manipulation, ni fausse urgence. Avec une structure narrative chirurgicale.
            </p>
          </motion.div>

          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}>

            <div className="border border-border p-8 bg-card rounded-sm">
              <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase block mb-4">
                Rétention moyenne des spectateurs
              </span>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-6xl font-serif font-bold text-gradient-gold">83</span>
                <span className="text-2xl text-primary">%</span>
              </div>
              <p className="text-sm text-muted-foreground">
                sur les VSL de mes clients. Moyenne du marché : 37%.
              </p>
              <div className="mt-6 space-y-2">
                {[83, 91, 78, 88, 72].map((val, i) =>
                <div key={i} className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground w-8">V{i + 1}</span>
                    <div className="flex-1 h-1 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${val}%` }}
                      transition={{ delay: 0.8 + i * 0.15, duration: 0.6, ease: "easeOut" }} />

                    </div>
                    <span className="font-mono text-xs text-foreground w-8">{val}%</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          className="absolute bottom-12 left-6 lg:left-12"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}>

          <span className="font-mono text-xs text-muted-foreground tracking-wider uppercase">
            Découvrir comment sauver mon budget ↓
          </span>
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;