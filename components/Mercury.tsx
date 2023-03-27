export default function Mercury(){
    return (
        <section className="sm:grid sm:grid-cols-2 mt-24">
            <div className="text-white flex items-start justify-evenly flex-col px-6">
                <h1 className="text-8xl">Mercury</h1>
                <h2 className="text-2xl">The largest planet in the solar system, a gas giant which is the fifth in order from the sun and one of the brightest objects in the night sky.</h2>
            </div>
            <div id="planet-wrapper" className="sm:mt-0 mt-12 flex justify-center items-center">
                <div id="jupiter" className="lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-gray-700 rounded-full"></div>
            </div>
        </section>
    )
}