import LocationImage from '../../assets/location.jpg'
import Image from 'next/image'
const Location = () => {
  return (
    <section className='location__section flex flex-col lg:flex-row lg:justify-between w-[90%] md:w-[80%]  mx-auto'>
        <div className="content flex flex-col justify-around space-y-8 p-6 drop-shadow-sm text-black">
            <strong>Aonde nos encontrar?</strong>
            <h1 className="text-[36px] font-bold text-primary-red">Localização</h1>
            <p className="leading-7">Atualmente nossa sede se encontra em Gravataí no Parque dos Anjos <br />
            <span className='text-xs text-slate-600'>HORARIO DE FUNCIONAMENTO: 8:00 - 12:00 / 13:30 - 18:30</span></p>
            <div className="location__card flex flex-col gap-4 border-l-4 border-black px-4">
                <h1 className="text-black font-bold">Gravataí -RS</h1>
                <p className="text-black">Rua Antonio Valdemiro De Oliveira Barros, 55 - 94185-380</p>
                <a className="text-sky-700 font-bold tracking-wide" href="https://www.google.com.br/maps/place/Lorenzato/@-29.9469962,-50.9768341,17z/data=!3m1!4b1!4m6!3m5!1s0x95190bca3f91ba8b:0x7eaf1033a37e8ca4!8m2!3d-29.9469962!4d-50.9742592!16s%2Fg%2F11g07_115z?entry=ttu" target="blank">Ver no mapa</a>
            </div>
        </div>
        <div className="location__image h-[400px] w-full lg:w-2/5 ">
            <Image src={LocationImage} className="object-cover h-full shadow-lg drop-shadow-md rounded-br-[50px] rounded-md" alt='location-img'/>
        </div>
    </section>
  )
}

export default Location