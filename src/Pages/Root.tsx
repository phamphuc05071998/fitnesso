import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../layouts/Navigation/Navigation'
import Footer from '../layouts/Footer/Footer'
import ToastMessage from '../components/UI/ToastMessage/ToastMessage'
import { ScrollRestoration } from "react-router-dom";
const Root = () => {
  return (
    
    <>  
        <Navigation/>
        <ToastMessage/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        <ScrollRestoration/>
    </>
  )
}

export default Root