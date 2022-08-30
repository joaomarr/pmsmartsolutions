import { Mineração } from '../../../../assets/elements/icons/Atuação/Mineração'
import { Siderurgia } from '../../../../assets/elements/icons/Atuação/Siderurgia'
import { Civil } from '../../../../assets/elements/icons/Atuação/Civil'
import { Agrícola } from '../../../../assets/elements/icons/Atuação/Agrícola'
import { IndustriaAlimenticia } from '../../../../assets/elements/icons/Atuação/IndustriaAlimenticia'
import { Celulose } from '../../../../assets/elements/icons/Atuação/Celulose'
import { Cimenteria } from '../../../../assets/elements/icons/Atuação/Cimenteria'
import { Transmissão } from '../../../../assets/elements/icons/Atuação/Transmissão'
import { LeftCurve } from '../../../../assets/elements/icons/Atuação/CurveVectors/LeftCurve'
import { RightCurve } from '../../../../assets/elements/icons/Atuação/CurveVectors/RightCurve'

export function Atuações() {
    return (
        <>
            <div className="absolute -top-16 h-16 left-1/2 -translate-x-1/2 w-11/12 sm:w-4/5 max-w-[1500px] bg-white rounded-t-[20px] sm:rounded-t-[30px] py-2 px-0 lg:px-4 lg:-top-28 lg:h-28">
                <div className="absolute w-max bottom-0 -z-10 h-11 -left-[9px] lg:h-20 lg:-left-4 lg:-translate-x-[8%]">
                    <LeftCurve />
                </div>
                <div className="grid grid-cols-5 lg:grid-cols-8 text-blue-500 uppercase h-full items-center text-[8px] lg:text-[12px]">
                    <div className="atuação hidden flex-col items-center justify-center h-20 text-center border-r-2 border-yellow-500 lg:flex">
                        <Mineração />
                        <h2 className="pt-1">Mineração</h2>
                    </div>
                    <div className="atuação hidden flex-col items-center justify-center h-20 text-center border-r-2 border-yellow-500 lg:flex">
                        <Siderurgia />
                        <h2 className="pt-1">Siderurgia</h2>
                    </div>
                    <div className="atuação hidden flex-col items-center justify-center h-20 text-center border-r-2 border-yellow-500 lg:flex">
                        <IndustriaAlimenticia />
                        <h2 className="pt-1">Indústria Alimentícia</h2>
                    </div>
                    <div className="atuação flex flex-col items-center justify-center  text-center border-r-2 border-yellow-500 h-12 lg:h-20">
                        <Civil />
                        <h2 className="pt-1">Civil</h2>
                    </div>
                    <div className="atuação flex flex-col items-center justify-center  text-center border-r-2 border-yellow-500 h-12 lg:h-20">
                        <Agrícola />
                        <h2>Agrícola</h2>
                    </div>
                    <div className="atuação flex flex-col items-center justify-center  text-center border-r-2 border-yellow-500 h-12 lg:h-20">
                        <Celulose />
                        <h2>Celulose</h2>
                    </div>
                    <div className="atuação flex flex-col items-center justify-center  text-center border-r-2 border-yellow-500 h-12 lg:h-20">
                        <Cimenteria />
                        <h2 className="pt-1">Cimenteria</h2>
                    </div>
                    <div className="atuação flex flex-col items-center justify-center text-center h-12 lg:h-20">
                        <Transmissão />
                        <h2 className="pt-1 text-[6px] lg:text-[10px]">Linha de Transmissão</h2>
                    </div>
                </div>
                <div className="absolute w-max bottom-0 -z-10 h-11 -right-[9px] lg:h-20 lg:-right-4 lg:translate-x-[8%]">
                    <RightCurve />
                </div>
            </div>
            <div className="absolute -top-32 h-16 left-1/2 -translate-x-1/2 w-1/2 sm:w-2/5 max-w-[1100px] bg-white rounded-t-[20px] flex sm:rounded-t-[30px] py-2 px-0 lg:px-4 lg:-top-28 lg:h-28 lg:hidden">
                <div className="absolute w-max bottom-0 -z-10 h-11 -left-[9px] lg:h-20 lg:-left-4 lg:-translate-x-[8%]">
                    <LeftCurve />
                </div>
                <div className="grid grid-cols-3 text-blue-500 uppercase h-full items-center w-full text-[8px] lg:text-[12px]">
                    <div className="atuação flex flex-col items-center justify-center  text-center border-r-2 border-yellow-500 h-12 lg:h-20">
                        <Mineração />
                        <h2 className="pt-1">Mineração</h2>
                    </div>
                    <div className="atuação flex flex-col items-center justify-center text-center border-r-2 border-yellow-500 h-12 lg:h-20">
                        <Siderurgia />
                        <h2 className="pt-1">Siderurgia</h2>
                    </div>
                    <div className="atuação flex flex-col items-center justify-center text-center h-12 lg:h-20">
                        <IndustriaAlimenticia />
                        <h2 className="pt-1 text-[6px] lg:text-[10px]">Indústria Alimentícia</h2>
                    </div>
                </div>
                <div className="absolute w-max bottom-0 -z-10 h-11 -right-[9px] lg:h-20 lg:-right-4 lg:translate-x-[8%]">
                    <RightCurve />
                </div>
            </div>
        </>
    )
}