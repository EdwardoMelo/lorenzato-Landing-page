import ServiceCard from "./ServiceCard"
import Balanceamento from '../../assets/computerized.jpg'
import Geometry from '../../assets/geometria.jpg';
import Suspension from '../../assets/suspensao.jpg';
import Embreagem from '../../assets/embreagem.jpg';
import Breaks from '../../assets/freios.jpg';
import Oil from '../../assets/oleos.jpg';
const Services = () => {
    const items = [
        {
            title: 'Balanceamento Computadorizado',
            content: 'O processo de balanceamento consiste em fixar a roda em uma máquina especial chamada balanceadora.',
            image: Balanceamento
        },
        {
            title: 'Geometria',
            content: 'O processo de balanceamento consiste em fixar a roda em uma máquina especial chamada balanceadora.',
            image: Geometry
        },
        {
            title: 'Suspensão',
            content: 'O processo de balanceamento consiste em fixar a roda em uma máquina especial chamada balanceadora.',
            image: Suspension
        },
        {
            title: 'Embreagem',
            content: 'O processo de balanceamento consiste em fixar a roda em uma máquina especial chamada balanceadora.',
            image: Embreagem
        },
        {
            title: 'Sistema de Freios',
            content: 'O processo de balanceamento consiste em fixar a roda em uma máquina especial chamada balanceadora. ',
            image: Breaks
        },
        {
            title: 'Troca de Óleos e Fluidos',
            content: 'O processo de balanceamento consiste em fixar a roda em uma máquina especial chamada balanceadora.',
            image: Oil
        },
       
    ]

  return (
    <section className="services w-full flex flex-col justify-center items-center mt-18 h-fit" id="SERVIÇOS">
        <h1 className="text-3xl text-primary-red font-extrabold mt-16 mb-14">Nossos Serviços</h1>
        <span className="font-bold text-black mb-12 text-center">Primamos por Excelência e qualidade pelos melhores preços.</span>
        <div className="services__cards-container grid  lg:grid-cols-3 gap-3 max-w-[90%] md:max-w-[75%]">
            {items.map((item, i) => (
                <ServiceCard key={i} title={item.title} content={item.content} image={item.image}/>
            ))}
        </div>
    </section>
  )
}

export default Services