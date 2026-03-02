import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-16">
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}>
          
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6 block">

          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">Vous payez pour de
            <br />
            <span className="italic text-gradient-gold">l'attention qui vous échappe</span>{" "}
            en une fraction de secondes
          </h2>
        </motion.div>

        <motion.div
          className="lg:col-span-7 space-y-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          
          <p className="text-lg text-secondary-foreground leading-relaxed">
            La publicité vous donne accès à quelques secondes d'une attention fracturée, mais si votre VSL ressemble à un script qui sent le réchauffé, vous ne perdez pas seulement de l'argent, vous perdez aussi votre autorité.
          </p>
          
          <div className="space-y-6 border-l border-border pl-8">
            {[
            {
              stat: "8 secondes",
              label: "C'est la durée d'attention moyenne d'un humain en 2026, soit moins que celle d'un poisson rouge.",
              detail: "Si l'accroche de votre VSL ne stoppe pas le scroll, c'est comme si vous n'existiez pas."
            },
            {
              stat: "73%",
              label: "d'abandon dans les 30 premières secondes de la plupart des VSL.",
              detail: "Votre offre n'est jamais entendue. Vos preuves ne sont jamais vues."
            },
            {
              stat: "+80%",
              label: "C'est l'augmentation moyenne du taux de conversion d'une page avec une vidéo performante.",
              detail: "Mais cela ne s'applique que si la vidéo est regardée. Une VSL ennuyeuse a un ROI de zéro, quel que soit le budget pub."
            }].
            map((item, i) =>
            <motion.div
              key={i}
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.15 }}>
              
                <div className="flex items-baseline gap-4 mb-1">
                  <span className="text-3xl font-serif font-bold text-primary">{item.stat}</span>
                  <span className="text-foreground font-medium">{item.label}</span>
                </div>
                <p className="text-sm text-muted-foreground ml-[calc(3ch+1rem)]">
                  {item.detail}
                </p>
              </motion.div>
            )}
          </div>

          <div className="pt-8">
            <p className="text-xl text-foreground font-serif italic">
              « On ne scale pas un budget publicitaire. On scale la capacité à capturer, à maintenir et à valoriser l'attention humaine. »
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default ProblemSection;
