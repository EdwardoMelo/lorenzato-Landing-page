import Image from "next/image";
import Pirelli from '../../assets/Pirelli_logo_PNG_(6).png'
import Michelin from '../../assets/Michelin-Logo-PNG4.png'
import GoodYear from '../../assets/Goodyear_logo_PNG_(3).png';
import Continental from '../../assets/Continental_logo_PNG_(12).png'
import FiresTone from '../../assets/Firestone_logo_PNG_(10).png'
import Bridgerstone from '../../assets/Bridgestone_(5).png'
import Dunlop from '../../assets/Dunlop_(5).png'
import Hankook from '../../assets/Hankook_logo_PNG_(1).png'
const Brands = () => {

  const brands = [
      Pirelli,
      Michelin,
      GoodYear,
      Continental,
      FiresTone,
      Bridgerstone,
      Dunlop,
      Hankook,

  ]

  return (
    
    <div className="flex flex-wrap justify-center p-8 w-[90%] lg:w-[80%]" id="MARCAS">
      { brands.map((image) => (
        <div key={`${image}`} className="w-full sm:w-1/2 md:w-1/4 p-6 flex items-center justify-center">
          <div  className="bg-white rounded-lg shadow-lg overflow-hidden h-[200px] w-[300px]">
            <Image
              src={image}
              alt="Marca 1"
              className="w-full h-1/2 object-contain"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold mb-2">Marca 1</h3>
            </div>
          </div>
        </div>
      ))}

      


    </div>
  );
};

export default Brands