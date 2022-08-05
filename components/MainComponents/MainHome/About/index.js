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
                        <Image src={AboutImg} alt="Sobre nós" layout="responsive" className='rounded-xl'/>
                    </div>
                    <div className="pl-0 py-2 w-100 flex-col flex justify-center relative lg:w-3/5 aboutBreaking:w-[75%] lg:pl-20 xl:pl-24">
                        <div>
                            <h3 className="text-4xl 2xl:text-6xl pb-4 font-bold [1794px]:pb-12">
                                Conheça um pouco sobre nós e saiba como podemos te ajudar
                            </h3>
                            <p className='pb-16 leading-6 text-xs 2xl:text-lg'>
                                O Grupo Smart Solutions é uma empresa especializada em Serviços, Transportes e locação de equipamentos desde 2006. Na Gestão da Cadeia de Suprimentos atuamos nos transportes Dedicados, Spot, Inbound, Outbound, Cross Docking, Distribuição, Armazenagem , Armazém Geral e movimentaçao de carga.
                                <br></br><br></br>
                                Nós trabalhamos para que seus clientes se tornen mais competitivos , atraves de ganhos de produtividade, melhores soluçoes nos processos, reduçoes de custo globais e foco em suas atividades totalmente voltada para segurança nas operaçoes.
                                <br></br><br></br>
                                Para isso a empresa conta com equipamentos moveis de última geraçao e profissionais capacitados, focado sempre em segurança e eficiencia garantindo assim a satisfaçao do cliente.
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