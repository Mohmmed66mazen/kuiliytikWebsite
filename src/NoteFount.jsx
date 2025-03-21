import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Button from "../components/button"
import { Link } from "react-router-dom"

function NoteFount() {


  return (
    <>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-background/95">
      <Header/>
      <HeroSection/>
      <Footer/>
      </div>
    </>

  )
}

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md py-2 shadow-sm" : "bg-transparent py-4"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-2">
         
            <img
              src="./logoName.svg"
              alt="Logo"
              className="w-24"
            />
        </div>
  <Button text="تواصل"/>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section dir="rtl" className="py-20 md:py-32 flex items-center  h-[75svh]  lg:py-0 overflow-hidden">
      <div className="container px-4 md:px-6   relative">
        {/* Background elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

        
          <motion.div
            className="flex  flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-3">
              <h1 className="text-8xl text-center text-primary font-bold tracking-tighter l md:text-8xl">
              404</h1>     
              <p className="text-2xl text-center ">هذه الصفحة غير موجودة</p>
              </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
            <Link to="/" className="py-2 mx-auto rounded-md px-8 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                الصفحة الرئيسية
              </Link>
            </div>
          </motion.div>
        
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 border-t border-border/40">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 sm:mb-0">
 
              <img
                src="./logo.svg"
                alt="Logo"
                className="w-4"
              />
              <span>2025</span>

          </div>

        </div>
      </div>
    </footer>
  )
}

export default NoteFount
