import React from 'react'
import styles from './Services.module.css'

const Services = () => {
    return (
        <section className={styles.servicesSection}>
            <div className={styles.container}>
                <div className={styles.servicesDiv}>
                    <div className={styles.servicesLeft}>
                        <div className={styles.leftText}>
                            <h5>Our Mission</h5>
                            <p>Lorem ipsum dolor sit amet, pri omnium verterem id, sit labore dicunt an, ea civibus.</p>
                            <button>Read More</button>
                        </div>
                    </div>
                    <div className={styles.servicesRight}>
                        <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/b4.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services