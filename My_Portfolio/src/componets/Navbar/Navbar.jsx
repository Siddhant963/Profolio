import React, { useState } from 'react'
import styles from "./Navbar.module.css"

export const Navbar = () => {
    const [Menuopen, setMenuopen] = useState(false)

    return (
        <nav className={styles.navbar}>
            <a className={styles.title} href="/">Portfolio</a>
            <div className={styles.menu}>
                {Menuopen ? (
                    <svg
                        className={styles.menuBtn}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        onClick={() => setMenuopen(false)}
                    >
                        <path d="M6 6L18 18M6 18L18 6" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                ) : (
                    <svg
                        className={styles.menuBtn}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        onClick={() => setMenuopen(true)}
                    >
                        <path d="M3 6h18M3 12h18M3 18h18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                )}

                {Menuopen && (
                    <ul className={`${styles.menuItems} ${Menuopen && styles.Menuopen}`}
                    onClick={()=>setMenuopen(false)}>
                        <li><a href="#About">About</a></li>
                        <li><a href="#project">Project</a></li>
                        <li><a href="#skills">Skill Sets</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                )}
            </div>
        </nav>
    )
}
