import { CTAButton, Eyebrow, GoldItalic, GridBG, Marginalia, Ticker } from "./Primitives";

export const NavBar = () => (
  <nav className="rtc-nav">
    <a href="#top" style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <span
        style={{
          display: "inline-block",
          width: 10,
          height: 10,
          background: "hsl(var(--accent))",
        }}
      />
      <span style={{ fontWeight: 500 }}>RTC</span>
      <span style={{ color: "var(--fg-muted)" }}>// Copywriting</span>
    </a>
    <div style={{ display: "flex", gap: 28 }} className="rtc-nav-links">
      <a href="#diagnostic">Diagnostic</a>
      <a href="#architecture">Architecture</a>
      <a href="#offre">Offre</a>
      <a href="#faq">FAQ</a>
    </div>
    <a
      href="https://cal.com/ismaelkarioui/diagnostic"
      style={{
        background: "hsl(var(--accent))",
        color: "#fff",
        padding: "10px 18px",
        letterSpacing: "0.2em",
      }}
    >
      Réserver →
    </a>
  </nav>
);

const HeroSection = ({
  intensity = "quiet",
  showTicker = false,
}: {
  intensity?: "bold" | "quiet";
  showTicker?: boolean;
}) => {
  const quiet = intensity === "quiet";
  return (
    <section
      id="top"
      style={{ position: "relative", paddingTop: 120, overflow: "hidden" }}
    >
      <GridBG opacity={quiet ? 0.03 : 0.05} />

      <div className="wrap-wide" style={{ position: "relative" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(120px, 1fr) 8fr 4fr",
            gap: 32,
            alignItems: "start",
            marginBottom: 40,
          }}
        >
          <Marginalia label="Prologue" index="00" />
          <Eyebrow>
            Pour les infopreneurs qui ont une audience, une offre qui marche,
            et un lancement à orchestrer
          </Eyebrow>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--fg-muted)",
              textAlign: "right",
            }}
          >
            <span className="rtc-pulse" style={{ color: "var(--danger)" }}>
              ● EN COURS
            </span>
            &nbsp;&nbsp;/&nbsp;&nbsp;2 places restantes
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(120px, 1fr) 7fr 4fr",
            gap: 40,
            alignItems: "start",
            position: "relative",
          }}
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                fontSize: 80,
                lineHeight: 0.9,
                color: "hsl(var(--accent))",
                fontWeight: 900,
              }}
            >
              I.
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "var(--fg-muted)",
                marginTop: 12,
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                height: 180,
              }}
            >
              Architecture narrative RTC
            </div>
          </div>

          <div>
            <h1
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 900,
                fontSize: quiet
                  ? "clamp(44px, 5.8vw, 88px)"
                  : "clamp(52px, 8.2vw, 128px)",
                lineHeight: 0.92,
                letterSpacing: "-0.035em",
                margin: 0,
                color: "var(--fg-bright)",
              }}
            >
              Vous portez l'offre.
              <br />
              <GoldItalic>Je porte la copie</GoldItalic>
              <br />
              <GoldItalic>qui la vend.</GoldItalic>
              <span
                className="rtc-blink"
                style={{ color: "hsl(var(--accent))", fontWeight: 400 }}
              >
                _
              </span>
            </h1>
          </div>

          <aside
            style={{
              position: "relative",
              borderLeft: "1px solid hsl(var(--border))",
              paddingLeft: 28,
              paddingTop: 8,
              display: "flex",
              flexDirection: "column",
              gap: 28,
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.3em",
                textTransform: "uppercase",
                color: "var(--fg-muted)",
              }}
            >
              Note du diagnosticien
            </div>

            <p
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 19,
                lineHeight: 1.45,
                margin: 0,
                color: "var(--fg-bright)",
                fontWeight: 400,
              }}
            >
              Architecte copy de votre prochain lancement, du premier script
              d'ads au dernier email de relance.
              <span style={{ color: "var(--fg-muted)" }}>
                {" "}
                Un seul cerveau sur les ads, la LP d'inscription, la séquence
                pré-événement, le script, le bon de commande, et les emails de
                relance. Pour que la promesse qui décide votre prospect à
                cliquer soit la même que celle qui le décide à acheter.
              </span>
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                color: "var(--fg-muted)",
              }}
            >
              <span
                style={{
                  fontSize: 28,
                  lineHeight: 1,
                  color: "var(--fg-bright)",
                }}
              >
                —
              </span>
              <div>
                <div
                  style={{
                    color: "var(--fg-bright)",
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Ismaël Karioui
                </div>
                <div>Architecte copy de lancement · A à Z</div>
              </div>
            </div>
          </aside>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(120px, 1fr) 11fr",
            gap: 40,
            marginTop: 64,
          }}
        >
          <div />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              flexWrap: "wrap",
            }}
          >
            <div style={{ minWidth: 280, maxWidth: 360 }}>
              <CTAButton href="https://cal.com/ismaelkarioui/diagnostic" block>
                Réserver l'appel diagnostic
              </CTAButton>
            </div>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                color: "var(--fg-muted)",
              }}
            >
              Gratuit · Sans engagement · 30 min
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 80,
            paddingBottom: 24,
          }}
        >
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "hsl(var(--accent))",
              animation: "rtcBob 2s infinite ease-in-out",
            }}
          >
            ↓ Voir comment se passe un lancement orchestré
          </div>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "var(--fg-muted)",
            }}
          >
            §&nbsp;Rétention · Tension · Conversion
          </div>
        </div>
      </div>

      {showTicker && (
        <Ticker
          items={[
            "Architecte copy de lancement A à Z",
            "Une seule plume du premier euro d'ad au dernier mail de cart",
            "5 000 € + 8% au-delà du break-even",
            "Garantie : 2e lancement sans nouveau fee si non rentable",
            "Livraison 2 à 3 mois clé-en-main",
            "Infopreneurs 15 k€+/mois · 5 000 contacts+",
            "Phase bêta-test · 2 places restantes",
          ]}
          style={{ marginTop: 40 }}
        />
      )}
    </section>
  );
};

export default HeroSection;
