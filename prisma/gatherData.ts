
async function gatherData() {
  console.log("get all planet ids...");

  type AllIds = {
    bodies: { id: string }[]
  }

  const getAllIds: AllIds = await (
    await fetch(
      "https://api.le-systeme-solaire.net/rest/bodies/?data=id&filter[]=bodyType,eq,Planet"
    )
  ).json();

  const planetIds = getAllIds['bodies'].map(planet=>planet.id);
  // console.log(planetIds)

  console.log("fetching planet data...");

  let planetData = [];
  
  for (let planet of planetIds){
    planetData.push(  await ((await fetch(`https://api.le-systeme-solaire.net/rest/bodies/${planet}`)).json()))
  }

  console.log(planetData);


}

gatherData()
  .then((data) => console.log("--end--"))
  .catch((e) => console.error(e));
