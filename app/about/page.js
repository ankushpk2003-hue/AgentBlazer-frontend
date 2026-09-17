import HologramLogo from '../components/HologramLogo';
import Navbar from '../components/Navbar';
import styles from './page.module.css';
import globalStyles from '../page.module.css'; // Reuse background from home

export default function AboutPage() {
  return (
    <div className={globalStyles.container}>
      {/* Reusing the background scrolling layout */}
      <div className={globalStyles.backgroundLayer}></div>
      
      <Navbar />

      <main className={styles.aboutSection}>
        <div className={styles.heroGrid}>
          {/* Left Column: Hologram Logo */}
          <div className={styles.heroVisual}>
            <HologramLogo 
              src="/AgentBlazer_Logo.png" 
              alt="Agent Blazer Hologram" 
              style={{ width: '100%', height: '100%', maxWidth: '350px', maxHeight: '350px', margin: 0 }}
            />
          </div>

          {/* Right Column: Typography */}
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>// ABOUT AGENT BLAZER CLUB</div>
            <h1 className={styles.mainHeading}>
              WHAT IS<br />
              <span>AGENT BLAZER?</span>
            </h1>
            <p className={styles.description}>
              Agent Blazer is the premier national-level autonomous AI coding community 
              bringing students and professionals together to solve real-world problems. 
              We build innovative solutions, turn ideas into working prototypes, and push 
              the boundaries of what is possible with Generative AI and Autonomous Agents.
            </p>
            <p className={styles.description}>
              Organized by the Department of Computer Science & Engineering, our mission is 
              to bridge the "role–radiance gap" and empower the next generation of engineers 
              to lead the AI revolution.
            </p>
          </div>
        </div>

        {/* Statistics Bar at the bottom */}
        <div className={styles.statsBar}>
          <div className={styles.statItem}>
            <div className={styles.statValue}>500+</div>
            <div className={styles.statLabel}>Active Members</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>50+</div>
            <div className={styles.statLabel}>Projects Shipped</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>24/7</div>
            <div className={styles.statLabel}>Innovation Cycle</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>∞</div>
            <div className={styles.statLabel}>Endless Potential</div>
          </div>
        </div>
      </main>
    </div>
  );
}
