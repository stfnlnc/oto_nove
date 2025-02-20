export default function Artist({src, name, color, position}) {
    return <>
        <section className="relative w-full h-[30rem] z-10">
            <div data-name={name} className={`label-show absolute top-1/2 ${position}-[6vw] -translate-y-1/2 w-[26rem] bg-white h-full pointer-events-auto overflow-hidden`}>
                <img className="w-full h-auto object-cover" src={src} alt={name}/>
                <div className="absolute top-0 left-0 w-full h-full mix-blend-color" style={{backgroundColor: color}}></div>
                <div className="artist absolute top-0 left-0 w-full h-full grid grid-cols-7">
                    <div className="w-full h-full bg-white"></div>
                    <div className="w-full h-full bg-white"></div>
                    <div className="w-full h-full bg-white"></div>
                    <div className="w-full h-full bg-white"></div>
                    <div className="w-full h-full bg-white"></div>
                    <div className="w-full h-full bg-white"></div>
                    <div className="w-full h-full bg-white"></div>
                </div>
            </div>
        </section>
    </>
}