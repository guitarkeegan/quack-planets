import Jupiter from "@/components/Jupiter";
import Earth from "@/components/Earth";
import Mercury from "@/components/Mercury";
import Venus from "@/components/Venus";
import Mars from "@/components/Mars";
import Saturn from "@/components/Saturn";
import Uranus from "@/components/Uranus";
import Neptune from "@/components/Neptune";

export default function Planet({ params }: { params: { planet: string } }) {
  switch (params.planet) {
    case "jupiter":
      return <Jupiter />;
    case "earth":
      return <Earth />;
    case "mars":
      return <Mars />;
    case "venus":
      return <Venus />;
    case "uranus":
      return <Uranus />;
    case "mercury":
      return <Mercury />;
    case "saturn":
      return <Saturn />;
    case "neptune":
      return <Neptune />;
    default:
      return <Jupiter />;
  }
}
