import { getAllPlanets } from '@/utils';
import Link from 'next/link';

interface Route {
  href: string;
  name: string;
}

const getRoutes = async () => {
  const routes: Route[] = [{ href: '/', name: 'Home' }];
  const planets = await getAllPlanets();

  planets.map((planet) => {
    let route: Route = { href: `/${planet.name}`, name: planet.name };
    routes.push(route);
  });

  return routes;
};

const Navbar = async () => {
  const routes: Route[] = await getRoutes();
  return (

    <div className='bg-white p-4 w-full'>

      {routes.map((route, index) => (
        <Link className='p-2' key={index} href={`${route.href}`}>
          {route.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
