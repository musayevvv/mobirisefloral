import React, { useEffect, useState } from 'react'
import styles from './Basket.module.css'


const Basket = () => {
    const [basket, setBasket] = useState([])

    useEffect(() => {
        const storedBasket = JSON.parse(localStorage.getItem('basket')) || []
        setBasket(storedBasket)
    }, [])

    const updatedBasket = (newBasket) => {
        localStorage.setItem('basket', JSON.stringify(newBasket))
        setBasket(newBasket)
    }

    const increase = (_id) => {

        const newBasket = basket.map(item => {
            if (item._id === _id) {
                return { ...item, count: item.count += 1 }
            }
            return item
        })
        updatedBasket(newBasket)
    }

    const decrease = (_id) => {

        const newBasket = basket.map(item => {
            if (item._id === _id && item.count > 1) {
                return { ...item, count: item.count - 1 }
            }
            return item
        })
        updatedBasket(newBasket)
    }
    return (
        <div className={styles.basket}>
            <h1>Basket</h1>
            {basket.length === 0 ? (
                <p>Basket is empty</p>
            ) : (
                <ul>
                    {basket.map(item => (
                        <li key={item._id}>
                            <img src={item.image || item.img} alt={item.name || item.title} width="60" />
                            <span>{item.name || item.title}</span>
                            <span>Quantity: {item.count}</span>
                            <div className={styles.basket_buttons}>
                                <button onClick={() => increase(item._id)}>+</button>
                                <button onClick={() => decrease(item._id)} disabled={item.count === 1}>-</button>
                                <button onClick={() => remove(item._id)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default Basket