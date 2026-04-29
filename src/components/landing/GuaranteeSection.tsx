import garantieImg from "@/assets/garantie.png";
import { GoldItalic, Marginalia, Section } from "./Primitives";

const GuaranteeSection = () => (
  <Section
    dark
    label="04 Garantie"
    style={{
      padding: "var(--section-pad, 120px) 0",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        opacity: 0.05,
        backgroundImage:
          "linear-gradient(hsl(35 90% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(35 90% 55%) 1px, transparent 1px)",
        backgroundSize: "120px 120px",
      }}
    />

    <div className="wrap-wide" style={{ position: "relative" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(120px, 1fr) 7fr 4fr",
          gap: 40,
          alignItems: "center",
        }}
      >
        <Marginalia
          label="Chapitre 04"
          index="§ IV"
          style={{ color: "hsl(215 15% 55%)" }}
        />

        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 12,
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "hsl(var(--accent))",
              marginBottom: 28,
              border: "1px solid hsl(var(--accent))",
              padding: "6px 14px",
            }}
          >
            <span style={{ width: 6, height: 6, background: "hsl(var(--accent))" }} />
            L'engagement
          </div>

          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "clamp(40px, 5.6vw, 88px)",
              lineHeight: 0.98,
              letterSpacing: "-0.025em",
              margin: "0 0 32px",
              color: "#fff",
            }}
          >
            Si votre lancement
            <br />
            ne dépasse pas le seuil de rentabilité,
            <br />
            <GoldItalic>on en refait un ensemble</GoldItalic>
            <br />
            sans aucun frais.
          </h2>

          <p
            style={{
              fontSize: 17,
              lineHeight: 1.65,
              margin: "0 0 24px",
              color: "hsl(40 20% 85%)",
              maxWidth: 640,
            }}
          >
            Je sais ce que représente la peur de bloquer 25 000 € (forfait +
            ads + outils) sur un dispositif qui peut faire flop. Donc voilà ce
            que je propose : si votre premier lancement ne dépasse pas le seuil
            de rentabilité, on remet ça. Je vous accompagne sur un second
            lancement{" "}
            <strong style={{ color: "#fff" }}>
              sans aucuns frais supplémentaires
            </strong>
            .
          </p>

          <p
            style={{
              fontSize: 15,
              lineHeight: 1.65,
              margin: "0 0 36px",
              color: "hsl(40 20% 75%)",
              maxWidth: 640,
            }}
          >
            Même mécanique de pourcentage. Vous repayez votre budget ads et
            c'est tout. La seule condition, c'est qu'on garde la même offre
            côté produit et que vous ayez appliqué les leçons stratégiques
            majeures du premier lancement.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: 0,
              borderTop: "1px solid hsl(215 20% 25%)",
              borderBottom: "1px solid hsl(215 20% 25%)",
              maxWidth: 640,
              marginBottom: 32,
            }}
          >
            {[
              ["2", "Lancements engagés"],
              ["0 €", "Nouveau forfait fixe"],
            ].map(([v, l], i) => (
              <div
                key={i}
                style={{
                  padding: "20px 14px",
                  borderRight: i < 1 ? "1px solid hsl(215 20% 25%)" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: 32,
                    fontWeight: 700,
                    color: "hsl(var(--accent))",
                    lineHeight: 1,
                  }}
                >
                  {v}
                </div>
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "hsl(40 20% 75%)",
                    marginTop: 8,
                  }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              fontSize: 22,
              lineHeight: 1.35,
              color: "#fff",
              margin: 0,
              maxWidth: 640,
              borderLeft: "2px solid hsl(var(--accent))",
              paddingLeft: 20,
            }}
          >
            Je m'engage avec vous sur 2 lancements si nécessaire pour atteindre
            la rentabilité. <GoldItalic>Pas un, deux.</GoldItalic>
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              position: "relative",
              width: 260,
              height: 260,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={garantieImg}
              alt="Garantie"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export default GuaranteeSection;
