import { useState } from 'react';

export const ShowGames = ({ games = [] }) => {
    const [localGames, setLocalGames] = useState(games);

    if (localGames.length > 0) { 
        return (
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Genre</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {localGames.map((game) => (
                            <tr key={game.id}>
                                <td>{game.name}</td>
                                <td>{game.genre}</td>
                                <td>
                                    <button onClick={() => setLocalGames(localGames.filter(g => g.id !== game.id))}>
                                        Удалить
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        );
    } else {
        return "няма игри(((";
    }
};