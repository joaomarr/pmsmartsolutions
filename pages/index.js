import { MainHome } from "../components/MainComponents/MainHome"
import { HomeTitle } from "../components/Titles/HomeTitle"
import { Titles } from "../components/Titles/";

export default function Home() {
  return (
    <>
      <Titles>
        <HomeTitle />
      </Titles>
      <MainHome />
    </>
  )
}
