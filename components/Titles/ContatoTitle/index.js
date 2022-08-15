import { WhiteAbstractLogo } from "../../../assets/logos/WhiteAbstractLogo"
import { motion } from "framer-motion"

export function ContatoTitle() {
    return (
        <motion.section className="EmpresaHero layout-padding flex flex-col items-center justify-center h-full"
            animate={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -50}}
            transition={{ duration: 1.25 }}
        >
            <div className="w-100 text-center xl:w-7/12">
                <h1 className="font-black text-4xl pb-2 xl:pb-7 md:text-6xl">
                    Contatos
                </h1>
                <p className="text-sm leading-7 xl:leading-10 md:text-xl">
                Quer fazer do seu negócio algo mais competitivo e produtivo? Entre em contato conosco por para mais informações. 
                </p> 
            </div>
            <div className="max-w-md justify-center py-4 lg:w-96">
                <WhiteAbstractLogo />
            </div>
        </motion.section>
    )
}