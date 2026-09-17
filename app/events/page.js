import EventsSection from '../components/EventsSection';
import Navbar from '../components/Navbar';
import styles from '../page.module.css'; // Reusing the global layout styles

export default function EventsPage() {
  return (
    <div className={styles.container}>
      {/* Reusing the background scrolling layout */}
      <div className={styles.backgroundLayer}></div>
      
      <Navbar />

      <main style={{ paddingTop: '80px', flex: 1 }}>
        <EventsSection />
      </main>
    </div>
  );
}
