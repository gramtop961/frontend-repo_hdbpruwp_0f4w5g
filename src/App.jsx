import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedBackground from "./components/AnimatedBackground.jsx";
import Couple from "./components/Couple.jsx";
import ZoomOverlay from "./components/ZoomOverlay.jsx";
import InvitationCard from "./components/InvitationCard.jsx";

export default function App() {
  const [phase, setPhase] = useState("walk"); // walk -> zoom -> card

  useEffect(() => {
    if (phase === "walk") {
      const t1 = setTimeout(() => setPhase("zoom"), 3900);
      const t2 = setTimeout(() => setPhase("card"), 3900 + 2000);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [phase]);

  const replay = () => setPhase("walk");

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <AnimatedBackground />

      {/* Title overlay */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: phase === "card" ? 0 : 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 text-center"
      >
        <p className="text-xs tracking-[0.35em] text-rose-500">A LOVELY JOURNEY</p>
        <h1 className="mt-2 text-2xl md:text-3xl font-serif text-rose-700">The Walk To Forever</h1>
      </motion.div>

      {/* Scene container controls scaling */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="relative h-[56vh] w-[86vw] max-w-[1100px]"
          initial={{ scale: 0.98, opacity: 0 }}
          animate={{
            scale: phase === "zoom" || phase === "card" ? 2.1 : 1,
            opacity: 1,
          }}
          transition={{ scale: { duration: 1.8, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.8 } }}
          style={{ transformOrigin: "50% 50%" }}
        >
          <Couple phase={phase} />
        </motion.div>
      </div>

      <ZoomOverlay active={phase !== "walk"} />

      <InvitationCard visible={phase === "card"} onReplay={replay} />

      {/* Subtle bottom caption */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: phase === "card" ? 0.9 : 0.6, y: 0 }}
        transition={{ duration: 0.8 }}
        className="pointer-events-none absolute bottom-4 left-0 right-0 text-center text-rose-500"
      >
        <p className="text-xs md:text-sm">Watch them walk hand in hand, then see what their hearts reveal.</p>
      </motion.div>
    </div>
  );
}
