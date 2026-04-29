import { CTAButton, GoldItalic } from "./Primitives";

const FinalCTASection = () => (
  <section
    style={{
      padding: "120px 0 140px",
      borderTop: "1px solid hsl(var(--border))",
      background: "var(--ink-bright)",
      color: "#fff",
      position: "relative",
      overflow: "hidden",
    }}
  >
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        opacity: 0.06,
        backgroundImage:
          "linear-gradient(hsl(35 90% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(35 90% 55%) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    />

    <div
      className="wrap-wide"
      style={{ position: "relative", textAlign: "center" }}
    >
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: "hsl(var(--accent))",
          marginBottom: 40,
        }}
      >
        — Épilogue —
      </div>
      <h2
        style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: "clamp(40px, 5.6vw, 92px)",
          lineHeight: 0.98,
          letterSpacing: "-0.03em",
          margin: "0 auto 40px",
          color: "#fff",
          maxWidth: 1200,
        }}
      >
        Votre prochain lancement peut être
        <br />
        <GoldItalic>celui qui vous fera passer un cap</GoldItalic>
        <br />
        ou un de plus dans la pile des essais ratés
      </h2>
      <p
        style={{
          fontSize: 17,
          lineHeight: 1.65,
          margin: "0 auto 48px",
          color: "hsl(40 20% 80%)",
          maxWidth: 700,
        }}
      >
        Si vous avez les ingrédients (l'audience, l'offre, l'envergure) et qu'il
        vous manque le cerveau copy qui orchestre tout, parlons-en.
      </p>
      <div style={{ maxWidth: 460, margin: "0 auto" }}>
        <CTAButton block href="https://cal.com/ismaelkarioui/diagnostic">
          Réserver l'appel diagnostic →
        </CTAButton>
      </div>
      <p
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10,
          letterSpacing: "0.24em",
          textTransform: "uppercase",
          color: "hsl(40 20% 60%)",
          marginTop: 20,
        }}
      >
        ⚠ 2 places restantes en phase bêta-test
      </p>
    </div>
  </section>
);

export default FinalCTASection;
