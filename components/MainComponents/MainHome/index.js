import { About } from "./About";
import { Atuações } from "./Atuações";
import { Clientes } from "./Clientes";

export function MainHome() {
    return (
        <main className="relative">
              <Atuações />
              <About />
              <Clientes />
        </main>
    )
}