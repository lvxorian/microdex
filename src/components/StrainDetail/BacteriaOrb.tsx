interface Props {
  color: string;
  species: string;
}

export default function BacteriaOrb({ color, species }: Props) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative">
        <div
          className="h-24 w-24 rounded-full animate-orb-pulse"
          style={{
            background: `radial-gradient(circle at 35% 35%, ${color}66, ${color}22 50%, ${color}08 100%)`,
            boxShadow: `0 0 40px ${color}44, 0 0 80px ${color}22, inset 0 0 20px ${color}33`,
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
          className="absolute inset-0 rounded-full"
          style={{
            background: `radial-gradient(circle at 40% 40%, ${color}88 0%, transparent 50%)`,
          }}
        />
      </div>
      <span
        className="font-sans text-[11px] italic tracking-wide"
        style={{ color }}
      >
        {species}
      </span>
    </div>
  );
}
