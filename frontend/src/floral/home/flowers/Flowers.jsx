import React, { use, useEffect, useState } from 'react'
import styles from './Flowers.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsThunk } from '../../redux/reducer/productSlice';
const Flowes = () => {


    const [basket, setBasket] = useState([])
    const [wishlist, setWishlist] = useState([])
    const [search, setSearch] = useState('')
    const [sort, setSort] = useState('')

    const dispatch = useDispatch();
    const { product, loading, error } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getProductsThunk())
        const storedBasket = JSON.parse(localStorage.getItem('basket')) || []
        const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || []
        setBasket(storedBasket)
        setWishlist(storedWishlist)
    }, [dispatch])

    const addToBasket = (item) => {
        const updatedBasket = [...basket]
        const existingBasket = updatedBasket.find((i) => i._id === item._id)

        if (existingBasket) {
            existingBasket.count += 1
        }
        else {
            updatedBasket.push({ ...item, count: 1 });
        }

        localStorage.setItem('basket', JSON.stringify(updatedBasket))
        setBasket(updatedBasket)
    }

    const addToWish = (item) => {
        const updatedWishlist = [...wishlist]
        const existingWishlist = updatedWishlist.findIndex((i) => i._id === item._id)

        if (existingWishlist > 1) {
            updatedWishlist.splice(index, 1)
        }
        else {
            updatedWishlist.push(item);
        }

        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist))
        setWishlist(updatedWishlist)
    }
    console.log(wishlist);

    const isInWishList = (id) => wishlist.some((item) => item._id === id)

    const filteredProducts = product
        ?.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
        .sort((a, b) => {
            if (sort === 'asc') return Number(a.price) - Number(b.price);
            if (sort === 'desc') return Number(b.price) - Number(a.price);
            return 0;
        });




    if (loading) return <span>Yuklenir</span>
    if (error) return <span>Yukleme zamani xeta bas verdi</span>

    return (
        <section className={styles.flowersSection}>
            <div className={styles.container}>
                <div className={styles.flowersDiv}>
                    <div className={styles.flowersText}>
                        <h3>Devoted to wonderful beauty</h3>
                        <h3>Flowers Pricing</h3>
                    </div>

                    <div className={styles.inputBox}>
                        <input
                            type="text"
                            placeholder="Search product..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                        <button onClick={() => setSort('asc')}>Ucuzdan Bahaliya</button>
                        <button onClick={() => setSort('desc')}>Bahalidan Ucuza</button>
                    </div>

                    <div className={styles.flowersBox}>
                        {filteredProducts?.slice(0, 6).map((item, index) => (
                            <div key={index} className={styles.flowersProduct}>
                                <div className={styles.flowersimage}><img src={item.image} alt="" /></div>
                                <div className={styles.flowersBody}>
                                    <p>{item.name}</p>
                                    <p>${item.price}</p>
                                </div>
                                <button onClick={() => addToBasket(item)}>Add To Basket</button>
                                <button onClick={() => addToWish(item)}>
                                    {isInWishList(item._id) ? "Remove from WishList" : "Add To WishList"}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Flowes