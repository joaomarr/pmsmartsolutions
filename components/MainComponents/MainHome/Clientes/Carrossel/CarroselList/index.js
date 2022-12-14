import ABInBev from '../../../../../../assets/images/Clientes/ABInBev.png'
import Ambev from '../../../../../../assets/images/Clientes/Ambev.png'
import ArcelorMittal from '../../../../../../assets/images/Clientes/ArcelorMittal.png'
import Bekaert from '../../../../../../assets/images/Clientes/Bekaert.png'
import Brametal from '../../../../../../assets/images/Clientes/Brametal.png'
import BrasilKirin from '../../../../../../assets/images/Clientes/BrasilKirin.png'
import Gerdau from '../../../../../../assets/images/Clientes/Gerdau.png'
import Heineken from '../../../../../../assets/images/Clientes/Heineken.png'
import Incomisa from '../../../../../../assets/images/Clientes/Incomisa.png'
import IrmãosMachado from '../../../../../../assets/images/Clientes/IrmãosMachado.jpg'
import LafargeHolcim from '../../../../../../assets/images/Clientes/LafargeHolcim.png'
import Linergia from '../../../../../../assets/images/Clientes/Linergia.jpg'
import NeoEnergia from '../../../../../../assets/images/Clientes/NeoEnergia.png'
import Samarco from '../../../../../../assets/images/Clientes/Samarco.png'
import Tabocas from '../../../../../../assets/images/Clientes/Tabocas.png'
import Usiminas from '../../../../../../assets/images/Clientes/Usiminas.png'
import Vale from '../../../../../../assets/images/Clientes/Vale.png'
import Image from 'next/image'

export function CarroselList() {
    return (
        <ul className="carousel_list h-full absolute left-0 list-none flex items-center justify-around top-1/2 -translate-y-1/2">
            <li className="carousel_item w-24 px-4 lg:w-60 lg:px-10">
                <Image src={ABInBev} alt="ABInBev Logo"/>
            </li>
            <li className="carousel_item w-24 px-4 lg:w-60 lg:px-10">
                <Image src={Ambev} alt="Ambev Logo"/>
            </li>
            <li className="carousel_item w-24 px-4 lg:w-60 lg:px-10">
                <Image src={ArcelorMittal} alt="ArcelorMittal Logo"/>
            </li>
            <li className="carousel_item w-24 px-4 lg:w-60 lg:px-10">
                <Image src={Bekaert} alt="Bekaert Logo"/>
            </li>
            <li className="carousel_item w-24 px-4 lg:w-60 lg:px-10">
                <Image src={Brametal} alt="Brametal Logo"/>
            </li>
            <li className="carousel_item w-24 px-4 lg:w-60 lg:px-10">
                <Image src={BrasilKirin} alt="BrasilKirin Logo"/>
            </li>
            <li className="carousel_item w-24 px-4 lg:w-60 lg:px-10">
                <Image src={Gerdau} alt="Gerdau Logo"/>
            </li>
            <li className="carousel_item w-24 px-4 lg:w-60 lg:px-10">
                <Image src={Heineken} alt="Heineken Logo"/>
            </li>
            <li className="carousel_item w-24 px-4 lg:w-60 lg:px-10">
                <Image src={Incomisa} alt="Incomisa Logo"/>
            </li>
            <li className="carousel_item w-24 px-4 lg:w-60 lg:px-10">
                <Image src={IrmãosMachado} alt="IrmãosMachado Logo"/>
            </li>
            <li className="carousel_item w-24 px-4 lg:w-60 lg:px-10">
                <Image src={LafargeHolcim} alt="LafargeHolcim Logo"/>
            </li>
            <li className="carousel_item w-24 px-4 lg:w-60 lg:px-10">
                <Image src={Linergia} alt="Linergia Logo"/>
            </li>
            <li className="carousel_item w-24 px-4 lg:w-60 lg:px-10">
                <Image src={NeoEnergia} alt="NeoEnergia Logo"/>
            </li>
            <li className="carousel_item w-24 px-4 lg:w-60 lg:px-10">
                <Image src={Samarco} alt="Samarco Logo"/>
            </li>
            <li className="carousel_item w-24 px-4 lg:w-60 lg:px-10">
                <Image src={Tabocas} alt="Tabocas Logo"/>
            </li>
            <li className="carousel_item w-24 px-4 lg:w-60 lg:px-10">
                <Image src={Usiminas} alt="Usiminas Logo"/>
            </li>
            <li className="carousel_item w-24 px-4 lg:w-60 lg:px-10">
                <Image src={Vale} alt="Vale Logo"/>
            </li>
        </ul>
    )
}