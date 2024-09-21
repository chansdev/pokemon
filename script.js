let vida = document.querySelector(".health-bar1")

function dano(dmg) {
  let x = vida.clientWidth
  x -= dmg
  vida.style.width = `${x}px`
}