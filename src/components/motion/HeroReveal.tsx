import { motion } from 'framer-motion';

export default function HeroReveal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="hero-reveal"
    />
  );
}
