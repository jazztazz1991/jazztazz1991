import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaYoutube } from 'react-icons/fa';
import { PROJECTS } from '../constants';
import { useTheme } from '../context/ThemeContext';
import Navbar from '../components/Navbar';
import SectionHeader from '../components/SectionHeader';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay },
});

/* ─── Back button ─── */
const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate('/')}
      className='detail-back-btn mb-10 flex items-center gap-2 transition-colors duration-200'
      style={{ color: 'var(--color-muted)' }}
      onMouseEnter={e => e.currentTarget.style.color = 'var(--color-accent)'}
      onMouseLeave={e => e.currentTarget.style.color = 'var(--color-muted)'}
    >
      <FaArrowLeft className='text-sm' />
      <span className='text-sm font-heading tracking-wide'>Back to Portfolio</span>
    </button>
  );
};

/* ─── Status badge ─── */
const StatusBadge = ({ status }) => {
  if (status === 'wip') return (
    <span className='detail-badge detail-badge-wip'>In Development</span>
  );
  return (
    <span className='detail-badge detail-badge-active'>Active</span>
  );
};

/* ─── Tech stack section ─── */
const TechStackSection = ({ techStack, theme }) => {
  if (!techStack?.length) return null;
  return (
    <div className='detail-section'>
      <SectionHeader label='Built With' title='Tech Stack' />
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {techStack.map((group, i) => (
          <motion.div
            key={i}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.08 * i }}
            viewport={{ once: true }}
            className='theme-panel rounded-xl p-5'
          >
            <div className='detail-stack-category'>{group.category}</div>
            <div className='flex flex-wrap gap-2 mt-3'>
              {group.items.map((item, j) => (
                <span key={j} className='tech-badge'>{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ─── Features section ─── */
const FeaturesSection = ({ features, theme }) => {
  if (!features?.length) return null;

  const featureLabels = {
    rs3: { section: 'Game Mechanics', title: 'Features' },
    satisfactory: { section: 'Production Modules', title: 'Features' },
    warhammer: { section: 'Battle Honours', title: 'Features' },
    default: { section: 'What It Does', title: 'Features' },
  };
  const { section, title } = featureLabels[theme] ?? featureLabels.default;

  return (
    <div className='detail-section'>
      <SectionHeader label={section} title={title} />
      <div className='grid gap-4 lg:grid-cols-2'>
        {features.map((f, i) => (
          <motion.div
            key={i}
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, delay: 0.07 * i }}
            viewport={{ once: true }}
            className='theme-panel detail-feature-card'
          >
            <div className='detail-feature-accent' />
            <div>
              <h4 className='detail-feature-title font-heading'>{f.title}</h4>
              <p className='detail-feature-desc'>{f.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

/* ─── Links section ─── */
const LinksSection = ({ project }) => {
  const allLinks = [
    ...(project.github ? [{ label: 'GitHub', url: project.github, icon: 'github' }] : []),
    ...(project.demo ? [{ label: 'Live Demo', url: project.demo, icon: 'demo' }] : []),
    ...(project.links ?? []),
  ];
  if (!allLinks.length) return null;

  return (
    <div className='detail-section'>
      <SectionHeader label='Find It' title='Links' />
      <div className='flex flex-wrap gap-4'>
        {allLinks.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target='_blank'
            rel='noreferrer'
            className='detail-link-btn'
          >
            {link.icon === 'github' ? <FaGithub /> : <FaExternalLinkAlt className='text-sm' />}
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};

/* ─── Video section ─── */
const VideoSection = ({ videoUrl }) => {
  if (!videoUrl) return null;
  // Convert watch?v= to embed URL if needed
  const embedUrl = videoUrl.includes('watch?v=')
    ? videoUrl.replace('watch?v=', 'embed/')
    : videoUrl;

  return (
    <div className='detail-section'>
      <SectionHeader label='Walkthrough' title='Video' />
      <div className='detail-video-wrapper theme-panel'>
        <iframe
          src={embedUrl}
          title='Project walkthrough'
          className='detail-video-frame'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        />
      </div>
    </div>
  );
};

/* ─── Gallery section ─── */
const GallerySection = ({ gallery }) => {
  if (!gallery?.length) return null;

  return (
    <div className='detail-section'>
      <SectionHeader label='Screenshots' title='Gallery' />
      <div className='grid gap-5 sm:grid-cols-2'>
        {gallery.map((shot, i) => (
          <motion.figure
            key={i}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4, delay: 0.08 * i }}
            viewport={{ once: true }}
            className='theme-panel detail-gallery-item'
          >
            <img src={shot.image} alt={shot.caption || 'Project screenshot'} className='detail-gallery-img' />
            {shot.caption && <figcaption className='detail-gallery-caption'>{shot.caption}</figcaption>}
          </motion.figure>
        ))}
      </div>
    </div>
  );
};

/* ─── Coming Soon placeholder ─── */
const ComingSoonDetail = ({ theme }) => (
  <div className='flex flex-col items-center justify-center py-32 text-center'>
    <motion.div {...fade(0.1)}>
      <span className='section-label mb-4 block'>Third Project</span>
      <h1 className='section-heading font-heading mb-6' style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
        Coming Soon
      </h1>
      <p className='max-w-md leading-relaxed' style={{ color: 'var(--color-muted)' }}>
        This one's still in the works. Details will be here once it's ready to show off.
      </p>
    </motion.div>
  </div>
);

/* ─── Main detail page ─── */
const ProjectDetail = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className='min-h-screen flex items-center justify-center' style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className='text-center'>
          <p style={{ color: 'var(--color-muted)' }}>Project not found.</p>
          <button onClick={() => navigate('/')} className='btn-ghost mt-4'>Back to Portfolio</button>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen' style={{ color: 'var(--color-text)', backgroundColor: 'var(--color-bg)' }}>
      {/* Background layers */}
      <div className='fixed inset-0 -z-10' style={{ backgroundColor: 'var(--color-bg)' }}>
        <div className='absolute inset-0 theme-bg-glow' />
        <div className='absolute inset-0 theme-bg-grid' />
        <div className='absolute inset-0 theme-bg-texture' />
      </div>

      <div className='container mx-auto px-8'>
        <Navbar />

        <motion.div {...fade(0)}>
          <BackButton />
        </motion.div>

        {project.status === 'wip' ? (
          <ComingSoonDetail theme={theme} />
        ) : (
          <>
            {/* Hero banner */}
            <motion.div {...fade(0.1)} className='detail-hero theme-panel mb-16 overflow-hidden'>
              <div className='detail-hero-img-wrapper'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='detail-hero-img'
                />
                <div className='detail-hero-overlay' />
              </div>
              <div className='detail-hero-content'>
                <StatusBadge status={project.status} />
                <h1 className='detail-hero-title font-heading'>{project.title}</h1>
                <p className='detail-hero-desc'>{project.description}</p>
                <div className='flex flex-wrap gap-2 mt-4'>
                  {project.technologies.map((t, i) => <span key={i} className='tech-badge'>{t}</span>)}
                </div>
              </div>
            </motion.div>

            {/* About */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className='detail-section'
            >
              <SectionHeader label='Overview' title='About the Project' />
              <p className='max-w-3xl text-base leading-relaxed' style={{ color: 'var(--color-muted)' }}>
                {project.fullDescription}
              </p>
            </motion.div>

            {/* Features */}
            <FeaturesSection features={project.features} theme={theme} />

            {/* Gallery */}
            <GallerySection gallery={project.gallery} />

            {/* Tech Stack */}
            <TechStackSection techStack={project.techStack} theme={theme} />

            {/* Links */}
            <LinksSection project={project} />

            {/* Video */}
            <VideoSection videoUrl={project.videoUrl} />

            {/* Bottom spacer */}
            <div className='pb-24' />
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
