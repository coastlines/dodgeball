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

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class player {
  constructor(){
    
  }
}
class blueTeammate {
  constructor(){}
}
class redTeammate {
  constructor(){}
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

const makePlayer = (id) => {
  console.log(`li ${id} was clicked!`)
}

// ONE //
//Use the class keyword to create a template of a dodgeBallPlayer
//that requires canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience

// TWO //
//Push these new dodge ball Player objects into a new array 
//and then display them in the DOM as available players to pick.

// THREE //
//Add a button to each new player that will allow each one to be selected for either Blue Team or Read Team 
// and now has mascot and teamColor

// FOUR //
//Use the this keyword to assign each player to a team with an onclick. Either Blue Team or Red Team.

// FIVE //
//Display the two teams in a new list in the DOM with appropriate titles.

// SIX //
//Create 3 tests for your application.  
//Use Mocha and Chai to prove a person becomes a player and player becomes a teammate.

// EXTRA
// Add an input at the top of the Window that allows for a user to add new people!
// Make a random-izer to automatically select teams for us!
// Add multiple teams to add players to.
// Change the color of the text for each color based on the color of their team!
// Make a button to remove Players from Teams and back to the Players list.
// Make a button to remove Player from the Players List and move them into the People List.