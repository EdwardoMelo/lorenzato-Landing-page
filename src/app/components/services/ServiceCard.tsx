import React from 'react'
import { ServiceCard } from '../types'
import Image from 'next/image'
import { BiCaretRight } from "react-icons/bi";
const ServiceCard = ({key, title, content, image} : ServiceCard) => {

  return (
    <div className='flex flex-col items-start  gap-6 rounded-tl-[50px] rounded-br-[50px] drop-shadow-lg rounded-md bg-slate-50 h-[640px] pb-2'>
        <div className='h-[256px]  md:rounded-tl-[50px] '>
            <Image src={image} alt='service-img' className='object-cover h-full drop-shadow-md md:rounded-br-[50px] rounded-tl-[50px] rounded-md'/>
        </div>
        <div className='px-8 border-1 flex flex-col items-start w-[86%] justify-center gap-[1rem] text-black text-md divide-y divide-red-600'>
            <h1 className='text-black text-xl font-bold'>{title}</h1>
             <p className='pt-3 w-full'>{content}</p>
        </div>
        <div className='action w-[60%] self-start mx-8 pt-3'>
              <a className="text-sky-700 font-bold tracking-wide w-full flex items-center" href="https://api.whatsapp.com/send?phone=5551997901241" target='blank'>Peça Já seu orçamento<BiCaretRight/></a>
        </div>
    </div>
  )
}

export default ServiceCard