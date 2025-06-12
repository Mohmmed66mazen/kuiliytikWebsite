import {  useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import Button from "../components/button"

function Layout(){
    return <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
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
          src="/logoName.svg"
          alt="Logo"
          className="w-24"
        />
        </div>
        <a href="https://t.me/mohmmed_mazen" target="_blank" rel="noopener noreferrer">
        <Button text="تواصل" />
        </a>
      </div>
      </header>
    )
  }



  function Footer() {
    return (
      <footer className="py-8 border-t border-border/40">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
   
                <img
                  src="/logo.svg"
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

   export default Layout;