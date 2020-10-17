class Magician {
  constructor(obj) {
    obj = obj || {};
    this.name = obj.name;
    this.topHat = true;
      if (obj.topHat === false) {
        this.topHat = false;
      }
    this.confident = false;
    this.confidenceLevel =0;
      // if(count >2) {
      //   this.confident = true;
      // }
    }
  incantation(magicWords){
    return magicWords.toUpperCase() + "!";
  }
  cast(){
    this.confidenceLevel +=1;
    if (this.topHat === true){
      return "PULL RABBIT FROM TOP HAT";
    } else if (this.topHat === false && this.confidenceLevel <=2){
      return "PULL DOVE FROM SLEEVE";
    } else if (this.topHat === false && this.confidenceLevel >=3) {
      this.confident = true;
      return "PULL DOVE FROM SLEEVE";
    }
  }
    performShowStopper(){
      if (this.confidenceLevel <=2){
        return "Oh no! Practice more before attempting this trick!";
      } else if (this.confidenceLevel >=3){
        return "WOW! The magician totally just sawed that person in half!";
      }
    }
}



module.exports = Magician;
