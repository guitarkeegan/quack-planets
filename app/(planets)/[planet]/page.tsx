import Jupiter from "@/components/Jupiter";

export default function Planet({ params }: { params: { planet: string } }) {
  switch (params.planet) {
    case "jupiter":
      return <Jupiter />;
    default:
      return <Jupiter />;
  }
}
