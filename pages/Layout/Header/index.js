import { MainLogo } from "../../../assets/logos/MainLogo";
import {useRouter} from 'next/router';
import { MenuContext } from "../../Layout";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useContext(MenuContext);
    const route = useRouter();

    useEffect(() => {
        window.addEventListener('scroll', changeBackground)
    }, [])
    
    const changeBackground = () => {
        const navBar = document.getElementById("navbar");
        if (window.scrollY >= window.innerHeight) {
            navBar.classList.add('navbar-active');
        } else {
            navBar.classList.remove('navbar-active');
        }
    }


    return (
        <header id="navbar" className="layout-padding h-[75px] z-20 w-full flex items-center justify-between transition duration-500 ease-out bg-gradient-to-b from-black/70 backdrop-blur-[2px] fixed">
            <Link href="/">
                <a><MainLogo /></a>
            </Link>
            <ul className="hidden uppercase font-extrabold tracking-[.3em] md:flex">
                <li className={`header-nav ${route.pathname === "/" ? 'nav-selected' : ''}`}>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li className={`header-nav ${route.pathname === "/empresa" ? 'nav-selected' : ''}`}>
                    <Link href="/empresa">
                        Empresa
                    </Link>
                </li>
                <li className={`header-nav ${route.pathname === "/contato" ? 'nav-selected' : ''}`}>
                    <Link href="/contato">
                        Contato
                    </Link>
                </li>
            </ul>
            <div className="opacity-100 md:opacity-0 w-[82px] flex justify-end">
                <div className={`nav-dropdown border-2  w-12 h-11 px-1 py-2 flex flex-col justify-center relative transition ${isMenuOpen ? "border-blue-500" : "border-white/40"}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <div className={`absolute w-9 h-1 bg-white top-2 rounded-full transition ease-in-out delay-250 ${isMenuOpen ? "translate-y-[10px]" : ""}`}></div>
                    <div className={`w-100 h-1 rounded-full transition z-10 ${isMenuOpen ? "bg-yellow-500" : "bg-white"}`}></div>
                    <div className={`absolute w-9 h-1 bg-white bottom-2 rounded-full transition ease-in-out delay-250 ${isMenuOpen ? "-translate-y-[10px]" : ""}`}></div>
                </div>
            </div>
        </header>
    );
}