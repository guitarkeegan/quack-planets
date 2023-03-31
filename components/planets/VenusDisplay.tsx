export default function VenusDisplay(){
    return (
        <div id="venus" className="lg:w-[30rem] lg:h-[30rem] md:w-[400px] md:h-[400px] w-[280px] h-[280px] rounded-full flex flex-col items-center gap-0 border-4 border-solid border-stone-800">
            <div className="bg-[#aa6d34] mt-8 mr-10 h-[50px] w-[100px] rounded-full blur-md"></div>
            <div className="bg-[#c7a64d] mt-4 mr-24 rounded-full blur-lg  h-[80px] w-[180px]"></div>
            <div className="bg-[#c7a64d] ml-12 rounded-full blur-lg  h-[80px] w-[280px] drop-shadow-lg"></div>
            <div className="bg-amber-800 border-8 border-yellow-300 border-solid ml-12 rounded-full blur-lg  h-[100px] w-[100px] drop-shadow-lg"></div>
            <div className="bg-amber-900 border-8 border-yellow-700 border-solid mr-44 rounded-full blur-lg  h-[100px] w-[100px] drop-shadow-lg"></div>
            <div className="bg-[#aa6d34] mt-8 mr-40 h-[80px] w-[100px] rounded-full blur-md"></div>
            <div className="bg-[#45291b] ml-12 rounded-full blur-md  h-[80px] w-[100px]"></div>
        </div>
    )
}