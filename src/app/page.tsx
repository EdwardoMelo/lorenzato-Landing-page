import Image from 'next/image'
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'
import About from './components/about/about'
import Services from './components/services/Services'
import Head from 'next/head'
import Contacts from './components/contact/Contacts'
import Location from './components/location/Location'
import Footer from './components/footer/Footer'
export default function Home() {
  return (
    <>
     <Header />
      <About />
     <Services />
     <Contacts />
     <Location />
     <Footer />
    </>
   
  )
}
