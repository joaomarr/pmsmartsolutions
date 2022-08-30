import { MainLogo } from "../../../assets/logos/MainLogo";
import { motion } from 'framer-motion';

export function HomeTitle() {
    return (
        <motion.section 
            className="HomeHero layout-padding flex flex-col xl:flex-row items-center justify-center xl:justify-between h-full"
            animate={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: 50}}
            transition={{ duration: 1.25 }}
        >
            <div className="w-100 xl:w-7/12">
                <h1 className="font-black text-4xl pb-2 xl:pb-7 md:text-6xl">
                Transportes, Serviços e Locação
                de Máquinas e equipamentos
                </h1>
                <p className="text-sm leading-7 xl:leading-10 md:text-xl">
                Trabalhando para que o seu negócio se torne mais competitivo
                e produtivo, com processos e soluções inovadoras, foco nos custos e 
                na segurança das operações.
                </p>
            </div>
            <div className="max-w-sm lg:max-w-2xl 2xl:flex-1 px-12 py-4 2xl:p-28 justify-center">
                <MainLogo />
            </div>
        </motion.section>
    )
}