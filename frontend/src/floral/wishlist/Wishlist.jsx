import React, { useEffect, useState } from 'react'
import styles from './WishList.module.css'
const Wishlist = () => {

    const [wishlist, setWishlist] = useState([])

    useEffect(() => {
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || []
        setWishlist(storedWishlist)
    }, [])

    const updatedWishlist = (newWishlist) => {
        localStorage.setItem('wishlist', JSON.parse(wishlist))
        setWishlist(newWishlist)
    }

    const remove = (_id) => {
        const newWishlist = wishlist.filter(item => item._id !== _id)
        updatedWishlist(newWishlist)
    }

    return (
        <div className={styles.basket}>
            <h1>Wishlist</h1>
            {wishlist.length === 0 ? (
                <p>Wishlist is empty</p>
            ) : (
                <ul className={styles.wishlistList}>
                    {wishlist.map(item => (
                        <li key={item._id} className={styles.wishlistItem}>
                            <img src={item.image} alt={item.name} width="60" />
                            <div className={styles.itemInfo}>
                                <span>{item.name}</span>
                                {item.count && <span>Quantity: {item.count}</span>}
                            </div>
                            <div className={styles.basket_buttons}>
                                <button onClick={() => remove(item._id)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Wishlist