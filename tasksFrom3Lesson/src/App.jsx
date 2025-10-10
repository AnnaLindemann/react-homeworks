import "./styles.css";
import TeamCard from "./components/TeamCard";
import Calculate from "./components/Calculate";
import Animals from "./components/Animals";

function App() {
  const teams = [
    {
      name: "Dragons United",
      members: [
        // "David Miller",
        // "Ethan Turner",
        // "Natalie Clark",
        // "Sophie Gomez",
        // "Tom Hanks",
      ],
    },
    {
      name: "Golden Eagles",
      members: [
        "Lisa Ray",
        "Harry Ford",
        "Betty Cooper",
        "George King",
        "Alice Morgan",
      ],
    },
    {
      name: "Mighty Warriors",
      members: [
        "Sam Wilson",
        "John Norton",
        "Emma Cartright",
        "Daniel Lewis",
        "Megan Stone",
      ],
    },
    {
      name: "Falcon Flyer",
      members: [
        "Oscar Wilde",
        "Robert Brown",
        "Victoria Smith",
        "Rachel Adams",
        "Matthew Johns",
      ],
    },
    {
      name: "Storm Breakers",
      members: [
        "Lucas White",
        "Eva Taylor",
        "Charles Anderson",
        "Emily Johnson",
        "Aaron Carter",
      ],
    },
  ];

  if (teams.length === 0) {
    return <h2 className="emptyMessage">Thera are no teams</h2>;
  }
  return (
    <div className="mainContainer">
      <p
        style={{
          display: "flex",
          backgroundColor: "blue",
          color: "white",
          fontSize: "2rem",
          padding: "1rem",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "1rem",
        }}
      >
        Sport teams
      </p>
      {teams.map((team) => {
        return (
          <TeamCard
            key={team.name}
            teamName={team.name}
            players={team.members}
          />
        );
      })}
      <Calculate />
      <Animals />
    </div>
  );
}

export default App;
