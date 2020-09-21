
let teamonebutton = document.querySelector ('#teamone-shoot-button');
let teamoneshoot = document.querySelector ('#teamone-numshots');
let teamonegoals = document.querySelector ('#teamone-numgoals');

let numberofresets = document.querySelector ('#reset-button');
let resetButton = document.querySelector ('#num-resets');


let teamtwobutton = document.querySelector ('#teamtwo-shoot-button');
let teamtwogoals = document.querySelector ('#teamtwo-numgoals');
let teamtwoshoot = document.querySelector ('#teamtwo-numshots');


teamonebutton.addEventListener("click", function(){
  let oneshoot = Number (teamoneshoot.innerHTML) + 1;
  teamoneshoot.innerHTML = oneshoot; 
if (Math.random() * 100 < 50) {
  let scoregoals = Number(teamonegoals.innerHTML) + 1;
  teamonegoals.innerHTML = scoregoals; 
}
})

teamtwobutton.addEventListener("click", function(){
    let twoshoot = Number (teamtwoshoot.innerHTML) + 1;
    teamtwoshoot.innerHTML = twoshoot; 
    if (Math.random() * 100 < 50) {
      let scoregoals = Number(teamtwogoals.innerHTML) + 1;
      teamtwogoals.innerHTML = scoregoals;
    }
  })

numberofresets.addEventListener("click", function()  {
  let numberofresets = Number (resetButton.innerHTML) + 1;
  resetButton.innerHTML = numberofresets;
  teamoneshoot.innerHTML = 0
  teamtwoshoot.innerHTML = 0
  teamonegoals.innerHTML = 0
  teamtwogoals.innerHTML = 0

    
})






