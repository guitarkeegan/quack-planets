
/**
 * todo set up props
 * todo display on planets pages.
 */

type PlanetComponentProps ={
        name:string, 
        description: string, 

}
const PlanetDisplay = ({name,  description} : PlanetComponentProps)=>{


    return (
        <section className="sm:grid sm:grid-cols-2 mt-24">
        <div className="text-white flex items-start justify-evenly flex-col px-6">
            <h1 className="text-8xl">{name}</h1>
            <h2 className="text-2xl">{description}</h2>
        </div>
        <div id="planet-wrapper" className="sm:mt-0 mt-12 flex justify-center items-center">
            <div id="jupiter" className="lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] bg-blue-400 rounded-full"></div>
        </div>
    </section>
    )
}


export function getServerSideProps(){

}

export default PlanetDisplay;