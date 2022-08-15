import { createPortal }from 'react-dom';
import { useEffect, useState } from "react";

export function Titles({ children }) {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        return ()=>setMounted(false)
    }, [])

    return mounted ? createPortal(children, document.querySelector(".hero-portal")) : ""
}