import { Eyebrow, GoldItalic, Marginalia, Section } from "./Primitives";

const SolutionSection = () => {
  const steps = [
    {
      n: "01",
      label: "Diagnostic",
      t: "Le diagnostic stratégique.",
      d: "Avant d'écrire la moindre ligne, on cale l'angle, la big idea, l'architecture narrative du lancement, et le mécanisme d'engagement (webi vs challenge vs hybride). Ce diagnostic verrouille le brief avant qu'on signe la phase exécution. Pas de « on improvisera ».",
      role: "Verrouillage du brief",
    },
    {
      n: "02",
      label: "Acquisition",
      t: "L'écosystème d'acquisition.",
      d: "Scripts d'ads avec hooks alternatifs, LP d'inscription, page de remerciement, séquence pré-événement, SMS de rappel. Tout est calibré pour qu'un prospect froid arrive au jour J avec le même niveau d'engagement qu'un fan de votre liste email.",
      role: "Pré-événement",
    },
    {
      n: "03",
      label: "Cœur du lancement",
      t: "Le cœur du lancement.",
      d: "Le script du format long (VSL, webi ou challenge) annoté. Un livrable structuré, avec indications de mise en scène, de rythme, de moments d'interaction.",
      role: "Format long",
    },
    {
      n: "04",
      label: "Conversion",
      t: "La conversion.",
      d: "Bon de commande, order bump, upsell, séquence post-événement. Pour que le pic d'attention que vous avez créé pendant l'événement ne s'évapore pas dans les 48h qui suivent.",
      role: "Post-événement",
    },
  ];

  return (
    <Section
      id="architecture"
      label="02 Architecture"
      tinted
      style={{
        padding: "var(--section-pad, 120px) 0",
        position: "relative",
        borderTop: "1px solid hsl(var(--border))",
      }}
    >
      <div className="wrap-wide">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(120px, 1fr) 7fr 4fr",
            gap: 40,
            marginBottom: 100,
            alignItems: "end",
          }}
        >
          <Marginalia label="Chapitre 02" index="§ II" />
          <div>
            <Eyebrow num="02" style={{ marginBottom: 32 }}>
              L'approche
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
              Un seul architecte copy,
              <br />
              <GoldItalic>du premier script d'ads</GoldItalic>
              <br />
              jusqu'au dernier email de relance
            </h2>
          </div>
          <div style={{ paddingBottom: 20 }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--fg-muted)",
                marginBottom: 14,
              }}
            >
              1 cerveau copy · 1 big idea · 1 ton
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 15,
                lineHeight: 1.65,
                color: "var(--fg)",
                maxWidth: 380,
              }}
            >
              Un seul cerveau copy, c'est ce qui fait la différence entre un
              lancement qui plafonne et un lancement qui scale.
            </p>
          </div>
        </div>

        <div style={{ position: "relative" }}>
          {steps.map((s, i) => {
            const odd = i % 2 === 1;
            return (
              <div
                key={i}
                className="rtc-row"
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(120px, 1fr) 1fr 6fr 4fr",
                  gap: 40,
                  padding: "56px 0",
                  borderTop: "1px solid hsl(var(--border))",
                  alignItems: "start",
                  paddingLeft: odd ? 80 : 0,
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontStyle: "italic",
                      fontWeight: 900,
                      fontSize: 72,
                      lineHeight: 0.9,
                      color: "hsl(var(--accent))",
                    }}
                  >
                    {s.n}
                  </div>
                </div>

                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "var(--fg-muted)",
                    borderLeft: "1px solid hsl(var(--border))",
                    paddingLeft: 16,
                    paddingTop: 8,
                  }}
                >
                  {s.label}
                  <div style={{ marginTop: 10, color: "hsl(var(--accent))" }}>●</div>
                </div>

                <div>
                  <h3
                    className="rtc-row-headline"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontWeight: 700,
                      fontSize: "clamp(28px, 2.8vw, 40px)",
                      lineHeight: 1.1,
                      margin: "0 0 16px",
                      color: "var(--fg-bright)",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {s.t}
                  </h3>
                  <p
                    style={{
                      margin: 0,
                      fontSize: 16,
                      lineHeight: 1.65,
                      color: "var(--fg)",
                      maxWidth: 560,
                    }}
                  >
                    {s.d}
                  </p>
                </div>

                <div style={{ paddingTop: 12 }}>
                  <div
                    style={{
                      display: "inline-block",
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      color: "var(--fg-bright)",
                      padding: "6px 10px",
                      border: "1px solid var(--border-strong)",
                    }}
                  >
                    {s.role}
                  </div>
                </div>
              </div>
            );
          })}
          <div style={{ borderTop: "1px solid hsl(var(--border))" }} />
        </div>
      </div>
    </Section>
  );
};

export default SolutionSection;
