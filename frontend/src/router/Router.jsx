import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Layout from '../floral/layout/Layout'
import Home from '../floral/home/Home'
import Dashboard from '../floral/dashboard/Dashboard'
import Basket from '../floral/basket/Basket'
import Wishlist from '../floral/wishlist/Wishlist'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='dashboard' element={<Dashboard />} />
                    <Route path='basket' element={<Basket />} />
                    <Route path='wishlist' element={<Wishlist />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router