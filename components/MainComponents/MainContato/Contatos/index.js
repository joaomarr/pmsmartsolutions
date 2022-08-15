import Image from "next/image";
import ContactUsIMG from "../../../../assets/images/ContactUsIMG.jpg"

export function Contatos() {
    return (
        <section className="mb-10 py-5 bg-gray-500 layout-padding text-center flex flex-col items-center">
            <div className="w-full xl:max-w-2xl">
                <h3 className="text-4xl font-black lg:text-5xl lg:pb-4">
                    Contatos
                </h3>
                <p className="text-xs font-light lg:text-xl">
                    Entre em contato com a gente para saber mais. Estamos a disposição para quaisquer esclarecimentos que se fizerem necessários.
                </p>
            </div>
             <div className="w-full flex flex-col py-10 text-start xl:flex-row xl:justify-between">
                <div className="flex flex-col py-5">
                    <h5 className="text-sm lg:text-lg">
                        Departamento Comercial
                    </h5>
                    <p className="text-white/40 text-xs lg:text-base pb-2 xl:pb-4">
                        Smart Serviços e Transporte Ltda
                    </p>
                    <span className="text-xs lg:text-base text-yellow-500 py-2">
                        comercial@pmsmartsolutions.com.br
                    </span>
                    <span className="text-xs lg:text-base text-blue-500">
                        (31) 2564-3339 
                    </span>
                </div>
                <div className="flex flex-col py-5 xl:text-center">
                    <h5 className="text-sm lg:text-lg">
                        Outros
                    </h5>
                    <p className="text-white/40 text-xs lg:text-base pb-2 xl:pb-4">
                        Paulo Martins
                    </p>
                    <span className="text-xs lg:text-base text-yellow-500 py-2">
                        paulomartins@pmsmartsolutions.com.br
                    </span>
                    <span className="text-xs lg:text-base text-blue-500">
                    (31) 2564-3339 <br></br>
                    (31) 99211-8444 / 99241-8444 
                    </span>
                </div>
                <div className="flex flex-col py-5 xl:text-end">
                    <h5 className="text-sm lg:text-lg">
                    Gerência Estrutural
                    </h5>
                    <p className="text-white/40 text-xs lg:text-base pb-2 xl:pb-4">
                        Weslley Allan Miranda Silva
                    </p>
                    <span className="text-xs lg:text-base text-yellow-500 py-2">
                        gerencia@pmsmartsolutions.com.br
                    </span>
                    <span className="text-xs lg:text-base text-blue-500">
                        (31) 2564-3339 / 99880-9579 
                    </span>
                </div>
             </div>
            <div className="w-full max-h-80 overflow-hidden">
                <Image 
                    src={ContactUsIMG} 
                    layout="responsive" 
                    alt="Contact us image"
                    objectFit="scale-down"
                />
            </div>
        </section>
    )
}