import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from '../Pages/dashboard/Dashboard'
// import MenuSection from '../Pages/navLinks/menuSection/MenuSection'
// import GiftCards from '../Pages/navLinks/giftcards/GiftCards'
import Contact from '../Pages/navLinks/contact/Contact'
import Error from '../../src/Pages/error404/ErrorPage'
import Chefjunk from '../Pages/dashboard/chefofjunk/Chefjunk'
// import JunkDetailFile from '../Pages/dashboard/Junkdetailpage/JunkDetailFile'
// import SippyDown from '../Pages/dashboard/sippy_down/SippyDown'

const AllRoutes = () => {
    return (
        <>
  
            <Routes>
                <Route path="/" element={<Dashboard />} />
                {/* <Route path="/menu" element={<MenuSection />} /> */}
                {/* <Route path="/gift-cards" element={<GiftCards />} /> */}
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Error />} />
                <Route path="/chefs-of-junk" element={<Chefjunk />} />
                {/* <Route path="/junk-details" element={<JunkDetailFile />} /> */}
                {/* <Route path="/junk-sippy-downs" element={<SippyDown />} /> */}
            </Routes>
        </>
    )
}

export default AllRoutes