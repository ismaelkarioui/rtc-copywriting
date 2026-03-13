import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
{
  q: "Pourquoi une mise en place de tout l'écosystème à 2 000€ alors que d'autres facturent 2500€ rien que pour la VSL ?",
  a: "Parce que je suis un partenaire qui prend le risque avec vous sur les résultats, alors que les autres vous facturent une prestation et se lavent les mains pour le reste."
},
{
  q: "Et si je n'ai pas encore validé mon offre en organique ?",
  a: "Alors nous ne pouvons pas collaborer pour l'instant parce que mon système est conçu pour scaler des offres qui génèrent déjà 10k€ à 50k€+/mois et qui ont besoin d'être rentables sur du trafic froid pour passer le cap des 100k€. Si vous atteignez ce stade prochainement, on pourra travailler ensemble."
},
{
  q: "Comment calculez-vous les 15% de chiffre d'affaires \"supplémentaire\" ?",
  a: "Nous établissons ensemble votre moyenne de revenus actuelle. Je ne prends 15% que sur l'argent généré au-delà de ce palier grâce au nouvel écosystème. Je ne gagne que si vous êtes en croissance."
},
{
  q: "Combien de temps prend le déploiement de l'écosystème ?",
  a: "Comptez 1 mois entre notre appel stratégique de lancement et la livraison clé-en-main de tous les actifs (ads, LP, VSL, emails et bonus)."
},
{
  q: "Que se passe-t-il si les publicités s'épuisent ?",
  a: "C'est prévu dans le deal : tant que nous sommes partenaires, je vous fournis 3 nouveaux scripts d'ads chaque mois pour relancer votre acquisition sans aucuns frais supplémentaires."
}];

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
          viewport={{ once: true }}>
          
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6 block">FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">
            Réponses aux<br />
            <span className="text-muted-foreground text-3xl md:text-4xl">questions fréquentes</span>
          </h2>
        </motion.div>

        <div className="space-y-0">
          {faqs.map((faq, i) =>
          <motion.div
            key={i}
            className="border-t border-border"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}>
            
              <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left py-6 flex items-start justify-between gap-8 group">
              
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
              className="overflow-hidden">
              
                <p className="text-secondary-foreground leading-relaxed pb-6 pr-12">
                  {faq.a}
                </p>
              </motion.div>
            </motion.div>
          )}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>);

};

export default FAQSection;