import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Button from "../components/button"

function App() {


  return (
    <>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-background/95">
      <Header/>
      <HeroSection/>
      <FeaturesSection/>
      <CTASection/>
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
    <section dir="rtl" className="py-20 md:py-32 lg:py-0 overflow-hidden">
      <div className="container px-4 md:px-6 relative">
        {/* Background elements */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16 relative z-10">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-3">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              تنظيم .
                <span className="text-primary"> تفـاعـل . </span>
                مشاركة
              </h1>
              <p className="text-xl text-muted-foreground ">نظم جدولك الدراسي وتتبع موادك بسهولة مع تطبيق كليتك.</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
            <button className="h-11 rounded-md px-8 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                قر يــبا على الأندرويد
              </button>
           
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative w-full max-w-[500px] aspect">
              <div className="absolute inset-0 bg-primary/20  rounded-2xl blur-3xl"></div>
              <div className="relative  backdrop ">
                <img
                  src="/device.png"
                  alt="Focus app interface"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
function FeaturesSection() {
  return (
    <section dir="rtl" id="features" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">مميزات التطبيق</h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard number="01" title="ادخال جدول المحاضرات بشكل مباشر من المنظومة " color="from-primary to-primary/70" />
          <FeatureCard number="02" title="ترتيب الجدول بشكل بسيط و منظم" color="from-primary/80 to-primary/50" />
          <FeatureCard number="03" title="امكانية مشاركة الجدول مع اصدقائك" color="from-primary/60 to-primary/30" />
          <FeatureCard number="04" title="تنزيل و ترتيب الشيتات بحسب اسماء المواد" color="from-primary/70 to-primary/40" />
          <FeatureCard number="05" title="فتح المنظومة ممباشرة بدون تسجيل الدخول كل مرة" color="from-primary/50 to-primary/20" />
          {/* <FeatureCard number="06" title="Collaboration" color="from-primary/90 to-primary/60" /> */}
        </div>
      </div>
    </section>
  )
}
function FeatureCard({ number, title, color }) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl border bg-background/50 p-6 transition-all hover:shadow-md"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div
        className={`absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br ${color} opacity-20 blur-xl group-hover:opacity-30 transition-opacity`}
      ></div>
      <div className="relative z-10">
        <p className={`text-sm font-bold text-primary`}>{number}</p>
        <h3 className="mt-2 text-xl font-bold">{title}</h3>
      </div>
    </motion.div>
  )
}
function CTASection() {
  return (
    <section className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          className="relative overflow-hidden rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/70"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=800')] mix-blend-overlay opacity-20"></div>

          <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col items-center text-center">
            <h2 className="text-3xl  font-bold tracking-tighter text-white sm:text-4xl md:text-5xl max-w-2xl">
            هل أنت مستعد لتجربة جامعية 
            </h2>
            <h2 className="text-3xl mt-2  font-bold tracking-tighter text-white sm:text-4xl md:text-5xl max-w-2xl">
                 أكثر تنظيمًا ؟
            </h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button className="h-11 rounded-md px-10 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/80" >
                حمل الان
              </button>
            </div>
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

export default App
