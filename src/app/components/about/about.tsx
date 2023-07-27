"use client"
import React from 'react'
import Image from 'next/image'
import About from '../../assets/about.jpg';
import Mission from '../../assets/mission.jpg';
import Vision from '../../assets/Vision.jpg';
import Values from '../../assets/values2.jpg';

import { ItemProps } from '../types';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

const Item = (props : ItemProps) =>{
    
    return (
        <div className='slider flex gap-4 lg:flex-row flex-col items-center justify-center mx-auto md:w-[90%] px-4 py-10 bg-slate-50 rounded-br-[30px] drop-shadow-lg' >
            <div className='content text-black text-sm flex flex-col gap-3 lg:w-1/2 w-full md:mx-[2rem] drop-shadow-sm'>
                <strong>{props.strong}</strong>
                <h1 className='text-primary-red text-3xl font-bold'>{props.title}</h1>
                <p className='text-lg text-slate-900'>
                    {props.content}
                </p>
            </div>
            <div className='about__image lg:w-1/2 w-full'>
                <Image src={ props.image } alt='about-img' className='object cover drop-shadow-lg rounded-br-3xl rounded-md'/>
            </div>
        </div>
    )
}

const about = () => {
    const items = [
        { 
            strong: "Quem somos Nós?", 
            title: "Lorenzato", 
            content: "A Lorenzato Autopeças é uma empresa especializada em pneus e atua no mercado automotivo há mais de 14 anos. Nossa empresa é dedicada a fornecer aos clientes uma ampla variedade de pneus de alta qualidade e serviços relacionados, visando atender às necessidades de motoristas e proprietários de veículos.",
            image: About
            },
        {
            strong: "Nossa Missão", 
            title: "Missão", 
            content: "Nossa missão é oferecer produtos e serviços de alta qualidade, que atendam às necessidades de nossos clientes e contribuam para o seu bem-estar e sucesso. Desejamos Fornecer soluções automotivas inovadoras, sendo uma referência em pneus e rodas para clientes que buscam segurança, performance e confiança em suas jornadas sobre rodas",
            image: Mission
        },
        { 
            strong: "Nossa Visão", 
            title: "Visão", 
            content: "Ser referência no mercado, reconhecidos pela excelência e inovação, tornando-se a primeira escolha dos clientes e parceiros em nossos segmentos de atuação.",
            image: Vision
        },
        { 
            strong: "Nossos Valores", 
            title: "Valores", 
            content: "Nossos valores fundamentais são integridade, comprometimento, respeito, excelência e sustentabilidade, guiando nossas ações e decisões para um futuro próspero e responsável.",
            image: Values
        },
    ]

  return (
    <section className='about w-full flex justify-center items-center' id='SOBRE NÓS'>
        <Carousel autoPlay={false} swipe={true} animation="slide"	className='w-full'>
            {
                items.map( (item, i) => <Item key={i} image={item.image} strong={item.strong} title={item.title} content={item.content}/> )
            }
        </Carousel>
    </section>
  )
}

export default about