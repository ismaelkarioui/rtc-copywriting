import logoRtc from "@/assets/logo-rtc.png";

const FooterSection = () => {
  const cols: { h: string; items: [string, string][] }[] = [
    {
      h: "Navigation",
      items: [
        ["Diagnostic", "#diagnostic"],
        ["Approche", "#architecture"],
        ["Partenariat", "#offre"],
        ["Garantie", "#garantie"],
        ["FAQ", "#faq"],
      ],
    },
    {
      h: "Contact",
      items: [
        ["Réserver", "https://cal.com/ismaelkarioui/diagnostic"],
        ["Diagnostic", "https://cal.com/ismaelkarioui/diagnostic"],
      ],
    },
    {
      h: "Mentions",
      items: [
        ["CGV", "#"],
        ["Politique", "#"],
      ],
    },
  ];

  return (
    <footer
      style={{
        borderTop: "1px solid hsl(var(--border))",
        background: "var(--bg)",
        paddingTop: 64,
      }}
    >
      <div className="wrap-wide">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 40,
            paddingBottom: 48,
            borderBottom: "1px solid hsl(var(--border))",
          }}
        >
          <div>
            <img
              src={logoRtc}
              alt="RTC Copywriting"
              style={{
                height: 48,
                width: "auto",
                display: "block",
                marginBottom: 16,
              }}
            />
            <p
              style={{
                fontSize: 13,
                color: "var(--fg-muted)",
                maxWidth: 380,
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Architecte copy de lancement. Un seul cerveau du premier script
              d'ads au dernier email de relance. Pour que la promesse qui décide
              votre prospect à cliquer soit la même que celle qui le décide à
              acheter.
            </p>
          </div>
          {cols.map((col, i) => (
            <div key={i}>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  color: "hsl(var(--accent))",
                  marginBottom: 16,
                }}
              >
                {col.h}
              </div>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                {col.items.map(([t, h], j) => (
                  <li key={j}>
                    <a
                      href={h}
                      style={{
                        color: "var(--fg)",
                        textDecoration: "none",
                        fontSize: 14,
                        transition: "color .2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "hsl(var(--accent))")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--fg)")
                      }
                    >
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px 0 32px",
            flexWrap: "wrap",
            gap: 16,
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.24em",
            textTransform: "uppercase",
            color: "var(--fg-muted)",
          }}
        >
          <span>
            Ismaël Karioui · Paris, FR · © {new Date().getFullYear()}
          </span>
          <span>RTC / Architecte copy de lancement</span>
        </div>
      </div>

      <div
        aria-hidden
        style={{
          overflow: "hidden",
          borderTop: "1px solid hsl(var(--border))",
          padding: "24px 0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontWeight: 900,
            fontSize: "clamp(80px, 22vw, 340px)",
            lineHeight: 0.85,
            letterSpacing: "-0.04em",
            WebkitTextStroke: "1px hsl(var(--border))",
            color: "transparent",
            whiteSpace: "nowrap",
            userSelect: "none",
          }}
        >
          RTC&nbsp;Copywriting
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
