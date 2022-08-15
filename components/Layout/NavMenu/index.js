import { useRouter } from "next/router"
import { useContext } from "react"
import { MenuContext } from ".."
import { CopyFooter } from "../Footer/CopyFooter"
import { Instagram } from "../../../assets/elements/icons/Instagram"
import { Facebook } from "../../../assets/elements/icons/Facebook"
import { Linkedin } from "../../../assets/elements/icons/Linkedin"
import Link from "next/link"
import { SocialMedia } from "../SocialMedia"

export function NavMenu() {
    const route = useRouter()
    const [isMenuOpen, setIsMenuOpen] = useContext(MenuContext)

    return (
        <div className="h-screen w-100 bg-gray-500 sticky z-10 top-0 pt-28">
            <div className="text-right h-1/2 flex flex-col justify-between font-black text-[32px] uppercase layout-padding">
                <Link href="/">
                    <a onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span className={`${route.pathname === "/" ? "text-yellow-500 border-b-4 border-blue-500" : "mr-5"}`}>Home</span>
                    </a>
                </Link>
                <Link href="/empresa">
                    <a onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span className={`${route.pathname === "/empresa" ? "text-yellow-500 border-b-4 border-blue-500" : "mr-5"}`}>Empresa</span>
                    </a>
                </Link>
                <Link href="/contato">
                    <a onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <span className={`${route.pathname === "/contato" ? "text-yellow-500 border-b-4 border-blue-500" : "mr-5"}`}>Contato</span>
                    </a>
                </Link>
            </div>
            <div className="absolute w-full bottom-16 flex flex-col items-center justify-center">
                <SocialMedia instagramColor="#121214" />
            </div>
            <CopyFooter />
        </div>
    )
}