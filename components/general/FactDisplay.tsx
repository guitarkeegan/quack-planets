import { FC } from 'react';

interface FactDisplayProps {
  fact1: string | undefined;
  fact2: string | undefined;
  fact3: string | undefined;
  moons?: { name: string; historyOfName: string; size: number }[];
}

const FactDisplay: FC<FactDisplayProps> = ({ fact1, fact2, fact3, moons }) => {
  return (
    <div className='p-4 h-screen h-full flex overflow-y-auto flex-col flex-grow'>
      <h2 className='text-white text-xl p-4 '>Did you know...</h2>
      <div className='p-6 max-w-sm mx-auto mb-2 bg-white rounded-xl flex flex-col items-center space-x-4 shadow-lg shadow-indigo-500/50'>
        <p className='text-xl font-medium text-black flow-root'>{fact1}</p>
      </div>
      <div className='p-6 max-w-sm mx-auto mb-2 bg-white rounded-xl shadow-lg flex flex-col items-center space-x-4'>
        <p className='text-xl font-medium text-black flow-root'>{fact2}</p>
      </div>
      <div className='p-6 max-w-sm mx-auto mb-2 bg-white rounded-xl shadow-lg flex flex-col items-center space-x-4'>
        <p className='text-xl font-medium text-black flow-root'>{fact3}</p>
      </div>
   
      <h2 className='text-white text-xl p-4'>Moons</h2>
      <div className='p-6 max-w-sm mx-auto mb-2 bg-white rounded-xl shadow-lg flex flex-col items-center space-x-4'>
        <div className='text-xl font-medium text-black flow-root'>
          {moons?.length as number > 0 ? moons?.map((moon, i) => {
            return [
              <p key={i} className='font-bold  text-blue-600'>{moon.name}</p>,
              <p key={i + 1}>{moon.historyOfName}</p>,
            ];
          }) 
        :
        <p className='font-bold  text-blue-600'>Planet does not have moons</p>
        }
        </div>

        <span className='mb-40'>{" "}</span>

      </div>

    </div>
  );
};

export default FactDisplay;
