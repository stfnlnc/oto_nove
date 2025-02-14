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
        setTimeout(() => {
            menu(columns, items)
        }, 8000)
    })


    return (
        <>
            <div className="w-screen h-[100lvh] relative overflow-hidden">
                <section className="relative grid grid-cols-17 h-[100lvh] overflow-hidden pointer-events-none">
                    {colors[getRandomInt(colors.length)].map((color, key) => {
                        return (
                            <div
                                key={key} id={'menu-' + key}
                                className={"relative gradient transition-transform duration-1000 pointer-events-auto " + (key > 12 || key === 0 ? "cursor-pointer" : "") + (key === 0 ? " z-200" : "") + (key >= 13 ? (" z-" + (key - 9) + "50") : "")}
                            >
                                <div className={"w-full h-[200lvh] translate-y-full text-white text-xl uppercase transition-all duration-2000 ease-in-out"}
                                     style={{
                                         background: `linear-gradient(to bottom, ${color[0]}, ${color[1]}, ${color[0]})`
                                     }}>
                                </div>
                            </div>
                        )
                    })}

                </section>
                <div className="absolute bottom-12 left-12 galgo z-250 text-[25vw] leading-[0.5] text-white pointer-events-none loading opacity-0 transition-opacity duration-500 uppercase">
                    0%
                </div>
                <div className="absolute top-0 left-0 grid grid-cols-17 w-full h-[100lvh] pointer-events-none">
                    <div className="menu-item text-white relative uppercase opacity-0 translate-y-24 transition-all duration-1000 flex flex-row items-start justify-center z-300">
                        <div className="text-xl -rotate-90 mt-12">Home</div>
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
                    <div id="item-13" className="menu-item opacity-0 translate-y-24 relative transition-all duration-1000 text-white uppercase flex flex-row items-start justify-center z-450">
                        <div className="relative text-xl -rotate-90 mt-12">Friday</div>
                        <div className="pointer-events-auto absolute top-0 left-full w-screen h-[100lvh] grid grid-cols-17">
                            <div className="content col-span-12 bg-white text-black p-5 h-[100lvh] overflow-y-scroll">
                                <div className="w-full h-[200lvh]">
                                    <h1 className="text-9xl">Friday</h1>
                                </div>
                            </div>
                            <div className="col-span-5"></div>
                        </div>
                    </div>
                    <div id="item-14" className="menu-item opacity-0 translate-y-24 relative transition-all duration-1000 text-white uppercase flex flex-row items-start justify-center z-550">
                        <div className="text-xl -rotate-90 mt-16">Saturday</div>
                        <div className="pointer-events-auto absolute top-0 left-full w-screen h-[100lvh] grid grid-cols-17">
                            <div className="content col-span-12 bg-white text-black p-5 h-[100lvh] overflow-y-scroll">
                                <div className="w-full h-[200lvh]">
                                    <h1 className="text-9xl">Saturday</h1>
                                </div>
                            </div>
                            <div className="col-span-5"></div>
                        </div>
                    </div>
                    <div id="item-15" className="menu-item opacity-0 translate-y-24 relative transition-all duration-1000 text-white uppercase flex flex-row items-start justify-center z-650">
                        <div className="text-xl -rotate-90 mt-14">Sunday</div>
                        <div className="pointer-events-auto absolute top-0 left-full w-screen h-[100lvh] grid grid-cols-17">
                            <div className="content col-span-12 bg-white text-black p-5 h-[100lvh] overflow-y-scroll">
                                <div className="w-full h-[200lvh]">
                                    <h1 className="text-9xl">Sunday</h1>
                                </div>
                            </div>
                            <div className="col-span-5"></div>
                        </div>
                    </div>
                    <div id="item-16" className="menu-item opacity-0 translate-y-24 relative transition-all duration-1000 text-white uppercase flex flex-row items-start justify-center z-750">
                        <div className="text-xl -rotate-90 whitespace-nowrap mt-24">Tickets & Infos</div>
                        <div className="pointer-events-auto absolute top-0 left-full w-screen h-[100lvh] grid grid-cols-17">
                            <div className="content col-span-12 bg-white text-black p-5 h-[100lvh] overflow-y-scroll">
                                <div className="w-full h-[200lvh]">
                                    <h1 className="text-9xl">Tickets</h1>
                                </div>
                            </div>
                            <div className="col-span-5"></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}