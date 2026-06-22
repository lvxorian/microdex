import { useState, useEffect } from "react";

type Breakpoint = "mobile" | "desktop";

export default function useResponsive(): Breakpoint {
  const [bp, setBp] = useState<Breakpoint>(
    typeof window !== "undefined" && window.innerWidth < 768 ? "mobile" : "desktop",
  );

  useEffect(() => {
    const handler = () => {
      setBp(window.innerWidth < 768 ? "mobile" : "desktop");
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return bp;
}
