import { Facebook } from "../../../assets/elements/icons/Facebook"
import { Linkedin } from "../../../assets/elements/icons/Linkedin"
import { Instagram } from "../../../assets/elements/icons/Instagram"

export function SocialMedia({instagramColor}) {
    return (
        <div className="text-center min-w-[150px] lg:min-w-[240px]">
            <span className="text-[12px] md:text-xl tracking-widest">SOCIAL-MEDIA</span>
            <div className="flex justify-between w-full p-2 md:p-10 ">
                <a href="#" target="_blank">
                    <Facebook />
                </a>
                <a href="https://www.instagram.com/pmsmartsolutions/" target="_blank" rel="noreferrer">
                    <Instagram color={instagramColor} />
                </a>
                <a href="https://www.linkedin.com/company/pm-smart-solutions-servi%C3%A7os-e-transportes-ltda/" target="_blank" rel="noreferrer">
                    <Linkedin />
                </a>
            </div>
        </div>
    )
}