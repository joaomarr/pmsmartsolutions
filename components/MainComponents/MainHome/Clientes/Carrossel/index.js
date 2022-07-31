import { useEffect } from 'react'
import { CarroselList } from './CarroselList';

export function Carrossel() {
    useEffect(() => {
        carousel()
    }, [])

    function carousel() {
        let carouselSlider = document.querySelector(".carousel_slider");
        let list = document.querySelectorAll(".carousel_list")[0];
        let list2 = document.querySelectorAll(".carousel_list")[1];

        const speed = 1;

        const width = list.offsetWidth;
        let x = 0;
        let x2 = width;

        function moveSecondLeft() {
            list2.style.left = `${width}px`;
        }

        function moveFirst() {
            x -= speed;

            if (width >= Math.abs(x)) {
            list.style.left = `${x}px`;
            } else {
            x = width;
            }
        }

        function moveSecond() {
            x2 -= speed;

            if (list2.offsetWidth >= Math.abs(x2)) {
            list2.style.left = `${x2}px`;
            } else {
            x2 = width;
            }
        }

        moveSecondLeft()

        setInterval(moveFirst, 10);
        setInterval(moveSecond, 10);
    }

    return (
        <div className="carousel_slider w-full flex relative h-20 lg:h-28 my-5">
            <CarroselList />
            <CarroselList />
        </div>
    )
}
