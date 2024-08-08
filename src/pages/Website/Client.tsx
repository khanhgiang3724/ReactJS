import React from 'react'
import Header from '../../components/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Banner from '../../components/Banner'

const Client = () => {
  return (
    <>
        <Header/>
        <Banner/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Client
