import { motion } from "framer-motion";

export default function ZoomOverlay({ active }) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.2)_100%)]" />
      {/* Romantic gradient glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-rose-50/20 to-rose-100/40" />
    </motion.div>
  );
}
