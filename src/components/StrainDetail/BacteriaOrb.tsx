interface Props {
  color: string;
  glowColor: string;
  species: string;
}

export default function BacteriaOrb({ color, glowColor, species }: Props) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative h-28 w-28">
        <div
          className="absolute inset-0 rounded-full animate-orb-pulse"
          style={{
            background: `radial-gradient(circle at 35% 35%, ${color}66, ${color}22 45%, ${color}06 100%)`,
            boxShadow: `0 0 40px ${glowColor}, 0 0 80px ${color}22, inset 0 0 20px ${color}33`,
          }}
        />
        <div
          className="absolute inset-0 animate-orb-spin opacity-30"
          style={{
            background: `conic-gradient(from 0deg, transparent, ${color}, transparent)`,
            borderRadius: "50%",
            mask: "radial-gradient(transparent 55%, black 60%)",
            WebkitMask: "radial-gradient(transparent 55%, black 60%)",
          }}
        />
        <div
          className="absolute inset-[15%] rounded-full"
          style={{
            background: `radial-gradient(circle at 40% 40%, ${color}44, transparent 60%)`,
          }}
        />
        <div
          className="absolute inset-[30%] rounded-full"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${color}88, transparent)`,
          }}
        />
        <div
          className="absolute inset-[40%] rounded-full"
          style={{
            background: color,
            boxShadow: `0 0 16px ${glowColor}`,
          }}
        />
      </div>
      <span className="font-sans text-[11px] italic tracking-wide" style={{ color }}>
        {species}
      </span>
    </div>
  );
}
