import { About } from "./About";
import { Atuações } from "./Atuações";
import { Clientes } from "./Clientes";
import { Identity } from "./Identity";
import { Orçamento } from "./Orçamento";

export function MainHome() {
    return (
        <main className="relative">
              <Atuações />
              <About />
              <Clientes />
              <Identity />
              <Orçamento />
        </main>
    )
}