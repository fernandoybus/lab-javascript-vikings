// Soldier
function Soldier(health,strength) {
   this.health = health;
   this.strength = strength;
   this.attack = function() {
      return this.strength;
  };
  this.receiveDamage = function(the_damage) {
    this.health -= 50;
 };
}

// Viking
function Viking(name, health, strength) {
   Soldier.call(this, health, strength);
   this.name = name;
   this.attack = function() {
         return this.strength;
   };

   this.receiveDamage = function(the_damage) {
     this.health -= the_damage;
     if (this.health <= 0 ){
       return this.name + ' has died in act of combat';
     }
     else {
       return this.name + ' has received ' + the_damage + ' points of damage';
     }
   };

   this.battleCry = function() {
         return 'Odin Owns You All!';
   };

}
Viking.prototype = Object.create(Soldier.prototype);
Viking.prototype.constructor = Viking;

// Saxon
function Saxon(health, strength) {
   Soldier.call(this, health, strength);
   this.receiveDamage = function(the_damage) {
     this.health -= the_damage;
     if (this.health <= 0 ){
       return 'A Saxon has died in combat';
     }
     else {
       return 'A Saxon has received ' + the_damage + ' points of damage';
     }
   };
}

Saxon.prototype = Object.create(Soldier.prototype);
Saxon.prototype.constructor = Saxon;

// War
function War() {
  this.vikingArmy = [];
  this.saxonArmy = [];

  this.addViking = function(vikings) {
        this.vikingArmy.push(vikings);

  };
  this.addSaxon = function(saxons) {
        this.saxonArmy.push(saxons);
  };
  this.vikingAttack = function() {
  var kills= false;


        this.saxonArmy[0].receiveDamage(this.vikingArmy[0].strength);
        if (this.saxonArmy[0].health <= 0){
          kills = true;
          this.saxonArmy.pop(this.saxonArmy[0]);
        }
        if (kills === true){
          return "A Saxon has died in combat";
        }
        else{
          return "A Saxon has received " + this.vikingArmy[0].strength +" points of damage";
        }


  };

  this.saxonAttack = function() {
    var kills= false;


        this.vikingArmy[0].receiveDamage(this.saxonArmy[0].strength);
        if (this.vikingArmy[0].health <= 0){
          kills = true;
          this.vikingArmy.pop(this.vikingArmy[0]);
        }

        if (kills === true){
          return "A viking has died in combat";
        }
        else{
          return this.vikingArmy[0].name + " has received " + this.saxonArmy[0].strength + " points of damage";
        }



  };
  this.showStatus = function() {
    if(this.saxonArmy.length <1){
      return "Vikings have won the war of the century!";
    }
    else if (this.vikingArmy.length <1){
      return "Saxons have fought for their lives and survive another day...";
    }
    else{
      return "Vikings and Saxons are still in the thick of battle."
    }
  };


}
