"use client"
import React, {useState} from 'react'
import './Navbar.css'
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion'
import Image from 'next/image';
import Logo from '../../assets/logo.png'
import { Link } from 'react-scroll';

const Navbar = () => {

  const [click, setClick ] = useState(false)
  const handleClick = () => setClick(!click)
  const [toggle, setToggle] = useState(false)

  return (

    <nav className='app__navbar fixed z-30 w-full flex md:justify-between items-center bg-white drop-shadow-lg'>
        <div className='app__navbar-logo mx-12 md:mx-auto'>
          <Image src={Logo} alt="logo" height={90} className='md:w-[300px] w-[170px]'/>
        </div>
        <ul className='app__navbar-links text-lg text-black md:flex mx-[6rem] hidden'>
          {['HOME', 'SOBRE NÓS', 'SERVIÇOS', 'FALE CONOSCO', 'MARCAS'].map((item) => (
            <li className='app__flex p-text mx-2 hover:text-primary-red transition duration-300' key={`link-${item}`}>
              <div />
              <Link to={item} spy={true} smooth={true} offset={-100} duration={500} className='cursor-pointer'>{item}</Link>
            </li>
          ))}
        </ul>
        
        <div className='app__navbar-menu bg-primary-red md:hidden absolute right-10 h-[35px] w-[35px] rounded-[50%] flex items-center justify-center'>
          <HiMenuAlt4 onClick={() => setToggle(true)}/>
          {
            toggle && (
              <motion.div className='bg-white text-black fixed z-10 top-5 drop-shadow-lg w-full rounded-bl-[40px]'
                initial={{y:-300}}
                animate={{y: 0}}
                exit={{y: -300}}
                transition={{ duration: 0.85, ease: 'easeOut' }}
              >
                <HiX onClick={() => setToggle(false)} />
                <ul>
                  {['HOME', 'SOBRE NÓS', 'SERVIÇOS', 'FALE CONOSCO', 'MARCAS'].map((item) => (
                    <li className='app__flex py-5 px-5' key={item}>
                     <Link to={item} spy={true} smooth={true} offset={-120} duration={500} className='cursor-pointer' onClick={() => setToggle(false)}>{item}</Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          }
        </div>

    </nav>
  )
}

export default Navbar