import { FC } from "react";

interface FactDisplayProps {
  fact1: string | undefined;
  fact2: string | undefined;
  fact3: string | undefined;
}

const FactDisplay: FC<FactDisplayProps> = ({ fact1, fact2, fact3 }) => {
  return (
    <div className="p-4 m-4 ">
      <h2 className="text-white text-xl p-4 ">Did you know...</h2>
      <div className="p-6 max-w-sm mx-auto mb-2 bg-white rounded-xl flex flex-col items-center space-x-4 shadow-lg shadow-indigo-500/50">
        <p className="text-xl font-medium text-black flow-root">{fact1}</p>
      </div>
      <div className="p-6 max-w-sm mx-auto mb-2 bg-white rounded-xl shadow-lg flex flex-col items-center space-x-4">
        <p className="text-xl font-medium text-black flow-root">{fact2}</p>
      </div>
      <div className="p-6 max-w-sm mx-auto mb-2 bg-white rounded-xl shadow-lg flex flex-col items-center space-x-4">
        <p className="text-xl font-medium text-black flow-root">{fact3}</p>
      </div>
    </div>
  );
};

export default FactDisplay;
