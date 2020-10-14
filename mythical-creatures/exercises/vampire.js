class Vampire {
  constructor(name, pet, thirsty) {
    this.name = name;
    this.pet = pet;
    this.thirsty = true;
      if (this.pet === undefined){
        return this.pet = 'bat';
      }
    this.thirsty = true;
  }
  drink () {
    return this.thirsty = false;
  }
}

module.exports = Vampire;
