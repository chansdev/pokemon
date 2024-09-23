let vida = document.querySelector(".health-bar1")

gengar = {
  "Hp" : 261,
  "Atk" : 166,
  "Def" : 157,
  "Spa" : 359,
  "Spd" : 167,
  "Spe" : 350,
  "4xWeakness" : [],
  "4xResistances" : ["Bug", "Poison"],
  "Weakness": ["Dark", "Ghost", "Psychic"],
  "Resistances": ["Fairy", "Grass"],
  "Immunities": ["Ground", "Normal", "Fighting"],
}
  let gengarMoves = ["ShadowBall", "EnergyBall", "HiddenPowerIce", "Taunt"]

dragonite = {
  "Hp" : 323,
  "Atk" : 403,
  "Def" : 227,
  "Spa" : 212,
  "Spd" : 236,
  "Spe" : 259,
  "4xWeakness" : ["Ice"],
  "4xResistances" : ["Grass"],
  "Weakness": ["Dragon", "Fairy", "Rock"],
  "Resistances": ["Bug", "Fighting", "Fire", "Water"],
  "Immunities": ["Ground"],
  "dragoniteMoves": ["DragonDance", "ExtremeSpeed", "FirePunch", "Earthquake"]
}
  let dragoniteMoves = ["DragonDance", "ExtremeSpeed", "FirePunch", "Earthquake"]

function random (min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
function damage (movePower, A, D, target4xWeakness, target4xResistances, targetWeakness, targetResistances, targetImmunities, moveType) {

  let rand = random(85, 101) / 100
  let dmg = ((42 * movePower * A / D ) / 50 + 2) * rand
  
  if (target4xWeakness.includes(moveType)){
    dmg = dmg * 4
  }
  else if (targetWeakness.includes(moveType)){
    dmg = dmg * 2
  }
  else if (targetResistances.includes(moveType)){
    dmg = dmg * 0.5
  }
  else if (target4xResistances.includes(moveType)){
    dmg = dmg * 0.25
  }
  else if (targetImmunities.includes(moveType)){
    dmg = dmg * 0
  }
    return dmg
}

//gengarmoves
function ShadowBall(){  
  let chance = random(0, 100)
  if(chance < 20){
    dragonite["Spd"] = dragonite["Spd"] * 0.67
  }
    return damage(80, gengar["Spa"], dragonite["Spd"], dragonite["4xWeakness"], dragonite["4xResistances"], dragonite["Weakness"], dragonite["Resistances"], dragonite["Immunities"], "Ghost")

}
function EnergyBall(){
  let chance = random(0, 100)
  if(chance < 10){
    dragonite["Spd"] = dragonite["Spd"] * 0.67
  }
  return damage(80, gengar["Spa"], dragonite["Spd"], dragonite["4xWeakness"], dragonite["4xResistances"], dragonite["Weakness"], dragonite["Resistances"], dragonite["Immunities"], "Grass")
}
function HiddenPowerIce(){
  return damage(60, gengar["Spa"], dragonite["Spd"], dragonite["4xWeakness"], dragonite["4xResistances"], dragonite["Weakness"], dragonite["Resistances"], dragonite["Immunities"], "Ice")
}

//dragonite moves
function ExtremeSpeed(){
  let dragonitePriority = 1
  return damage (80, dragonite["Atk"], gengar["Def"], gengar["4xWeakness"], gengar["4xResistances"], gengar["Weakness"], gengar["Resistances"], gengar["Immunities"], "Normal")
}
function Earthquake(){
  let dragonitePriority = 0
  return damage (100, dragonite["Atk"], gengar["Def"], gengar["4xWeakness"], gengar["4xResistances"], gengar["Weakness"], gengar["Resistances"], gengar["Immunities"], "Ground")
}
function FirePunch(){
  let dragonitePriority = 0
  return damage (75, dragonite["Atk"], gengar["Def"], gengar["4xWeakness"], gengar["4xResistances"], gengar["Weakness"], gengar["Resistances"], gengar["Immunities"], "Fire")
}

