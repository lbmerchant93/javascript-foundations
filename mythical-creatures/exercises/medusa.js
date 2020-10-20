class Medusa {
  constructor(name, statues) {
    this.name = name;
    this.statues = [];
  }
  stare(person) {
    person.stoned = true;
    this.statues.push(person);
    if (this.statues.length > 3) {
      this.statues[0].stoned = false;
      this.statues.splice(0, 1);
    }
  }
}



module.exports = Medusa;
