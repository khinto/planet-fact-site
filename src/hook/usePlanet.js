import { useEffect, useState } from "react"


export const usePlanet = () => {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    const fetchPlanets = async () => {
      const res = await fetch('http://localhost:8000/planets');
      const data = await res.json();

      setPlanets(data);
    }
    fetchPlanets();
  }, []); 

  return planets;
}
