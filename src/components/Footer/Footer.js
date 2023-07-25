import React from "react";
import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.footer}>
            <p>Built with ❤️ by <a href="https://ejaynew.github.io/" target="_blank">Emma Jayne</a>. Photo by <a href="https://unsplash.com/fr/@rocinante_11?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Mick Haupt</a> on <a href="https://unsplash.com/photos/CbNBjnXXhNg?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>.</p>
        </div>
    )
}

export default Footer;