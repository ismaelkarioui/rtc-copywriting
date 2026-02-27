import { motion } from "framer-motion";

const OfferSection = () => {
  return (
    <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        className="mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6 block">
          The Offer
        </span>
        <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight max-w-4xl">
          One fixed price. <span className="italic text-gradient-gold">Everything handled.</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Core offer */}
        <motion.div
          className="border border-primary/30 p-10 md:p-14 glow-gold relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-4 left-10 bg-background px-4">
            <span className="font-mono text-xs tracking-widest uppercase text-primary">Core Deliverable</span>
          </div>
          
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            High-Retention VSL Script
          </h3>
          <p className="text-secondary-foreground leading-relaxed mb-8">
            A complete video sales letter script — researched, structured, and written to hold attention 
            past the point where your competitors lose it. Engineered around your specific offer, market, 
            and buyer psychology.
          </p>
          
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-5xl font-serif font-bold text-gradient-gold">€1650</span>
            <span className="text-muted-foreground font-mono text-sm">HT / one-time</span>
          </div>
          <p className="text-sm text-muted-foreground">
            No retainers. No recurring fees. No scope creep.
          </p>
        </motion.div>

        {/* Bonuses */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="mb-4">
            <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
              "Don't Lift a Finger" Bonuses
            </span>
          </div>

          {[
            {
              title: "Full VSL Slide Deck",
              desc: "Designed, formatted, ready to open and record. No staring at blank Canva templates."
            },
            {
              title: "Landing Page Audit & Rewrite",
              desc: "We rip apart the page where your VSL lives and rebuild the copy around it. Because a great video on a bad page is a waste."
            },
            {
              title: "Tech Integration",
              desc: "We plug it all in — Systeme.io, Clickfunnels, or GoHighLevel. You show up to a machine that's already running."
            }
          ].map((bonus, i) => (
            <div key={i} className="border border-border p-6 hover:border-gold-dim transition-colors duration-300">
              <div className="flex items-start gap-4">
                <span className="font-mono text-primary text-sm mt-1">+</span>
                <div>
                  <h4 className="font-serif text-lg font-bold mb-2">{bonus.title}</h4>
                  <p className="text-sm text-secondary-foreground leading-relaxed">{bonus.desc}</p>
                </div>
              </div>
            </div>
          ))}

          <p className="text-sm text-muted-foreground italic pt-4">
            Included at no additional cost. Not upsells. Not "limited time." Part of the package.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferSection;
