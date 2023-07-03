import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../Pages/dashboard/Dashboard'
import MenuSection from '../Pages/navLinks/menuSection/MenuSection'
import GiftCards from '../Pages/navLinks/giftcards/GiftCards'
import Contact from '../Pages/navLinks/contact/Contact'

const AllRoutes = () => {
    return (
        <>
  
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/menu" element={<MenuSection />} />
                <Route path="/giftcards" element={<GiftCards />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    )
}

export default AllRoutes