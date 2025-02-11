import {useGSAP} from "@gsap/react";

export default function Preloader() {

    const columns = []

    for (let i = 0; i < 17; i++) {
        columns.push(
            <div key={i} className="column bg-white w-full h-[100lvh] transition-transform duration-500" style={{transform: 'translateY(100vh)'}}></div>
        )
    }

    useGSAP(() => {

    }, {})

    return (
        <>
            <section className="fixed top-0 left-0 grid grid-cols-17 w-full h-[100lvh] overflow-hidden">
                {columns.map(column => {
                    return column
                })}
            </section>
        </>
    )
}