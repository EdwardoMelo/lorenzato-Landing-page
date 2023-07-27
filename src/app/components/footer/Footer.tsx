import React from 'react'
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaWhatsappSquare } from 'react-icons/fa'
import Divider from '@mui/material/Divider'
const Footer = () => {
  return (
    <div className='w-full text-black flex flex-col gap-6 items-center mt-16'>
        <section className='w-[90%] lg:w-[80%] flex flex-col lg:flex-row lg:justify-between mx-auto my-5 space-y-4'>
          <div className='space-y-6'>
              <strong>Endereço</strong>
              <p className='text-slate-800 '>Rua Antonio Valdemiro De Oliveira Barros, 55 - 94185-380 <br />
                  Horário de Funcionamento: 8:00 - 12:00 / 13:30 - 18:30</p>
              <h1 className='font-bold'>Contato</h1>
              <p className='text-slate-800'>+55 51 3421 - 2277 <br />
              contato@lorenzatopneus.com.br</p>
                 <div className='flex gap-1'>
                      <a href="https://www.facebook.com/lorenzato.pneus.5" target='_blank'><AiFillFacebook fontSize={'32px'}/></a>
                      <a href="https://www.instagram.com/lorenzato.pneus/" target='_blank'><AiFillInstagram fontSize={'32px'}/></a>
                      <a href="https://api.whatsapp.com/send?phone=5551997901241" target="_blank"><FaWhatsappSquare fontSize={'32px'}/></a>
                 </div>
          </div>
              <ul className='text-md font-bold space-y-2 text-slate-800'>
                <li>Autopeças</li>
                <li>Balanceamento</li>
                <li>Troca de Fluidos</li>
                <li>Alinhamento</li>
                <li>Geometria</li>
              </ul>
         
      </section>

      <Divider className='w-[90%] lg:w-[80%]'/>
      <div className='text-center py-8 space-x-3'>
          <p className='text-slate-700'>@2023 Lorenzato, Todos os Direitos Reservados</p>
          <a className='text-blue-900 text-sm' href="../../assets/Termos de Privacidade da Autocenter Lorenzato.pdf" download="privacidade.pdf">Políticas de Privacidade</a>
          <a className='text-blue-900 text-sm' href="../../assets/Termos de Serviço da Autocenter Lorenzato.pdf" download="termos.pdf"> Termos de Serviço</a>
      </div>
    </div>
  )
};

export default Footer