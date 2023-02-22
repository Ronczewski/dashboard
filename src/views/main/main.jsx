import React from "react"
import { Outlet } from "react-router-dom"
import { Footer } from "../../components/footer/footer"
import { Header } from "../../components/header/header"
// import { Navigation } from "../../components/nav/nav"
import { Slider } from "../../components/Slider/Slider"



export const MainContainer = () => {

   return <>
      <Header />
      {/* <Navigation /> */}
      <Slider/>
      <Outlet />
      <Footer />
   </>
}

