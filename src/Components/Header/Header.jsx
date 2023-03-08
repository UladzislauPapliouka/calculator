import React from "react";
import styles from "./Header.module.css"


const Header = () => {
    return (
        <header className={styles.headerBlock}>
            <span className={styles.appTitle}>Calculator App</span>
            <div className={styles.navigation}>
                <span className={`${styles.navigation_item} ${styles.active}`}>Home</span>
                <span className={`${styles.navigation_item}`}>Settings</span>
            </div>
        </header>
    )
}

export default  Header