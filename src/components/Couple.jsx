import { motion } from "framer-motion";

export default function Couple({ phase }) {
  // x position based on phase: walk -> animate to center, zoom -> stay, card -> fade behind card
  const isZoom = phase === "zoom";
  const isCard = phase === "card";

  return (
    <motion.div
      className="relative" // sized by parent
      initial={{ x: "-40vw", y: 0 }}
      animate={{
        x: phase === "walk" ? 0 : 0,
        y: [0, -6, 0],
        opacity: isCard ? 0.65 : 1,
      }}
      transition={{ x: { duration: 3.8, ease: "easeOut" }, y: { duration: 1.6, repeat: Infinity, ease: "easeInOut" }, opacity: { duration: 0.6 } }}
      style={{ width: "100%", height: "100%" }}
    >
      <svg viewBox="0 0 800 600" className="w-full h-full">
        {/* Path/ground */}
        <ellipse cx="400" cy="520" rx="360" ry="40" fill="#fecdd3" opacity="0.35" />

        {/* Girl */}
        <g transform="translate(420,240)">
          {/* hair */}
          <circle cx="-60" cy="-70" r="42" fill="#f43f5e" opacity="0.9" />
          {/* head */}
          <circle cx="-60" cy="-60" r="28" fill="#fde68a" />
          {/* body */}
          <path d="M-80 -30 Q-60 80 -40 -30 Z" fill="#fda4af" />
          {/* left arm */}
          <path d="M-78 -20 Q-90 10 -72 10" stroke="#fde68a" strokeWidth="10" fill="none" strokeLinecap="round" />
          {/* right arm to hand */}
          <path d="M-42 -16 Q-12 10 -6 10" stroke="#fde68a" strokeWidth="10" fill="none" strokeLinecap="round" />
        </g>

        {/* Boy */}
        <g transform="translate(380,240)">
          {/* hair */}
          <rect x="30" y="-90" width="60" height="25" rx="12" fill="#334155" />
          {/* head */}
          <circle cx="60" cy="-60" r="28" fill="#fef3c7" />
          {/* body */}
          <path d="M40 -30 Q60 80 80 -30 Z" fill="#60a5fa" />
          {/* right arm */}
          <path d="M82 -20 Q94 10 76 10" stroke="#fef3c7" strokeWidth="10" fill="none" strokeLinecap="round" />
          {/* left arm to hand */}
          <path d="M44 -16 Q14 10 8 10" stroke="#fef3c7" strokeWidth="10" fill="none" strokeLinecap="round" />
        </g>

        {/* Holding hands center */}
        <g transform="translate(400,250)">
          <motion.circle
            cx="0"
            cy="0"
            r="10"
            fill="#fb7185"
            animate={{ scale: isZoom ? [1, 1.2, 1] : [1, 1.15, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </g>
      </svg>
    </motion.div>
  );
}
