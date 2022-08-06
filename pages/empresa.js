import { MainEmpresa } from "../components/MainComponents/MainEmpresa";
import { Titles } from "../components/Titles";
import { EmpresaTitle } from "../components/Titles/EmpresaTitle";

export default function Empresa() {
    return (
      <>
        <Titles>
          <EmpresaTitle />
        </Titles>
        <MainEmpresa />
      </>
    )
  }
  