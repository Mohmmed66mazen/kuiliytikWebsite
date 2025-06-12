import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Button from "../../components/button"
import {  NavLink } from "react-router-dom"

function NoteFount() {


  return (
    <>
        
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-background/95">
     
       <section dir="rtl" className="py-20 md:py-32 flex items-center  h-[75svh]  lg:py-0 overflow-hidden">
      <div className="container px-4 md:px-6   ">
        {/* Background elements */}
        <div className="absolute -top-24 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      

        
          
     
            <div className="space-y-3">
              <h1 className="text-8xl text-center text-primary font-bold tracking-tighter l md:text-8xl">
              404</h1>     
              <p className="text-2xl text-center ">هذه الصفحة غير موجودة</p>
              </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
            <NavLink to="/" className="py-2 mx-auto rounded-md px-8 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                الصفحة الرئيسية
              </NavLink>
    

             
            </div>
          
        
      </div>
    </section>
    
      </div>
    </>

  )
}



// function HeroSection() {
//   return (

//   )
// }



export default NoteFount
