import React from 'react'
import styles from './Navbar.module.css'
import { FaBars } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav>
            <div className={styles.container}>
                <a href='/' className={styles.logo}>Floral Studio</a>
                <div className={styles.pages}>
                    <a href="/">Home</a>
                    <a href="">About Us</a>
                    <a href="dashboard">Dashboard</a>
                    <a href="basket">Basket</a>
                    <a href="wishlist">Wishlist</a>
                </div>
                <div className={styles.hamburger}><FaBars /></div>
            </div>
        </nav>
    )
}

export default Navbar