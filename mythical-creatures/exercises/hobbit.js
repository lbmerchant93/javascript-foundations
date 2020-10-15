class Hobbit {
  constructor(name) {
    this.name = name;
    this.age = 0;
    this.adult = false;
    this.old = false;
    this.hasRing = true || false;
    if (this.name === 'Frodo') {
      this.hasRing = true;
    } else {
      this.hasRing = false;
    }
  }
  celebrateBirthday() {
    this.age += 1;
    if (this.age <=32) {
      this.adult = false;

    } else if(this.age <=100) {
      this.adult = true;
    } else if (this.age >= 101) {
      this.old = true;
      this.adult = true;
    }
    }
  timeTravel(num, hobbit) {
    for (var i =0; i<num; i++)
    hobbit.celebrateBirthday();
    }
  }

module.exports = Hobbit;
