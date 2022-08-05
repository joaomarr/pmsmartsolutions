import Link from "next/link";
import { ArrowRight } from "../../../../../assets/elements/icons/ArrowRight";

export function SaberMaisBtn({bg, color, link}) {
    console.log(bg, color, link)
    return (
        <Link href={link}>
            <button className={`w-40 h-8 flex justify-center items-center px-7 transition duration-500 hover:brightness-75 ${bg === "gray" ? "bg-gray-500" : "bg-yellow-500"}`}>
                <span className={`uppercase text-xs mr-2 ${color === "gray" ? "text-gray-500" : "text-yellow-500"}`} >
                    Saber Mais
                </span>
            </button>
        </Link>
    )
}