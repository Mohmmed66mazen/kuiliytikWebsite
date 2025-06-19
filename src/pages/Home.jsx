import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Button from "../../components/button"
import ReactGA from 'react-ga4';
function Home() {
    useEffect(() => {
        ReactGA.initialize('G-M2K5J1CV7L');
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
      }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-background to-background/95">
      {/* <Header/> */}
      <HeroSection/>
      <FeaturesSection/>
      <CTASection/>
      <Footer/>
      </div>
    </>

  )
}

function Footer() {
  return (
    <footer dir="rtl" className="py-12">
      <div id="conect" className="container px-4 md:px-6 flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold mb-4">تواصل معنا</h3>
        <p className="text-muted-foreground mb-8 max-w-md">
          تابعنا على منصات التواصل الاجتماعي للبقاء على اطلاع بآخر الأخبار والتحديثات.
        </p>
        <div className="flex gap-4">
          <a
            href="https://www.facebook.com/share/194tDHn1ay/"
            target="_blank"
            rel="noopener noreferrer"
            className="group  inline-flex items-center justify-center rounded-full bg-[#1877F2] w-12 h-12 transition-all duration-300 hover:w-36"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
            </svg>
            <span className="text-white font-bold overflow-hidden max-w-0 group-hover:max-w-full transition-all duration-300 group-hover:ml-2">
              فيسبوك
            </span>
          </a>
          <a
            href="https://t.me/mohmmed_mazen"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center rounded-full bg-[#0088cc] w-12 h-12 transition-all duration-300 hover:w-36"
          >
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.88-1.85 8.64c-.15.69-.57.86-1.13.53l-2.88-2.12-1.39 1.33c-.15.15-.28.28-.53.28l.2-2.94 5.2-4.7c.22-.2-.05-.32-.34-.12l-6.44 4.03-2.8-.87c-.68-.21-.69-.68.14-1.02l11.25-4.38c.57-.22 1.05.14.88.84z"/>
            </svg>
            <span className="text-white font-bold overflow-hidden max-w-0 group-hover:max-w-full transition-all duration-300 group-hover:ml-2">
              تليجرام
            </span>
          </a>
        </div>
        <div className="mt-8 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kuiliytik. كل الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}

function HeroSection() {
  // Add a handler to trigger GA event and download
  const handleDownload = () => {
    ReactGA.event({
      category: 'User',
      action: 'Download Android App',
      label: 'Download Button Clicked'
    });
    // Create a temporary link to trigger the download
    const link = document.createElement('a');
    link.href = '/kuiliytik.apk';
    link.download = '';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
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
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div id="downlod" className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <button 
                onClick={handleDownload}
                className="h-11 text-xl font-bold rounded-md px-8 border border-input bg-primary hover:bg-accent hover:text-accent-foreground">
                تحميل التطبيق للاندرويد
              </button>
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
          <div>
          <FeatureCard number="01" title="ادخال جدول المحاضرات بشكل مباشر من المنظومة " color="from-primary to-primary/70" />
            <img src="/login.webp"/>
          </div>
          <div>
          <FeatureCard number="02" title="ترتيب الجدول بشكل بسيط و منظم" color="from-primary/80 to-primary/50" />
            <img src="/Screenshot_2.webp"/>
          </div>
          <div>
          <FeatureCard number="03" title="الحصول على تفصيل المادة بمجرد النقر عليها" color="from-primary to-primary/70" />
            <img src="/subjectDetailes.webp"/>
          </div>
            <div>
          <FeatureCard number="04" title="استعرض بسرعة محاضراتك القادمة والأصدقاء المتواجدين في الجامعة"color="from-primary/60 to-primary/30" />
            <img src="/Screenshot_1.webp"/>
          </div>
          <div>
          <FeatureCard number="05" title="امكانية مشاركة الجدول مع اصدقائك" color="from-primary/60 to-primary/30" />
            <img src="/share.webp"/>
          </div>
          
            <div>
          <FeatureCard number="06" title="تمكين خيار حفظ بيانات الحساب لتسريع عملية تسجيل الدخول مستقبلاً" color="from-primary/60 to-primary/30" />
            <img src="/saveAccount.webp"/>
          </div>
          <div className="col-span-full">
            <div className="bg-primary/10 border-l-4 border-primary/50  p-4 rounded-md mb-4" role="alert">
              <strong className="font-bold">ملاحظة: </strong>
              <span className="block sm:inline">
كل معلوماتك تظل محفوظة فقط على هاتفك، ولا يتم إرسالها إلى أي مكان آخر. التطبيق مجرد أداة تساعدك في ترتيب جدولك وتحليله، وما يحتاج الإنترنت إلا عند تحميل الجدول لأول مرة أو إذا حبيت تشاركه مع أحد أصدقائك. بعد ذلك، كل شيء يشتغل مباشرة من جهازك، بدون الحاجة للاتصال بأي نظام خارجي
                </span>
            </div>
          </div>
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
             هل أنت مستعد لتجربة جامعية  أكثر تنظيمًا ؟
            </h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="/kuiliytik.apk" download>
              <button className="h-11 rounded-md px-10 text-lg bg-secondary text-secondary-foreground hover:bg-secondary/80" >
                حمل الان
              </button>
              </a>
            </div>
          </div>
        </motion.div>
        {/* <div>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#1877f2] text-white font-bold text-lg shadow-lg hover:bg-[#145db2] transition-colors duration-200"
          >
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0"/>
            </svg>
            تابعنا على فيسبوك
          </a>
        </div> */}
      </div>
    </section>
  )
}

export default Home
