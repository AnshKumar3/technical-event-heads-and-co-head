const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
  Event: "Parampara",
  day: 10,
  year: 2024,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "krishna",
    matches: 7,
  },
  players: [
    {
      name: "ansh",
      position:"code Debugging",
     phone_number: 1,
      isCaptain: false,
      nickname: "code Debugging",
    },
    {
      name: "Achintya",
      position:"code Debugging",
      number: 2,
      isCaptain: false,
      nickname: null,
    },
     {
      name: "Vansh",
    position:"code Debugging",
      number: 3,
      isCaptain: false,
      nickname: "El Bocha",
    },
    {
      name: "Akash Pal",
position:"code Debugging",
      number: 4,
      isCaptain: false,
      nickname: "Bichi",
    },
    {
      name: "Tauseef Akhtar Yusufzai",
      position: "Graphic Designing",
      number: 5,
      isCaptain: false,
      nickname: "Tata",
    },
    {
      name: "DIVYANSHU DUBEY ",
      position: "Rubik's ruckus",
      number: 6,
      isCaptain: false,
      nickname: "El Gran Capitán",
    },
    {
      name: "Vaishnavi Madeshiya",
      position: "argu sphere",
      number: 7,
      isCaptain: false,
      nickname: "Burru",
    },
    {
      name: "AMAN SINGH",
      position: "bridge kriti",
      number: 8,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Ankit K Gupta",
      position: "Need For Speed",
      number: 9,
      isCaptain: false,
      nickname: "El Cuchu",
    },
    {
      name: "PRADEEP GUPTA",
      position: "Shark Tank 2.0",
      number: 10,
      isCaptain: true,
      nickname: "El Pibe de Oro",
    },
    {
      name: "aman",
      position: "forward",
      number: 11,
      isCaptain: false,
      nickname: "The Philosopher of Football",
    },
    {
      name: "Priya Rao",
      position: "Junk Yard",
      number: 12,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Rajat Gupta",
      position: "Robo War",
      number: 13,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "amisha",
      position: "midfielder",
      number: 14,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "CHAVI GUPTA",
      position: "Battle of Brain",
      number: 15,
      isCaptain: false,
      nickname: "El loco",
    },
    {
      name: "pragati",
      position: "defender",
      number: 16,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Sakshi Sharma",
      position: "Web Stack",
      number: 17,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "kriti",
      position: "goalkeeper",
      number: 18,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "pranshu",
      position: "defender",
      number: 19,
      isCaptain: false,
      nickname: "El Cabezón",
    },
    {
      name: "om",
      position: "code Debugging",
      number: 20,
      isCaptain: false,
      nickname: "code Debugging",
    },
    {
      name: "dhanajay",
      position: "code Monk",
      number: 21,
      isCaptain: false,
      nickname: "Calesita",
    },
    {
      name: "pranshu",
      position: "code Monk",
      number: 22,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "HARSH KUMAR MALL",
      position: "BGMI",
      number: 22,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "DINESH KANNAUJIYA",
      position: "Mind Bend",
      number: 22,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "VIJAY GUPTA",
      position: "Medi Quest",
      number: 22,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Sakshi Singh",
      position: "Visual Vista",
      number: 22,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Om Ji Mishra ",
      position: "circuit Designing",
      number: 22,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Shivangi Gupta ",
      position: "Lens Master",
      number: 22,
      isCaptain: false,
      nickname: null,
    },
  ],
};


const {  year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;






const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, position, phone_number, isCaptain, nickname }) =>
        `
        <div class="player-card">
          <h2>${name} ${isCaptain ? "(Captain)" : ""}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${phone_number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      `
    )
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.position === "code Debugging"));
      break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "code Monk"));
      break;
    case "midfielder":
      setPlayerCards(
        players.filter((player) => player.position === "Web Stack")
      );
      break;
    case "defender":
      setPlayerCards(
        players.filter((player) => player.position === "Battle of Brain")
      );
      break;
    case "goalkeeper":
      setPlayerCards(
        players.filter((player) => player.position === "Need For Speed")
      );
      break;
      case "Robo War":
        setPlayerCards(
          players.filter((player) => player.position === "Robo War")
        );
        break;
        case "bridge kriti":
          setPlayerCards(
            players.filter((player) => player.position === "bridge kriti")
          );
          break;
          case "argu sphere":
            setPlayerCards(
              players.filter((player) => player.position === "argu sphere")
            );
            break;
            case "Junk Yard":
              setPlayerCards(
                players.filter((player) => player.position === "Junk Yard")
              );
              break;
              case "Rubik's ruckus":
                setPlayerCards(
                  players.filter((player) => player.position === "Rubik's ruckus")
                );
                break;
  
                break;
                case "Shark Tank 2.0":
                  setPlayerCards(
                    players.filter((player) => player.position === "Shark Tank 2.0")
                  );
                  break;
                  case "Graphic Designing":
                    setPlayerCards(
                      players.filter((player) => player.position === "Graphic Designing")
                    );
                    break;
                    case "BGMI":
                      setPlayerCards(
                        players.filter((player) => player.position === "BGMI")
                      );
                      break;
                      case "Mind Bend":
                        setPlayerCards(
                          players.filter((player) => player.position === "Mind Bend")
                        );
                        break;
                        case "Medi Quest":
                          setPlayerCards(
                            players.filter((player) => player.position === "Medi Quest")
                          );
                          break;
                          case "Visual Vista":
                          setPlayerCards(
                            players.filter((player) => player.position === "Visual Vista")
                          );
                          break;
                          case "circuit Designing":
                          setPlayerCards(
                            players.filter((player) => player.position === "circuit Designing")
                          );
                          break;
                          
  
  
  }
});
