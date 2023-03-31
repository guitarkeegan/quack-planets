
import PlanetDisplay from "@/components/planets/PlanetDisplay";
import { NextPageContext } from "next";


interface PlanetPageProps{
  userAgent?: string;
}
export default function Planet<PlanetPageProps>({ params }: { params: { planet: string } }) {
        {/* @ts-expect-error Server Component */}

return <PlanetDisplay name={params.planet} description={params.planet}/>
}

