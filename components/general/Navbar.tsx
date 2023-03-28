import Link from "next/link";

interface Route{
    href: string,
    name: string
}
const routes: Route[] = [
   {
    href: '/',
    name: 'home'
   },
   {
    href:'/mercury',
    name: 'Mercury'
   },
   {
    href: "/venus",
    name:  "Venus",
   },
   {
    href: "/earth",
    name:  "Earth",
   },
   {
    href: "/mars",
    name:  "mars",
   },
   {
    href: "/jupiter",
    name:  "Jupiter",
   },
   {
    href: "/saturan",
    name:  "saturan",
   },
   {
    href: "/uranus",
    name:  "Uranus",
   },
   {
    href: "/neptune",
    name:  "Neptune",
   },

];

const Navbar = () => {
  return (
    <div className="bg-white p-4 ">
      {routes.map((route, index) => (
        <Link className="p-2" key={index} href={`${route.href}`}>
          {route.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
