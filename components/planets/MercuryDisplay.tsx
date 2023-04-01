export default function MercuryDisplay(){

    const craterArr = Array.from(Array(50).keys())

    return (
        <div id="mercury" className="lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] rounded-full flex flex-col items-center">
            <div className="h-[10px] w-[10px] blur-sm opacity-50 rounded-full bg-slate-300 shadow-lg shadow-slate-200"></div>
            <div className="h-[10px] w-[10px] ml-[20px] blur-sm opacity-50 rounded-full bg-slate-300 shadow-lg shadow-slate-200"></div>
            <div className="h-[10px] blur-sm opacity-50 w-[10px] mr-[30px] rounded-full bg-slate-300 shadow-lg shadow-slate-200"></div>
            {craterArr.map((x, i)=>(
                <div style={{marginRight: `${Math.floor(Math.random() * 260)}px`, marginLeft: `${Math.floor(Math.random() * 260)}px`}} key={i} className={`h-[10px] blur-sm w-[10px] opacity-50 rounded-full bg-slate-300 shadow-lg shadow-slate-200`}></div>
            ))}
            <div className="h-[10px] w-[10px] blur-sm opacity-50 rounded-full bg-slate-300 shadow-lg shadow-slate-200"></div>
            <div className="h-[10px] w-[10px] ml-[20px] blur-sm opacity-50 rounded-full bg-slate-300 shadow-lg shadow-slate-200"></div>
            <div className="h-[10px] blur-sm opacity-50 w-[10px] mr-[30px] rounded-full bg-slate-300 shadow-lg shadow-slate-200"></div>
        </div>
        
    )
}