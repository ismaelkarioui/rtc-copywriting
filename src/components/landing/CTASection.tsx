import { CTAButton, Eyebrow, GoldItalic, Marginalia, Section } from "./Primitives";

const CTASection = () => (
  <Section
    id="cta"
    label="06 CTA"
    style={{
      padding: "var(--section-pad, 120px) 0",
      borderTop: "1px solid hsl(var(--border))",
    }}
  >
    <div className="wrap-wide">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(120px, 1fr) 7fr 5fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        <Marginalia label="Chapitre 06" index="§ VI" />

        <div>
          <Eyebrow num="06" style={{ marginBottom: 32 }}>
            Prochain pas
          </Eyebrow>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(40px, 5.4vw, 80px)",
              lineHeight: 0.98,
              letterSpacing: "-0.025em",
              margin: "0 0 28px",
              color: "var(--fg-bright)",
            }}
          >
            Vous avez la liste, l'offre, l'envergure.
            <br />
            <GoldItalic>
              Reste à orchestrer le tout pour faire exploser votre CA.
            </GoldItalic>
          </h2>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.65,
              color: "var(--fg)",
              margin: 0,
              maxWidth: 560,
            }}
          >
            L'appel diagnostic dure 30 minutes. On regarde votre offre, votre
            audience, votre dernier lancement (si vous en avez fait un), et on
            évalue si un partenariat sur votre prochain lancement a du sens,
            pour vous comme pour moi.
          </p>
        </div>

        <div
          style={{
            border: "1px solid var(--border-strong)",
            background: "var(--bg-elevated)",
            padding: 40,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -1,
              left: 24,
              transform: "translateY(-50%)",
              background: "var(--bg)",
              padding: "0 14px",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "hsl(var(--accent))",
            }}
          >
            Appel diagnostic · 30 min · Gratuit
          </div>

          <h3
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: 28,
              margin: "12px 0 20px",
              color: "var(--fg-bright)",
              letterSpacing: "-0.01em",
            }}
          >
            Réserver l'appel diagnostic
          </h3>

          <p
            style={{
              fontSize: 14,
              color: "var(--fg)",
              lineHeight: 1.6,
              margin: "0 0 24px",
            }}
          >
            Audit de votre setup actuel, diagnostic stratégique de votre
            prochain lancement, et plan de bataille concret. Que vous bossiez
            avec moi ensuite ou non, vous repartez avec quelque chose d'utile.
          </p>

          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: "0 0 32px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {[
              "Audit du setup actuel",
              "Diagnostic stratégique du prochain lancement",
              "Plan de bataille concret livré pendant l'appel",
            ].map((t, i) => (
              <li
                key={i}
                style={{
                  display: "flex",
                  gap: 12,
                  fontSize: 14,
                  color: "var(--fg)",
                  lineHeight: 1.55,
                }}
              >
                <span
                  style={{
                    color: "hsl(var(--accent))",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontWeight: 700,
                  }}
                >
                  ✓
                </span>
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <CTAButton block href="https://cal.com/ismaelkarioui/diagnostic">
            Réserver maintenant →
          </CTAButton>

          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--danger)",
              textAlign: "center",
              marginTop: 16,
              marginBottom: 0,
            }}
          >
            ⚠ Plus que 2 places en phase bêta-test
          </p>
        </div>
      </div>
    </div>
  </Section>
);

export default CTASection;
