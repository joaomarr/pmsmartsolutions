import { SaberMaisBtn } from "../Buttons/SaberMaisBtn"
import BudgetIMG from "../../../../assets/images/BudgetIMG.jpg"
import Image from "next/image"

export function Orçamento() {
    return (
        <section className="orçamento__section w-full my-8">
            <div className="w-full h-full bg-yellow-500 shadow-lg rounded-md overflow-hidden flex flex-col-reverse lg:flex-row">
                <div className="text-gray-500 py-6 w-full layout-padding my-auto [1794px]:py-14 lg:px-14 [1794px]:px-28 lg:w-1/2">
                    <h3 className="text-4xl 2xl:text-6xl pb-4 font-bold [1794px]:pb-12">
                        Faça seu orçamento 
                    </h3>
                    <p className="pb-16 leading-6 text-sm 2xl:text-lg">
                        Atuamos com mineração, siderurgia, cimenteira, construção civil, agrícola, linhas de transmissão e muito mais. Tudo para garantir que a sua empresa se torne muito mais competitiva e produtiva, independente do mercado exigido. Contamos com vasta experiência e profissionais adequados para te proporcionar o melhor atendimento. Entre em contato e faça agora mesmo o seu orçamento.
                    </p>
                    <div className="w-full flex justify-center lg:w-fit lg:justify-start lg:pb-0">
                        <SaberMaisBtn bg="gray" color="yellow" link="/contato" />
                    </div>
                </div>
                <div className="w-full shadow-lg lg:w-1/2">
                    <Image src={BudgetIMG} alt="BudgetIMG" layout="responsive"/>
                </div>
            </div>
        </section>
    )
}