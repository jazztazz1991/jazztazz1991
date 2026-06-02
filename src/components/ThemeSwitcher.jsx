import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme, THEMES } from '../context/ThemeContext';
import { FaCode, FaSkull } from 'react-icons/fa';
import { GiCrossedSwords, GiCog } from 'react-icons/gi';

const THEME_ICONS = {
  default: <FaCode />,
  rs3: <GiCrossedSwords />,
  satisfactory: <GiCog />,
  warhammer: <FaSkull />,
};

const ThemeSwitcher = () => {
  const { theme, setTheme, themes } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div className='fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2'>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.18 }}
            className='flex flex-col gap-1 p-2 rounded-xl border shadow-2xl'
            style={{
              backgroundColor: 'var(--color-surface)',
              borderColor: 'var(--color-border)',
            }}
          >
            {Object.values(themes).map((t) => (
              <button
                key={t.id}
                onClick={() => { setTheme(t.id); setOpen(false); }}
                className='flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-200 whitespace-nowrap'
                style={{
                  backgroundColor: theme === t.id ? 'var(--color-accent-muted)' : 'transparent',
                  color: theme === t.id ? 'var(--color-accent)' : 'var(--color-muted)',
                }}
                onMouseEnter={(e) => {
                  if (theme !== t.id) {
                    e.currentTarget.style.backgroundColor = 'var(--color-surface-hover)';
                    e.currentTarget.style.color = 'var(--color-text)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (theme !== t.id) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = 'var(--color-muted)';
                  }
                }}
              >
                <span className='text-base'>{THEME_ICONS[t.id]}</span>
                <span className='font-medium'>{t.label}</span>
                <span
                  className='w-2.5 h-2.5 rounded-full ml-auto'
                  style={{ backgroundColor: t.color }}
                />
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className='w-11 h-11 rounded-full flex items-center justify-center text-base shadow-lg'
        style={{
          backgroundColor: 'var(--color-accent)',
          color: '#000',
        }}
        aria-label='Switch theme'
      >
        {THEME_ICONS[theme]}
      </motion.button>
    </div>
  );
};

export default ThemeSwitcher;
