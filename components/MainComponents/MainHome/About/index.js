import Image from 'next/image'
import AboutImg from '../../../../assets/images/AboutImg.jpg'
import { SaberMaisBtn } from '../Buttons/SaberMaisBtn'
import { Faixa } from './Faixa'

export function About() {
    return (
        <section className="py-16 sm:py-20">
            <Faixa />
            <div className="w-full h-fit bg-gray-500">
                <Faixa />
                <div className="layout-padding w-full flex flex-col xl:justify-between lg:flex-row">
                    <div className='shadow-2xl w-100 lg:w-2/5 aboutBreaking:w-[35%]'>
                        <Image src={AboutImg} priority alt="Sobre nós" layout="responsive" className='rounded-xl'/>
                    </div>
                    <div className="pl-0 py-2 w-100 flex-col flex justify-center relative lg:w-3/5 aboutBreaking:w-[75%] lg:pl-20 xl:pl-24">
                        <div>
                            <h3 className="text-4xl 2xl:text-6xl pb-4 font-bold [1794px]:pb-12">
                                Conheça um pouco sobre nós . . .
                            </h3>
                            <p className='pb-16 leading-6 text-xs 2xl:text-lg'>
                                A Smart Solutions é uma empresa especializada em Transportes, Serviços e Locação de máquinas e equipamentos desde 2006.
                                <br></br><br></br>
                                Na Cadeia de Suprimentos atuamos nos transportes Dedicados, Spot, Inbound, Outbound, Cross Docking, Distribuição, Armazenagem , Armazém Geral e movimentaçao de carga.
                                <br></br><br></br>
                                Trabalhamos para que nossos clientes se tornem mais competitivos, com ganho de produtividade, melhores soluções nos processos, redução de custo global e foco na segurança das operações e do meio ambiente.
                                <br></br><br></br>
                                A Smart Solutions dispõe de equipamentos de última geração e profissionais capacitados focados em atender a satisfação dos nossos clientes.
                            </p>
                            <div className="w-full flex justify-center pb-12 lg:w-fit lg:justify-start lg:pb-0">
                                <SaberMaisBtn bg="yellow" color="gray" link="/empresa" />
                            </div>
                        </div>
                        <div className='absolute rounded-full -bottom-[50px] right-0 bg-yellow-500 w-[100px] h-[100px] md:w-44 md:h-44 md:-bottom-24'></div>
                    </div>
                </div>
                <div className='hidden xl:block'>
                    <Faixa />
                </div>
            </div>
            <div className='hidden xl:block'>
                <Faixa />
            </div>
        </section>
    )
}