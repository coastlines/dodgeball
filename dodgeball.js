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

// FUNCTIONS //

// DOM: Displays the list of people on the dom
const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  if (!listElement.hasChildNodes()) {
    arrOfPeople.map(person => {
      const li = document.createElement("li")
      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {makePlayer(person.id)} )
      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  } else {
    return false;
  }
}


// ARRAY: Add people to the list of players
const makePlayer = (id) => {
  console.log(`li ${id} was clicked!`)

  arrOfPeople.map(person => {
      if (id == person.id) {
        let newPlayer = new Player(person.id, person.name, person.placeBorn);
        listOfPlayers.push(newPlayer);
        listPlayerChoices(person);
        console.log(id + " was added to listOfPlayers");
        console.log(listOfPlayers);
      } else false
    });

  arrOfPeople.filter((person) => {
    person.id != id;
  });
}

// DOM: Display dodge ball players not assigned to a team
const listPlayerChoices = (person) => {
  const listElement = document.getElementById('players')
  const li = document.createElement("li")
  const redTeamBtn = document.createElement("button")
  redTeamBtn.innerHTML = "Red Team"
  redTeamBtn.addEventListener('click', function() {makeTeammate(person.id, 'Red')} )
  const blueTeamBtn = document.createElement("button")
  blueTeamBtn.innerHTML = "Blue Team"
  blueTeamBtn.addEventListener('click', function() {makeTeammate(person.id, 'Blue')} )
  li.appendChild(redTeamBtn)
  li.appendChild(blueTeamBtn)
  li.appendChild(document.createTextNode(person.name + " - " + person.placeBorn))
  listElement.append(li)
}

// DOM: Display dodge ball players assigned to the blue team
const listBlueTeam = (person) => {
  blueTeam.map(person => {
    const listElement = document.getElementById('blue')
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(person.name + " - " + person.placeBorn))
    listElement.append(li)
  })
}

// DOM: Display dodge ball players assigned to the red team
const listRedTeam = (person) => {
  redTeam.map(person => {
    const listElement = document.getElementById('red')
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(person.name + " - " + person.placeBorn))
    listElement.append(li)
  })
}

