import { motion } from "framer-motion";

const SolutionSection = () => {
  const steps = [
    {
      num: "01",
      title: "Architecture d'Accroche Psychologique",
      desc: "J'ouvre avec un pattern interrupt calibré sur les frustrations exactes de votre marché. Pas une question générique. Une incision chirurgicale dans la pensée qui tourne en boucle dans la tête de votre prospect à 2h du matin."
    },
    {
      num: "02",
      title: "Moteur de Tension Narrative",
      desc: "Chaque phrase mérite la suivante. Je construis des boucles de curiosité, j'ouvre des fils narratifs et je déploie des micro-engagements qui rendent votre spectateur investi avant même qu'il ne s'en rende compte."
    },
    {
      num: "03",
      title: "Révélation du Mécanisme",
      desc: "Votre offre n'est pas présentée. Elle est découverte. J'ingénierie le moment « eurêka » pour que le prospect ait le sentiment que la décision d'achat vient de lui. Parce que c'est le cas. Je l'ai juste rendue inévitable."
    },
    {
      num: "04",
      title: "Dissolution des Objections",
      desc: "Je ne traite pas les objections — j'empêche leur formation. Chaque doute est désamorcé à l'intérieur du flux narratif, pour que le CTA ressemble à un soulagement, pas à une pression."
    }
  ];

  return (
    <section className="py-32 px-6 lg:px-12 relative">
      <div className="absolute inset-0 bg-card" />
      
      <div className="relative max-w-7xl mx-auto">
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6 block">
            La Méthode
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight max-w-3xl">
            Je n'écris pas des scripts.
            <br />
            <span className="text-gradient-gold italic">J'architecte des décisions.</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="grid lg:grid-cols-12 gap-8 py-12 border-t border-border group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
