import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "Why €1650 and not €500 or €15,000?",
    a: "Because this isn't a Fiverr script and it isn't a 3-month agency retainer. It's a single, high-impact deliverable priced to be covered by the first 2-3 sales it generates for most offers. The guarantee removes the risk entirely."
  },
  {
    q: "What if I don't have an offer yet?",
    a: "Then you're not ready for a VSL. We work with businesses that have a proven offer and are spending (or about to spend) money on traffic. If you're still validating, come back when the offer is solid. We'll be here."
  },
  {
    q: "How is this different from hiring a freelance copywriter?",
    a: "A freelance copywriter writes words. We engineer a conversion mechanism — the psychological sequence that holds attention and moves a viewer from skepticism to purchase. The script is the output. The architecture is the value."
  },
  {
    q: "How long does the process take?",
    a: "7-10 business days from kick-off to final script delivery. The slide deck, LP audit, and tech integration follow within 5 business days after script approval. Total time to a live, running funnel: roughly 3 weeks."
  },
  {
    q: "Do you write in French or English?",
    a: "Both. The psychological frameworks are language-agnostic. The execution is native-level in both languages."
  },
  {
    q: "What does the guarantee actually cover?",
    a: "If you deploy the VSL as delivered, run traffic to it, and it doesn't generate enough revenue to cover the €1650 fee within 90 days — we refund the full amount. We'll ask to see your ad spend and traffic data, because we need to verify the video actually ran. Fair."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 lg:px-12 relative">
      <div className="absolute inset-0 bg-card" />
      
      <div className="relative max-w-4xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6 block">
            Objections
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            You're still reading.<br />
            <span className="text-muted-foreground text-3xl md:text-4xl">These might be why.</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className="border-t border-border"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left py-6 flex items-start justify-between gap-8 group"
              >
                <span className="text-lg font-serif font-medium group-hover:text-primary transition-colors duration-200">
                  {faq.q}
                </span>
                <span className="font-mono text-sm text-primary shrink-0 mt-1">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>
              
              <motion.div
                initial={false}
                animate={{ 
                  height: openIndex === i ? "auto" : 0,
                  opacity: openIndex === i ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="text-secondary-foreground leading-relaxed pb-6 pr-12">
                  {faq.a}
                </p>
              </motion.div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
