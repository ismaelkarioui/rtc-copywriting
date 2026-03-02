import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
{
  q: "Pourquoi 1 650 € et pas 500 € ou 15 000 € ?",
  a: "Parce que ce n'est ni un script Fiverr, ni un retainer d'agence sur 3 mois. C'est un livrable unique à fort impact, tarifé pour être couvert par les 2-3 premières ventes qu'il génère pour la plupart des offres. La garantie élimine tout risque."
},
{
  q: "Et si je n'ai pas encore d'offre ?",
  a: "Alors vous n'êtes pas prêt pour une VSL. Je travaille avec des entrepreneurs qui ont une offre validée et qui dépensent (ou s'apprêtent à dépenser) en publicité. Si vous êtes encore en phase de validation, revenez quand vous aurez la capacité de passer à l'échelle grâce à la publicité."
},
{
  q: "En quoi c'est différent d'un copywriter freelance classique ?",
  a: "Un copywriter classique écrit des mots. Moi, j'ingénierie un mécanisme de conversion — la séquence psychologique qui capte l'attention et fait passer un spectateur du scepticisme à l'achat. Le script est le livrable. L'architecture est la valeur."
},
{
  q: "Combien de temps dure le processus ?",
  a: "7 à 10 jours ouvrés du lancement à la livraison du script final. Le slide deck, l'audit LP et l'intégration technique suivent dans les 5 jours ouvrés après validation du script. Délai total pour un funnel en ligne qui tourne : environ 3 semaines."
},
{
  q: "Tu travailles en français ou en anglais ?",
  a: "Les deux. Les frameworks psychologiques sont agnostiques de la langue. L'exécution est de niveau natif dans les deux."
},
{
  q: "La garantie couvre quoi exactement ?",
  a: "Si vous déployez la VSL telle que livrée, que vous envoyez du trafic dessus, et qu'elle ne génère pas assez de revenus pour couvrir les 1 650 € sous 90 jours — je rembourse intégralement. Je demanderai à voir vos dépenses pub et données de trafic, parce que je dois vérifier que la vidéo a bien tourné. Fair."
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
          <h2 className="text-4xl md:text-5xl font-serif font-bold">
            Vous lisez encore.<br />
            <span className="text-muted-foreground text-3xl md:text-4xl">Voici probablement pourquoi.</span>
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
