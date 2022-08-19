import { MainHome } from "../components/MainComponents/MainHome"
import { HomeTitle } from "../components/Titles/HomeTitle"
import { Titles } from "../components/Titles/";
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
          <title>PM Smart Solutions - Home</title>
      </Head>
      <Titles>
        <HomeTitle />
      </Titles>
      <MainHome />
    </>
  )
}
