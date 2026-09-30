'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';

const MEMBERS = [
  {
    name: 'Ruben Saldanha',
    role: 'President',
    image: '/team/ruben.png',
    description: 'Leading the AgentBlazer Club initiatives and overseeing all operations.',
    overview: 'Directs overall vision, team alignment, and executive execution.',
    category: 'Leadership',
  },
  {
    name: 'Ajay Preenal Dsouza',
    role: 'Vice President',
    image: '/team/ajay.png',
    description: 'Assisting club executive decisions and driving strategic planning.',
    overview: 'Drives internal execution, coordination, and team momentum.',
    category: 'Leadership',
  },
  {
    name: 'Stevin Dsouza',
    role: 'Tech Lead',
    image: '/team/stevin.png',
    description: 'Managing technical projects, architectures, and workshops.',
    overview: 'Oversees software and hardware tech stacks and innovation.',
    category: 'Technology',
  },
  {
    name: 'Frenny Chrystal Saldanha',
    role: 'Resource Head',
    image: '/team/frenny.png',
    description: 'Managing logistics, club assets, and all operational resources.',
    overview: 'Ensures seamless resource management and asset allocation.',
    category: 'Operations',
  },
  {
    name: 'Joyline Galbao',
    role: 'Secretary',
    image: '/team/joyline.png',
    description: 'Handling documentation, communications, and scheduling.',
    overview: 'Maintains formal records, relations, and correspondence.',
    category: 'Administration',
  },
  {
    name: 'Chinthan N V',
    role: 'Media Head',
    image: '/team/chinthan.png',
    description: 'Directing media coverage, design branding, and social media.',
    overview: 'Leads creative strategy, visual content, and club identity.',
    category: 'Creative',
  },
];

export default function TeamPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const member = MEMBERS[currentIndex];

  const selectMember = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    window.setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 260);
  };

  const nextMember = () => {
    if (currentIndex < MEMBERS.length - 1) selectMember(currentIndex + 1);
  };

  const previousMember = () => {
    if (currentIndex > 0) selectMember(currentIndex - 1);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight') nextMember();
      if (event.key === 'ArrowLeft') previousMember();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <div className={styles.page}>
      <div className={`${styles.bgBlob} ${styles.blobOne}`} aria-hidden="true" />
      <div className={`${styles.bgBlob} ${styles.blobTwo}`} aria-hidden="true" />

      <header className={styles.header}>
        <div className={styles.logo}>
          <span className={styles.logoIcon} aria-hidden="true">&#x26A1;</span>
          <span>AgentBlazer Club</span>
        </div>
        <nav className={styles.nav} aria-label="Team navigation">
          <a href="#members">Members</a>
          <a href="#overview">About</a>
          <a href="/events">Events</a>
        </nav>
        <div className={styles.memberCounter} aria-live="polite">
          <span>{currentIndex + 1}</span> / <span>{MEMBERS.length}</span>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.leftColumn} id="members">
          <div className={styles.metaTag}>{member.category}</div>
          <h1 className={styles.memberTitle}>{member.name}</h1>
          <p className={styles.memberBio}>{member.description}</p>
          <div className={styles.detailsGrid}>
            <div className={styles.detailItem}>
              <label htmlFor="member-role">Role</label>
              <span id="member-role">{member.role}</span>
            </div>
            <div className={styles.detailItem}>
              <label>Club</label>
              <span>AgentBlazer</span>
            </div>
          </div>
        </div>

        <div className={styles.centerStage}>
          <div className={`${styles.imageWrapper} ${isAnimating ? styles.exit : styles.enter}`}>
            <button
              className={`${styles.imageNav} ${styles.previous}`}
              onClick={previousMember}
              aria-label="Previous member"
              hidden={currentIndex === 0}
            >
              &lt;
            </button>
            <img src={member.image} alt={`${member.name} - ${member.role}`} />
            <button
              className={`${styles.imageNav} ${styles.next}`}
              onClick={nextMember}
              aria-label="Next member"
              hidden={currentIndex === MEMBERS.length - 1}
            >
              &gt;
            </button>
          </div>
          <div className={styles.dotIndicators} role="tablist" aria-label="Member selector">
            {MEMBERS.map((item, index) => (
              <button
                key={item.name}
                className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
                onClick={() => selectMember(index)}
                role="tab"
                aria-label={`Member ${index + 1}`}
                aria-selected={index === currentIndex}
              />
            ))}
          </div>
        </div>

        <div className={styles.rightColumn} id="overview">
          <div className={styles.rightCard}>
            <h2>Overview</h2>
            <p>{member.overview}</p>
            <div className={styles.statRow}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{String(currentIndex + 1).padStart(2, '0')}</span>
                <span className={styles.statLabel}>Member No.</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{MEMBERS.length}</span>
                <span className={styles.statLabel}>Total Members</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
