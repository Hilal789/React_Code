import axios from "axios";
import { useEffect, useState } from "react";

export function Pokemon() {
    const [pokemon, setPokemon] = useState({
        name: '',
        photo: '',
        abilities: []
    });

    function loadPokemon() {
        axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
            .then(response => {
                const data = response.data;
                setPokemon({
                    name: data.name,
                    photo: data.sprites.front_default,
                    abilities: data.abilities
                });
            })
            .catch(error => console.error("Error fetching data:", error));
    }

    useEffect(() => {
        loadPokemon();
    }, []);

    return (
        <div className="container mt-3">
            <h2>Pokemon Viewer</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Abilities</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{pokemon.name}</td>
                        <td>
                            {pokemon.photo && (
                                <img src={pokemon.photo} alt={pokemon.name} width="100" height="100" />
                            )}
                        </td>
                        <td>
                            <ul>
                                {pokemon.abilities.map((abilityObj, index) => (
                                    <li key={index}>
                                        {abilityObj.ability.name} — 
                                        {abilityObj.is_hidden ? ' Hidden' : ' Not Hidden'}
                                    </li>
                                ))}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
