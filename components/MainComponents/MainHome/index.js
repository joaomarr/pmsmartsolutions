import { About } from "./About";
import { Atuações } from "./Atuações";
import { Clientes } from "./Clientes";
import { Identity } from "./Identity";

export function MainHome() {
    return (
        <main className="relative">
              <Atuações />
              <About />
              <Clientes />
              <Identity />
        </main>
    )
}