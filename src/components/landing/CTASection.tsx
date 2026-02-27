import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-16 items-center">
        <motion.div 
          className="lg:col-span-7"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-8">
            Stop feeding the algorithm
            <br />
            <span className="text-gradient-gold italic">dead content.</span>
          </h2>
          <p className="text-lg text-secondary-foreground max-w-lg leading-relaxed mb-4">
            You've read this far because something about your current funnel isn't working. 
            You know it. Your ad spend report confirms it every month.
          </p>
          <p className="text-foreground max-w-lg">
            There are two options: keep optimizing audiences for a video that doesn't convert, 
            or fix the video.
          </p>
        </motion.div>

        <motion.div 
          className="lg:col-span-5"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <div className="border border-primary/30 p-10 glow-gold">
            <h3 className="font-serif text-2xl font-bold mb-4">Book a strategy call.</h3>
            <p className="text-sm text-secondary-foreground mb-8 leading-relaxed">
              15 minutes. No pitch. We analyze your current VSL or funnel, 
              tell you exactly what's leaking conversions, and whether we're the right fit.
            </p>
            
            <a
              href="#contact"
              className="block w-full text-center bg-primary text-primary-foreground font-mono text-sm tracking-wider uppercase py-4 px-8 hover:bg-gold-glow transition-colors duration-300"
            >
              Schedule the Call →
            </a>
            
            <p className="text-xs text-muted-foreground mt-4 text-center">
              No commitment. No follow-up spam. Just clarity.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
