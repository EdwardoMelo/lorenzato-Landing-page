import React from 'react'
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import Divider from '@mui/material/Divider'
const Footer = () => {
  return (
    <div className='w-full text-black flex flex-col gap-6 items-center mt-16'>
        <section className='w-[90%] lg:w-[80%] flex flex-col lg:flex-row lg:justify-between mx-auto my-5 space-y-4'>
          <div className='space-y-6'>
              <strong>Endereço</strong>
              <p className='text-slate-800 '>Rua Antonio Valdemiro De Oliveira Barros, 55 - 94185-380 <br />
                  Horário de Funcionamento: 8:00 - 18:00</p>
              <h1 className='font-bold'>Contato</h1>
              <p className='text-slate-800'>+55 51 3421 - 2277 <br />
                 lorenzato@webdomidy.com.br </p>
                 <div className='flex gap-1'>
                      <AiFillFacebook fontSize={'32px'}/>
                      <AiFillInstagram fontSize={'32px'}/>
                 </div>
          </div>
              <ul className='text-md font-bold space-y-2 text-slate-800'>
                <li>Balanceamento</li>
                <li>Autopeças</li>
                <li>Cambagem</li>
                <li>Troca de Fluidos</li>
                <li>Alinhamento</li>
                <li>Geometria</li>
              </ul>
         
      </section>

      <Divider className='w-[90%] lg:w-[80%]'/>
      <div className='text-center py-8'>
          <p className='text-slate-700'>@2023 Lorenzato, Todos os Direitos Reservados</p>
          <a className='text-blue-900 text-sm' href="">Políticas de Privacidade</a>
          <a className='text-blue-900 text-sm' href=""> Termos de Serviço</a>
      </div>
    </div>
  )
};

export default Footer