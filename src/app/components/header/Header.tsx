"use client"
import React from 'react'
import BannerImage from '../assets/wheel.jpg'
import Image from 'next/image'
import Navbar from '../navbar/Navbar'
import { Fragment } from 'react'
import { url } from 'inspector'
import Quality from '../../assets/quality.png'
import Security from '../../assets/security.png'
import Confidence from '../../assets/Confiança.png'
import './Header.css'
import { motion } from "framer-motion"
const Header = () => {
  const image : string = '../assets/wheel.jpg';
  return (

          <><Navbar />
          <div className='header__hero-banner flex flex-col justify-center w-full  h-[auto] ' id="HOME">
          <div className='header-image flex justify-center items-center w-full h-[580px] drop-shadow-lg'>
              <motion.div
              initial={{x: -1600, opacity: 0}}
              animate={{x: 0, opacity: 1}}
              transition={{duration: 0.9}}
               className='text-white z-10 ml-5'>
                  <h1 className='text-5xl font-sans-[Roboto] leading-loose italic underline decoration-2'>INSPIRANDO <br /> ---{'>'} MOBILIDADE</h1>
              </motion.div>
          </div>
          <div className='header__cards flex justify-center w-full lg:shadow-md bg-primary-red border-t'>
              <div className='cards flex flex-col lg:flex-row gap-[2rem] pt-5 w-4/5 border-t'>
                  <div className='px-12 flex flex-col items-center gap-3 py-5 lg:w-1/3 md:3/4 font-light bg-primary-red relative bottom-[3rem] rounded-t-2xl  border-t '>
                      <h1 className='text-xl font-light drop-shadow'>Qualidade</h1>
                      <p className='text-center drop-shadow-md'>Nossos procedimentos são os mais precisos e atuais do mercado</p>
                      <span className='drop-shadow-lg'><Image src={Quality} height={50} width={50} alt='quality' /></span>
                  </div>
                  <div className='px-12 flex flex-col items-center gap-3 pt-5 lg:w-1/3 md:3/4 text-center text-sm font-light bg-primary-red relative bottom-[5rem] rounded-t-2xl border-t '>
                      <h1 className='text-xl font-light drop-shadow'>Segurança</h1>
                      <p className='text-center drop-shadow-md'>Primamos pela segurança de nossos colaboradores e clientes</p>
                      <span className='mt-5 drop-shadow-lg'><Image src={Security} height={70} width={70} alt='quality'/></span>
                  </div>
                  <div className='px-12 flex flex-col items-center gap-3 pt-5 lg:w-1/3 md:3/4 text-center text-sm font-light bg-primary-red relative bottom-[3rem] rounded-t-2xl border-t '>
                      <h1 className='text-xl font-light drop-shadow'>Confiança</h1>
                      <p className='text-center drop-shadow-md'>Nossa reputação ao longo de anos de atuação não nos deixa mentir, a Lorenzato é o melhor lugar para confiar os cuidados de seu Automóvel</p>
                      <span className='drop-shadow-lg'><Image src={Confidence} height={50} width={50} alt='quality' /></span>
                  </div>
              </div>

          </div>
      </div></>
  )
}

export default Header