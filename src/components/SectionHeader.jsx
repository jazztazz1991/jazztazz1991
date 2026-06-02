import { motion } from 'framer-motion';

const SectionHeader = ({ label, title }) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className='mb-14'
    >
      <span className='section-label'>{label}</span>
      <h2 className='section-heading font-heading'>{title}</h2>
    </motion.div>
  );
};

export default SectionHeader;
