import { MainContato } from "../components/MainComponents/MainContato";
import { Titles } from "../components/Titles";
import { ContatoTitle } from "../components/Titles/ContatoTitle";

export default function Contato() {
    return (
      <>
        <Titles>
          <ContatoTitle />
        </Titles>
        <MainContato />
      </>
    )
  }
  