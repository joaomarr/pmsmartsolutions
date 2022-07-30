import { MainLogo } from "../../../assets/logos/MainLogo";

export function HomeTitle() {
    return (
        <section className="HomeHero layout-padding flex flex-col xl:flex-row items-center justify-center xl:justify-between h-full">
            <div className="w-100 xl:w-7/12">
                <h1 className="font-black text-4xl pb-2 xl:pb-7 md:text-6xl">
                Serviços, Transportes e 
                Locação de Equipamentos
                </h1>
                <p className="text-sm leading-7 xl:leading-10 md:text-xl">
                Trabalhando para que o seu negócio se torne mais competitivo
                e mais produtivo no mercado, com melhores soluções nos procesos, reduções de
                custo globais e foco em suas atividades totalmente voltada para a
                segurança nas operações
                </p>
            </div>
            <div className="max-w-sm lg:max-w-2xl 2xl:flex-1 px-12 py-4 2xl:p-28 justify-center">
                <MainLogo />
            </div>
        </section>
    )
}