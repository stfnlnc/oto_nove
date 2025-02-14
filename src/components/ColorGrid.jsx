import {useEffect} from "react";
import colors from "../js/colors.js";
import getRandomInt from "../js/getRandomInt.js";
import animateGradient from "../js/animateGradient.js";
import animateMenu from "../js/animateMenu.js";
import animateLoading from "../js/animateLoading.js";
import menu from "../js/menu.js";
import {useGSAP} from "@gsap/react";

export default function ColorGrid() {

    useGSAP(() => {
        const loading = document.querySelector('.loading')
        animateLoading(loading)
    }, {})


    useEffect(() => {
        const gradients = document.querySelectorAll('.gradient > div')
        const menuItems = document.querySelectorAll('.menu-item')
        animateGradient(gradients)
        animateMenu(menuItems)
    }, []);

    useGSAP(() => {
        const columns = document.querySelectorAll('.gradient')
        const items = document.querySelectorAll('.menu-item')
        menu(columns, items)
    })


    return (
        <>
            <section className="relative grid grid-cols-17 h-[100lvh] overflow-hidden">
                {colors[getRandomInt(colors.length)].map((color, key) => {
                    return (
                        <div
                            key={key} id={'menu-' + key}
                            className={"gradient transition-transform duration-1000 " + (key > 12 || key === 0 ? "cursor-pointer" : "") + (key === 0 ? " z-200" : "")}
                        >
                            <div className={"w-full h-[200lvh] translate-y-full text-white text-xl uppercase transition-all duration-2000 ease-in-out"}
                                 style={{
                                     background: `linear-gradient(to bottom, ${color[0]}, ${color[1]}, ${color[0]})`
                                 }}>
                            </div>
                        </div>
                    )
                })}
                <div className="fixed bottom-12 left-12 galgo z-250 text-[25vw] leading-[0.5] text-white pointer-events-none loading opacity-0 transition-opacity duration-500 uppercase">
                    0%
                </div>
                <div className="fixed top-0 left-0 grid grid-cols-17 w-full h-[100lvh] z-1500 text-right pointer-events-none">
                    <div className="menu-item text-white uppercase opacity-0 translate-y-24 transition-all duration-1000 flex flex-row items-start justify-center">
                        <div className=" text-xl -rotate-90 mt-12">Home</div>
                    </div>
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                    <div className="menu-item"></div>
                    <div id="item-13" className="menu-item  opacity-0 translate-y-24 relative transition-all duration-1000 text-white uppercase flex flex-row items-start justify-center">
                        <div className="text-xl -rotate-90 mt-12">Friday</div>
                    </div>
                    <div id="item-14" className="menu-item  opacity-0 translate-y-24 relative transition-all duration-1000 text-white uppercase flex flex-row items-start justify-center">
                        <div className="text-xl -rotate-90 mt-16">Saturday</div>
                    </div>
                    <div id="item-15" className="menu-item  opacity-0 translate-y-24 relative transition-all duration-1000 text-white uppercase flex flex-row items-start justify-center">
                        <div className="text-xl -rotate-90 mt-14">Sunday</div>
                    </div>
                    <div id="item-16" className="menu-item  opacity-0 translate-y-24 relative transition-all duration-1000 text-white uppercase flex flex-row items-start justify-center">
                        <div className="text-xl -rotate-90 whitespace-nowrap mt-24">Tickets & Infos</div>
                    </div>
                </div>
            </section>
        </>
    )
}