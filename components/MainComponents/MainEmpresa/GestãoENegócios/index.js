import { Charts } from "./Charts"
 
export function GestãoENegócios() {
    return (
        <section className="w-full">
            <div className="text-start text-gray-500 layout-padding pb-5">
                <h3 className="text-4xl font-black pb-2 lg:text-5xl">
                    Gestão e Negócios
                </h3>
                <p className="text-xs leading-5 lg:text-xl">
                    Entenda a nossa gestão e o modo com<br></br> que entregamos nosso trabalho.
                </p>
            </div>
            <div className="w-full bg-bg-charts bg-center bg-cover"> 
                <Charts />
            </div>
        </section>
    )
}