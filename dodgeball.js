// INITIAL PLAYERS //

const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

// NEW ARRAYS //
const listOfPlayers = []
const blueTeam = []
const redTeam = []

// CLASS CONSTRUCTORS //
class Player {
  constructor(id, name, placeBorn){
    this.id = id;
    this.name = name;
    this.placeBorn = placeBorn;
  }
}

class Teammate extends Player {
  constructor(id, name, placeBorn, color, mascot){
    super(id, name, placeBorn);
    this.color = color;
    this.mascot = mascot;
  }
}

class dodgeBallPlayer {
  constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    this.canThrowBall = null;
    this.canDodgeBall = null;
    this.hasPaid = null;
    this.isHealthy = null;
    this.yearsExperience = null;
  }
}

// FUNCTIONS //

// displays list of people who can be made into players
const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}


// add a player to the list of dodge ball players
const makePlayer = (id) => {
  console.log(`li ${id} was clicked!`)

  arrOfPeople.filter(person => {
    let newPlayer = new Player(person.id, person.name, person.placeBorn);
    listOfPlayers.push(newPlayer);
    })
    console.log(arrOfPeople);
    console.log(listOfPlayers);
}

// displays list of people who have been selected to be dodge ball players
const listPlayerChoices = () => {
  const listElement = document.getElementById('players')
  listOfPlayers.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Red Team"
    button.innerHTML = "Blue Team"
    button.addEventListener('click', function() {makeTeammate(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.placeBorn))
    listElement.append(li)
  })
}

// add a player to a team


// displays players by team assignment