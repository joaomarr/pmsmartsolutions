import { MainContato } from "../components/MainComponents/MainContato";
import { Titles } from "../components/Titles";
import { ContatoTitle } from "../components/Titles/ContatoTitle";
import Head from "next/head"

export default function Contato() {
    return (
      <>
        <Head>
          <title>Contato - PmSmartSolutions</title>
        </Head>
        <Titles>
          <ContatoTitle />
        </Titles>
        <MainContato />
      </>
    )
  }
  