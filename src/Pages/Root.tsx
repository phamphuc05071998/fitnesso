import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'
const Root = () => {
  return (
    
    <>
        <Navigation/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default Root