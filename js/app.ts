
const API_URL = "http://localhost:3000/planets";


interface Planet {
  id: string;
  name: string;
  description: string;
}

const fetchPlanetInfo = async (planetId: string): Promise<Planet | null> => {
  try {
    const response = await fetch(`${API_URL}?id=${planetId}`);
    const data = await response.json();
    return data.length ? data[0] : null;
  } catch (error) {
    console.error("Error fetching planet data:", error);
    return null;
  }
};


const showPlanetInfo = async (planetId: string) => {
  const planetInfoElement = document.getElementById("planet-info");
  if (planetInfoElement) {
    
    planetInfoElement.innerHTML = "Loading...";

   
    const planet = await fetchPlanetInfo(planetId);
    if (planet) {
      planetInfoElement.innerHTML = `
        <h2>${planet.name}</h2>
        <p>${planet.description}</p>
      `;

    
      planetInfoElement.scrollIntoView({ behavior: "smooth" });
    } else {
      planetInfoElement.innerHTML = "<p>Planet information not found.</p>";
    }
  }
};


export { showPlanetInfo };
