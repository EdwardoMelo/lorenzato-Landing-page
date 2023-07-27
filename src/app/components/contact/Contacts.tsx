"use client"
import React from 'react'
import TextField from '@mui/material/TextField'
import Image from 'next/image'
import Contact from '../../assets/contact.jpg'
import {AiTwotoneMail, AiFillPhone, AiOutlineWhatsApp} from 'react-icons/ai'
import { FaMapMarkerAlt, FaWhatsappSquare } from 'react-icons/fa'
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import Divider from '@mui/material/Divider';
import { useState } from 'react'

const Contacts = () => {

  return (
    <section className='contacts w-full flex flex-col justify-center items-center relative my-[2rem]' id='FALE CONOSCO'>
      <div className='contacts w-[90%] md:w-[80%] flex justify-between flex-col lg:flex-row '>

        <div className='contacts__form-container w-full lg:w-1/2 px-1 md:px-6 flex flex-col  items-start'>
        <div className='flex gap-1 px-8 text-blue-900 '>
                      <a className='hover:text-blue-400'  href="https://www.facebook.com/lorenzato.pneus.5" target='_blank'><AiFillFacebook fontSize={'32px'}/></a>
                      <a className='hover:text-blue-400' href="https://www.instagram.com/lorenzato.pneus/" target='_blank'><AiFillInstagram fontSize={'32px'}/></a>
                      <a className='hover:text-blue-400' href="https://api.whatsapp.com/send?phone=5551997901241" target="_blank"><FaWhatsappSquare fontSize={'32px'}/></a>
        </div>
          <h1 className='contacts__content text-4xl font-bold text-primary-red px-8 my-8'>Entre em Contato</h1>
          <span className='text-black font-bold text-md px-8'>Ficaremos Felizes em Esclarecer duas dúvidas!</span>
          <p className='text-sm text-slate-700 pl-8'>Envie o Formulário e confirme o Captcha </p>
           <form className="w-full mx-auto bg-white rounded-lg px-8 py-6 flex flex-col gap-5" action="https://formsubmit.co/contato@lorenzatopneus.com.br" method="POST">
           <div className="mb-4 shadow-sm">
             <label htmlFor="nome" className="block text-gray-700 text-sm font-bold mb-2">Nome:</label>
             <input type="text" id="nome" name="nome" className="border-2 border-cyan-800 rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300  text-black" placeholder='Digite seu Nome...' />
           </div>
         
           <div className="mb-4 shadow-sm">
             <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
             <input   type="email" id="email" name="email" className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-300 border-cyan-800 text-black" placeholder='Digite seu Nome...' />
           </div>
           <div className="mb-4 shadow-sm">
             <label htmlFor="mensagem" className="block text-gray-700 text-sm font-bold mb-2">Mensagem:</label>
             <textarea id="mensagem" name="mensagem" className="border rounded-lg px-3 py-2 w-full h-20 resize-none focus:outline-none focus:ring focus:border-blue-300 border-cyan-800  text-black" placeholder='Envie-nos Uma Mensagem...' />
           </div>
           <div className="flex justify-center">
             <button type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
           </div>
           <input type="hidden" name="_next" value="https://lorenzatopneus.com.br/" />
         </form>
        </div>

        <div className='contacts__image w-full lg:w-1/2 px-1 md:px-6'>
              <Image src={Contact} alt='contact-img' className='object-cover h-full rounded-br-[50px] shadow-xl rounded-md'/>
        </div>
      </div>

      <div className='contacts w-[90%] md:w-[80%] flex justify-center flex-col lg:flex-row gap-2 mt-16'>
          <div className='w-full lg:w-1/3 h-[300px]  flex flex-col justify-center gap-5 text-black px-5'>
            <AiTwotoneMail style={{ fontSize: '38px' }} />
            <h1 className='text-primary-red text-xl font-bold'>Email</h1>
            <p>Envie-nos um email, responderemos o mais rápido possível!</p>
            <a className='text-sky-800 cursor-pointer'>contato@lorenzatopneus.com.br</a>
          </div>
          <Divider orientation="vertical" flexItem></Divider>
          <div className='w-full lg:w-1/3 h-[300px]  flex flex-col justify-center gap-5 text-black px-5'>
            <AiFillPhone style={{ fontSize: '38px' }} />
            <h1 className='text-primary-red text-xl font-bold'>Telefone / WhatsApp</h1>
            <p>Entre em contato e tire suas dúvidas com um colaborador!</p>
            <a className='text-sky-800 cursor-pointer flex flex-row items-center gap-2' href='https://api.whatsapp.com/send?phone=5551997901241' target='blank'><AiOutlineWhatsApp/>51 997901241</a>
            <a className='text-sky-800 cursor-pointer' target='blank'>+55 51 3421 - 2277</a>
          </div>
          <Divider orientation="vertical" flexItem></Divider>
          <div className='w-full lg:w-1/3 h-[300px]  flex flex-col justify-center gap-5 text-black  px-5'>
            <FaMapMarkerAlt style={{ fontSize: '38px' }} />
            <h1 className='text-primary-red text-xl font-bold'>Compareça</h1>
            <p>Fazemos questão de lhe conhecer e conhecer as suas necessidades pessoalmente</p>
            <a className='text-sky-800 cursor-pointer'></a>
          </div>
      </div>
    </section>
  )
}   

export default Contacts