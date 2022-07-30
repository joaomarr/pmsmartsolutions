import Link from "next/link";
import { ArrowRight } from "../../../../../assets/elements/icons/ArrowRight";

export function SaberMaisBtn({bg, color, link}) {
    return (
        <Link href={link}>
            <button className={`w-40 h-8 flex justify-center items-center px-7 bg-${bg}-500 transition duration-500 hover:brightness-75`}>
                <span className={`uppercase text-xs text-[#121214] mr-2`} >
                    Saber Mais
                </span>
                <ArrowRight color={color} />
            </button>
        </Link>
    )
}