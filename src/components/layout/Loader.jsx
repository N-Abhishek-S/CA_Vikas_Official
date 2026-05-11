import { motion as Motion } from 'framer-motion';
import { brand } from '../../constants/site.js';

export default function Loader({ compact = false }) {
  if (compact) {
    return (
      <div className="grid min-h-[40vh] place-items-center bg-paper text-blue">
        <div className="h-10 w-10 animate-spin rounded-full border border-blue/18 border-t-green" />
      </div>
    );
  }

  return (
    <Motion.div
      className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-paper text-deep"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, filter: 'blur(14px)' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_35%,rgba(76,178,68,0.15),transparent_32%),radial-gradient(circle_at_60%_65%,rgba(244,122,29,0.12),transparent_34%)]" />
      <Motion.div
        className="relative flex flex-col items-center gap-6"
        initial={{ y: 18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="grid h-24 w-32 place-items-center rounded-3xl border border-blue/10 bg-white p-4 shadow-[0_24px_70px_rgba(24,66,95,0.16)]">
          <img src={brand.logo} alt="" className="h-full w-full object-contain" />
        </div>
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.36em] text-blue/62">{brand.name}</p>
          <p className="mt-2 text-lg font-medium text-deep">{brand.descriptor}</p>
        </div>
        <div className="h-px w-64 overflow-hidden bg-blue/10">
          <Motion.div
            className="h-full bg-gradient-to-r from-transparent via-green to-transparent"
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            transition={{ duration: 1.1, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </Motion.div>
    </Motion.div>
  );
}
