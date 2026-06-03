import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb, SiExpress, SiPython, SiCplusplus } from 'react-icons/si';
import { FaNodeJs, FaJava } from 'react-icons/fa';
import { BiLogoPostgresql, BiLogoTailwindCss } from 'react-icons/bi';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { useTheme } from '../context/ThemeContext';

const TECH = [
  { icon: <RiReactjsLine />,    name: 'React.js',   color: '#61dafb', level: 92, pct: 95 },
  { icon: <TbBrandNextjs />,    name: 'Next.js',    color: '#e5e5e5', level: 78, pct: 72 },
  { icon: <SiMongodb />,        name: 'MongoDB',    color: '#47a248', level: 85, pct: 80 },
  { icon: <BiLogoTailwindCss />,name: 'Tailwind',   color: '#38bdf8', level: 88, pct: 85 },
  { icon: <FaNodeJs />,         name: 'Node.js',    color: '#68a063', level: 90, pct: 92 },
  { icon: <SiExpress />,        name: 'Express',    color: '#888888', level: 87, pct: 83 },
  { icon: <BiLogoPostgresql />, name: 'PostgreSQL', color: '#336791', level: 82, pct: 76 },
  { icon: <SiPython />,         name: 'Python',     color: '#3776ab', level: 72, pct: 65 },
  { icon: <FaJava />,           name: 'Java',       color: '#f89820', level: 68, pct: 60 },
  { icon: <SiCplusplus />,      name: 'C++',        color: '#00599c', level: 65, pct: 55 },
];

const bounce = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: { duration, ease: 'linear', repeat: Infinity, repeatType: 'reverse' },
  },
});

/* ─── Default: bouncing icons ─── */
const DefaultTech = () => (
  <motion.div
    whileInView={{ opacity: 1 }} initial={{ opacity: 0 }}
    transition={{ duration: 0.8 }} viewport={{ once: true }}
    className='flex flex-wrap items-end justify-center gap-4'
  >
    {TECH.map((t, i) => (
      <motion.div key={i} variants={bounce(2 + i * 0.5)} initial='initial' animate='animate'
        className='theme-panel flex flex-col items-center gap-2 rounded-xl p-4'
      >
        <span className='text-6xl' style={{ color: t.color }}>{t.icon}</span>
        <span className='text-xs' style={{ color: 'var(--color-muted)' }}>{t.name}</span>
      </motion.div>
    ))}
  </motion.div>
);

/* ─── RS3: Skills panel with XP bars ─── */
const RS3Tech = () => (
  <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
    <div className='rs3-skills-panel theme-panel max-w-2xl mx-auto'>
      <div className='rs3-panel-header'>
        <span>Skills</span>
        <span className='rs3-panel-close'>✕</span>
      </div>
      <div className='p-4 grid grid-cols-1 gap-1'>
        {TECH.map((t, i) => (
          <div key={i} className='rs3-skill-row'>
            <div className='rs3-skill-icon' style={{ color: t.color }}>{t.icon}</div>
            <span className='rs3-skill-name'>{t.name}</span>
            <div className='rs3-xp-bar-track'>
              <motion.div
                className='rs3-xp-bar-fill'
                initial={{ width: 0 }}
                whileInView={{ width: `${t.pct}%` }}
                transition={{ duration: 1.2, delay: 0.1 * i, ease: 'easeOut' }}
                viewport={{ once: true }}
              />
            </div>
            <span className='rs3-skill-level'>Lv. {t.level}</span>
          </div>
        ))}
      </div>
      <div className='rs3-skills-footer'>
        <span>Total Skill Level</span>
        <span style={{ color: 'var(--color-accent)' }}>{TECH.reduce((a, t) => a + t.level, 0).toLocaleString()}</span>
      </div>
    </div>
  </motion.div>
);

/* ─── Satisfactory: Research tree ─── */
const SAT_TIERS = [
  { label: 'TIER 1', items: [TECH[3]] },
  { label: 'TIER 2', items: [TECH[0], TECH[4], TECH[5]] },
  { label: 'TIER 3', items: [TECH[2], TECH[6]] },
  { label: 'TIER 4', items: [TECH[1]] },
  { label: 'TIER 5', items: [TECH[7], TECH[8], TECH[9]] },
];

const SatTech = () => (
  <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
    <div className='sat-research-header'>
      <span>M.A.M. Research Tree</span>
      <span className='sat-status-badge'>● ALL UNLOCKED</span>
    </div>
    <div className='sat-research-tree'>
      {SAT_TIERS.map((tier, ti) => (
        <div key={ti} className='sat-tier-column'>
          <div className='sat-tier-label'>{tier.label}</div>
          {tier.items.map((t, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.4, delay: 0.1 * (ti + i) }}
              viewport={{ once: true }}
              className='sat-research-node theme-panel'
            >
              <span className='sat-node-icon' style={{ color: t.color }}>{t.icon}</span>
              <span className='sat-node-name'>{t.name}</span>
              <span className='sat-node-unlocked'>✓ UNLOCKED</span>
            </motion.div>
          ))}
        </div>
      ))}
    </div>
  </motion.div>
);

/* ─── Warhammer: Chapter Armory ─── */
const WH_WARGEAR_LABELS = [
  'Battle Interface', 'Shadow Operations', 'Data Corruption Protocol',
  'Stealth Camouflage', 'Tactical Backend', 'Rapid Strike Module', 'Siege Engine',
  'Serpentine Script', 'Iron Codex Language', 'Machine Tongue',
];

const WhTech = () => (
  <motion.div whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
    <div className='wh-armory-header'>
      <span>✦</span>
      <span>Chapter Armory</span>
      <span>✦</span>
    </div>
    <div className='grid grid-cols-2 gap-4 lg:grid-cols-4'>
      {TECH.map((t, i) => (
        <motion.div
          key={i}
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4, delay: 0.08 * i }}
          viewport={{ once: true }}
          className='wh-wargear-item theme-panel flex flex-col items-center gap-2 p-5 text-center'
        >
          <span className='text-4xl' style={{ color: t.color }}>{t.icon}</span>
          <span className='wh-wargear-name'>{t.name}</span>
          <span className='wh-wargear-label'>{WH_WARGEAR_LABELS[i]}</span>
          <div className='wh-wargear-approved'>APPROVED</div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const TECH_BY_THEME = {
  default: DefaultTech,
  rs3: RS3Tech,
  satisfactory: SatTech,
  warhammer: WhTech,
};

const labels = {
  default: { section: 'Stack', title: 'Technologies' },
  rs3: { section: 'Skills', title: 'Technologies' },
  satisfactory: { section: 'M.A.M. Research', title: 'Technologies' },
  warhammer: { section: 'Chapter Armoury', title: 'Technologies' },
};

const Technologies = () => {
  const { theme } = useTheme();
  const TechComponent = TECH_BY_THEME[theme] ?? DefaultTech;
  const { section, title } = labels[theme] ?? labels.default;

  return (
    <section id='technologies' className='portfolio-section'>
      <SectionHeader label={section} title={title} />
      <TechComponent />
    </section>
  );
};

export default Technologies;
