import "./styles.css";
//Write array below
let FirstName = [
  "Omari",
  "Melody",
  "Keturah",
  "Aldo",
  "Reginea",
  "Amori",
  "Laurent",
  "Ye",
  "Matt",
  "Judy",
  "Sami",
  "Maxwell",
  "Groana",
  "Aland",
  "Jean",
  "Lorena"
];

// let NameColor = [
//   (31, 183, 82)
// ];
export default function App() {
  return (
    <div className="App">
      <table>
        <th>First Name</th>
        <tr>
          <td>{FirstName[0]}</td>
        </tr>
        <tr>
          <td>{FirstName[1]}</td>
        </tr>
        <tr>
          <td>{FirstName[2]}</td>
        </tr>
        <tr>
          <td>{FirstName[3]}</td>
        </tr>
        <tr>
          <td>{FirstName[4]}</td>
        </tr>
        <tr>
          <td>{FirstName[5]}</td>
        </tr>
        <tr>
          <td>{FirstName[6]}</td>
        </tr>
        <tr>
          <td>{FirstName[7]}</td>
        </tr>
        <tr>
          <td>{FirstName[8]}</td>
        </tr>
      </table>
    </div>
  );
}
