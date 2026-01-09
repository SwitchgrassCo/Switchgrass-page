import React, { useState, useEffect } from 'react';
import hempScreenshot from './assets/sd-hemp-action.png';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const styles = {
    container: {
      fontFamily: "'Instrument Sans', 'Helvetica Neue', sans-serif",
      backgroundColor: '#FAFAFA',
      color: '#1A1A1A',
      minHeight: '100vh',
      lineHeight: 1.6,
    },
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      padding: '24px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'rgba(250, 250, 250, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 100,
      borderBottom: '1px solid rgba(0,0,0,0.06)',
    },
    logo: {
      fontSize: '18px',
      fontWeight: 600,
      letterSpacing: '-0.02em',
      cursor: 'pointer',
    },
    navLinks: {
      display: 'flex',
      gap: '40px',
    },
    navLink: {
      fontSize: '14px',
      color: '#666',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'color 0.2s ease',
      fontWeight: 400,
    },
    navLinkActive: {
      color: '#1A1A1A',
    },
    hero: {
      padding: '180px 48px 120px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    heroTagline: {
      fontSize: 'clamp(42px, 6vw, 72px)',
      fontWeight: 500,
      letterSpacing: '-0.03em',
      lineHeight: 1.1,
      marginBottom: '32px',
      maxWidth: '800px',
    },
    heroSubtext: {
      fontSize: '20px',
      color: '#666',
      maxWidth: '540px',
      marginBottom: '48px',
      fontWeight: 400,
    },
    ctaButton: {
      display: 'inline-block',
      padding: '16px 32px',
      backgroundColor: '#1A1A1A',
      color: '#FAFAFA',
      fontSize: '14px',
      fontWeight: 500,
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      border: 'none',
    },
    ctaButtonSecondary: {
      display: 'inline-block',
      padding: '16px 32px',
      backgroundColor: 'transparent',
      color: '#1A1A1A',
      fontSize: '14px',
      fontWeight: 500,
      textDecoration: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s ease',
      border: '1px solid #1A1A1A',
      marginLeft: '16px',
    },
    services: {
      padding: '120px 48px',
      maxWidth: '1200px',
      margin: '0 auto',
      borderTop: '1px solid rgba(0,0,0,0.08)',
    },
    sectionLabel: {
      fontSize: '12px',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: '#999',
      marginBottom: '24px',
      fontWeight: 500,
    },
    sectionTitle: {
      fontSize: 'clamp(28px, 4vw, 40px)',
      fontWeight: 500,
      letterSpacing: '-0.02em',
      marginBottom: '64px',
      maxWidth: '600px',
    },
    servicesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '48px',
    },
    serviceCard: {
      padding: '32px 0',
      borderTop: '1px solid rgba(0,0,0,0.08)',
    },
    serviceTitle: {
      fontSize: '20px',
      fontWeight: 500,
      marginBottom: '16px',
      letterSpacing: '-0.01em',
    },
    serviceDesc: {
      fontSize: '15px',
      color: '#666',
      lineHeight: 1.7,
    },
    aiCallout: {
      padding: '80px 48px',
      backgroundColor: '#1A1A1A',
      color: '#FAFAFA',
    },
    aiCalloutInner: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    aiCalloutText: {
      fontSize: '24px',
      fontWeight: 400,
      maxWidth: '600px',
      letterSpacing: '-0.01em',
      textAlign: 'center',
    },
    portfolio: {
      padding: '180px 48px 120px',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    portfolioIntro: {
      marginBottom: '80px',
    },
    projectCard: {
      marginBottom: '120px',
    },
    projectHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '48px',
      flexWrap: 'wrap',
      gap: '24px',
    },
    projectTitle: {
      fontSize: 'clamp(28px, 4vw, 36px)',
      fontWeight: 500,
      letterSpacing: '-0.02em',
    },
    projectMeta: {
      fontSize: '13px',
      color: '#999',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    projectDesc: {
      fontSize: '17px',
      color: '#666',
      maxWidth: '600px',
      marginBottom: '48px',
      lineHeight: 1.7,
    },
    projectImageContainer: {
      backgroundColor: '#FFF',
      border: '1px solid rgba(0,0,0,0.08)',
      padding: '24px',
      borderRadius: '2px',
    },
    projectImage: {
      width: '100%',
      height: 'auto',
      display: 'block',
      borderRadius: '2px',
      boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
    },
    viewFullLink: {
      display: 'inline-block',
      marginTop: '32px',
      fontSize: '14px',
      color: '#1A1A1A',
      textDecoration: 'none',
      borderBottom: '1px solid #1A1A1A',
      paddingBottom: '2px',
    },
    contact: {
      padding: '180px 48px 120px',
      maxWidth: '800px',
      margin: '0 auto',
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '80px',
      marginTop: '64px',
    },
    contactLabel: {
      fontSize: '12px',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      color: '#999',
      marginBottom: '12px',
      fontWeight: 500,
    },
    contactValue: {
      fontSize: '17px',
      color: '#1A1A1A',
      textDecoration: 'none',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },
    input: {
      width: '100%',
      padding: '16px',
      fontSize: '16px',
      border: '1px solid rgba(0,0,0,0.15)',
      backgroundColor: '#FAFAFA',
      outline: 'none',
      transition: 'border-color 0.2s ease',
      fontFamily: 'inherit',
    },
    textarea: {
      width: '100%',
      padding: '16px',
      fontSize: '16px',
      border: '1px solid rgba(0,0,0,0.15)',
      backgroundColor: '#FAFAFA',
      minHeight: '150px',
      resize: 'vertical',
      outline: 'none',
      fontFamily: 'inherit',
    },
    button: {
      width: '100%',
      padding: '16px',
      fontSize: '14px',
      fontWeight: 500,
      backgroundColor: '#1A1A1A',
      color: '#FAFAFA',
      border: 'none',
      cursor: 'pointer',
      transition: 'opacity 0.2s ease',
      fontFamily: 'inherit',
    },
    formSuccess: {
      padding: '24px',
      backgroundColor: '#F0F9F0',
      textAlign: 'center',
      fontSize: '15px',
    },
    footer: {
      padding: '48px',
      borderTop: '1px solid rgba(0,0,0,0.08)',
      textAlign: 'center',
      fontSize: '13px',
      color: '#999',
    },
  };

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const renderHome = () => (
    <>
      <section style={styles.hero}>
        <h1 style={styles.heroTagline}>Modern solutions for real impact</h1>
        <p style={styles.heroSubtext}>
          Strategy, custom tools, and advocacy solutions for organizations ready to move forward.
        </p>
        <button style={styles.ctaButton} onClick={() => setCurrentPage('portfolio')}>
          See our work
        </button>
        <button style={styles.ctaButtonSecondary} onClick={() => setCurrentPage('contact')}>
          Get in touch
        </button>
      </section>

      <section style={styles.services}>
        <p style={styles.sectionLabel}>What we do</p>
        <h2 style={styles.sectionTitle}>We help organizations work smarter, reach further, and make an impact.</h2>
        <div style={styles.servicesGrid}>
          <div style={styles.serviceCard}>
            <h3 style={styles.serviceTitle}>Custom Tools</h3>
            <p style={styles.serviceDesc}>
              Purpose-built software that solves your specific problems. Legislative trackers, member portals, advocacy platforms, and more.
            </p>
          </div>
          <div style={styles.serviceCard}>
            <h3 style={styles.serviceTitle}>Strategy</h3>
            <p style={styles.serviceDesc}>
              Advocacy planning, digital strategy, and organizational consulting. We help you figure out what to do—then help you do it.
            </p>
          </div>
          <div style={styles.serviceCard}>
            <h3 style={styles.serviceTitle}>Websites</h3>
            <p style={styles.serviceDesc}>
              Clean, modern web presence that represents your organization well. Built to last, easy to maintain.
            </p>
          </div>
        </div>
      </section>

      <section style={styles.aiCallout}>
        <div style={styles.aiCalloutInner}>
          <p style={styles.aiCalloutText}>
            AI-assisted when it helps, human-assisted when it doesn't.
          </p>
        </div>
      </section>
    </>
  );

  const renderPortfolio = () => (
    <section style={styles.portfolio}>
      <div style={styles.portfolioIntro}>
        <p style={styles.sectionLabel}>Portfolio</p>
        <h1 style={styles.sectionTitle}>Work that makes a difference</h1>
      </div>

      <div style={styles.projectCard}>
        <div style={styles.projectHeader}>
          <div>
            <h2 style={styles.projectTitle}>SD Hemp Action</h2>
            <p style={styles.projectMeta}>Legislative Advocacy Tool</p>
          </div>
        </div>
        <p style={styles.projectDesc}>
          A tool that makes it easy for South Dakota residents to contact their state legislators about hemp-related legislation. Enter your ZIP code, see your representatives, and send a personalized email in seconds.
        </p>
        
        <div style={styles.projectImageContainer}>
          <img 
            src={hempScreenshot}
            alt="SD Hemp Action tool interface" 
            style={styles.projectImage}
          />
        </div>
        <a href="https://sdhemp.netlify.app" target="_blank" rel="noopener noreferrer" style={styles.viewFullLink}>
          View live tool →
        </a>
      </div>
    </section>
  );

  const renderContact = () => (
    <section style={styles.contact}>
      <p style={styles.sectionLabel}>Contact</p>
      <h1 style={styles.sectionTitle}>Let's talk about what you need</h1>
      
      <div style={styles.contactGrid}>
        <div>
          <div style={{ marginBottom: '32px' }}>
            <p style={styles.contactLabel}>Email</p>
            <a href="mailto:blake.severyn@gmail.com" style={styles.contactValue}>
              blake.severyn@gmail.com
            </a>
          </div>
          <div>
            <p style={styles.contactLabel}>Based in</p>
            <p style={styles.contactValue}>South Dakota</p>
          </div>
        </div>
        
        <div>
          {!formSubmitted ? (
            <form style={styles.form} onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                style={styles.input}
                required
              />
              <input
                type="email"
                placeholder="Your email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                style={styles.input}
                required
              />
              <textarea
                placeholder="Tell me about your project"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                style={styles.textarea}
                required
              />
              <button type="submit" style={styles.button}>
                Send message
              </button>
            </form>
          ) : (
            <div style={styles.formSuccess}>
              Thanks for reaching out. I'll be in touch soon.
            </div>
          )}
        </div>
      </div>
    </section>
  );

  return (
    <div style={styles.container}>
      <nav style={styles.nav}>
        <div style={styles.logo} onClick={() => setCurrentPage('home')}>
          Switchgrass Solutions
        </div>
        <div style={styles.navLinks}>
          <span 
            style={{...styles.navLink, ...(currentPage === 'home' ? styles.navLinkActive : {})}}
            onClick={() => setCurrentPage('home')}
          >
            Home
          </span>
          <span 
            style={{...styles.navLink, ...(currentPage === 'portfolio' ? styles.navLinkActive : {})}}
            onClick={() => setCurrentPage('portfolio')}
          >
            Portfolio
          </span>
          <span 
            style={{...styles.navLink, ...(currentPage === 'contact' ? styles.navLinkActive : {})}}
            onClick={() => setCurrentPage('contact')}
          >
            Contact
          </span>
        </div>
      </nav>

      {currentPage === 'home' && renderHome()}
      {currentPage === 'portfolio' && renderPortfolio()}
      {currentPage === 'contact' && renderContact()}

      <footer style={styles.footer}>
        © 2026 Switchgrass Solutions. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
