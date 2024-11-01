const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
  team: "Argentina",
  sport: "Football",
  year: 1986,
  isWorldCupWinner: true,
  headCoach: {
    coachName: "Carlos Bilardo",
    matches: 7,
  },
  players: [
    {
      name: "Sergio Almirón",
      position: "forward",
      number: 1,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Sergio Batista",
      position: "midfielder",
      number: 2,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Ricardo Bochini",
      position: "midfielder",
      number: 3,
      isCaptain: false,
      nickname: "El Bocha",
    },
    {
      name: "Claudio Borghi",
      position: "midfielder",
      number: 4,
      isCaptain: false,
      nickname: "Bichi",
    },
    {
      name: "José Luis Brown",
      position: "defender",
      number: 5,
      isCaptain: false,
      nickname: "Tata",
    },
    {
      name: "Daniel Passarella",
      position: "defender",
      number: 6,
      isCaptain: false,
      nickname: "El Gran Capitán",
    },
    {
      name: "Jorge Burruchaga",
      position: "forward",
      number: 7,
      isCaptain: false,
      nickname: "Burru",
    },
    {
      name: "Néstor Clausen",
      position: "defender",
      number: 8,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "José Luis Cuciuffo",
      position: "defender",
      number: 9,
      isCaptain: false,
      nickname: "El Cuchu",
    },
    {
      name: "Diego Maradona",
      position: "midfielder",
      number: 10,
      isCaptain: true,
      nickname: "El Pibe de Oro",
    },
    {
      name: "Jorge Valdano",
      position: "forward",
      number: 11,
      isCaptain: false,
      nickname: "The Philosopher of Football",
    },
    {
      name: "Héctor Enrique",
      position: "midfielder",
      number: 12,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Oscar Garré",
      position: "defender",
      number: 13,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Ricardo Giusti",
      position: "midfielder",
      number: 14,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Luis Islas",
      position: "goalkeeper",
      number: 15,
      isCaptain: false,
      nickname: "El loco",
    },
    {
      name: "Julio Olarticoechea",
      position: "defender",
      number: 16,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Pedro Pasculli",
      position: "forward",
      number: 17,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Nery Pumpido",
      position: "goalkeeper",
      number: 18,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Oscar Ruggeri",
      position: "defender",
      number: 19,
      isCaptain: false,
      nickname: "El Cabezón",
    },
    {
      name: "Carlos Tapia",
      position: "midfielder",
      number: 20,
      isCaptain: false,
      nickname: null,
    },
    {
      name: "Marcelo Trobbiani",
      position: "midfielder",
      number: 21,
      isCaptain: false,
      nickname: "Calesita",
    },
    {
      name: "Héctor Zelada",
      position: "goalkeeper",
      number: 22,
      isCaptain: false,
      nickname: null,
    },
  ],
};

Object.freeze(myFavoriteFootballTeam);



const { team, sport, year, players } = myFavoriteFootballTeam;
const { coachName, matches } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;


const setPlayerCards = (arr = players) => {
  // This function uses the Array.prototype.map() method to iterate over each player in the 'players' array and generate HTML for each player's card.
  return arr.map(({ name, position, number, isCaptain, nickname }) => {
    // This is a template for each player's card.
    `<div class="player-card">
            <h2>${isCaptain ? "(Captain)" : ""}</h2>
            ${name}
            </h2>
            <p>Position: ${position}</p>
            <p>Number: ${number}</p>
            <p>Nickname: ${nickname ? nickname : "N/A"}</p>
             
        </div>`
  }).join(''); // This method concatenates all the generated HTML strings into a single string.
}

/**
 * This function listens for a change event on the 'playersDropdownList' element and logs the selected value to the console.
 *
 * - The event object containing information about the change event.
 */
/**
 * This function listens for a change event on the 'playersDropdownList' element and updates the 'playerCards' element with the appropriate player cards based on the selected value in the dropdown list.
 *
 * @param {Event} e - The event object containing information about the change event.
 */
playersDropdownList.addEventListener('change', (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter(player => player.nickname !== null));
      break;
    case "forward":
      setPlayerCards(players.filter(player => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(players.filter(player => player.position === "midfielder"));
      break;
    case "defender":
      setPlayerCards(players.filter(player => player.position === "defender"));
      break;
    case "goalkeeper":
      setPlayerCards(players.filter(player => player.position === "goalkeeper"));
      break;

    default:
      setPlayerCards();
  }
});














/*
let arry = split('');
let arry2 = [];

function checkarry() {
  if (arry === null) {
    return;
  }
  arry2.push(...arry);
}

function reverse(str) {
  // Split the string into words, reverse the array, and join back into a string
  arry2 = str.split(' ').reverse(); // Store the reversed words in arry2
}

// Example usage
let inputString = "I love coding so much";
reverse(inputString);
console.log(arry2.join(' ')); // Output: "much coding so love I"
*/