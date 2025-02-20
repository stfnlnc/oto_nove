import {useEffect, useRef, useState} from "react";
import colors from "../js/colors.js";
import getRandomInt from "../js/getRandomInt.js";
import animateGradient from "../js/animateGradient.js";
import animateMenu from "../js/animateMenu.js";
import animateLoading from "../js/animateLoading.js";
import menu from "../js/menu.js";
import {useGSAP} from "@gsap/react";
import Lenis from "lenis";
import {showLabel} from "../js/showLabel.js";
import Artist from "./Artist.jsx";

export default function ColorGrid() {

    const scrollRef = useRef(null);
    const elementsRef = useRef([]);

    useEffect(() => {
        const lenis = new Lenis({
            wrapper: scrollRef.current,
            content: scrollRef.current.children[0],
            smooth: true,
            wheelMultiplier: 0.5,
        });

        const raf = (time) => {
            lenis.raf(time);
            requestAnimationFrame(raf);
        };
        requestAnimationFrame(raf);

        return () => lenis.destroy();
    }, []);

    let randomColor = getRandomInt(colors.length)
    const [color, setColor] = useState(randomColor)

    useEffect(() => {
        const gradients = document.querySelectorAll('.gradient > div')
        const menuItems = document.querySelectorAll('.menu-item')
        animateGradient(gradients)
        animateMenu(menuItems)
    }, []);

    useGSAP(() => {
        const loading = document.querySelector('.loading')
        animateLoading(loading)
        const showLabels = document.querySelectorAll('.label-show')
        showLabel(showLabels)
        const columns = document.querySelectorAll('.gradient')
        const items = document.querySelectorAll('.menu-item')
        setTimeout(() => {
            menu(columns, items)
            columns.forEach((column, key) => {
                column.addEventListener('click', () => {
                    if (key === 0) {
                        setColor(randomColor)
                    }
                    if (key > 12) {
                        let value = key - 12
                        let newColor = 0
                        if ((value + randomColor) > (colors.length - 1)) {
                            newColor = Math.abs((value + randomColor) - (colors.length))
                        } else {
                            newColor = value + randomColor
                        }
                        setColor(newColor)
                    }
                })
            })
        }, 8000)
    })

    let imgColor = colors[color][0][1]

    return (
        <>
            <div className="w-screen h-[100lvh] relative overflow-hidden">
                <section className="relative grid grid-cols-17 h-[100lvh] overflow-hidden pointer-events-none">
                    {colors[color].map((color, key) => {
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
                            <div ref={scrollRef} className="content relative col-span-12 bg-white text-black h-[100lvh] overflow-y-scroll">
                                <section className="relative w-full">
                                    <div className="p-5 w-full flex flex-col items-start justify-start">
                                        <h2 data-name="friday" className="label-show galgo text-[25vw] w-full flex flex-row items-start justify-between leading-[0.6] pt-5 pb-5 border-b border-black">
                                            <span>01.25.</span>
                                            <span>2025</span>
                                        </h2>
                                    </div>
                                </section>
                                <section className="w-full h-[100lvh] sticky top-0 p-5  mix-blend-difference filter-[invert(100)] z-20 pointer-events-none">
                                    <div className="grid grid-cols-2 py-5 w-full sticky top-0">
                                        <div className="flex flex-col">
                                            <div className="flex flex-row gap-2 uppercase text-[2.4vw] items-center justify-start leading-[1.2] cursor-pointer pointer-events-auto">
                                                <svg className="w-[2.4vw]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 36" fill="none">
                                                    <path d="M18.3203 8.15625L28.1641 18L18.3203 27.8438M26.7969 18H6.83594" stroke="#262626" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="square"/>
                                                </svg>
                                                Buy Tickets
                                            </div>
                                            <div className="flex flex-row gap-2 uppercase text-[2.4vw] items-center justify-start leading-[1.2] cursor-pointer pointer-events-auto">
                                                <svg className="w-[2.4vw]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 36" fill="none">
                                                    <path d="M18.3203 8.15625L28.1641 18L18.3203 27.8438M26.7969 18H6.83594" stroke="#262626" strokeWidth="2.5" strokeMiterlimit="10" strokeLinecap="square"/>
                                                </svg>
                                                Buy Pass
                                            </div>
                                        </div>
                                        <div className="flex flex-col w-full">
                                            <div className="border-b border-black w-full uppercase text-[2.4vw] leading-[1.2]">
                                                Les instants chavirés
                                            </div>
                                            <div className="border-b border-black w-full uppercase text-[2.4vw] leading-[1.2]">
                                                7, rue Richard Lenoir
                                            </div>
                                            <div className="border-b border-black w-full uppercase text-[2.4vw] leading-[1.2]">
                                                93100 Montreuil
                                            </div>
                                            <p className="text-[1.875vw] normal-case pt-5 leading-[1.2]">
                                                Experience an evening where sound becomes a living, breathing entity. Accompanied by contemplative light projections, this night transforms the room into an immersive canvas of sights and sounds.
                                            </p>
                                        </div>
                                    </div>
                                </section>
                                <Artist ref={el => elementsRef.current.push(el)} position="left" src="pictures/mara-selvik.avif" name="Mara Selvik" color={imgColor}/>
                                <Artist ref={el => elementsRef.current.push(el)} position="right" src="pictures/the-aether-fold.avif" name="The Aether Fold" color={imgColor}/>
                                <Artist ref={el => elementsRef.current.push(el)} position="left" src="pictures/elior-venn.avif" name="Elior Venn" color={imgColor}/>
                                <Artist ref={el => elementsRef.current.push(el)} position="right" src="pictures/jonas-eklund.avif" name="Jonas Eklund" color={imgColor}/>
                                <Artist ref={el => elementsRef.current.push(el)} position="left" src="pictures/nina-ostwald.avif" name="Nina Ostwald" color={imgColor}/>
                                <Artist ref={el => elementsRef.current.push(el)} position="right" src="pictures/disturbia.avif" name="Disturbia" color={imgColor}/>
                                <Artist ref={el => elementsRef.current.push(el)} position="left" src="pictures/faros-project.avif" name="Faros Project" color={imgColor}/>
                                <section className="w-full h-[100lvh]">
                                </section>
                            </div>
                            <div className="col-span-5"></div>
                        </div>
                    </div>
                    <div id="item-14" className="menu-item opacity-0 translate-y-24 relative transition-all duration-1000 text-white uppercase flex flex-row items-start justify-center z-550">
                        <div className="text-xl -rotate-90 mt-16">Saturday</div>
                        <div className="pointer-events-auto absolute top-0 left-full w-screen h-[100lvh] grid grid-cols-17">
                            <div className="content col-span-12 bg-white text-black p-5 h-[100lvh] overflow-y-scroll">
                                <div className="w-full flex flex-col items-start justify-start">
                                    <h2 className="galgo text-[25vw] w-full flex flex-row items-start justify-between leading-[0.8]">
                                        <span>01.26.</span>
                                        <span>2025</span>
                                    </h2>
                                </div>
                            </div>
                            <div className="col-span-5"></div>
                        </div>
                    </div>
                    <div id="item-15" className="menu-item opacity-0 translate-y-24 relative transition-all duration-1000 text-white uppercase flex flex-row items-start justify-center z-650">
                        <div className="text-xl -rotate-90 mt-14">Sunday</div>
                        <div className="pointer-events-auto absolute top-0 left-full w-screen h-[100lvh] grid grid-cols-17">
                            <div className="content col-span-12 bg-white text-black p-5 h-[100lvh] overflow-y-scroll">
                                <div className="w-full flex flex-col items-start justify-start">
                                    <h2 className="galgo text-[25vw] w-full flex flex-row items-start justify-between leading-[0.8]">
                                        <span>01.27.</span>
                                        <span>2025</span>
                                    </h2>
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