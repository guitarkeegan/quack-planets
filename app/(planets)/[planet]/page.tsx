
import PlanetDisplay from "@/components/planets/PlanetDisplay";
export default function Planet({ params }: { params: { planet: string } }) {

return <PlanetDisplay name={params.planet} description="this is  a planet"/>
}
