import { useState } from "react";
import { Eyebrow, GoldItalic, Marginalia, Section } from "./Primitives";

const faqs = [
  {
    q: "Pourquoi 5 000 € de frais alors que d'autres facturent 15–25k€ pour le copy d'un lancement ?",
    a: "Parce que c'est de la phase bêta-test. Je veux 2-3 études de cas chiffrées avant de passer au pricing premium. C'est une fenêtre d'opportunité que vous pouvez saisir, mais elle se fermera après le 3e lancement signé pour cette offre.",
  },
  {
    q: "Et si je n'ai jamais fait de lancement avant ?",
    a: "Pas un problème en soi, à condition que votre offre soit déjà vendue (en organique, en 1-to-1, ou en VSL evergreen). Je suis architecte copy de lancement, pas validateur de produit. Si l'offre n'a jamais convaincu personne, le copy ne fera pas le boulot à sa place.",
  },
  {
    q: "Comment vous calculez le seuil de rentabilité sur lequel se déclenche le 8% ?",
    a: "Pendant la phase de diagnostic stratégique préalable, on chiffre ensemble : votre budget ads alloué + les frais de plateforme et d'outils. La somme est figée contractuellement avant qu'on signe la phase exécution. Pas de réajustement en cours de route. Votre forfait de 5 000 € n'entre pas dans le seuil de rentabilité, il est à part.",
  },
  {
    q: "Ça veut dire que vous touchez 8% sur tout le CA si le lancement cartonne ?",
    a: "8% sur le CA encaissé au-delà du seuil de rentabilité, pas sur le CA total. Concrètement : si votre seuil est à 20 000 € et que vous faites 100 000 € de CA, je touche 8% sur 80 000 € = 6 400 €. Sur un lancement qui passe à 200 000 €, je touche 8% sur 180 000 € = 14 400 €.",
  },
  {
    q: "Combien de temps prend le projet de bout en bout ?",
    a: "Comptez 2 à 3 mois entre la signature et la livraison du dernier actif. La fenêtre du lancement vient ensuite, plus le post-mortem 1-2 semaines après.",
  },
  {
    q: "Vous bossez avec mon équipe ou vous travaillez seul ?",
    a: "Je rédige tout le copy moi-même ou je supervise d'autres copywriters si nécessaire. Je coordonne avec vos prestataires sur les briefs (designer slides, monteur, ads manager, dev tunnel). Je ne gère pas la logistique événementielle ni les outils.",
  },
  {
    q: "Que se passe-t-il si je veux changer d'offre entre le premier et le second lancement (en cas de déclenchement de la garantie) ?",
    a: "La garantie de continuation gratuite tombe. Elle est conçue pour itérer sur la même offre, pas pour lancer un produit différent. Si vous voulez pivoter complètement, c'est une nouvelle mission.",
  },
  {
    q: "Quels sont les prérequis pour qu'on puisse bosser ensemble ?",
    a: "15 000 €/mois de CA minimum, liste email de 5 000 contacts minimum, et une offre qui s'est déjà vendue (organique, 1-to-1, ou lancement précédent). En dessous de ces seuils, le dispositif lancement n'est pas le bon levier, même si on peut en parler quand même en appel pour vous orienter.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number>(0);
  return (
    <Section
      id="faq"
      label="05 FAQ"
      tinted
      style={{
        padding: "var(--section-pad, 120px) 0",
        borderTop: "1px solid hsl(var(--border))",
      }}
    >
      <div className="wrap-wide">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(120px, 1fr) 5fr 6fr",
            gap: 40,
            alignItems: "start",
          }}
        >
          <Marginalia label="Chapitre 05" index="§ V" />
          <div>
            <Eyebrow num="05" style={{ marginBottom: 32 }}>
              Questions fréquentes
            </Eyebrow>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(40px, 5vw, 72px)",
                lineHeight: 0.98,
                letterSpacing: "-0.025em",
                margin: "0 0 32px",
                color: "var(--fg-bright)",
              }}
            >
              Les questions
              <br />
              qu'on me pose
              <br />
              <GoldItalic>avant de signer</GoldItalic>
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: 15,
                color: "var(--fg-muted)",
                lineHeight: 1.65,
                maxWidth: 360,
              }}
            >
              Une question manquante&nbsp;? On en parle pendant l'appel
              diagnostic.
            </p>
          </div>

          <div>
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={i}
                  className={"rtc-faq-item " + (isOpen ? "is-open" : "")}
                  style={{
                    borderTop:
                      i === 0
                        ? "1px solid var(--border-strong)"
                        : "1px solid hsl(var(--border))",
                  }}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    style={{
                      width: "100%",
                      textAlign: "left",
                      padding: "26px 0",
                      display: "grid",
                      gridTemplateColumns: "auto 1fr auto",
                      gap: 20,
                      alignItems: "start",
                      background: "transparent",
                      border: 0,
                      cursor: "pointer",
                      color: "inherit",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 11,
                        letterSpacing: "0.2em",
                        color: "hsl(var(--accent))",
                        paddingTop: 4,
                      }}
                    >
                      Q·{String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="rtc-faq-q"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 20,
                        fontWeight: 500,
                        lineHeight: 1.35,
                        color: "var(--fg-bright)",
                      }}
                    >
                      {f.q}
                    </span>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        color: "hsl(var(--accent))",
                        fontSize: 18,
                        paddingTop: 2,
                        transform: isOpen ? "rotate(45deg)" : "rotate(0)",
                        transition: "transform .3s",
                        display: "inline-block",
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div
                    style={{
                      overflow: "hidden",
                      maxHeight: isOpen ? 400 : 0,
                      opacity: isOpen ? 1 : 0,
                      transition:
                        "max-height .4s cubic-bezier(.22,1,.36,1), opacity .3s",
                    }}
                  >
                    <p
                      style={{
                        color: "var(--fg)",
                        lineHeight: 1.7,
                        padding: "0 48px 28px 56px",
                        margin: 0,
                        fontSize: 15,
                      }}
                    >
                      {f.a}
                    </p>
                  </div>
                </div>
              );
            })}
            <div style={{ borderTop: "1px solid var(--border-strong)" }} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default FAQSection;
