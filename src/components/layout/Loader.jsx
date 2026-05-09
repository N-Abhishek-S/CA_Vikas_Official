import { motion as Motion } from 'framer-motion';

export default function Loader({ compact = false }) {
  if (compact) {
    return (
      <div className="grid min-h-[40vh] place-items-center bg-ink text-ivory">
        <div className="h-10 w-10 animate-spin rounded-full border border-ivory/20 border-t-gold" />
      </div>
    );
  }

  return (
    <Motion.div
      className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-ink text-ivory"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(14px)' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(49,95,152,0.24),transparent_35%),linear-gradient(135deg,rgba(184,148,77,0.12),transparent_34%)]" />
      <Motion.div
        className="relative flex flex-col items-center gap-6"
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="grid h-20 w-20 place-items-center rounded-full border border-ivory/15 bg-ivory/[0.05] shadow-[0_0_70px_rgba(95,153,145,0.22)]">
          <span className="font-display text-2xl font-semibold tracking-[0.18em] text-gold">CA</span>
        </div>
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.42em] text-ivory/55">CA Person</p>
          <p className="mt-2 text-lg font-medium">Strategic finance advisory</p>
        </div>
        <div className="h-px w-64 overflow-hidden bg-ivory/10">
        <Motion.div
            className="h-full bg-gradient-to-r from-transparent via-gold to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </Motion.div>
    </Motion.div>
  );
}
