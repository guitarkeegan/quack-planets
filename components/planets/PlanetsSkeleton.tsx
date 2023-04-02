export default function PlanetsSkeleton() {
  return (
    <div className="flex justify-center items-center fixed top-1/2 left-0 right-0">
      <div className="text-white text-4xl">loading...</div>
      <div className="h-8 w-8 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
    </div>
  );
}
