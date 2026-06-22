export default function SectionIcon({ type }: { type: "summary" | "mechanisms" | "dosage" | "safety" | "studies" | "symptoms" | "stats" }) {
  const s = 18;
  const shared = { width: s, height: s, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  switch (type) {
    case "summary":
      return (
        <svg {...shared}>
          <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
          <path d="M8 7h6" />
          <path d="M8 11h8" />
          <path d="M8 15h5" />
        </svg>
      );
    case "mechanisms":
      return (
        <svg {...shared}>
          <circle cx="12" cy="5" r="2" />
          <path d="M12 7v4" />
          <path d="M9 13l-2 2 2 2" />
          <path d="M15 13l2 2-2 2" />
          <circle cx="9" cy="17" r="1.5" />
          <circle cx="15" cy="17" r="1.5" />
          <path d="M12 11l-3 6M12 11l3 6" opacity="0.4" />
        </svg>
      );
    case "dosage":
      return (
        <svg {...shared}>
          <path d="M12 2L9 6h6l-3-4z" />
          <rect x="6" y="6" width="12" height="14" rx="3" />
          <line x1="12" y1="10" x2="12" y2="14" />
          <line x1="10" y1="12" x2="14" y2="12" />
        </svg>
      );
    case "safety":
      return (
        <svg {...shared}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      );
    case "studies":
      return (
        <svg {...shared}>
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="9" y1="13" x2="15" y2="13" />
          <line x1="9" y1="17" x2="13" y2="17" />
        </svg>
      );
    case "symptoms":
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
          <circle cx="9" cy="10" r="1" fill="currentColor" opacity="0.3" />
          <circle cx="15" cy="8" r="1" fill="currentColor" opacity="0.3" />
          <circle cx="14" cy="15" r="1" fill="currentColor" opacity="0.2" />
        </svg>
      );
    case "stats":
      return (
        <svg {...shared}>
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
        </svg>
      );
  }
}
