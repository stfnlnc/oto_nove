import {useEffect} from "react";
import colors from "../js/colors.js";
import getRandomInt from "../js/getRandomInt.js";
import animateGradient from "../js/animateGradient.js";

export default function ColorGrid() {

    useEffect(() => {
        const gradients = document.querySelectorAll('.gradient')

        animateGradient(gradients)
    }, []);


    return (
        <>
            <section className="grid grid-cols-17 h-[100lvh] overflow-hidden">
                {colors[getRandomInt(colors.length)].map((color, key) => {
                    return (
                        <div
                            key={key}
                            className={"gradient w-full h-[200lvh] translate-y-full text-white text-xl uppercase transition-all duration-2000 ease-in-out"}
                            style={{
                                background: `linear-gradient(to bottom, ${color[0]}, ${color[1]}, ${color[0]})`
                            }}
                        >
                        </div>
                    )
                })}
            </section>
        </>
    )
}