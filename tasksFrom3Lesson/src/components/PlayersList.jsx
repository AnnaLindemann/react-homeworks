export default function PlayersList({ players }) {
  if (players.length === 0) {
    return <h2 className="emptyMessage"> No players added.</h2>;
  }
  return (
    <ul className="listPlayers">
      {players.map((player) => {
        return (
          <li className="playerItem" key={player}>
            {player}
          </li>
        );
      })}
    </ul>
  );
}
