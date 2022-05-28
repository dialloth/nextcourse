import React from 'react'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'

export default function container({ children }) {
return (
    <div>
        <Navbar />
            {children}
        <Footer />
    </div>
)
}
