import { useState } from 'react';

export const ShowGames = ({ games = [] }) => {
    const [localGames, setLocalGames] = useState(games);
    const [nextId, setNextId] = useState(() => 
        games.length > 0 ? Math.max(...games.map(g => g.id)) + 1 : 1
    );
    
    const [editingId, setEditingId] = useState(null);
    const [draft, setDraft] = useState({ name: "", genre: "" });

    const addCustom = (e) => {
        e.preventDefault();
        const name = e.target.name.value.trim();
        const genre = e.target.genre.value.trim();
        if (!name || !genre) return;
        
        const newGame = { id: nextId, name, genre };
        setLocalGames((s) => [newGame, ...s]);
        setNextId((n) => n + 1);
        e.target.reset();
    };

    const remove = (id) => setLocalGames((s) => s.filter((x) => x.id !== id));

    const startEdit = (game) => {
        setEditingId(game.id);
        setDraft({ name: game.name, genre: game.genre });
    };

    const cancelEdit = () => {
        setEditingId(null);
        setDraft({ name: "", genre: "" });
    };

    const saveEdit = (id) => {
        const name = draft.name.trim();
        const genre = draft.genre.trim();
        if (!name || !genre) return;
        
        setLocalGames((s) => s.map((it) => (it.id === id ? { ...it, name, genre } : it)));
        cancelEdit();
    };

    return (
        <div>
            <form onSubmit={addCustom}>
                <input name="name" placeholder="Название"  />
                <input name="genre" placeholder="Жанр" />
                <button type="submit">Добавить</button>
            </form>

            {localGames.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th >ID</th>
                            <th >Name</th>
                            <th >Genre</th>
                            <th >Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {localGames.map((game) => (
                            <tr key={game.id} >
                                <td>{game.id}</td>
                                
                                <td>
                                    {editingId === game.id ? (
                                        <input
                                            value={draft.name}
                                            onChange={(e) => setDraft((d) => ({ ...d, name: e.target.value }))}
                                        />
                                    ) : (
                                        game.name
                                    )}
                                </td>
                                
                                <td>
                                    {editingId === game.id ? (
                                        <input
                                            value={draft.genre}
                                            onChange={(e) => setDraft((d) => ({ ...d, genre: e.target.value }))}
                                        />
                                    ) : (
                                        game.genre
                                    )}
                                </td>
                                
                                <td style={{ padding: 8 }}>
                                    {editingId === game.id ? (
                                        <>
                                            <button onClick={() => saveEdit(game.id)}>Сохранить</button>
                                            <button onClick={cancelEdit}>Отменить</button>
                                        </>
                                    ) : (
                                        <>
                                            <button onClick={() => startEdit(game)}>Изменить</button>
                                            <button onClick={() => remove(game.id)}>Удалить</button>
                                        </>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                "няма игри((("
            )}
        </div>
    );
};