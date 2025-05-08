import React, { useEffect } from 'react'
import styles from './Ourteam.module.css'

const Ourteam = () => {

    const product = [
        {
            id: 1,
            name: 'Velva Kopf',
            job: "Biologist",
            image: "https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr1.jpg"
        },
        {
            id: 2,
            name: 'Sarah Palmer',
            job: "Florist",
            image: "https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr2.jpg"
        },
        {
            id: 3,
            name: 'Jessica Swift',
            job: "Photographer",
            image: "https://mobirise.com/extensions/floram4/floral-studio/assets/images/portr3.jpg"
        },

    ]


    return (
        <section className={styles.ourteamSection}>
            <div className={styles.container}>
                <div className={styles.ourteamDiv}>
                    <div className={styles.ourteamText}>
                        <h3>Contacts</h3>
                        <h3>Our team</h3>
                    </div>
                    <div className={styles.ourteamBox}>
                        {product.map((item, index) => (
                            <div key={index} className={styles.ourteamProduct}>
                                <div className={styles.ourteamimage}><img src={item.image} alt="" /></div>
                                <div className={styles.ourteamBody}>
                                    <p>{item.name}</p>
                                    <p>{item.job}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ourteam