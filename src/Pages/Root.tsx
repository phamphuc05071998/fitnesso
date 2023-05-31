import React from 'react'
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'
import ToastMessage from '../components/UI/ToastMessage/ToastMessage'
const Root = () => {
  return (
    
    <>
        <Navigation/>
        <ToastMessage/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </>
  )
}

export default Root