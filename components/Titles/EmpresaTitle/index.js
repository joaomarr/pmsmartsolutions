import { WhiteAbstractLogo } from "../../../assets/logos/WhiteAbstractLogo"

export function EmpresaTitle() {
    return (
        <section className="EmpresaHero layout-padding flex flex-col items-center justify-center h-full">
            <div className="w-100 text-center xl:w-7/12">
                <h1 className="font-black text-4xl pb-2 xl:pb-7 md:text-6xl">
                    Nossa Empresa
                </h1>
                <p className="text-sm leading-7 xl:leading-10 md:text-xl">
                Conheça um pouco sobre nossa história e o modo como entregamos nosso serviço com qualidade e compromisso desde 2006. 
                </p> 
            </div>
            <div className="max-w-md justify-center py-4 lg:w-96">
                <WhiteAbstractLogo />
            </div>
        </section>
    )
}