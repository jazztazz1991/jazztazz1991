import { PROJECTS } from '../constants';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import SectionHeader from './SectionHeader';
import { useTheme } from '../context/ThemeContext';

const cardAnim = (index) => ({
  whileInView: { opacity: 1, y: 0 },
  initial: { opacity: 0, y: 30 },
  transition: { duration: 0.5, delay: 0.1 * index },
  viewport: { once: true },
});

const stopProp = (e) => e.stopPropagation();

/* ─── WIP placeholder card (all themes) ─── */
const WIPCard = ({ project, index }) => (
  <motion.div {...cardAnim(index)} className='theme-panel overflow-hidden rounded-xl'>
    <div className='h-44 flex items-center justify-center' style={{ backgroundColor: 'var(--color-surface)' }}>
      <div className='flex flex-col items-center gap-3'>
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className='w-3 h-3 rounded-full'
          style={{ backgroundColor: 'var(--color-accent)' }}
        />
        <span className='text-xs uppercase tracking-widest' style={{ color: 'var(--color-muted)' }}>
          In Development
        </span>
      </div>
    </div>
    <div className='p-5'>
      <h3 className='font-semibold font-heading mb-2' style={{ color: 'var(--color-text)' }}>
        {project.title}
      </h3>
      <p className='text-sm leading-relaxed' style={{ color: 'var(--color-muted)' }}>
        {project.description}
      </p>
    </div>
  </motion.div>
);

/* ─── Default ─── */
const DefaultCard = ({ project, index, onClick }) => (
  <motion.div {...cardAnim(index)}
    className='theme-panel group overflow-hidden rounded-xl cursor-pointer'
    onClick={onClick}
  >
    <div className='overflow-hidden'>
      <img src={project.image} alt={project.title}
        className='h-44 w-full object-cover transition-transform duration-500 group-hover:scale-105' />
    </div>
    <div className='p-5'>
      <div className='mb-3 flex items-start justify-between'>
        <h3 className='font-semibold font-heading' style={{ color: 'var(--color-text)' }}>
          {project.title}
        </h3>
        <div className='flex gap-3' style={{ color: 'var(--color-muted)' }}>
          {project.github && (
            <a href={project.github} target='_blank' rel='noreferrer' onClick={stopProp}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
            ><FaGithub /></a>
          )}
          {project.demo && (
            <a href={project.demo} target='_blank' rel='noreferrer' onClick={stopProp}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
            ><FaExternalLinkAlt className='text-sm' /></a>
          )}
        </div>
      </div>
      <p className='mb-4 text-sm leading-relaxed' style={{ color: 'var(--color-muted)' }}>
        {project.description}
      </p>
      <div className='flex flex-wrap gap-1.5'>
        {project.technologies.map((tech, i) => <span key={i} className='tech-badge'>{tech}</span>)}
      </div>
      <div className='mt-4'>
        <span className='card-view-more'>View details →</span>
      </div>
    </div>
  </motion.div>
);

/* ─── RS3: Item Tooltip Panel ─── */
const RS3Card = ({ project, index, onClick }) => (
  <motion.div {...cardAnim(index)} className='theme-panel group overflow-hidden cursor-pointer' onClick={onClick}>
    <div className='rs3-panel-header'>
      <span>Item</span>
      <span className='rs3-panel-close'>✕</span>
    </div>
    <div className='overflow-hidden h-40'>
      <img src={project.image} alt={project.title}
        className='h-full w-full object-cover transition-transform duration-500 group-hover:scale-105' />
    </div>
    <div className='p-4'>
      <div className='rs3-item-name'>{project.title}</div>
      <div className='rs3-stat-row'>
        <span>Type</span><span style={{ color: '#a0d0ff' }}>Web Application</span>
      </div>
      <div className='rs3-stat-row'>
        <span>Tradeable</span><span style={{ color: '#70c070' }}>Yes</span>
      </div>
      <div className='rs3-stat-row'>
        <span>Members</span><span style={{ color: '#c9a227' }}>Yes</span>
      </div>
      <div className='rs3-divider' />
      <p className='rs3-examine-text'>
        <span style={{ color: 'var(--color-accent)' }}>Examine: </span>
        {project.description}
      </p>
      <div className='rs3-requirement-header'>Requirements</div>
      <div className='flex flex-wrap gap-1 mt-1 mb-3'>
        {project.technologies.map((tech, i) => <span key={i} className='tech-badge'>{tech}</span>)}
      </div>
      <div className='flex gap-2' onClick={stopProp}>
        {project.github && (
          <a href={project.github} target='_blank' rel='noreferrer' className='rs3-action-btn'>Examine</a>
        )}
      </div>
    </div>
  </motion.div>
);

/* ─── Satisfactory: Production Node ─── */
const SatisfactoryCard = ({ project, index, onClick }) => (
  <motion.div {...cardAnim(index)} className='theme-panel group overflow-hidden cursor-pointer' onClick={onClick}>
    <div className='sat-node-header'>
      <span>NODE_{String(index + 1).padStart(2, '0')}</span>
      <span className='sat-status-badge'>● OPERATIONAL</span>
    </div>
    <div className='overflow-hidden h-40'>
      <img src={project.image} alt={project.title}
        className='h-full w-full object-cover brightness-75 transition-all duration-500 group-hover:brightness-90 group-hover:scale-105' />
    </div>
    <div className='p-4'>
      <h3 className='sat-node-title'>{project.title}</h3>
      <div className='sat-section-label'>OUTPUT DESCRIPTION</div>
      <p className='text-xs leading-relaxed mb-3' style={{ color: 'var(--color-muted)' }}>
        {project.description}
      </p>
      <div className='sat-section-label'>REQUIRED RESOURCES</div>
      <div className='flex flex-wrap gap-1.5 mt-1 mb-3'>
        {project.technologies.map((tech, i) => <span key={i} className='tech-badge'>{tech}</span>)}
      </div>
      <div onClick={stopProp}>
        {project.github && (
          <a href={project.github} target='_blank' rel='noreferrer' className='sat-schematic-btn'>
            VIEW SCHEMATICS <FaGithub className='ml-2 inline' />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

/* ─── Warhammer: Codex Entry ─── */
const WarhammerCard = ({ project, index, onClick }) => (
  <motion.div {...cardAnim(index)} className='theme-panel group overflow-hidden cursor-pointer' onClick={onClick}>
    <div className='wh-codex-header'>
      <span>✦</span><span>CODEX ENTRY</span><span>✦</span>
    </div>
    <div className='overflow-hidden h-40'>
      <img src={project.image} alt={project.title}
        className='h-full w-full object-cover sepia brightness-75 transition-all duration-500 group-hover:brightness-85 group-hover:scale-105' />
    </div>
    <div className='p-4'>
      <h3 className='wh-entry-title'>{project.title}</h3>
      <div className='wh-divider' />
      <p className='text-xs leading-relaxed mb-3 italic' style={{ color: 'var(--color-muted)' }}>
        <span style={{ color: 'var(--color-accent)', fontStyle: 'normal' }}>Field Report: </span>
        {project.description}
      </p>
      <div className='wh-label'>Arsenal</div>
      <div className='flex flex-wrap gap-1.5 mt-1 mb-4'>
        {project.technologies.map((tech, i) => <span key={i} className='tech-badge'>{tech}</span>)}
      </div>
      <div onClick={stopProp}>
        {project.github && (
          <a href={project.github} target='_blank' rel='noreferrer' className='wh-action-btn'>Examine Records</a>
        )}
      </div>
    </div>
  </motion.div>
);

const CARD_BY_THEME = {
  default: DefaultCard,
  rs3: RS3Card,
  satisfactory: SatisfactoryCard,
  warhammer: WarhammerCard,
};

const LABELS = {
  default: { section: 'Work', title: 'Projects' },
  rs3: { section: 'Grand Exchange', title: 'Projects' },
  satisfactory: { section: 'Production Log', title: 'Projects' },
  warhammer: { section: 'Chapter Codex', title: 'Projects' },
};

const Projects = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const Card = CARD_BY_THEME[theme] ?? DefaultCard;
  const { section, title } = LABELS[theme] ?? LABELS.default;

  return (
    <section id='projects' className='portfolio-section'>
      <SectionHeader label={section} title={title} />
      <div className='grid gap-6 lg:grid-cols-3'>
        {PROJECTS.map((project, index) => (
          project.status === 'wip'
            ? <WIPCard key={project.id} project={project} index={index} />
            : <Card
                key={project.id}
                project={project}
                index={index}
                onClick={() => navigate(`/project/${project.id}`)}
              />
        ))}
      </div>
    </section>
  );
};

export default Projects;
