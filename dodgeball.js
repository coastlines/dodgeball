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

// class dodgeBallPlayer {
//   constructor(canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
//     this.canThrowBall = null;
//     this.canDodgeBall = null;
//     this.hasPaid = null;
//     this.isHealthy = null;
//     this.yearsExperience = null;
//   }
// }

// FUNCTIONS //

// displays list of people who can be made into players
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


// add a player to the list of dodge ball players
const makePlayer = (id) => {
  console.log(`li ${id} was clicked!`)
  // li = document.getElementById(id);
  // li.parentNode.removeChild(li);


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

// displays list of people who have been selected to be dodge ball players
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

//add a player to a team
const makeTeammate = (id,color) => {
  //console.log(`li ${id} was clicked!`)
  // li = document.getElementById(id);
  // li.parentNode.removeChild(li);
  console.log(id, color);

  listOfPlayers.map(person => {
    if (color ==='Blue') {
        mascot = "Bluejays"
        let newTeammate = new Teammate(person.id, person.name, person.placeBorn, color, mascot);
        blueTeam.push(newTeammate);
        console.log(id + " was added to Blue Team");
      } else {
        mascot = "Cardinals"
        let newTeammate = new Teammate(person.id, person.name, person.placeBorn, color, mascot);
        redTeam.push(newTeammate);
        //listPlayerChoices(person);
        console.log(id + " was added to Red Team");
      }
    });
    console.log(blueTeam);
    
  // arrOfPeople.filter((person) => {
  //   person.id != id;
  // });
}

// // displays players by team assignment
const listBlueTeam = (person) => {
  const listElement = document.getElementById('blue')
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