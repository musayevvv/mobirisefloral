import React, { useEffect } from 'react'
import styles from './Event.module.css'

const Event = () => {

    const arr = [
        {
            id: 1,
            event: 'Birthday Events',
            price: "16"
        },
        {
            id: 1,
            event: 'Wedding Events',
            price: "31"
        },
        {
            id: 1,
            event: 'Party Events',
            price: "52"
        }
    ]


    return (
        <section className={styles.eventSection}>
            <div className={styles.container}>
                <div className={styles.eventDiv}>
                    <div className={styles.eventText}>
                        <h3>Devoted to wonderful beauty</h3>
                        <h3>Event Pricing</h3>
                    </div>
                    <div className={styles.eventBox}>
                        {arr.map((item, index) => (
                            <div key={index} className={styles.eventProduct}>
                                <div className={styles.eventBody}>
                                    <h6><span>${item.price} per table</span></h6>
                                    <p className={styles.eventName}>{item.event}</p>
                                    <p>Lorem ipsum dolor sit amet laudem partem perfecto per</p>
                                    <button>Shop now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Event