import { WaveFrame } from "../../../../assets/elements/WaveFrame";
import { WhiteLogo } from "../../../../assets/logos/WhiteLogo";
import { Instagram } from "../../../../assets/elements/icons/Instagram"
import { Facebook } from "../../../../assets/elements/icons/Facebook"
import { Linkedin } from "../../../../assets/elements/icons/Linkedin"
import { ArrowUp } from "../../../../assets/elements/icons/ArrowUp";
import Link from "next/link";
import { SocialMedia } from "../../SocialMedia";

export function MainFooter() {

    const scrollUp = () => {
        console.log("scrolling");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className="w-full pb-12">
            <WaveFrame />
            <div className="layout-padding flex flex-wrap pb-5 h-fit bg-blue-500">
                <div className="flex">
                    <div className="md:w-[138px] w-14 mr-5 md:mr-16">
                        <WhiteLogo />
                        <p className="font-thin text-[6px] sm:text-[10px] w-full leading-4 mt-1">
                            Desde 2006 prestando serviços para gigantes do mercado
                        </p>   
                    </div>
                    <div className="h-fit border-l-2 border-white px-4 md:px-10">
                        <span className="uppercase text-[12px] tracking-widest sm:text-2xl">
                            Local
                        </span>
                        <p className="text-[8px] font-thin sm:text-xl">
                            Av. Cel. Jove Soares Nogueira, <br></br>734 - Contagem - MG
                        </p>
                    </div>
                    <div className="pr-4 md:pr-10">
                        <span className="uppercase tracking-widest text-[12px] sm:text-2xl">
                            LINKS
                        </span>
                        <ul className="text-[8px] pl-4 md:pl-6 font-thin list-disc sm:text-xl ">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/empresa">Empresa</Link></li>
                            <li><Link href="/contato">Contato</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="flex justify-between sm:justify-evenly flex-1">
                    <div className="text-center w-30 md:w-60">
                        <SocialMedia instagramColor="#014DAB"/>
                    </div>
                    <div className="hover:scale-105 transition ease-in cursor-pointer" onClick={() => scrollUp()}>
                        <ArrowUp />
                    </div>
                </div>
            </div>
        </div>
    )
}