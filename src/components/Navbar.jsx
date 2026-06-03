import logo from '../assets/cc.png';
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <img className='mx-2 w-10' src={logo} alt='CC' />
      </div>
      <div className='flex items-center gap-5'>
        <div className='flex items-center gap-4 text-xl' style={{ color: 'var(--color-muted)' }}>
          <a
            href='https://www.linkedin.com/in/jazztazz/'
            target='_blank'
            rel='noreferrer'
            className='transition-colors duration-200'
            style={{ color: 'inherit' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
          >
            <FaLinkedin />
          </a>
          <a
            href='https://github.com/jazztazz1991'
            target='_blank'
            rel='noreferrer'
            className='transition-colors duration-200'
            style={{ color: 'inherit' }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--color-accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--color-muted)')}
          >
            <FaGithub />
          </a>
        </div>
        <a
          href='/cody-chase-resume.pdf'
          download
          className='btn-ghost flex items-center gap-2 !py-1.5 !px-3 text-sm'
        >
          <FaDownload className='text-xs' />
          Resume
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
