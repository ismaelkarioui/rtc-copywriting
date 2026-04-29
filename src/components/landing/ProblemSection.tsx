import { Eyebrow, GoldItalic, Marginalia, Section } from "./Primitives";

const ProblemSection = () => {
  const items = [
    {
      tag: "A",
      s: "Le piège du brief séparé",
      d: "Quand 6 actifs copy sont rédigés par 6 personnes différentes, le prospect change d'univers narratif 6 fois entre le clic sur l'ad et le bouton « acheter ». Chaque rupture coûte 10 à 20% de conversion.",
      stat: "−10/20%",
      statLabel: "Conv. par rupture",
    },
    {
      tag: "B",
      s: "L'angle mort du dirigeant",
      d: "Vous êtes l'expert produit, pas le copywriter. Paradoxalement, vous n'êtes pas le mieux placé pour promouvoir votre offre, à cause de la \"malédiction de la connaissance\".",
      stat: "2 h",
      statLabel: "Du matin · veille J",
    },
    {
      tag: "C",
      s: "Le coût caché du \"on verra bien\"",
      d: "Un lancement médiocre fout en l'air 2 mois de travail, 15–20k€ de budget ads, et la confiance de votre liste email.",
      stat: "15–20k€",
      statLabel: "Budget ads brûlé",
    },
  ];

  return (
    <Section
      id="diagnostic"
      label="01 Diagnostic"
      style={{
        padding: "var(--section-pad, 120px) 0",
        borderTop: "1px solid hsl(var(--border))",
        position: "relative",
      }}
    >
      <div className="wrap-wide">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(120px, 1fr) 6fr 5fr",
            gap: 40,
            alignItems: "start",
            marginBottom: 100,
          }}
        >
          <Marginalia label="Chapitre 01" index="§ I" />

          <div>
            <Eyebrow num="01" style={{ marginBottom: 32 }}>
              Ce que personne ne vous dit
            </Eyebrow>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                margin: 0,
                fontSize: "clamp(40px, 5.4vw, 84px)",
                lineHeight: 0.98,
                letterSpacing: "-0.025em",
                color: "var(--fg-bright)",
              }}
            >
              <GoldItalic>
                La plupart des lancements ne ratent pas par manque de stratégie,
              </GoldItalic>
              <br />
              ils ratent parce que le copy est décousu de bout en bout
            </h2>
          </div>

          <div style={{ paddingTop: 60 }}>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                margin: 0,
                color: "var(--fg)",
                maxWidth: 420,
              }}
            >
              Vous avez probablement déjà fait un lancement. Et vous avez vu le
              truc&nbsp;: la séquence pré-événement est écrite par votre
              assistante, les ads par un freelance, le webi par vous (à 2h du
              matin, la veille), le bon de commande par un autre prestataire,
              les emails de relance par ChatGPT (à 1h du matin, cette fois).
            </p>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.7,
                margin: "16px 0 0",
                color: "var(--fg-muted)",
                maxWidth: 420,
              }}
            >
              Six personnes, six tons, six promesses légèrement décalées. Le
              prospect arrive en bout de chaîne avec le cerveau dans le flou et
              il ne signe pas. Ce n'est pas votre offre qui n'a pas marché,
              c'est le tunnel qui a fui à chaque étage.
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            borderTop: "1px solid var(--border-strong)",
            borderBottom: "1px solid var(--border-strong)",
          }}
        >
          {items.map((it, i) => (
            <div
              key={i}
              className="rtc-row"
              style={{
                padding: "40px 32px 48px",
                borderRight: i < 2 ? "1px solid hsl(var(--border))" : "none",
                position: "relative",
                transform: i === 1 ? "translateY(40px)" : "none",
                background: i === 1 ? "var(--bg-alt)" : "transparent",
                transition: "background .3s",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                  marginBottom: 32,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontWeight: 900,
                    fontSize: 52,
                    lineHeight: 1,
                    color: "hsl(var(--accent))",
                  }}
                >
                  {it.tag}.
                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    letterSpacing: "0.3em",
                    color: "var(--fg-muted)",
                  }}
                >
                  SYMPTÔME {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <h3
                className="rtc-row-headline"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 26,
                  fontWeight: 700,
                  lineHeight: 1.15,
                  margin: "0 0 18px",
                  color: "var(--fg-bright)",
                  letterSpacing: "-0.01em",
                }}
              >
                {it.s}
              </h3>

              <p
                style={{
                  fontSize: 14.5,
                  color: "var(--fg)",
                  lineHeight: 1.65,
                  margin: "0 0 32px",
                }}
              >
                {it.d}
              </p>

              <div
                style={{
                  borderTop: "1px solid hsl(var(--border))",
                  paddingTop: 16,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                }}
              >
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    letterSpacing: "0.24em",
                    textTransform: "uppercase",
                    color: "var(--fg-muted)",
                  }}
                >
                  {it.statLabel}
                </span>
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: 28,
                    color: "var(--danger)",
                  }}
                >
                  {it.stat}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 140,
            display: "grid",
            gridTemplateColumns: "minmax(120px, 1fr) 10fr 1fr",
            gap: 40,
          }}
        >
          <Marginalia label="Credo" index="¶" />
          <blockquote
            style={{
              margin: 0,
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(28px, 3.8vw, 52px)",
              lineHeight: 1.15,
              letterSpacing: "-0.015em",
              color: "var(--fg-bright)",
              position: "relative",
              paddingLeft: 48,
              borderLeft: "2px solid hsl(var(--accent))",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: -2,
                top: -32,
                fontSize: 100,
                color: "hsl(var(--accent))",
                lineHeight: 1,
                fontStyle: "normal",
              }}
            >
              «
            </span>
            Un lancement à 6 chiffres ne se construit pas avec 6 prestataires,
            <br />
            il se construit avec un{" "}
            <GoldItalic>
              cerveau copy qui pense l'ensemble comme une seule histoire.
            </GoldItalic>
          </blockquote>
        </div>
      </div>
    </Section>
  );
};

export default ProblemSection;
