import { CTAButton, Eyebrow, GoldItalic, Marginalia, Section } from "./Primitives";

const OfferSection = () => {
  const scope = [
    {
      label: "Acquisition",
      items: [
        "5 scripts d'ads avec 2 hooks alternatifs (10 livrables)",
        "LP d'inscription",
        "Page de remerciement",
        "Séquence email de lancement (7 à 12 emails)",
        "SMS de rappel",
      ],
    },
    {
      label: "Cœur du lancement",
      items: ["1 script de format long (VSL, webi ou challenge)"],
    },
    {
      label: "Conversion",
      items: [
        "Bon de commande",
        "Order bump/upsell",
        "Séquence email de relance (5 à 10 emails)",
      ],
    },
  ];

  const bonuses = [
    {
      t: "Indications scénaristiques pour la production live",
      d: "Vos scripts ne sont pas livrés bruts. J'annote les moments-clés, les transitions, les patterns d'interaction (sondages, chat, Q&A timing) pour que vous et votre équipe sachiez exactement comment porter le texte en live.",
    },
    {
      t: "Post-mortem chiffré du lancement",
      d: "",
    },
  ];

  return (
    <Section
      id="offre"
      label="03 Offre"
      style={{
        padding: "var(--section-pad, 120px) 0",
        borderTop: "1px solid hsl(var(--border))",
      }}
    >
      <div className="wrap-wide">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(120px, 1fr) 7fr 4fr",
            gap: 40,
            marginBottom: 80,
            alignItems: "end",
          }}
        >
          <Marginalia label="Chapitre 03" index="§ III" />
          <div>
            <Eyebrow num="03" style={{ marginBottom: 32 }}>
              Le partenariat
            </Eyebrow>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "clamp(40px, 5.4vw, 84px)",
                lineHeight: 0.98,
                letterSpacing: "-0.025em",
                margin: 0,
                color: "var(--fg-bright)",
              }}
            >
              Architecte copy de votre prochain lancement.
              <br />
              <GoldItalic>De A à Z.</GoldItalic>
            </h2>
          </div>
          <p
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: 1.65,
              color: "var(--fg)",
              paddingBottom: 24,
              maxWidth: 380,
            }}
          >
            Je rédige et j'orchestre l'intégralité du copy de votre lancement,
            depuis la première ad jusqu'au dernier email de relance. Stratégie
            + exécution. Vous gardez la barre et moi, je tiens la copy.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 0,
            border: "1px solid var(--border-strong)",
            background: "var(--bg-elevated)",
            marginBottom: 80,
          }}
        >
          {scope.map((block, i) => (
            <div
              key={i}
              style={{
                padding: "40px 32px",
                borderRight: i < 2 ? "1px solid hsl(var(--border))" : "none",
                transform: i === 1 ? "translateY(24px)" : "none",
                background: i === 1 ? "var(--bg-alt)" : "transparent",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  paddingBottom: 16,
                  marginBottom: 24,
                  borderBottom: "1px solid var(--border-strong)",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontWeight: 900,
                    fontSize: 32,
                    color: "hsl(var(--accent))",
                  }}
                >
                  0{i + 1}.
                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "var(--fg-muted)",
                  }}
                >
                  Bloc {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 24,
                  fontWeight: 700,
                  margin: "0 0 20px",
                  color: "var(--fg-bright)",
                  letterSpacing: "-0.01em",
                }}
              >
                {block.label}
              </h3>
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
                {block.items.map((it, j) => (
                  <li
                    key={j}
                    style={{
                      display: "flex",
                      gap: 10,
                      fontSize: 13.5,
                      color: "var(--fg)",
                      lineHeight: 1.55,
                    }}
                  >
                    <span
                      style={{
                        color: "hsl(var(--accent))",
                        fontFamily: "'JetBrains Mono', monospace",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      ·
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "5fr 7fr",
            gap: 0,
            border: "1px solid var(--border-strong)",
            background: "var(--bg-elevated)",
          }}
        >
          <div
            style={{
              padding: "48px 40px",
              background: "var(--bg-alt)",
              borderRight: "1px solid hsl(var(--border))",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid var(--border-strong)",
                paddingBottom: 16,
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "hsl(var(--accent))",
                }}
              >
                Bonus inclus
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: "var(--fg-muted)",
                }}
              >
                +02
              </span>
            </div>

            {bonuses.map((b, i) => (
              <div
                key={i}
                style={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: 16,
                  padding: "20px 0",
                  borderTop: i === 0 ? "none" : "1px solid hsl(var(--border))",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontWeight: 900,
                    fontSize: 28,
                    lineHeight: 1,
                    color: "hsl(var(--accent))",
                  }}
                >
                  +0{i + 1}
                </div>
                <div>
                  <h4
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 18,
                      fontWeight: 700,
                      margin: "0 0 6px",
                      color: "var(--fg-bright)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {b.t}
                  </h4>
                  {b.d && (
                    <p
                      style={{
                        margin: 0,
                        fontSize: 13,
                        color: "var(--fg)",
                        lineHeight: 1.6,
                      }}
                    >
                      {b.d}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ padding: "48px 48px 40px", position: "relative" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                paddingBottom: 16,
                marginBottom: 32,
                borderBottom: "1px solid var(--border-strong)",
              }}
            >
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  color: "hsl(var(--accent))",
                }}
              >
                Modèle commercial
              </span>
              <span
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  color: "var(--fg-muted)",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}
              >
                Phase bêta-test
              </span>
            </div>

            <p
              style={{
                fontSize: 15,
                color: "var(--fg)",
                lineHeight: 1.65,
                margin: "0 0 36px",
                maxWidth: 560,
              }}
            >
              Au lieu d'un forfait fixe gonflé qui m'avantage quels que soient
              les retombées du lancement, je m'adosse à votre résultat.
            </p>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                gap: 0,
                marginBottom: 28,
                borderTop: "1px solid var(--border-strong)",
                borderBottom: "1px solid var(--border-strong)",
              }}
            >
              <div
                style={{
                  padding: "28px 0",
                  borderBottom: "1px solid hsl(var(--border))",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: 12,
                    gap: 16,
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      color: "var(--fg-muted)",
                    }}
                  >
                    Frais de mise en place
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                    <span
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 900,
                        fontSize: 48,
                        lineHeight: 0.9,
                        color: "var(--success)",
                      }}
                    >
                      5 000 €
                    </span>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        color: "var(--fg-muted)",
                        letterSpacing: "0.12em",
                      }}
                    >
                      HT
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 12.5,
                    color: "var(--fg-muted)",
                    lineHeight: 1.55,
                  }}
                >
                  50% à la signature · 50% à la livraison du dernier actif,
                  avant l'événement.
                </div>
              </div>
              <div style={{ padding: "28px 0" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: 12,
                    gap: 16,
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 10,
                      letterSpacing: "0.24em",
                      textTransform: "uppercase",
                      color: "var(--fg-muted)",
                    }}
                  >
                    Au-delà du seuil de rentabilité
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                    <span
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontWeight: 900,
                        fontSize: 48,
                        lineHeight: 0.9,
                        color: "hsl(var(--accent))",
                      }}
                    >
                      + 8%
                    </span>
                    <span
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: 10,
                        color: "var(--fg-muted)",
                        letterSpacing: "0.12em",
                      }}
                    >
                      du CA
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    fontSize: 12.5,
                    color: "var(--fg-muted)",
                    lineHeight: 1.55,
                  }}
                >
                  Seuil de rentabilité = budget ads + plateforme + outils. Tant
                  que vous n'avez pas couvert vos coûts, je ne touche rien.
                </div>
              </div>
            </div>

            <p
              style={{
                fontSize: 13,
                color: "var(--fg-muted)",
                borderLeft: "2px solid hsl(var(--accent))",
                paddingLeft: 14,
                margin: "0 0 28px",
                lineHeight: 1.6,
              }}
            >
              Je gagne uniquement quand vous êtes en bénéfice net.
            </p>

            <div
              className="rtc-pulse"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "var(--danger)",
                fontWeight: 500,
                textAlign: "left",
                marginBottom: 16,
                border: "1px solid var(--danger)",
                padding: "10px 14px",
                display: "inline-block",
              }}
            >
              ⚠ 2 places restantes — Phase bêta-test
            </div>

            <p
              style={{
                fontSize: 12,
                color: "var(--fg-muted)",
                margin: "0 0 24px",
                lineHeight: 1.55,
                maxWidth: 520,
              }}
            >
              Une fois la 3<sup>e</sup> étude de cas livrée, le forfait fixe
              passera à 10 000 €+ et le pourcentage s'ajustera.
            </p>

            <CTAButton block href="https://cal.com/ismaelkarioui/diagnostic">
              Réserver l'appel diagnostic →
            </CTAButton>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default OfferSection;
