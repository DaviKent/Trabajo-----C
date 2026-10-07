import { useState } from "react";
import Libro from "./Libro";
import Ciudades from "./Ciudades";
import Canciones from "./Canciones";
import Animales from "./Animales";
import Videojuegos from "./Videojuegos";
import Jugadores from "./Jugadores";
import Peliculas from "./Peliculas";
import Restaurante from "./Restaurante";
import PaginaFinal from "./PaginaFinal";

function App() {
    const [actividad, setActividad] = useState("libro");

    return (
        <div>
            <h1>Taller práctico de React</h1>

            <button onClick={() => setActividad("libro")}>Actividad 1</button>
            <button onClick={() => setActividad("ciudades")}>Actividad 2</button>
            <button onClick={() => setActividad("canciones")}>Actividad 3</button>
            <button onClick={() => setActividad("animales")}>Actividad 4</button>
            <button onClick={() => setActividad("videojuegos")}>Actividad 5</button>
            <button onClick={() => setActividad("jugadores")}>Actividad 6</button>
            <button onClick={() => setActividad("peliculas")}>Actividad 7</button>
            <button onClick={() => setActividad("restaurante")}>Actividad 8</button>
            <button onClick={() => setActividad("final")}>Actividad final</button>

            <hr />

            {actividad === "libro" && <Libro />}
            {actividad === "ciudades" && <Ciudades />}
            {actividad === "canciones" && <Canciones />}
            {actividad === "animales" && <Animales />}
            {actividad === "videojuegos" && <Videojuegos />}
            {actividad === "jugadores" && <Jugadores />}
            {actividad === "peliculas" && <Peliculas />}
            {actividad === "restaurante" && <Restaurante />}
            {actividad === "final" && <PaginaFinal />}
        </div>
    )
}

export default App