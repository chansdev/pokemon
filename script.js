let dragonitePriority = 0
let gengarPriority = 0
let Taunted = false
let TauntStart = 0
let Turn = 1

let vida1 = document.querySelector("#health-bar1")
let vida2 = document.querySelector("#health-bar2")

gengar = {
  "Hp" : vida2.value,
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
  "Types": ["Poison", "Ghost"]
}
  
vida2.clientWidth

dragonite = {
  "Hp" : vida1.value,
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
  "Types": ["Dragon", "Flying"]
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
function damage(movePower, A, D, target4xWeakness, target4xResistances, targetWeakness, targetResistances, targetImmunities, moveType, userTypes) {

  let rand = random(85, 101) / 100
  let dmg = ((42 * movePower * A / D ) / 50 + 2) * rand
  
  if(userTypes.includes(moveType)){
    dmg = dmg * 1.5
  }
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
function nextTurn(){
  let moveselect = random(1, 5)
  if(moveselect = 1){
    ShadowBall()
  }
  else if(moveselect = 2){
    EnergyBall()
  }
  else if(moveselect = 3){
    HiddenPowerIce()
  }
  else if(moveselect = 4){
    Taunt()
  }
  Turn += 1
  console.log(moveselect)
}

//gengarmoves
function ShadowBall(){  
  let chance = random(0, 100)
  if(chance < 20){
    dragonite["Spd"] = dragonite["Spd"] * 0.67
  }
    return damage(80, gengar["Spa"], dragonite["Spd"], dragonite["4xWeakness"], dragonite["4xResistances"], dragonite["Weakness"], dragonite["Resistances"], dragonite["Immunities"], "Ghost", gengar["Types"])

}
function EnergyBall(){
  let chance = random(0, 100)
  if(chance < 10){
    dragonite["Spd"] = dragonite["Spd"] * 0.67
  }
  return damage(80, gengar["Spa"], dragonite["Spd"], dragonite["4xWeakness"], dragonite["4xResistances"], dragonite["Weakness"], dragonite["Resistances"], dragonite["Immunities"], "Grass", gengar["Types"])
}
function HiddenPowerIce(){
  return damage(60, gengar["Spa"], dragonite["Spd"], dragonite["4xWeakness"], dragonite["4xResistances"], dragonite["Weakness"], dragonite["Resistances"], dragonite["Immunities"], "Ice", gengar["Types"])
}
function Taunt(){
  let Taunted = true
  let TauntStart = Turn
}

//dragonite moves
let dragonDance = document.querySelector(".dragonDance")
let extremeSpeed = document.querySelector(".extremeSpeed")
let earthquake = document.querySelector(".earthquake")
let firePunch = document.querySelector(".firePunch")

function ExtremeSpeed(){
  let dragonitePriority = 1
  let dano = Math.round(damage(80, dragonite["Atk"], gengar["Def"], gengar["4xWeakness"], gengar["4xResistances"], gengar["Weakness"], gengar["Resistances"], gengar["Immunities"], "Normal", dragonite["Types"]))
  let novaVida = vida2.value - dano
  return vida2.value = novaVida
}
function Earthquake(){
  let dragonitePriority = 0
  let dano = Math.round(damage(100, dragonite["Atk"], gengar["Def"], gengar["4xWeakness"], gengar["4xResistances"], gengar["Weakness"], gengar["Resistances"], gengar["Immunities"], "Ground", dragonite["Types"]))
  let novaVida = vida2.value - dano
  return vida2.value = novaVida
}
function FirePunch(){
  let dragonitePriority = 0
  let dano = Math.round(damage(75, dragonite["Atk"], gengar["Def"], gengar["4xWeakness"], gengar["4xResistances"], gengar["Weakness"], gengar["Resistances"], gengar["Immunities"], "Fire", dragonite["Types"]))
  let novaVida = vida2.value - dano
  return vida2.value = novaVida
}
function DragonDance(){
  if(taunted == false){
  dragonite["Atk"] = dragonite["Atx"] + (403 * 0.5)
  dragonite["Spe"] = dragonite["Spe"] + (259 * 0.5)
  }
  else{
    console.log("Seu pokemon não pode usar esse movimento por causa do Taunt!")
  }
}
  
extremeSpeed.addEventListener("click", ExtremeSpeed)
earthquake.addEventListener("click", Earthquake)
firePunch.addEventListener("click", FirePunch)
dragonDance.addEventListener("click", DragonDance)


while(gengar["Hp"] > 0 || dragonite["Hp"] > 0){
  
  if(Turn == TauntStart + 3){
    Taunted = false
  }
}
