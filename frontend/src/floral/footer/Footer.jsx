import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <section className={styles.footerSection}>
            <div className={styles.container}>
                <div className={styles.footerDiv}>

                    <div className={styles.leftFooter}>
                        <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/signature.png" alt="" />
                        <div className={styles.inputBox}>
                            <input type="text" placeholder='Your Email' />
                            <button>Send</button>
                        </div>
                    </div>

                    <div className={styles.foot}>
                        <h5>About</h5>
                        <h5>About Us</h5>
                        <h5>Our Partners</h5>
                        <h5>Our Services</h5>
                    </div>
                    <div className={styles.foot}>
                        <h5>Contact</h5>
                        <h5>Contact Us</h5>
                        <h5>FAQ Page</h5>
                        <h5>About Me</h5>
                    </div>
                    <div className={styles.foot}>
                        <h5>Follow Us</h5>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Footer