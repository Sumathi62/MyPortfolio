import { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Code, 
  Server, 
  Brain,
  Award,
  Calendar,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const NavLink = ({ href, children, mobile = false }) => (
    <button
      onClick={() => scrollToSection(href)}
      className={`nav-link ${mobile ? 'nav-link-mobile' : ''} ${
        activeSection === href ? 'nav-link-active' : ''
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-header">
            <div className="logo">
              Dunde Sumathi
            </div>

            <div className="nav-desktop">
              <NavLink href="home">Home</NavLink>
              <NavLink href="about">About</NavLink>
              <NavLink href="experience">Experience</NavLink>
              <NavLink href="projects">Projects</NavLink>
              <NavLink href="skills">Skills</NavLink>
              <NavLink href="contact">Contact</NavLink>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="mobile-menu-btn"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="nav-mobile">
              <NavLink href="home" mobile>Home</NavLink>
              <NavLink href="about" mobile>About</NavLink>
              <NavLink href="experience" mobile>Experience</NavLink>
              <NavLink href="projects" mobile>Projects</NavLink>
              <NavLink href="skills" mobile>Skills</NavLink>
              <NavLink href="contact" mobile>Contact</NavLink>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">Dunde Sumathi</span>
            </h1>
            <p className="hero-subtitle">
              MLOps Intern | AI/ML Enthusiast | Full Stack Developer
            </p>
            <p className="hero-description">
              Computer Science Engineering student with expertise in machine learning, DevOps, and full-stack development. 
              Currently gaining hands-on experience at Ericsson in MLOps and cloud technologies.
            </p>
          </div>

          <div className="hero-buttons">
            <a href="mailto:dsumathi62@gmail.com" className="btn btn-primary">
              <Mail size={20} />
              Get In Touch
            </a>
            <a href="https://github.com/Sumathi62" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Github size={20} />
              GitHub
            </a>
          </div>

          <button 
            onClick={() => scrollToSection('about')}
            className="scroll-indicator"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="about-grid">
            <div className="about-text">
              <h3 className="about-subtitle">Professional Summary</h3>
              <p className="about-paragraph">
                I'm an MLOps Intern at Ericsson with a solid foundation in Computer Science and Engineering. 
                My expertise spans across Java, Python, machine learning, DevOps tools, and full-stack development.
              </p>
              <p className="about-paragraph">
                I'm passionate about both frontend and backend development, with particular interest in projects 
                involving AI, ML, and scalable system design. I'm eager to apply my skills and continue learning 
                through challenging projects in dynamic environments.
              </p>
              <div className="location">
                <MapPin size={16} />
                <span>Bhimavaram, Andhra Pradesh</span>
              </div>
            </div>
            <div className="education-card">
              <h4 className="education-title">Education</h4>
              <div className="education-list">
                <div className="education-item">
                  <h5>B.Tech in CSE (AI & ML)</h5>
                  <p>VIT-AP, Amaravati</p>
                  <p className="education-score">CGPA: 8.89 | 2021 - Present</p>
                </div>
                <div className="education-item">
                  <h5>Intermediate Education</h5>
                  <p>Sri Gowtami Junior College</p>
                  <p className="education-score">977/1000 | 2019 - 2021</p>
                </div>
                <div className="education-item">
                  <h5>Secondary Education</h5>
                  <p>Pratibha Vidyaniketan E.M School</p>
                  <p className="education-score">10/10 | 2018 - 2019</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="experience-list">
            <div className="experience-item">
              <h3>MLOps Intern</h3>
              <p>Ericsson | 2025 - Present</p>
              <ul>
                Currently undergoing training in MLOps concepts and tools under Ericsson’s guidance. Developed a sample
application to demonstrate use of Docker for containerization, Jenkins for automation, Kubernetes and Helm
for orchestration, and Robot Framework for testing. Focused on hands-on learning and applying DevOps
pipelines in real-world scenarios.
              </ul>
            </div>
            {/* Add more experience items here if needed */}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">Personal Projects</span>
          </h2>
          <div className="projects-list">
            <div className="project-item">
              <h3>Event Management</h3>
              <p><em>March 2025</em></p>
              <p>Built a full stack event management system supporting multiple companies, with complete integration to support seamless user and admin experiences. Managers from each company can create, edit, and delete their own events, and only their respective events are visible to users. Users can register for events, track attendance, and cancel participation if needed.</p>
            </div>
            <div className="project-item">
              <h3>Blogging Platform</h3>
              <p><em>November 2023</em></p>
              <p>Contributed as a frontend developer, designing and implementing user interface elements for a platform facilitating knowledge sharing and community building.</p>
            </div>
            <div className="project-item">
              <h3>Real-time Face Detection</h3>
              <p><em>June 2023</em></p>
              <p>Trained a model using the Viola-Jones algorithm with various face images to improve detection accuracy.</p>
            </div>
            <div className="project-item">
              <h3>Plant Disease Detection</h3>
              <p><em>December 2022</em></p>
              <p>Collected and preprocessed a dataset using machine learning techniques to train a model for accurate plant disease detection.</p>
            </div>
            <div className="project-item">
              <h3>Brain Tumor Detection</h3>
              <p><em>June 2022</em></p>
              <p>Applied a Convolutional Neural Network (CNN) model on images to improve accuracy and calculated metrics for enhanced brain tumor diagnosis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">Technical Skills</span>
          </h2>
          <div className="skills-list">
            <div className="skill-category">
              <h3><Code size={20} /> Coding Skills</h3>
              <p>Python, Java</p>
            </div>
            <div className="skill-category">
              <h3><Server size={20} /> Web Development</h3>
              <p>Flask, React, JavaScript, MongoDB, HTML, CSS</p>
            </div>
            <div className="skill-category">
              <h3><Phone size={20} /> Android Development</h3>
              <p>Java, XML</p>
            </div>
            <div className="skill-category">
              <h3><Brain size={20} /> MLOps</h3>
              <p>Linux, Git, Docker, Kubernetes, Helm, Jenkins, Robot Framework</p>
            </div>
            <div className="skill-category">
              <h3><Award size={20} /> Soft Skills</h3>
              <p>Teamwork, Communication, Adaptability</p>
            </div>
            <div className="skill-category">
              <h3><Calendar size={20} /> Problem Solving</h3>
              <p>Analytical Thinking, Innovative Solutions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">Certifications</span>
          </h2>
          <ul className="certifications-list">
            <li>Google Cloud Computing Functions</li>
            <li>Full Stack Development</li>
          </ul>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">
            <span className="gradient-text">Contact</span>
          </h2>
          <div className="contact-info">
            <p><Mail size={20} /> Email: <a href="mailto:dsumathi62@gmail.com">dsumathi62@gmail.com</a></p>
            <p><Phone size={20} /> Phone: +91-XXXXXXXXXX</p>
            <p><MapPin size={20} /> Location: Bhimavaram, Andhra Pradesh</p>
            <p>
              <Github size={20} /> GitHub: 
              <a href="https://github.com/Sumathi62" target="_blank" rel="noopener noreferrer">
                https://github.com/Sumathi62
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
