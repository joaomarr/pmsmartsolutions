import { Faixas } from "./Faixas";

export function FocoEm() {
    return (
        <div className="w-full lg:w-1/2 flex justify-end py-8 2xl:pr-28 lg:py-0">
            <div className="relative flex-1 w-full">
                <ul className="absolute -right-5 w-full lg:max-w-md h-[95%] top-1/2 -translate-y-1/2 flex flex-col justify-between items-end">
                    <Faixas text={"Visibilidade"} />
                    <Faixas text={"Tomada de decisão"} />
                    <Faixas text={"Eficiência"} />
                    <Faixas text={"Padronização"} />
                    <Faixas text={"Produtividade"} />
                    <Faixas text={"Satisfação do cliente"} />
                </ul>
            </div>
            <div className="w-32 bg-gray-500 flex items-center justify-end h-[400px] lg:h-auto">
                <h1 className="vertical-text uppercase text-3xl tracking-[.45em] px-4 text-center">
                    foco em<br></br>gestão com 
                </h1>
            </div>
        </div>
    )
}