import React from 'react'
import styles from './Banner.module.css'
const Banner = () => {
    return (
        <section className={styles.bannerSection}>
            <div className={styles.bannerText}>
                <h5>Floral</h5>
                <h5>Excellent bouquets for you</h5>
            </div>
        </section>
    )
}

export default Banner