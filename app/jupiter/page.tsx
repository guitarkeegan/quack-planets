import styles from "./styles.module.css"

export default function Jupiter(){
    return (
        <section>
            <div className="text-white">
                <h1>Jupiter</h1>
                <h2>The largest planet in the solar system, a gas giant which is the fifth in order from the sun and one of the brightest objects in the night sky.</h2>
            </div>
            <div id="jupiter-wrapper" className=" flex justify-center">
                <div id="jupiter" className="md:w-[700px] md:h-[700px] rounded-full" style={{background: "linear-gradient(140deg, rgb(106, 97, 78), rgb(118, 121, 120), rgb(100, 81, 67), rgb(138, 119, 82), rgb(140, 140, 120), #fdba74)"}}></div>
            </div>
        </section>
    )
}