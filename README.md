# Code Plan

#### ONE 

1. Use the *class keyword* to create a template of a *Player*
   that requires: -- DONE
    * canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience (this can vary)

#### TWO

1. *Push* these new dodge ball *Player objects* into a *new array*  -- DONE
2. Then *display them in the DOM* in the available players to pick list -- DONE

#### THREE 

1. Add a *button* to each new player that will allow each *player to be selected* for either Blue Team or Read Team -- DONE
2. Each player should receive a *mascot and teamColor* -- DONE

#### FOUR

1. Use the *this* keyword to assign each player to a team with an *onclick*. -- DONE

#### FIVE

1. *Display the two teams in a new list* in the DOM with appropriate titles. -- DONE

#### SIX

1. Create *3 tests* for your application. -- DONE (I tried!)

#### EXTRA

* Add an *input* at the top of the Window that allows for a user to add new people!
* Make a *random-izer* to automatically select teams for us! -- maybe
  * Math.floor(Math.random() * 10 + 1)
* Create *additional teams*
* Change the *color* of the text for each color based on the color of their team! -- DONE
* Make a button to *remove Players from Teams* and back to the Players list. -- maybe
* Make a button to *remove Player from the Players List* and move them into the People List. -- maybe


# Unit Tests
Unit test outlines are included at the bottom of dodgeball.js

1. listPeopleChoices() should not generate duplicate players that have already been assigned as a player, teammate or are pending in the people list.
2. After a person has been added to the players list, they should be removed from the list of persons in the DOM.
3. The Player class should set dodgeball skills to true upon instantiation.
4. Players should populate on the DOM with buttons that allow the player to join either the red or blue team.
5. Players should populate on the DOM with their hometown value, rather than skill.
6. When a player is assigned to a team they should receive a team and mascot assignment.
7. After a person has been added to a team, they should be removed from the list of players in the DOM.
8. After a person has been added to a team list, they should be removed from the list of players in the DOM.
9. Teammates should populate on the DOM with just their name.
10. People, players or teammates should only appear once in each array.