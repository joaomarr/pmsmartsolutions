import { MainContato } from "../components/MainComponents/MainContato";
import { Titles } from "../components/Titles";
import { ContatoTitle } from "../components/Titles/ContatoTitle";
import Head from "next/head"

export default function Contato() {
    return (
      <>
        <Head>
          <title>PM Smart Solutions - Contato</title>
        </Head>
        <Titles>
          <ContatoTitle />
        </Titles>
        <MainContato />
      </>
    )
  }
  