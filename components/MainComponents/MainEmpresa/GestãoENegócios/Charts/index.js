import { Competencia } from "../../../../../assets/elements/Charts/Competencia"
import { Cycle } from "../../../../../assets/elements/Charts/Cycle"
import { Planejamento } from "../../../../../assets/elements/Charts/Planejamento"

export function Charts() {
    return (
        <div className="charts layout-padding py-8 flex flex-col bg-black/40 backdrop-blur-[3px] xl:flex-row xl:justify-between">
            <div className="w-full flex flex-col xl:max-w-lg 2xl:max-w-2xl">
                <div className="pb-5 cursor-pointer transition hover:scale-105">
                    <Competencia />
                </div>
                <div className="cursor-pointer transition hover:scale-105">
                    <Planejamento />
                </div>
            </div>
            <div className="pt-6 px-12 cursor-pointer transition hover:scale-105 md:px-28 xl:px-14 2xl:pt-0 2xl:w-2/5">
                <Cycle />
            </div>
        </div>
    )
}