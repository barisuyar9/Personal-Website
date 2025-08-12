import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Profile from './components/Profile';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

function AppContent() {
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen ${isDark ? 'dark' : ''}`}>
      <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
        <Header />
        <main>
          <Hero />
          <Skills />
          <Profile />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
