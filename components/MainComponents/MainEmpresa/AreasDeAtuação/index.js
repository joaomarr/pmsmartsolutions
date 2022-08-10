import { AreasDeAtuaçãoSvg } from "../../../../assets/elements/AreasDeAtuaçãoSvg"

export function AreasDeAtuação() {
    return (
        <section className="layout-padding my-auto flex flex-col justify-center text-center py-8">
            <h4 className="text-xl font-black text-gray-500 pb-4">
                Áreas de Atuação
            </h4>
            <div className="w-full flex justify-center">
                <AreasDeAtuaçãoSvg />
            </div>
        </section>
    )
}