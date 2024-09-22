let vida = document.querySelector(".health-bar1")

gengar = {
  "Hp" : 261,
  "Atk" : 166,
  "Def" : 157,
  "SpA" : 359,
  "SpD" : 167,
  "Spe" : 350,
  "Moves": ["Shadow Ball", "Energy Ball", "Hidden Power Ice", "Taunt"]
}
dragonite = {
  "Hp" : 323,
  "Atk" : 403,
  "Def" : 227,
  "SpA" : 212,
  "SpD" : 236,
  "Spe" : 259,
  "4xWeakness" : ["Ice"],
  "4xResistances" : ["Grass"],
  "Weakness": ["Dragon", "Fairy", "Rock"],
  "Resistances": ["Bug", "Fighting", "Fire", "Water"], 
  "dragoniteMoves": ["DragonDance", "Extreme Speed", "FirePunch", "Earthquake"]
}

function random (min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

function damage (movePower, A, D, STAB, target4xWeakness, targetWeakness, targetResistances, targetImmunitys, moveType) {

  let rand = random(0.85, 1.01)
  let dmg = ((42 * movePower * A / D) / 50 + 2) * rand
  
  if (STAB == true){
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
  else if (targetImmunitys.includes(moveType)){
    dmg = dmg * 0
  }
    return dmg
}
