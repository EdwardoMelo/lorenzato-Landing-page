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
            content: 'refere-se à geometria da suspensão de um veículo, também conhecida como geometria de direção ou alinhamento das rodas.',
            image: Geometry
        },
        {
            title: 'Suspensão',
            content: 'A manutenção adequada da suspensão é essencial para garantir o bom desempenho, segurança e durabilidade do veículo. A suspensão está sujeita a desgaste natural ao longo do tempo.',
            image: Suspension
        },
        {
            title: 'Embreagem',
            content: 'Ela permite que o motor seja desacoplado da caixa de câmbio temporariamente para permitir a troca de marchas e, em seguida, ser recoplado para transmitir a potência do motor para as rodas.',
            image: Embreagem
        },
        {
            title: 'Sistema de Freios',
            content: 'A manutenção adequada do sistema de freios é fundamental para garantir a segurança e o bom funcionamento do veículo. Os freios são um dos sistemas mais críticos em um carro, pois são responsáveis por reduzir a velocidade e parar o veículo quando necessário',
            image: Breaks
        },
        {
            title: 'Troca de Óleos e Fluidos',
            content: '. Os óleos e fluidos têm diversas funções vitais nos diferentes sistemas do carro, e sua manutenção adequada é fundamental para garantir o desempenho, a eficiência e a segurança do veículo. ',
            image: Oil
        },
       
    ]

  return (
    <section className="services w-full flex flex-col justify-center items-center mt-18" id="SERVIÇOS">
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