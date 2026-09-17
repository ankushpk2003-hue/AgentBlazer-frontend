import styles from './page.module.css';
import Navbar from './components/Navbar';
import ScrambleText from './components/ScrambleText';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.backgroundLayer}></div>

      <Navbar />

      <main className={styles.mainContent}>
        <div className={styles.loopGraphic}></div>
        <h1 className={styles.title}>
          <ScrambleText text="Agent Blazer" speed={40} /><br />
          <ScrambleText text="Club." delay={600} speed={40} />
        </h1>
        <p className={styles.subtitle}>
          Agent Blazer's premier coding community.<br />
          Realizing Ideas, Inspiring the rest.
        </p>
        <div className={styles.actionButtons}>
          <button className={styles.primaryBtn}>
            Enter Club
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button className={styles.secondaryBtn}>View Docs</button>
        </div>
      </main>


      <button className={styles.floatingNotice}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
        </svg>
        Notice
      </button>
    </div>
  );
}
