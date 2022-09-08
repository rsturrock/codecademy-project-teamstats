const team = {
  _players: [
    {firstName: 'Robert', lastName: 'Zent', age: 34},
    {firstName: 'Brandon', lastName: 'Stevenson', age: 34},
    {firstName: 'Ben', lastName: 'Godfrey', age: 41}
  ],
  _games: [
    {opponent: 'Yankees', teamPoints: 25, opponentPoints: 45},
    {opponent: 'Red Sox', teamPoints: 5, opponentPoints: 1},
    {opponent: 'Yankees', teamPoints: 46, opponentPoints: 22}
  ],
  get players() {
    if (this._players) {
      return this._players;
    }
  },
  get games() {
    if (this._games) {
      return this._games;
    }
  },
  addPlayer (newFirstName, newLastName, newAge) {
    let newObject = {};
    newObject.firstName = newFirstName;
    newObject.lastName = newLastName;
    newObject.age = newAge;
    this._players.push(newObject);
  },
  addGame (opponent, teamPoints, opponentPoints) {
    let newObject = {};
    newObject.opponent = opponent;
    newObject.teamPoints = teamPoints;
    newObject.opponentPoints = opponentPoints;
    this._games.push(newObject);
  }
};

team.addPlayer('Bugs','Bunny',76);
team.addGame('Titans', 100, 98);
console.log(team.players)
console.log(team.games)
