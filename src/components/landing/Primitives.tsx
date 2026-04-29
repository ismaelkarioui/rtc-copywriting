import { CSSProperties, ReactNode, useState } from "react";

type StyleProp = { style?: CSSProperties };

export const Eyebrow = ({
  children,
  num,
  style,
}: { children: ReactNode; num?: string } & StyleProp) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: 12,
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      letterSpacing: "0.3em",
      textTransform: "uppercase",
      color: "hsl(var(--accent))",
      ...style,
    }}
  >
    {num && (
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 22,
          height: 22,
          border: "1px solid hsl(var(--accent))",
          color: "hsl(var(--accent))",
          fontSize: 10,
          fontWeight: 500,
        }}
      >
        {num}
      </span>
    )}
    <span>{children}</span>
  </div>
);

export const GoldItalic = ({ children }: { children: ReactNode }) => (
  <span
    style={{
      fontStyle: "italic",
      backgroundImage:
        "linear-gradient(135deg, hsl(35 90% 48%), hsl(35 95% 62%))",
      WebkitBackgroundClip: "text",
      backgroundClip: "text",
      WebkitTextFillColor: "transparent",
      color: "transparent",
    }}
  >
    {children}
  </span>
);

export const Rule = ({
  color = "var(--border)",
  style,
}: { color?: string } & StyleProp) => (
  <hr
    style={{
      border: 0,
      borderTop: `1px solid ${color}`,
      margin: 0,
      ...style,
    }}
  />
);

export const CTAButton = ({
  children,
  href = "#",
  variant = "primary",
  block = false,
  small = false,
  style,
}: {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost";
  block?: boolean;
  small?: boolean;
} & StyleProp) => {
  const [hover, setHover] = useState(false);
  const base: CSSProperties = {
    position: "relative",
    display: block ? "flex" : "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
    width: block ? "100%" : "auto",
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: small ? 11 : 13,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    padding: small ? "14px 20px" : "22px 28px",
    textDecoration: "none",
    cursor: "pointer",
    transition: "all .25s ease",
    boxSizing: "border-box",
    fontWeight: 500,
  };
  const variants: Record<string, CSSProperties> = {
    primary: {
      background: hover ? "var(--ink-bright)" : "hsl(var(--accent))",
      color: "#fff",
      border: "1px solid hsl(var(--accent))",
    },
    ghost: {
      background: "transparent",
      color: "var(--fg-bright)",
      border: "1px solid var(--fg-bright)",
    },
  };
  return (
    <a
      href={href}
      style={{ ...base, ...variants[variant], ...style }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span>{children}</span>
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          transform: hover ? "translateX(6px)" : "translateX(0)",
          transition: "transform .25s ease",
        }}
      >
        →
      </span>
    </a>
  );
};

export const Marginalia = ({
  label,
  index,
  style,
}: { label: string; index?: string } & StyleProp) => (
  <div
    style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10,
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: "var(--fg-muted)",
      display: "flex",
      flexDirection: "column",
      gap: 8,
      ...style,
    }}
  >
    {index && <span style={{ color: "hsl(var(--accent))" }}>{index}</span>}
    <span>{label}</span>
  </div>
);

export const Section = ({
  children,
  tinted = false,
  dark = false,
  id,
  style,
  label,
}: {
  children: ReactNode;
  tinted?: boolean;
  dark?: boolean;
  id?: string;
  label?: string;
} & StyleProp) => (
  <section
    id={id}
    data-section={label}
    style={{
      position: "relative",
      background: dark
        ? "var(--ink-bright)"
        : tinted
          ? "var(--bg-alt)"
          : "var(--bg)",
      color: dark ? "var(--bg)" : "var(--fg)",
      ...style,
    }}
  >
    {children}
  </section>
);

export const GridBG = ({ opacity = 0.05 }: { opacity?: number }) => (
  <div
    aria-hidden
    style={{
      position: "absolute",
      inset: 0,
      opacity,
      backgroundImage:
        "linear-gradient(hsl(215 50% 20%) 1px, transparent 1px), linear-gradient(90deg, hsl(215 50% 20%) 1px, transparent 1px)",
      backgroundSize: "80px 80px",
      pointerEvents: "none",
    }}
  />
);

export const BigIndex = ({
  n,
  color = "hsl(var(--accent))",
  style,
}: { n: string; color?: string } & StyleProp) => (
  <div
    style={{
      fontFamily: "'Playfair Display', serif",
      fontWeight: 900,
      fontStyle: "italic",
      fontSize: "clamp(120px, 18vw, 240px)",
      lineHeight: 0.8,
      letterSpacing: "-0.04em",
      WebkitTextStroke: `1px ${color}`,
      color: "transparent",
      userSelect: "none",
      ...style,
    }}
  >
    {n}
  </div>
);

export const Ticker = ({
  items,
  style,
}: { items: string[] } & StyleProp) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      overflow: "hidden",
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      letterSpacing: "0.24em",
      textTransform: "uppercase",
      color: "var(--fg-muted)",
      ...style,
    }}
  >
    <div
      style={{
        display: "flex",
        gap: 56,
        padding: "14px 0",
        animation: "rtcMarquee 40s linear infinite",
        whiteSpace: "nowrap",
        flexShrink: 0,
      }}
    >
      {[...items, ...items, ...items].map((it, i) => (
        <span
          key={i}
          style={{ display: "inline-flex", gap: 12, alignItems: "center" }}
        >
          <span style={{ color: "hsl(var(--accent))" }}>◆</span>
          {it}
        </span>
      ))}
    </div>
  </div>
);

export const TickBox = ({
  children,
  style,
  color = "hsl(var(--accent))",
}: { children: ReactNode; color?: string } & StyleProp) => (
  <div style={{ position: "relative", ...style }}>
    {[
      {
        top: -1,
        left: -1,
        borderTop: `1px solid ${color}`,
        borderLeft: `1px solid ${color}`,
      },
      {
        top: -1,
        right: -1,
        borderTop: `1px solid ${color}`,
        borderRight: `1px solid ${color}`,
      },
      {
        bottom: -1,
        left: -1,
        borderBottom: `1px solid ${color}`,
        borderLeft: `1px solid ${color}`,
      },
      {
        bottom: -1,
        right: -1,
        borderBottom: `1px solid ${color}`,
        borderRight: `1px solid ${color}`,
      },
    ].map((pos, i) => (
      <span
        key={i}
        aria-hidden
        style={{
          position: "absolute",
          width: 10,
          height: 10,
          ...pos,
          pointerEvents: "none",
        }}
      />
    ))}
    {children}
  </div>
);
