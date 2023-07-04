import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../Pages/dashboard/Dashboard'
import MenuSection from '../Pages/navLinks/menuSection/MenuSection'
import GiftCards from '../Pages/navLinks/giftcards/GiftCards'
import Contact from '../Pages/navLinks/contact/Contact'
import Error from '../../src/Pages/error404/ErrorPage'
import Chefjunk from '../Pages/dashboard/chefofjunk/Chefjunk'
import JunkDetailFile from '../Pages/dashboard/Junkdetailpage/JunkDetailFile'

const AllRoutes = () => {
    return (
        <>
  
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="menu" element={<MenuSection />} />
                <Route path="giftcards" element={<GiftCards />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<Error />} />
                <Route path="chefs-of-junk" element={<Chefjunk />} />
                <Route path="details" element={<JunkDetailFile />} />
            </Routes>
        </>
    )
}

export default AllRoutes