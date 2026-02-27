import { motion } from "framer-motion";

const SolutionSection = () => {
  const steps = [
    {
      num: "01",
      title: "Psychological Hook Architecture",
      desc: "We open with a pattern interrupt calibrated to your market's specific frustrations. Not a generic question. A surgical incision into the exact thought running through their head at 2am."
    },
    {
      num: "02",
      title: "Narrative Tension Engine",
      desc: "Every sentence earns the next. We build curiosity loops, open story threads, and deploy micro-commitments that make your viewer feel invested before they realize they are."
    },
    {
      num: "03",
      title: "Mechanism Reveal",
      desc: "Your offer isn't presented. It's discovered. We engineer the 'aha moment' so viewers feel like the purchase decision was their idea. Because it was. We just made it inevitable."
    },
    {
      num: "04",
      title: "Objection Dissolution",
      desc: "We don't handle objections — we prevent them from forming. Every doubt is pre-empted inside the narrative flow, so the CTA feels like relief, not pressure."
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
            The Method
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight max-w-3xl">
            We don't write scripts.
            <br />
            <span className="text-gradient-gold italic">We architect decisions.</span>
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
