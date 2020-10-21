class Centaur {
  constructor(object, breed) {
    object = object || {};
    this.name = object.name;
    this.breed = object.type;
    this.cranky = false;
    this.standing = true;
    this.shootCount =0;
    this.layingDown = false;
  }
  shoot() {
    this.shootCount +=1;
    if(this.layingDown === true) {
      return 'NO!';
    }
    if(this.shootCount >2) {
      this.cranky = true;
    }
    if(this.cranky === true) {
      return 'NO!';
    }
    return 'Twang!!!';
  }
  run() {
    if(this.layingDown === true) {
      return 'NO!';
    }
    if(this.shootCount >2) {
      return 'NO!';
    }
    this.cranky = true;
    return 'Clop clop clop clop!!!';
  }
  sleep() {
    if(this.standing === true){
      return 'NO!';
    }
    if(this.standing === false) {
      this.cranky = false;
      return 'ZZZZ';
    }
  }
  layDown() {
    this.standing = false;
    this.layingDown = true;
  }
  standUp() {
    this.layingDown = false;
    this.standing = true;
  }
  drinkPotion() {
    if(this.layingDown === true) {
      return 'Not while I\'m laying down!';
    }
    this.cranky = !this.cranky;
  }
}




module.exports = Centaur;
