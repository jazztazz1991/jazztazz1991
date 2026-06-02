import { CONTACT } from '../constants';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import SectionHeader from './SectionHeader';

const Contact = () => {
  return (
    <section id='contact' className='pb-32'>
      <SectionHeader label='Say Hello' title='Get In Touch' />
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className='max-w-lg'
      >
        <p
          className='mb-8 leading-relaxed'
          style={{ color: 'var(--color-muted)' }}
        >
          Whether you've got a project idea, want to talk code, or just want to connect — my inbox is open.
        </p>
        <div className='space-y-4 text-sm' style={{ color: 'var(--color-muted)' }}>
          <p className='flex items-center gap-3'>
            <FaMapMarkerAlt style={{ color: 'var(--color-accent)' }} />
            {CONTACT.address}
          </p>
          <p className='flex items-center gap-3'>
            <FaPhone style={{ color: 'var(--color-accent)' }} />
            {CONTACT.phoneNo}
          </p>
          <a
            href={`mailto:${CONTACT.email}`}
            className='mt-6 inline-block transition-colors duration-200'
            style={{ color: 'var(--color-accent)', borderBottom: '1px solid var(--color-border)' }}
            onMouseEnter={(e) => (e.currentTarget.style.borderBottomColor = 'var(--color-accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderBottomColor = 'var(--color-border)')}
          >
            {CONTACT.email}
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
