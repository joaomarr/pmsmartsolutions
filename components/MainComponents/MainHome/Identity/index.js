import { useState, useEffect } from "react"
import { ArrowLeft } from "../../../../assets/elements/icons/ArrowLeft"
import { ArrowRight } from "../../../../assets/elements/icons/ArrowRight"

export function Identity() {
    const [currentSlide, setCurrentSlide] = useState(2)

    useEffect(() => {
        setSlide()
    })

    const setSlide = () => {
        let tabs = document.querySelectorAll(".tabs")
        let tabSelected = document.querySelector(`.tabs[data-tab="${currentSlide.toString()}"`)
        tabs.forEach(t => t.classList.remove("tab-selected"))
        tabSelected.classList.add("tab-selected")

        let dots = document.querySelectorAll(".dots__dot")
        let dotSelected = document.querySelector(`.dots__dot[data-dot="${currentSlide.toString()}`)
        dots.forEach(d => d.classList.remove("dots__dot--active"))
        dotSelected.classList.add("dots__dot--active")

        let slides = document.querySelectorAll(".testimonials")
        slides.forEach((s, i) => {
            i++
            if (i === currentSlide) {
                s.style.transform = "translateX(0%)"
            }
            else if (i < currentSlide) {
                s.style.transform = `translateX(${-100 * i}%)`
            } else if (i > currentSlide) {
                s.style.transform = `translateX(${100 * (i - 1)}%)`
                if (i === 3) {
                    s.style.transform = "translateX(100%)"
                }
            }
        })
    }

    return (
        <section className="w-full flex flex-col justify-center items-center text-center mx-auto py-10 md:py-16">
            <h3 className="font-bold text-gray-500 text-3xl mb-10 md:text-5xl">
                Nossa Identidade
            </h3>
            <ul className="text-gray-500 font-semibold text-xs md:text-xl flex justify-center w-full py-5 md:py-10">
                <li className="px-2 md:px-8">
                    <button className="tabs bg-yellow-500 py-2 px-6 rounded-3xl transition duration-500 hover:bg-blue-500 hover:text-white hover:-translate-y-2 sm:px-14" data-tab="1" onClick={() => setCurrentSlide(1)}>
                        Visão
                    </button>
                </li>
                <li className="px-2 md:px-8">
                    <button className="tabs bg-yellow-500 py-2 px-6 rounded-3xl transition duration-500 hover:bg-blue-500 hover:text-white hover:-translate-y-2 sm:px-14" data-tab="2" onClick={() => setCurrentSlide(2)}>
                        Valores
                    </button>
                </li>
                <li className="px-2 md:px-8">
                    <button className="tabs bg-yellow-500 py-2 px-6 rounded-3xl transition duration-500 hover:bg-blue-500 hover:text-white hover:-translate-y-2 sm:px-14" data-tab="3" onClick={() => setCurrentSlide(3)}>
                        Missão
                    </button>
                </li>
            </ul>
            <div className="flex overflow-hidden h-96 items-center justify-center p-5 relative w-full md:max-w-4xl">
                <div className="testimonials text-sm px-8 w-full absolute transition duration-1000 md:text-lg md:px-28" data-slide="1">
                    <h4 className="font-bold text-2xl pb-5 text-gray-500">
                        Nossa Visão
                    </h4>
                    <p className="leading-8 text-gray-500/90">
                        Ser uma empresa reconhecida pela eficiência e qualidade em sua área de atuação,
                        priorizando sempre pela busca continua da melhoria dos serviços prestados a nossos clientes.
                    </p>
                </div>
                <div className="testimonials text-sm px-8 w-full absolute transition duration-1000 md:text-lg md:px-28" data-slide="2">
                    <h4 className="font-bold text-2xl pb-5 text-gray-500">
                        Nossos Valores
                    </h4>
                    <p className="leading-8 text-gray-500/90">
                        Garantir aos clientes a melhor qualidade possível à prestação de serviços e investir continuamente no aperfeiçoamento de suas atividades e seus profissionais.
                        Buscar inovações para melhor atender o cliente;
                        Respeito e responsabilidade com o meio ambiente;
                        Respeitar o ser humano e seus valores sem discriminação;
                        Qualidade para atender as mais diversas necessidades do mercado;
                    </p>
                </div>
                <div className="testimonials text-sm px-8 w-full absolute transition duration-1000 md:text-lg md:px-28" data-slide="3">
                    <h4 className="font-bold text-2xl pb-5 text-gray-500">
                        Nossa Missao
                    </h4>
                    <p className="leading-8 text-gray-500/90">
                        Atuar como referência na área de prestação de serviços, mantendo a excelência nos serviços
                        presados, objetivando o crescimento contúnuo e a solidez financeira.
                    </p>
                </div>
                <button className="absolute left-0" onClick={() => {
                    if (currentSlide == 1) {
                        setCurrentSlide(3)
                    } else {
                        setCurrentSlide(currentSlide - 1)
                    }
                }}>
                    <ArrowLeft />
                </button>
                <button className="absolute right-0" onClick={() => {
                    if (currentSlide == 3) {
                        setCurrentSlide(1)
                    } else {
                        setCurrentSlide(currentSlide + 1)
                    }
                }}>
                    <ArrowRight />
                </button>
                <div className="dots">
                    <button className="dots__dot" data-dot="1" onClick={() => {setCurrentSlide(1)}}></button>
                    <button className="dots__dot" data-dot="2" onClick={() => {setCurrentSlide(2)}}></button>
                    <button className="dots__dot" data-dot="3" onClick={() => {setCurrentSlide(3)}}></button>
                </div>
            </div>
        </section>
    )
}