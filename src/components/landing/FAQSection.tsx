import { motion } from "framer-motion";
import { useState } from "react";

const faqs = [
{
  q: "Pourquoi facturer une VSL à un prix aussi dérisoire ?",
  a: "Je sais qu'une bonne VSL coûte en moyenne 2500€ sur le marché (et les prix s'envolent parfois bien au-dessus de ça), mais mon objectif est simple : vous faire une offre tellement irrésistible que vous aurez du mal à la refuser parce que vous en sortirez forcément gagnant. En échange, j'aurais de la matière pour faire une étude de cas et montrer l'efficacité de mon travail. C'est plutôt honnête, non ?"
},
{
  q: "Et si je n'ai pas encore d'offre ?",
  a: "Alors vous n'êtes pas prêt pour une VSL. Je travaille avec des entrepreneurs qui ont une offre validée et qui dépensent (ou s'apprêtent à dépenser) en publicité. Si vous êtes encore en phase de validation, revenez quand vous aurez la capacité de passer à l'échelle grâce à la publicité."
},
{
  q: "En quoi ça change d'un copywriter freelance classique ?",
  a: "Un copywriter classique écrit des mots et remplit un template prédéfini. Moi, je conçois une mécanique de conversion : la séquence psychologique qui capte l'attention et fait passer un spectateur du scepticisme à l'achat. Le script est le livrable, mais la vraie valeur, c'est l'architecture."
},
{
  q: "Combien de temps dure le processus ?",
  a: "Vos actifs vous sont fournis clé-en-main sous 21 jours."
},
{
  q: "La garantie couvre quoi exactement ?",
  a: "Si vous déployez la VSL telle que livrée, que vous envoyez du trafic dessus, et qu'elle ne génère pas assez de revenus pour couvrir les 1650€ que vous avez investis, faites-le-moi savoir. Vous verrez "+1650€" écrit en vert sur votre appli bancaire. C'est tout."
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
            Une dernière question ?<br />
            <span className="text-muted-foreground text-3xl md:text-4xl">Vous trouverez votre réponse ici.</span>
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
