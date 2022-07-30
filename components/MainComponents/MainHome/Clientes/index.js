import { Carrossel } from "./Carrossel";

export function Clientes() {
    return (
        <section className="w-full flex flex-col text-center overflow-hidden">
            <h3 className="text-xs sm:text-xl text-blue-500 underline font-bold">
                Nossos Clientes
            </h3>
            <Carrossel />
        </section>
    )
}