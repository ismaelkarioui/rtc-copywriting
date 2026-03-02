import { motion } from "framer-motion";

const SolutionSection = () => {
  const steps = [
  {
    num: "01",
    title: "Diagnostic de l'audience cible",
    desc: "On n'accroche pas un prospect sceptique avec une question rhétorique. On l'accroche en lui montrant qu'on formule son problème mieux que lui-même n'en est capable."
  },
  {
    num: "02",
    title: "Architecture de rétention optimale",
    desc: "Chaque mot en trop, chaque phrase inutile est une fuite potentielle. Je construis des structures à haute tension narrative où quitter la vidéo devient une perte immense pour le spectateur."
  },
  {
    num: "03",
    title: "Ingénierie du moment « Eurêka »",
    desc: "Ce n'est pas vous qui présentez votre offre en premier, c'est votre prospect qui réalise qu'elle est l'aboutissement logique de son cheminement. J'orchestre ce moment de bascule psychologique."
  },
  {
    num: "04",
    title: "Dissolution des barrières mentales",
    desc: "Je ne traite pas les objections, j'empêche leur formation. Chaque doute est désamorcé de manière fluide à l'intérieur du flux narratif."
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
          
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6 block">LA MÉTHODE RTC : rétention - tension - conversion

          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight max-w-3xl">
            Forger des{" "}
            <span className="text-gradient-gold italic">convictions</span>{" "}
            qui poussent à l'achat
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
