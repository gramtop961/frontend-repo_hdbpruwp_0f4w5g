import { motion } from "framer-motion";

export default function InvitationCard({ visible, onReplay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 20, scale: visible ? 1 : 0.98 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="absolute inset-0 flex items-center justify-center p-6"
      aria-hidden={!visible}
    >
      <div className="relative max-w-xl w-full">
        <motion.div
          initial={{ rotateX: -8, opacity: 0 }}
          animate={{ rotateX: visible ? 0 : -8, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="rounded-2xl bg-white/80 backdrop-blur-xl shadow-2xl ring-1 ring-white/60 p-8"
        >
          <div className="mb-4 text-center">
            <p className="tracking-widest text-xs text-rose-400">WE'RE GETTING MARRIED</p>
            <h1 className="mt-2 text-4xl font-serif text-rose-700">Aarav & Meera</h1>
            <p className="mt-1 text-sm text-rose-500">Together with their families</p>
          </div>
          <div className="divide-y divide-rose-100/70">
            <div className="py-4 text-center">
              <p className="text-sm text-rose-400">Date</p>
              <p className="text-lg font-medium text-rose-700">Saturday, 14 December 2025</p>
            </div>
            <div className="py-4 text-center">
              <p className="text-sm text-rose-400">Venue</p>
              <p className="text-lg font-medium text-rose-700">Rosewood Gardens, Jaipur</p>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="#rsvp"
              className="inline-flex items-center rounded-full bg-rose-600 px-6 py-2.5 text-white shadow-lg shadow-rose-600/30 transition hover:bg-rose-700"
            >
              RSVP
            </a>
            <button
              onClick={onReplay}
              className="inline-flex items-center rounded-full bg-white/80 px-4 py-2.5 text-rose-600 ring-1 ring-rose-200 transition hover:bg-white"
            >
              Replay
            </button>
          </div>
        </motion.div>

        {/* Decorative corners */}
        <div className="pointer-events-none absolute -inset-2 -z-10">
          <CornerDecor position="tl" />
          <CornerDecor position="tr" />
          <CornerDecor position="bl" />
          <CornerDecor position="br" />
        </div>
      </div>
    </motion.div>
  );
}

function CornerDecor({ position }) {
  const base = "absolute h-16 w-16 text-rose-300";
  const pos = {
    tl: "-top-2 -left-2",
    tr: "-top-2 -right-2",
    bl: "-bottom-2 -left-2",
    br: "-bottom-2 -right-2",
  }[position];
  return (
    <svg className={`${base} ${pos}`} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2 Q20 10 30 30 Q10 20 2 62" stroke="currentColor" strokeWidth="2" opacity="0.5" />
      <circle cx="30" cy="30" r="2" fill="currentColor" opacity="0.7" />
    </svg>
  );
}
