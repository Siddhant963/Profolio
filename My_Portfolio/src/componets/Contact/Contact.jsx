import React from 'react';
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <section className={styles.container} id="contact" >
      <h2 className={styles.title}>Contact Me</h2>
      <div className={styles.contactItems}>
        
        <div className={styles.contactItem}>
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 24 24" fill="currentColor"><path d="M2 4v16h20V4H2zm18 14H4V6h16v12zm-9.5-2.09L6 10.5l1.41-1.41L10.5 13l6.09-6.09L18 8.5l-7.5 7.41z"/></svg>
          <a href="mailto:annpurnasha474.com">annpurnasha474@gmail.com</a>
        </div>

        <div className={styles.contactItem}>
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-6.75 19h-2.5v-6.5h2.5v6.5zm-1.25-7.64c-.8 0-1.31-.52-1.31-1.17 0-.66.52-1.17 1.32-1.17s1.32.51 1.32 1.17c0 .65-.52 1.17-1.33 1.17zm7.25 7.64h-2.5v-3.5c0-.85-.02-1.94-1.18-1.94-1.18 0-1.36.92-1.36 1.87v3.57h-2.5v-6.5h2.4v.89h.03c.33-.62 1.15-1.27 2.37-1.27 2.54 0 3.01 1.67 3.01 3.84v3.03z"/></svg>
          <a href="https://www.linkedin.com/in/annpurna-19s/" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
        </div>

        <div className={styles.contactItem}>
          <svg xmlns="http://www.w3.org/2000/svg" className={styles.icon} viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.385.6.113.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.334-1.757-1.334-1.757-1.091-.746.083-.73.083-.73 1.207.086 1.843 1.24 1.843 1.24 1.07 1.835 2.807 1.304 3.493.997.107-.776.42-1.304.762-1.603-2.665-.3-5.466-1.332-5.466-5.931 0-1.312.468-2.382 1.236-3.221-.124-.303-.536-1.524.116-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 0 1 3.002-.403c1.017.005 2.042.137 3.002.403 2.291-1.552 3.297-1.23 3.297-1.23.654 1.652.242 2.873.118 3.176.77.839 1.235 1.909 1.235 3.221 0 4.612-2.805 5.628-5.478 5.921.432.373.815 1.102.815 2.222v3.293c0 .32.192.695.8.577 4.764-1.584 8.2-6.082 8.2-11.385 0-6.627-5.373-12-12-12z"/></svg>
          <a href="https://github.com/Annpurna2005" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        </div>

      </div>
    </section>
  );
};
