import PlanetDisplay from "@/components/planets/PlanetDisplay";
import PlanetsSkeleton from "@/components/planets/PlanetsSkeleton";
import { NextPageContext } from "next";
import { Suspense } from "react";

interface PlanetPageProps {
  userAgent?: string;
}
export default function Planet<PlanetPageProps>({
  params,
}: {
  params: { planet: string };
}) {
  return (
    <Suspense fallback={<PlanetsSkeleton />}>
      {/* @ts-expect-error Server Component */}
      <PlanetDisplay name={params.planet} description={params.planet} />
    </Suspense>
  );
}
