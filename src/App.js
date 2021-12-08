import "./styles.css";

let people = [
  {
    firstName: "Omari",
    lastName: "Prass",
    place: "Brooklyn",
    fcolor: "#1fb752",
    birthday: "2004"
  },
  {
    firstName: "Melody",
    lastName: "Suero",
    place: "Brooklyn",
    fcolor: "#c8a2c8",
    birthday: "2003"
  },
  {
    firstName: "Keturah",
    lastName: "Allen",
    place: "New Jersey",
    fcolor: "",
    birthday: "2005"
  },
  {
    firstName: "Aldo",
    lastName: "Terrana",
    place: "Queens",
    fcolor: "#c20a2b",
    birthday: "2005"
  },
  {
    firstName: "Reginea",
    lastName: "Walker",
    place: "Brooklyn",
    fcolor: "#eb7d34",
    birthday: "2005"
  },
  {
    firstName: "Amori",
    lastName: "Steele",
    place: "Brooklyn",
    fcolor: "#A45ee5",
    birthday: "2004"
  },
  {
    firstName: "Laurent",
    lastName: "Benjamin",
    place: "Queens",
    fcolor: "Red",
    birthday: "2004"
  },
  {
    firstName: "Ye",
    lastName: "Paing",
    place: "Brooklyn",
    fcolor: "#45FCB4",
    birthday: "1989"
  },
  {
    firstName: "Matt",
    lastName: "Schupack",
    place: "Brooklyn",
    fcolor: "bisque",
    birthday: "1994"
  },
  {
    firstName: "Judy",
    lastName: "Truong",
    place: "Manhattan",
    fcolor: "#cd94f2",
    birthday: "1991"
  },
  {
    firstName: "Sami",
    lastName: "Lieberman",
    place: "New Jeresy",
    fcolor: "#00d0ff",
    birthday: "1997"
  },
  {
    firstName: "Maxwell",
    lastName: "Willians",
    place: "Bronx",
    fcolor: "#ebba34",
    birthday: "1992"
  },
  {
    firstName: "Groana",
    lastName: "Melendez",
    place: "Phoenix",
    fcolor: "#40e0d0",
    birthday: "1984"
  },
  {
    firstName: "Aland",
    lastName: "Kuang",
    place: "Manhattan",
    fcolor: "#000AD4",
    birthday: "1984"
  },
  {
    firstName: "Jean",
    lastName: "Saldarriaga",
    place: "Manhattan",
    fcolor: "#2a693b",
    birthday: "2005"
  },
  {
    firstName: "Lorena",
    lastName: "Castillo",
    place: "Manhattan",
    fcolor: "",
    birthday: "2003"
  }
];

export default function App() {
  return (
    <div className="App">
      <table>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Place</th>
        <th>Color</th>
        <th>Year </th>

        {people.map(function (person, index) {
          return (
            <tr>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
              <td>{person.place}</td>
              <td style={{ color: person.fcolor }}>{person.fcolor}</td>
              <td>{person.birthday}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
