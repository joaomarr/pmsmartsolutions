import { AboutDescription } from "./AboutDescription"
import { AreasDeAtuação } from "./AreasDeAtuação"
import { GestãoENegócios } from "./GestãoENegócios"

export function MainEmpresa() {
    return (
        <main className="relative">
            <div className="flex flex-col xl:flex-row">
                <AboutDescription />
                <AreasDeAtuação />
            </div>
            <GestãoENegócios />
        </main>
    )
}