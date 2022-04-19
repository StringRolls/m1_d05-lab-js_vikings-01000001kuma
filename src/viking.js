// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage(damage){
      this.health -= damage;
  }

}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
  super(health, strength);
  this.name = name;  
  }

  receiveDamage(damage){
    super.receiveDamage(damage);
    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }

  }

  battleCry(){
    return "Odin Owns You All!"
  
  }

}


let adrian = new Viking("Adrian",8, 10);
console.log(adrian.health);
console.log(adrian.receiveDamage(8));
console.log(adrian.health);


// Saxon
class Saxon extends Soldier {
  constructor(health, strength){
  super(health, strength);
  }
  receiveDamage(damage){
    if (this.health < 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return `A Saxon has died in combat`;
    }
  }
  }


let yuri = new Saxon(8, 10);
console.log(yuri.health);
console.log(yuri.receiveDamage(5));
console.log(yuri.health);


// War
class War {}



