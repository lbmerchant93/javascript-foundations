class Werewolf {
  constructor(name) {
    this.name = name;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }
  transform() {
    this.wolf = !this.wolf;
    if(this.wolf){
      this.hungry = true;
      this.human = false;
    } else {
      this.hungry = false;
      this.human = true;
    }
  }
  eat(victim) {
    if (this.human === true) {
      return 'I cant fit that human in my mouth!';
    }
    if (this.hungry === true) {
      this.hungry = false;
      this.human = true;
    }
  }
}


module.exports = Werewolf;
