"use client";

import styles from './HologramLogo.module.css';

export default function HologramLogo({ src, alt, className, style }) {
  return (
    <div 
      className={`${styles.logoContainer} ${className || ''}`} 
      style={style}
    >
      <img 
        src={src} 
        alt={alt} 
        className={styles.hologramLogo} 
      />
    </div>
  );
}
