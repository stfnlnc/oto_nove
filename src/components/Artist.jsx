export default function Artist({src, name, color, position}) {


    return <>
        <section className="relative w-full h-[30rem] z-10">
            <div data-name={name} className={`label-show absolute top-1/2 ${position}-[6vw] -translate-y-1/2 w-[26vw] bg-white h-auto pointer-events-auto overflow-hidden`}>
                <img className="w-full artist h-auto" src={src} alt={name}/>
                <div className="absolute top-0 left-0 w-[26vw] h-full mix-blend-color" style={{backgroundColor: color}}></div>
            </div>
        </section>
    </>
}