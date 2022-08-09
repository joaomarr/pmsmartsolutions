import { AboutDescription } from "./AboutDescription"
import { AreasDeAtuação } from "./AreasDeAtuação"

export function MainEmpresa() {
    return (
        <main className="relative h-screen">
            <div className="flex flex-col xl:flex-row">
                <AboutDescription />
                <AreasDeAtuação />
            </div>
        </main>
    )
}