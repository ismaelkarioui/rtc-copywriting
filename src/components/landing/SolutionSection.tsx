import { motion } from "framer-motion";

const SolutionSection = () => {
  const steps = [
  {
    num: "01",
    title: "Les ads",
    desc: "On ne cherche pas à faire des \"vues\", on cherche à qualifier l'audience. Je rédige des angles publicitaires chirurgicaux pour abaisser votre CPL et préparer le terrain psychologique."
  },
  {
    num: "02",
    title: "La mise en tension narrative",
    desc: "Une landing page optimisée qui ne laisse aucune place à l'hésitation. L'objectif : que votre prospect se jette sur votre VSL pour obtenir ce qu'il désire."
  },
  {
    num: "03",
    title: "Le cœur du réacteur",
    desc: "Une VSL haute performance qui accroche l'attention et désamorce le scepticisme en temps réel. Quitter la vidéo devient une perte immense pour le spectateur."
  },
  {
    num: "04",
    title: "La relance post-VSL",
    desc: "Une séquence d'emails de vente chirurgicale pour rattraper les indécis dans les jours suivants et maximiser votre ROAS sans aucun effort de votre part."
  }];


  return (
    <section className="py-32 px-6 lg:px-12 relative">
      <div className="absolute inset-0 bg-card" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}>
          
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6 block">L'ARCHITECTURE DE CONVERSION

          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight max-w-4xl">
            Un écosystème aligné de{" "}
            <span className="text-gradient-gold italic">la première seconde de pub jusqu'à l'achat</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {steps.map((step, i) =>
          <motion.div
            key={i}
            className="grid lg:grid-cols-12 gap-8 py-12 border-t border-border group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}>
            
              <div className="lg:col-span-1">
                <span className="font-mono text-sm text-primary">{step.num}</span>
              </div>
              <div className="lg:col-span-4">
                <h3 className="text-2xl font-serif font-bold group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
              </div>
              <div className="lg:col-span-7">
                <p className="text-secondary-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

};

export default SolutionSection;