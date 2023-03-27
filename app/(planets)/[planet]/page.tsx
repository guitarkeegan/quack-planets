import Jupiter from "@/components/Jupiter";

// TODO: make db call here and pass props to planet component

export default function Planet({ params }: { params: { planet: string } }) {
  switch (params.planet) {
    case "jupiter":
      return <Jupiter />;
    default:
      return <Jupiter />;
  }
}
