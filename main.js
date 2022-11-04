function createGame(team1, hour, team2){
  return`
  <li>
  <img src="assets/team-${team1}.svg" alt="Bandeira do ${team1}">
  <strong>${hour}</strong>
  <img src="assets/team-${team2}.svg" alt="Bandeira do ${team2}">
  </li>
  `
}

let delay = 0;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul>
     ${games}
    </ul>
  </div>
  `
}

document.querySelector('#cards').innerHTML = 
  createCard('24/11', 'quinta', createGame('brazil','16:00','camaroon')) +
  createCard('28/11', 'segunda', createGame('brazil','13:00','camaroon')) +
  createCard('02/12', 'sexta', createGame('brazil','16:00','camaroon'))

