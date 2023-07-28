import React from "react";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.footer}>
            <p>Built with ❤️ by <a href="https://ejaynew.github.io/" target="_blank" rel="noreferrer">Emma Jayne</a>. Photo by <a href="https://unsplash.com/fr/@rocinante_11?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">Mick Haupt</a> on <a href="https://unsplash.com/photos/CbNBjnXXhNg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noreferrer">Unsplash</a>.</p>
        </div>
    )
}

export default Footer;