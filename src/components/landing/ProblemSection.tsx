import { motion } from "framer-motion";

const ProblemSection = () => {
  return (
    <section className="px-6 lg:px-12 max-w-7xl mx-auto py-[80px]">
      <div className="grid lg:grid-cols-12 gap-16">
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}>
          
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6 block">
            LE DIAGNOSTIC
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">Le manque de cohérence de votre tunnel
            <br />
            <span className="italic text-gradient-gold">détruit votre CPA</span>
          </h2>
        </motion.div>

        <motion.div
          className="lg:col-span-7 space-y-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          
          <p className="text-lg text-secondary-foreground leading-relaxed">
            Votre offre convertissait bien sur votre audience chaude. Mais face à des inconnus, c'est l'hécatombe. La pub vend une promesse, le titre de la landing page parle d'autre chose, et la VSL perd le prospect en 30 secondes. Ce manque de continuité psychologique sème le doute chez l'acheteur et fait exploser votre CPA.
          </p>
          
          <div className="space-y-6 border-l border-border pl-8">
            {[
            {
              stat: "Le mensonge de l'algorithme :",
              detail: "Vous vous plaignez des \"coûts qui montent\". La réalité, c'est que votre page ne retient pas l'attention pour laquelle vous payez une fortune."
            },
            {
              stat: "L'hémorragie des 30 secondes :",
              detail: "73% de vos prospects froids quittent votre vidéo avant même d'avoir entendu l'offre. S'ils ne regardent pas, votre ROI est de zéro."
            },
            {
              stat: "Piégé dans votre business :",
              detail: "Vous passez vos nuits à \"bricoler\" vos pages au lieu de diriger votre entreprise."
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
                  <span className="font-serif font-bold text-primary text-xl">{item.stat}</span>
                </div>
                <p className="text-sm text-muted-foreground ml-[1rem] border-l-2 border-border/50 pl-4 mt-2">
                  {item.detail}
                </p>
              </motion.div>
            )}
          </div>

          <div className="pt-8">
            <p className="text-xl text-foreground font-serif italic">
              « On ne scale pas un business en changeant le titre d'une page. On scale en construisant un écosystème narratif indestructible. »
            </p>
          </div>
        </motion.div>
      </div>
    </section>);

};

export default ProblemSection;