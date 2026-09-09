import type { ReactNode } from "react";

function Tile({ label, children }: { label: string; children: ReactNode }) {
  return (
    <span
      role="img"
      aria-label={label}
      title={label}
      className="flex h-8 items-center justify-center rounded-md bg-white px-2.5 shadow-sm ring-1 ring-black/5"
    >
      {children}
    </span>
  );
}

function Mastercard() {
  return (
    <svg viewBox="0 0 32 20" className="h-4 w-auto" aria-hidden="true">
      <circle cx="13" cy="10" r="7" fill="#EB001B" />
      <circle cx="19" cy="10" r="7" fill="#F79E1B" />
      <path
        d="M16 4.8a7 7 0 0 1 0 10.4 7 7 0 0 1 0-10.4Z"
        fill="#FF5F00"
      />
    </svg>
  );
}

function Visa() {
  return (
    <svg viewBox="0 0 48 16" className="h-3.5 w-auto" aria-hidden="true">
      <text
        x="24"
        y="13"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontStyle="italic"
        fontSize="15"
        letterSpacing="1"
        fill="#1434CB"
      >
        VISA
      </text>
    </svg>
  );
}

function Maestro() {
  return (
    <svg viewBox="0 0 32 20" className="h-4 w-auto" aria-hidden="true">
      <circle cx="13" cy="10" r="7" fill="#0099DF" />
      <circle cx="19" cy="10" r="7" fill="#ED0006" />
      <path d="M16 4.8a7 7 0 0 1 0 10.4 7 7 0 0 1 0-10.4Z" fill="#6C6BBC" />
    </svg>
  );
}

function VPay() {
  return (
    <svg viewBox="0 0 48 16" className="h-3.5 w-auto" aria-hidden="true">
      <text
        x="24"
        y="13"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="13"
        letterSpacing="0.5"
        fill="#004A97"
      >
        V PAY
      </text>
    </svg>
  );
}

function ApplePay() {
  return (
    <svg viewBox="0 0 56 24" className="h-4 w-auto" aria-hidden="true">
      <g fill="#000">
        <path d="M11.9 8.05c-.63.75-1.64 1.34-2.65 1.26-.13-1 .36-2.07.94-2.73.63-.76 1.74-1.31 2.63-1.35.11 1.05-.3 2.07-.92 2.82Zm.91 1.45c-1.46-.09-2.71.83-3.4.83-.7 0-1.77-.79-2.92-.76-1.5.02-2.9.87-3.67 2.22-1.57 2.72-.41 6.74 1.11 8.95.75 1.09 1.64 2.3 2.81 2.26 1.12-.04 1.55-.72 2.9-.72 1.34 0 1.73.72 2.91.7 1.21-.02 1.97-1.1 2.71-2.19.85-1.25 1.2-2.46 1.22-2.53-.03-.01-2.34-.9-2.36-3.56-.02-2.23 1.82-3.29 1.9-3.35-1.04-1.53-2.66-1.7-3.22-1.74l.01-.11Z" />
        <text
          x="21"
          y="17"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="600"
          fontSize="13"
          fill="#000"
        >
          Pay
        </text>
      </g>
    </svg>
  );
}

function GooglePay() {
  return (
    <svg viewBox="0 0 56 24" className="h-4 w-auto" aria-hidden="true">
      <text
        x="0"
        y="17"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="14"
        fill="#4285F4"
      >
        G
      </text>
      <text
        x="12"
        y="17"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="600"
        fontSize="13"
        fill="#5F6368"
      >
        Pay
      </text>
    </svg>
  );
}

function Contactless() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-auto" aria-hidden="true">
      <g
        fill="none"
        stroke="#1a1a2e"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M8 6.5a8 8 0 0 1 0 11" />
        <path d="M12 4a12 12 0 0 1 0 16" />
        <path d="M16 2a16 16 0 0 1 0 20" />
      </g>
    </svg>
  );
}

function Cash() {
  return (
    <svg viewBox="0 0 28 20" className="h-4 w-auto" aria-hidden="true">
      <rect
        x="1"
        y="3"
        width="26"
        height="14"
        rx="2"
        fill="none"
        stroke="#1a7f52"
        strokeWidth="1.6"
      />
      <circle cx="14" cy="10" r="3.2" fill="none" stroke="#1a7f52" strokeWidth="1.6" />
    </svg>
  );
}

const METHODS = [
  { label: "Pinnen (Maestro)", node: <Maestro /> },
  { label: "V PAY", node: <VPay /> },
  { label: "Mastercard", node: <Mastercard /> },
  { label: "Visa", node: <Visa /> },
  { label: "Apple Pay", node: <ApplePay /> },
  { label: "Google Pay", node: <GooglePay /> },
  { label: "Contactloos betalen", node: <Contactless /> },
  { label: "Contant", node: <Cash /> },
];

export function PaymentMethods() {
  return (
    <div className="flex flex-col items-center text-center">
      <p className="eyebrow mb-4 justify-center">Betaalmethoden</p>
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {METHODS.map((m) => (
          <Tile key={m.label} label={m.label}>
            {m.node}
          </Tile>
        ))}
      </div>
    </div>
  );
}
