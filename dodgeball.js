"use strict"
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
  constructor(id, name, placeBorn, team, mascot){
    super(id, name, placeBorn);
    this.team = team;
    this.mascot = mascot;
  }
}

// FUNCTIONS //

// DOM: Display list of people 
const listPeopleChoices = () => {
  const listElement = document.getElementById('people')

  // prevent duplicates from being displayed
  if (!listElement.hasChildNodes()) { 
    arrOfPeople.map(person => {

      const li = document.createElement("li")
      li.id = person.id // create li id based on person id

      const button = document.createElement("button")
      button.innerHTML = "Make Player"
      button.addEventListener('click', function() {makePlayer(person.id)} )

      li.appendChild(button)
      li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
      listElement.append(li)
    })
  }  
}

// ARRAY: Add a person to the list of players
const makePlayer = (id) => {
  arrOfPeople.filter(person => {
    if (id === person.id) {
      let newPlayer = new Player(person.id, person.name, person.placeBorn);
      listOfPlayers.push(newPlayer);
    }
  })
  listPlayerChoices(id);
}

// DOM: Remove li element
const removeLi = (id) => {
  let li = document.getElementById(id);
  li.parentNode.removeChild(li);
}

// DOM: Display list of available players
const listPlayerChoices = (person) => {
  let personId = person;

  listOfPlayers
    .filter(person => person.id === personId)
    .map(person  => {

    const listElement = document.getElementById('players')
    const li = document.createElement('li')
    li.id = person.id

    const blueTeamBtn = document.createElement('button');
    blueTeamBtn.innerHTML = 'Blue Team';
    blueTeamBtn.addEventListener('click', function() {makeTeammate(person.id, 'Blue Team', 'Bluejays')} );

    const redTeamBtn = document.createElement("button");
    redTeamBtn.innerHTML = 'Red Team';
    redTeamBtn.addEventListener('click', function() {makeTeammate(person.id, 'Red Team', 'Cardinals')} );

    li.appendChild(blueTeamBtn)
    li.appendChild(redTeamBtn)
    li.appendChild(document.createTextNode(person.name + " - " + person.placeBorn))
    listElement.append(li)
  })
  removeLi(person);
}

// ARRAY: Add a player to a team
const makeTeammate = (id, team, mascot) => {
 // console.log(id, team, mascot);
 let playerId = id;

  listOfPlayers
    .filter(player => player.id === playerId)
    .map(player => {
      if (team === 'Blue Team') { 
        let newTeammate = new Teammate(player.id, player.name, player.placeBorn, team, mascot);
        blueTeam.push(newTeammate);
        listBlueTeam(player);
      }
      else if (team === 'Red Team') {
        let newTeammate = new Teammate(player.id, player.name, player.placeBorn, team, mascot);
        redTeam.push(newTeammate);
        listRedTeam(player);
      }
  });
  removeLi(id);
};

// DOM: Display blue team
const listBlueTeam = (player) => {
  let playerId = player.id;

  blueTeam
    .filter(player => player.id === playerId)
    .map(player => {
      const listElement = document.getElementById('blue')
      const li = document.createElement("li")
      li.appendChild(document.createTextNode(player.name + " - " + player.placeBorn))
      listElement.append(li)
    })
};

// DOM: Display red team
const listRedTeam = (player) => {
  let playerId = player.id;
  
  redTeam
    .filter(player => player.id === playerId)
    .map(player => {
      const listElement = document.getElementById('red')
      const li = document.createElement("li")
      li.appendChild(document.createTextNode(player.name + " - " + player.placeBorn))
      listElement.append(li)
    })
};

