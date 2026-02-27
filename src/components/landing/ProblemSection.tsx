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
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6 block">
            The Problem
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            You're paying for
            <br />
            <span className="italic text-gradient-gold">attention you never get.</span>
          </h2>
        </motion.div>

        <motion.div 
          className="lg:col-span-7 space-y-8"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg text-secondary-foreground leading-relaxed">
            Every euro you pour into ads buys you a shot. A few seconds of someone's fractured attention. 
            And what do they land on? A sales video that reads like a ransom note written by committee.
          </p>
          
          <div className="space-y-6 border-l border-border pl-8">
            {[
              {
                stat: "€47",
                label: "Average cost per qualified click in competitive niches.",
                detail: "That viewer gives you 8 seconds before the thumb moves."
              },
              {
                stat: "73%",
                label: "Drop off in the first 30 seconds of most VSLs.",
                detail: "Your offer never gets heard. Your proof never gets seen."
              },
              {
                stat: "€0",
                label: "Return on a video nobody watches.",
                detail: "The math doesn't lie. Boring is the most expensive word in advertising."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15 }}
              >
                <div className="flex items-baseline gap-4 mb-1">
                  <span className="text-3xl font-serif font-bold text-primary">{item.stat}</span>
                  <span className="text-foreground font-medium">{item.label}</span>
                </div>
                <p className="text-sm text-muted-foreground ml-[calc(3ch+1rem)]">
                  {item.detail}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="pt-8">
            <p className="text-xl text-foreground font-serif italic">
              "The problem is never traffic. The problem is what happens after the click."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
