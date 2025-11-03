import { motion } from "framer-motion";

export default function AnimatedBackground() {
  const hearts = Array.from({ length: 16 }).map((_, i) => ({
    id: i,
    size: 8 + Math.random() * 18,
    left: Math.random() * 100,
    delay: Math.random() * 6,
    duration: 8 + Math.random() * 10,
    opacity: 0.2 + Math.random() * 0.5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Soft gradient sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-100 via-pink-50 to-white" />

      {/* Sun glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-rose-300/50 via-pink-300/40 to-fuchsia-300/30 blur-3xl" />

      {/* Floating hearts */}
      {hearts.map((h) => (
        <motion.div
          key={h.id}
          initial={{ y: 600, opacity: 0 }}
          animate={{ y: -200, opacity: [0, h.opacity, 0] }}
          transition={{ duration: h.duration, delay: h.delay, repeat: Infinity, ease: "easeInOut" }}
          className="absolute" 
          style={{ left: `${h.left}%` }}
        >
          <Heart size={h.size} opacity={h.opacity} />
        </motion.div>
      ))}

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-rose-200/70 to-transparent" />
    </div>
  );
}

function Heart({ size = 16, opacity = 0.4 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={`rgba(244, 63, 94, ${opacity})`} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 21s-6.716-4.484-9.428-7.196C-0.476 11.748-0.07 7.7 2.343 5.343 4.757 2.986 8.243 3.243 10 5c.23.23.44.48.63.744.19-.265.4-.514.63-.744 1.757-1.757 5.243-2.014 7.657.343 2.413 2.357 2.819 6.405-.229 8.461C18.716 16.516 12 21 12 21z"/>
    </svg>
  );
}
