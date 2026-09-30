"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.nav}>
        <div className={styles.navLogo}>
          <img src="/AgentBlazer_Logo.png" alt="Logo" className={styles.navLogoImg} />
        </div>
        <div className={styles.navLinks}>
          <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>Home</Link>
          <Link href="/events" className={`${styles.navLink} ${pathname === '/events' ? styles.active : ''}`}>Events</Link>
          <Link href="/team" className={`${styles.navLink} ${pathname === '/team' ? styles.active : ''}`}>Team</Link>
          <Link href="/about" className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}>About</Link>
        </div>
        <div className={styles.navActions}>
          <button className={styles.iconButton}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>
          <button className={styles.joinBtn}>Join/Contact</button>
          <button className={styles.signInBtn}>Sign In</button>
        </div>
      </nav>
    </div>
  );
}
