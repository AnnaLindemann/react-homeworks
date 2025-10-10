import PlayersList from "./PlayersList";

export default function TeamCard({ teamName, players }) {
  return (
    <div className="teamContainer">
      <h2 className="nameTeam">{teamName}</h2>
      <PlayersList players={players} />
    </div>
  );
}
