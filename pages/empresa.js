import { MainEmpresa } from "../components/MainComponents/MainEmpresa";
import { Titles } from "../components/Titles";
import { EmpresaTitle } from "../components/Titles/EmpresaTitle";
import Head from "next/head"

export default function Empresa() {
    return (
      <>
        <Head>
          <title>PM Smart Solutions - Empresa</title>
        </Head>
        <Titles>
          <EmpresaTitle />
        </Titles>
        <MainEmpresa />
      </>
    )
  }
  