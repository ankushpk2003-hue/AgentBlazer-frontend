"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './EventsSection.module.css';

const EVENT_DATA = [
  { 
    id: 1, 
    title: 'Agentforce Technical Session',
    date: 'August 28, 2025',
    description: 'Held alongside the club launch, Salesforce executives Mr. Santhosh Rebello and Mr. Stephen Pinto delivered an expert session on Agentforce and AI career opportunities (Ref: CSE/AB/2025-26/02). They traced AI evolution through Predictive, Copilot, and Agentic AI (autonomous systems using Salesforce Data Cloud), highlighted key career pathways in Salesforce Administration, Analytics, and Solution Development, and urged students to build adaptability within the Trailblazer ecosystem.',
    image: '/agentforce_session.jpg'
  },
  { 
    id: 2, 
    title: '"Master the Future: Hands-on GSOC & LLMs Workshop"',
    date: 'February 14, 2026',
    description: 'Organized by the Department of CSE in association with the AgentBlazer Club, this workshop was conducted by Mr. Anas Khan (Software Development Engineer at HackerRank) for approximately 55 participants. The hands-on session provided practical GitHub workflow training (forking, cloning, pull requests), guidance on Google Summer of Code (GSOC) participation, and an overview of the AI ecosystem. Key technical topics covered included LLM parameters (Temperature, Top-P, Max Tokens), prompt strategies, Retrieval Augmented Generation (RAG), function calling, Gemini AI, and development frameworks such as LangChain, LlamaIndex, CrewAI, Gradio, and Streamlit. The session opened with a welcome by Club VP Mr. Ajay D\'Souza and concluded with a token of appreciation presented by Faculty Coordinator Ms. Nisha J Roche, along with a vote of thanks by Student President Mr. Ruben Saldanha and support from HOD Dr. Melwyn D’Souza.',
    image: '/gsoc_llm.jpg'
  },
  { 
    id: 3, 
    title: '"Demystifying Generative Models" Workshop',
    date: 'March 18, 2026',
    description: 'Under the guidance of Ms. Nisha J. Roche, 6th-semester CSE students Prajwal Royston Corderio and Chacko P Abraham led a hands-on peer-learning workshop on Generative AI. The session detailed AI governance frameworks (LLM Council), transformer mechanisms, and prompt engineering, alongside comparisons of LLaMA, Groq, Mistral AI, ChatGPT, GitHub Copilot, and Perplexity. Students engaged in an AI quiz, a three-stage model evaluation challenge, and a feature-modification coding task before a valedictory session to end the program.',
    image: '/generative_models.jpg'
  },
  { 
    id: 4, 
    title: '"PROMPT OPS-2K26" Competition',
    date: 'March 25, 2026',
    description: 'Organized by the AgentBlazer Club and Cipher under the guidance of Ms. Nisha J Roche, Ms. Jaishma K, and HOD Dr. Melwyn D’Souza, this technical competition focused on prompt engineering and AI tools. Track 1 (1st Year) featured invitation generation, logo recreation, and image recreation rounds, with Chinmayee, Chris Royston Monteiro, and Deeksha Ravi Moger taking top honors. Track 2 (2nd Year) tested students in JSON conversion, Python code debugging, and a Gemini AI security prompt extraction challenge, with Harimurali KS, Venus Suhani D’Lima, and Venisha Snehal D’Souza securing top positions.',
    image: '/prompt.jpg'
  },
  { 
    id: 5, 
    title: '"Cyber Security and Career Pathways" Session',
    date: 'April 01, 2026',
    description: 'Organized by the Department of CSE in association with the AgentBlazer Club, this hands-on workshop was delivered by Mr. Suhas Nayak (Tech Lead – SecOps, Ingersoll Rand) for 6th-semester students. The session provided practical exposure to core security concepts, live tool demonstrations including Shodan, OSINT techniques, Google Dorking, CVE management, SQL Injection, and the Cyber Kill Chain model. It concluded with actionable guidance on career roles such as Security Analyst, SOC Analyst, Ethical Hacker, and Cloud Security Engineer.',
    image: '/Cybersecurity_Career_Pathways.jpeg'
  },
  { 
    id: 6, 
    title: 'Agentforce Workshop',
    date: 'May 22, 2026',
    description: 'The AgentBlazer Club, in collaboration with Salesforce, organized a hands-on technical workshop focused on building AI agents and prompt-based workflow automation using the Salesforce Trailhead environment. Students gained practical experience in designing Sales Email Prompt Templates, Flex Prompt Templates, and configuring automated prompt flows to build reusable AI structures. Coordinated by faculty coordinator Ms. Nisha Roche and student coordinator Mr. Ruben Saldanha, the session concluded with an interactive discussion on industry applications of AI agents and career opportunities in the Salesforce ecosystem.',
    image: '/agentforce_workshop.jpg'
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 70,
      damping: 15
    }
  }
};

export default function EventsSection() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedEvent]);

  return (
    <>
      <section className={styles.eventsSection}>
        <h2 className={styles.sectionTitle}>OUR EVENTS</h2>
        
        <motion.div 
          className={styles.eventsGrid}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {EVENT_DATA.map((event) => (
            <motion.div 
              key={event.id} 
              className={styles.eventCard}
              onClick={() => setSelectedEvent(event)}
              variants={cardVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {event.image ? (
                <div className={styles.cardImageContainer}>
                  <img src={event.image} alt={event.title} className={styles.eventImage} />
                </div>
              ) : (
                <div className={styles.cardImage} style={{ background: 'linear-gradient(45deg, #1a1a24, #2a2a35)' }}></div>
              )}
              
              <div className={styles.cardOverlay}>
                <h3 className={styles.cardTitle}>{event.title}</h3>
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            className={`${styles.eventCard} ${styles.allEventsCard}`}
            variants={cardVariants}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
          >
            <p className={styles.allEventsText}>
              Hackathons, workshops, contests and meetups — all year round.
            </p>
            <button className={styles.viewAllBtn}>
              View all events &rarr;
            </button>
          </motion.div>
        </motion.div>
      </section>

      {selectedEvent && (
        <div className={styles.modalOverlay} onClick={() => setSelectedEvent(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setSelectedEvent(null)}>
              &times;
            </button>
            {selectedEvent.image ? (
              <div className={styles.modalImageContainer}>
                <img src={selectedEvent.image} alt={selectedEvent.title} className={styles.modalImage} />
              </div>
            ) : (
              <div className={styles.modalImagePlaceholder}></div>
            )}
            <div className={styles.modalBody}>
              <h2 className={styles.modalTitle}>{selectedEvent.title}</h2>
              <p className={styles.modalDate}>{selectedEvent.date}</p>
              <p className={styles.modalDescription}>{selectedEvent.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
