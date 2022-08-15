import { useEffect } from "react"
import { useInView } from "react-hook-inview"

export function Faixas({text}) {
    const [ref, isVisible, entry] = useInView({unobserveOnEnter: true, threshold: 0.2})

    useEffect(() => {
        if (isVisible) {
            const element = entry.target;
            element.classList.add("animateFaixa");
            element.querySelector("span").style.opacity = 1;
        }
    }, [isVisible, ref, entry])

    return (
        <li ref={ref} className="delay-200 transition-width duration-1000 ease-out w-10 rounded-r-lg h-14 bg-blue-500 flex justify-center items-center">
            <span className="text-lg transition delay-1000 duration-1000 ease-in opacity-0">
                {text}
            </span>
        </li>
    )
}