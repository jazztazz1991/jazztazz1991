import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ThemeSwitcher from './components/ThemeSwitcher';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Technologies from './components/Technologies';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ProjectDetail from './pages/ProjectDetail';

const Portfolio = () => (
  <div className='overflow-x-hidden antialiased' style={{ color: 'var(--color-text)' }}>
    <div className='fixed inset-0 -z-10' style={{ backgroundColor: 'var(--color-bg)' }}>
      <div className='absolute inset-0 theme-bg-glow' />
      <div className='absolute inset-0 theme-bg-grid' />
      <div className='absolute inset-0 theme-bg-texture' />
    </div>
    <div className='container mx-auto px-8'>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Experience />
      <Technologies />
      <Contact />
    </div>
  </div>
);

const App = () => (
  <ThemeProvider>
    <Routes>
      <Route path='/' element={<Portfolio />} />
      <Route path='/project/:id' element={<ProjectDetail />} />
    </Routes>
    <ThemeSwitcher />
  </ThemeProvider>
);

export default App;
