
export default function Jupiter(){
    
    return (
        <section className="grid sm:grid-cols-2">
            <div className="text-white flex items-start justify-evenly flex-col px-6">
                <h1 className="text-8xl">Jupiter</h1>
                <h2 className="text-2xl">The largest planet in the solar system, a gas giant which is the fifth in order from the sun and one of the brightest objects in the night sky.</h2>
            </div>
            <div id="jupiter-wrapper" className=" flex justify-center">
                <div id="jupiter" className="lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] rounded-full" style={{background: "linear-gradient(140deg, #ffedd5, #fdba74, #f97316, #fdba74, #ffedd5)"}}></div>
            </div>
        </section>
    )
}

